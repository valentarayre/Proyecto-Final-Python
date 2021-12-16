from flask import jsonify, request
from http import HTTPStatus
from controllers.Movies_controllers import *

def get_Movies():
    return jsonify({}), HTTPStatus.OK

def post_Movies():
    return jsonify({"message":"Error Falta parametros"}), HTTPStatus.BAD_REQUEST