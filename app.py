from flask import Flask, render_template, jsonify, request
from api import get, post

app = Flask(__name__)


@app.route('/')
def base():
    return render_template('index.html')

@app.route('/api/getSettings')
def getSettings():
    idInstance = request.args.get("idInstance")
    apiTokenInstance = request.args.get("apiTokenInstance")

    data = get("getSettings", idInstance, apiTokenInstance)
    return jsonify(data) 


@app.route('/api/getStateInstance')
def getStateInstance():
    idInstance = request.args.get("idInstance")
    apiTokenInstance = request.args.get("apiTokenInstance")

    data = get("getStateInstance", idInstance, apiTokenInstance)
    return jsonify(data) 


@app.route('/api/sendMessage', methods=['POST'])
def sendMessage():
    idInstance = request.args.get("idInstance")
    apiTokenInstance = request.args.get("apiTokenInstance")
    request_data = request.get_json()
    number = request_data.get("number")
    message = request_data.get("message")

    data = post("sendMessage", idInstance, apiTokenInstance, message, number)
    print(data)

    return jsonify(data) 


@app.route('/api/sendFileByUrl', methods=['POST'])
def sendFileByUrl():
    idInstance = request.args.get("idInstance")
    apiTokenInstance = request.args.get("apiTokenInstance")
    request_data = request.get_json()
    number = request_data.get("number")
    filePath = request_data.get("filePath")
    
    data = post("sendFileByUrl", idInstance, apiTokenInstance, filePath, number)

    return jsonify(data) 


if __name__ == '__main__':
    app.run(debug=True) 
