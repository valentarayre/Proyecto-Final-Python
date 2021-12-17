from flask import jsonify, request
from http import HTTPStatus
from controllers.Movies_controllers import *

def get_Movies():
    return jsonify({}), HTTPStatus.OK

def post_Movies():
#   if ("title" in movie) and ("sinopsis" in movie) and ("image_url" in movie) and ("id_director" in movie) and ("id_genero" in movie):
#       if ( Checkear si hay ya existe esa pelicula )
#           newMovie(movie["title"],movie["sinopsis"],movie["image_url"],movie["id_director"],movie["id_genero"])
#           return jsonify({"message": "Pelicula Creada"}), HTTPStatus.OK
#       return jsnonify({"message":"Pelicula ya existente"}), HTTPStatus.BAD_REQUEST
    return jsonify({"message":"Error Falta parametros"}), HTTPStatus.BAD_REQUEST