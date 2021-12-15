from flask import Flask, jsonify, request
from http import HTTPStatus
from main import app
from controllers.Users_controllers import newUser, allUsers, emailUnicode

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