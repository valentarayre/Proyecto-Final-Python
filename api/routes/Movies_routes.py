from flask import jsonify, request
from http import HTTPStatus
from controllers.Movies_controllers import *

def get_Movies():
    return jsonify({}), HTTPStatus.OK

def post_Movies():
    #No lo probe xd
    movie = request.get_json()
    if not (("title" in movie) and ("sinopsis" in movie) and ("image_url" in movie) and ("id_director" in movie) and ("id_genero" in movie)):
        return jsonify({"message":"Error Falta parametros"}), HTTPStatus.BAD_REQUEST
    if not (exists(movie["id_director"],'Director') and exists(movie["id_genero"],'Genero')):
        return jsonify({"message":"Error Director o Genero no existe"}), HTTPStatus.BAD_REQUEST
    if exists(movie["title"],'Movies'):
        return jsonify({"message":"Error Titulo Repetido"}), HTTPStatus.BAD_REQUEST
    
    newMovie(movie["title"],movie["sinopsis"],movie["image_url"],movie["id_director"],movie["id_genero"])
    return jsonify({"message": "Pelicula Creada"}), HTTPStatus.OK