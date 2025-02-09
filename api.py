import requests

apiUrl = "https://1103.api.green-api.com" 

def get(query_type, idInstance, apiTokenInstance):
    url = f"{apiUrl}/waInstance{idInstance}/{query_type}/{apiTokenInstance}"

    response = requests.get(url)

    if response.status_code == 200:
        return response.json() 
    else:
        return {"error": response.status_code, "message": response.text}
    
def post(query_type, idInstance, apiTokenInstance, text, number):
    data = {
        'chatId': f'{number}@c.us',
    }
    if query_type == "sendMessage":
        data["message"] = text
    elif query_type == "sendFileByUrl":
        data["urlFile"] = text
        data["fileName"] = "file"
    else: 
        return f"Error, there is no such queryType like {query_type}"

    url = f"{apiUrl}/waInstance{idInstance}/{query_type}/{apiTokenInstance}"
    response = requests.post(url, json=data)
    print(url)
    if response.status_code == 200:
        return response.json() 
    else:
        return {"error": response.status_code, "message": response.text}