from flask import jsonify, request
from http import HTTPStatus
from ..services.Movies import *


def get_Movies():
    data = get_Movie_data()
    if data == False:
        return jsonify({"msg":"No existen peliculas"}), HTTPStatus.BAD_REQUEST
    return jsonify({"msg":"Nueva Pelicula Creada", "data": data}), HTTPStatus.OK

def post_Movies():
    movie = request.get_json()
    dataMovie = create_Movie(movie)
    return jsonify(dataMovie), HTTPStatus.OK
