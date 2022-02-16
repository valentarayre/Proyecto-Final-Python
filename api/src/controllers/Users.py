from flask import jsonify, request
from http import HTTPStatus
from ..services.Auth import *

def auth():
    user = request.get_json()
    if not (("email" in user) and ("password" in user)):
        return jsonify({"msg":"Falta Parametros"}), HTTPStatus.BAD_REQUEST
    User = AuthUser(user)
    if User:
        return jsonify({"token": User}), HTTPStatus.OK
    return jsonify({"msg":"Contraseña o Correo incorrecto"}), HTTPStatus.BAD_REQUEST

""" def post_Users():

    user = request.get_json()
    #username, email, password        
    
    if ("username" in user) and ("email" in user) and ("password" in user):
        if emailUnicode(user["email"]):
            newUser(user["username"],user["email"],user["password"])
            return jsonify({"message":"User Creado"}), HTTPStatus.OK
        return jsonify({"message":"Email ya esta regristado"}), HTTPStatus.BAD_REQUEST
    return jsonify({"message":"Error Falta parametros"}), HTTPStatus.BAD_REQUEST """