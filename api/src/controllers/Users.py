import imp
from types import NoneType
from flask import jsonify, request
from http import HTTPStatus
from ..services.Auth import *
import jwt
from ..config import *

def auth():
    try:
        userData = request.get_json()
        User = AuthUser(userData["email"],userData["password"])
        if User:
            return jsonify({"token": User}), HTTPStatus.OK
        return jsonify({"msg":"Contraseña o Correo incorrecto"}), HTTPStatus.BAD_REQUEST
    except:
        return jsonify({"msg":"Falta Parametros"}), HTTPStatus.BAD_REQUEST
        

def valid_token():
    try:
        encoded_token = request.get_json()
        if not encoded_token or "token" not in encoded_token:
            return jsonify({"msg": "Se espera un token"}), HTTPStatus.BAD_REQUEST
        decode_token = jwt.decode(encoded_token["token"], secretJWT, algorithms=['HS256'])
        return jsonify({"msg": "Es valido"}), HTTPStatus.OK
    except jwt.ExpiredSignatureError:
        return jsonify({"msg": "Paso mucho tiempo"}), HTTPStatus.NOT_ACCEPTABLE
    except jwt.InvalidTokenError:
        return jsonify({"msg": "Token no valido"}), HTTPStatus.BAD_REQUEST

