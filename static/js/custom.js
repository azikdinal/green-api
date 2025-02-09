const host = window.location.origin;

// getSettings
document.getElementById("getSettings").addEventListener("click", function () {
  const idInstance = document.getElementById("idInstance").value;
  const apiTokenInstance = document.getElementById("apiTokenInstance").value;

  const url = `${host}/api/getSettings?idInstance=${encodeURIComponent(
    idInstance
  )}&apiTokenInstance=${encodeURIComponent(apiTokenInstance)}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // Display the response in the div with id "answer"
      document.getElementById("answer").innerText = JSON.stringify(data);
    })
    .catch((error) => {
      console.error("Error:", error);
      document.getElementById("answer").innerText = "Error: " + error.message;
    });
});

// getStateInstance
document
  .getElementById("getStateInstance")
  .addEventListener("click", function () {
    const idInstance = document.getElementById("idInstance").value;
    const apiTokenInstance = document.getElementById("apiTokenInstance").value;

    const url = `${host}/api/getStateInstance?idInstance=${encodeURIComponent(
      idInstance
    )}&apiTokenInstance=${encodeURIComponent(apiTokenInstance)}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("answer").innerText = JSON.stringify(data);
      })
      .catch((error) => {
        console.error("Error:", error);
        document.getElementById("answer").innerText = "Error: " + error.message;
      });
  });

// sendMessage
document.getElementById("sendMessage").addEventListener("click", function () {
  const idInstance = document.getElementById("idInstance").value;
  const apiTokenInstance = document.getElementById("apiTokenInstance").value;

  const number = document.getElementById("number1").value;
  const message = document.getElementById("message").value;

  const url = `${host}/api/sendMessage?idInstance=${encodeURIComponent(
    idInstance
  )}&apiTokenInstance=${encodeURIComponent(apiTokenInstance)}`;

  const data = {
    number: number,
    message: message,
  };

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("answer").innerText = JSON.stringify(data);
    })
    .catch((error) => {
      console.error("Error:", error);
      document.getElementById("answer").innerText = "Error: " + error.message;
    });
});

// sendFileByUrl
document.getElementById("sendFileByUrl").addEventListener("click", function () {
  const idInstance = document.getElementById("idInstance").value;
  const apiTokenInstance = document.getElementById("apiTokenInstance").value;

  const number = document.getElementById("number2").value;
  const filePath = document.getElementById("filePath").value;

  const url = `${host}/api/sendFileByUrl?idInstance=${encodeURIComponent(
    idInstance
  )}&apiTokenInstance=${encodeURIComponent(apiTokenInstance)}`;

  const data = {
    number: number,
    filePath: filePath,
  };

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("answer").innerText = JSON.stringify(data);
    })
    .catch((error) => {
      console.error("Error:", error);
      document.getElementById("answer").innerText = "Error: " + error.message;
    });
});
