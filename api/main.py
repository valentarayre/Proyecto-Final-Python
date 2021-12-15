from flask import Flask, jsonify, request
from http import HTTPStatus
from db.db import createDB
from controllers.Users import newUser, allUsers, emailUnicode

app = Flask(__name__)

@app.route("/", methods=['GET'])
def hello_world():
    return jsonify({'message': 'Hello Word'}), HTTPStatus.OK

@app.route("/api/Users", methods=['GET'])
def get_Users():
    return jsonify(allUsers()), HTTPStatus.OK

@app.route("/api/Register", methods=['POST'])
def post_Users():

    user = request.get_json()
    #username, email, password        
    
    if ("username" in user) and ("email" in user) and ("password" in user):
        if emailUnicode(user["email"]):
            newUser(user["username"],user["email"],user["password"])
            return jsonify({"message":"User Creado"}), HTTPStatus.OK
        return jsonify({"message":"Email ya esta regristado"}), HTTPStatus.BAD_REQUEST
    return jsonify({"message":"Error Falta parametros"}), HTTPStatus.BAD_REQUEST
    
    

if __name__ == '__main__':
    createDB()
    app.run(debug=True)
