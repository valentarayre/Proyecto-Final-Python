from flask import jsonify, request
from http import HTTPStatus
from ..services.Movies import *


def get_MoviesNoLogin():
    data = get_Movie_data_with_limit(True)
    if data == False:
        return jsonify({"msg": "No existen peliculas"}), HTTPStatus.BAD_REQUEST
    return jsonify({"data": data}), HTTPStatus.OK


def get_Movies():
    data = get_Movie_data()
    if data == False:
        return jsonify({"msg": "No existen peliculas"}), HTTPStatus.BAD_REQUEST
    return jsonify({"data": data}), HTTPStatus.OK


def post_Movies():
    movie = request.get_json()
    status = create_Movie(movie)
    if (status["status"]):
        return jsonify({"msg": status["msg"], "data": status["data"]}), HTTPStatus.OK
    return jsonify({"msg": status["msg"]}), HTTPStatus.BAD_REQUEST


def update_Movies(id):
    movie = request.get_json()
    status = update_Movie(id, movie)
    if (status["status"]):
        return jsonify({"msg": status["msg"], "data": status["data"]}), HTTPStatus.OK
    return jsonify({"msg": status["msg"]}), HTTPStatus.BAD_REQUEST


def delete_Movies(id):
    idUser = 1
    status = delete_Movie(id, idUser)
    if (status["status"]):
        return jsonify({"msg": status["msg"]}), HTTPStatus.OK
    return jsonify({"msg": status["msg"]}), HTTPStatus.BAD_REQUEST


def select_Movie(id):
    status = select_MovieFromId(id)
    if (status["status"]):
        return jsonify({"data": status["data"]}), HTTPStatus.OK
    return jsonify({"msg": status["msg"]}), HTTPStatus.BAD_REQUEST
