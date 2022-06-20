from http import HTTPStatus
import json
from ..repositories.Movies import *
from flask import Flask , jsonify, request


from flask_cors import CORS

db = open(jsonMovie)
data = json.load(db)
movies = data['movies']



# GET Generos                           # ESTA BIEN


def get_Generos():
    try:
        listaGeneros = []
        if movies:
            for movie in movies:
                if ("genero" in movie) and (movie["genero"] not in listaGeneros):
                    listaGeneros.append(movie["genero"])
            return (jsonify(listaGeneros)), HTTPStatus.OK
        else:
            return jsonify({"Error": "No hay peliculas"}), HTTPStatus.NO_CONTENT
    except Exception as ex:
        return jsonify({"Error": "Ha ocurrido un error inesperado"}), HTTPStatus.INTERNAL_SERVER_ERROR





# GET (con Input) DIRECTORES (solo nombres)                  #ESTA BIEN

def json_GetDirectoresInput():
    try:
        nombreDirector = request.get_json()
        ListaPeliculas = []
        if "director" in nombreDirector:
            Director = nombreDirector["director"]
            if movies:
                ListaDirectores = [d['director'] for d in movies]
                if Director not in ListaDirectores:
                    return jsonify({"Error": "Ese director aun no esta cargado"}), HTTPStatus.BAD_REQUEST
                for movie in movies:
                    if Director == movie["director"]:
                        ListaPeliculas.append(movie)
                return jsonify(ListaPeliculas), HTTPStatus.OK
            else:
                return jsonify({"Error": "No hay peliculas"}), HTTPStatus.NO_CONTENT
        else:
            return jsonify({"Error": "Se espera un director"}), HTTPStatus.BAD_REQUEST
    except Exception as ex:
        return jsonify({"Error": "Ha ocurrido un error inesperado"}), HTTPStatus.INTERNAL_SERVER_ERROR

# GET DIRECTORES + Numero de peliculas

def json_GetDirectores():                    # Funciona
    try:
        JsonFormat = []
        di = dict()
        if movies:
            for movie in movies:
                if "director" in movie:
                    director = movie["director"]
                    if director in di:
                        di[director] = di[director] + 1
                    else:
                        director = movie["director"]
                        di[director] = 1
                else:
                    return jsonify({"Error": "Bad Request"}), HTTPStatus.HTTPStatus.NO_CONTENT
        else:
            return jsonify({"Error": "No hay peliculas"}), HTTPStatus.NO_CONTENT
        for Nombre, Peliculas in di.items():
            director = {
                "Nombre": Nombre,
                "Peliculas": Peliculas
            }
            JsonFormat.append(director)
        return jsonify(JsonFormat)
    except Exception as ex:
        return jsonify({"Error": "Ha ocurrido un error inesperado"}), HTTPStatus.INTERNAL_SERVER_ERROR


# TEST GET DIRECTORES + LISTA DE PELICULAS

def get_DirectoresFull():    #Funca
    try:
        JsonFormat = []
        di = dict()
        if movies:
            for movie in movies:
                if "director" in movie:
                    director = movie["director"]
                    if director in di:
                        di[director].append(movie)
                    else:
                        director = movie["director"]
                        di[director] = [movie]
                else:
                    jsonify({"AVISO":"Hay un director que no tiene peliculas asignadas "}), HTTPStatus.NO_CONTENT
        else:
            return jsonify({"Error": "No hay peliculas"}), HTTPStatus.NO_CONTENT
        for Nombre, Peliculas in di.items():
            director = {
                "Nombre": Nombre,
                "Peliculas": Peliculas
            }
            JsonFormat.append(director)
        return jsonify(JsonFormat)
    except Exception as ex:
        return jsonify({"Error": "Ha ocurrido un error inesperado"}), HTTPStatus.INTERNAL_SERVER_ERROR



# GET COMENTARIOS                          #BIEN
def json_GetComments(id):
    if movies:
        for movie in movies:
            if movie["id"] == int(id):
                info = (movie['comentarios'])
                return jsonify(info), HTTPStatus.OK
        return jsonify({"Error": "No hay pelicula con ese ID"}), HTTPStatus.BAD_REQUEST
    else:
        return jsonify({"Error": "No hay peliculas"}), HTTPStatus.NO_CONTENT



# POST COMENTARIO                   #TESTEADO
def create_comment(id):
    try:
        new_comment = request.get_json()
        if movies:
            for movie in movies:
                if movie["id"] == int(id):
                    comentarios = movie["comentarios"]
                    if not "comentario" in new_comment:
                        return jsonify({"Error": "se espera un comentario"}), HTTPStatus.BAD_REQUEST
                    else:
                        comentario = {
                            "nombre" : "Usuario",
                            "comentario" : new_comment["comentario"]
                        }
                        comentarios.append(comentario)
                        return jsonify({"OK":"Se ha creado el comentario"}), HTTPStatus.OK
            return jsonify({"Error": "No hay pelicula con ese ID"}), HTTPStatus.BAD_REQUEST
        else:
            return jsonify({"Error": "No hay peliculas"}), HTTPStatus.NO_CONTENT
    except Exception as ex:
        return jsonify({"Error": "Ha ocurrido un error inesperado"}), HTTPStatus.INTERNAL_SERVER_ERROR



# GET MOVIES no Log (solo muestra las ultimas 10 peliculas) #FUNCA


def json_GetMoviesNoLog():
    try:
        if not movies:
            return jsonify({"Error": "No hay peliculas"}), HTTPStatus.NO_CONTENT
        return jsonify(movies[-10:]), HTTPStatus.OK
    except Exception as ex:
        return jsonify({"Error": "Ha ocurrido un error inesperado"}), HTTPStatus.INTERNAL_SERVER_ERROR

def json_GetMovies(): #GET MOVIES  # Funca
    try:
        if not movies:
            return jsonify({"Error": "No hay peliculas"}), HTTPStatus.NO_CONTENT
        return jsonify(movies) , HTTPStatus.OK
    except Exception as ex:
        return jsonify({"Error": "Ha ocurrido un error inesperado"}), HTTPStatus.INTERNAL_SERVER_ERROR


# GET MOVIE POR ID
def get_MovieId(id):
    try:
        if movies:
            for movie in movies:
                if movie["id"] == int(id):
                    return jsonify(movie),HTTPStatus.OK
            return jsonify({"Error":"No se encontro una pelicula con ese ID"}),HTTPStatus.BAD_REQUEST
        else:
            return jsonify({"Error": "No hay peliculas"}), HTTPStatus.NO_CONTENT
    except Exception as ex:
        return jsonify({"Error": "Ha ocurrido un error inesperado"}), HTTPStatus.INTERNAL_SERVER_ERROR


# POST MOVIES    #Esta bien

def create_movie():
    try:
        if not movies:
            return jsonify({"Error": "No hay peliculas"}), HTTPStatus.NO_CONTENT
        new_movie = request.get_json()
        if 'anio' and 'director' and 'genero' and 'imgURL' and 'sinopsis' and 'title' not in new_movie:
            return jsonify({"Error": "Campos erroneos o invalidos"}), HTTPStatus.BAD_REQUEST
        new_id = movies[-1]['id'] + 1
        titles = [t['title'] for t in movies]
        if new_movie["title"] not in titles:
            movie = {
            "anio": new_movie["anio"],
            "director": new_movie["director"],
            "genero": new_movie["genero"],
            "id": new_id,
            "imgURL": new_movie["imgURL"],
            "sinopsis": new_movie["sinopsis"],
            "title": new_movie["title"],
            "comentarios": []
            }
            movies.append(movie)
            return movie, HTTPStatus.OK
        return jsonify({"Error": "Esa pelicula ya esta creada"}), HTTPStatus.BAD_REQUEST
    except Exception as ex:
        return jsonify({"Error": "Ha ocurrido un error inesperado"}), HTTPStatus.INTERNAL_SERVER_ERROR


#Delete Movies

def delete_movie(id):
    deleted = False
    index = 0
    try:
        if movies:
            for movie in movies:
                if movie["id"] == int(id):
                    movies.pop(index)
                    deleted = True
                index += 1
            if deleted:
                return jsonify({"OK": "Se ha borrado la pelicula"}), HTTPStatus.OK
            else:
                return jsonify({"ERROR": "No se logro borrar"}), HTTPStatus.BAD_REQUEST
        else:
            return jsonify({"Error": "No hay peliculas"}), HTTPStatus.NO_CONTENT
    except Exception as ex:
        return jsonify({"Error": "Ha ocurrido un error inesperado"}), HTTPStatus.INTERNAL_SERVER_ERROR



# PUT MOVIES  

# ERROR IDS (en front end)

def json_PutMovieTest(id):
    film_edit = request.get_json()
    ide = int(id)
    if not film_edit:
        return jsonify({"ERROR": 'No hay datos a cambiar'}), HTTPStatus.BAD_REQUEST
    if "anio" and "director" and "genero" and "imgURL" and "sinopsis" and "title" not in film_edit:
        return jsonify({"ERROR": 'Falta informacion'})
    if movies:
        for movie in movies:
            if movie["id"] == ide:
                comments = movie["comentarios"]
                movie = {
                    "title": film_edit["title"],
                    "sinopsis": film_edit["sinopsis"],
                    "director": film_edit["director"],
                    "genero": film_edit["genero"],
                    "anio": film_edit["anio"],
                    "id": ide,
                    "imgURL": film_edit["imgURL"],
                    "comentarios": comments
                }
                return jsonify({"OK":"SE ENCONTRO"})
        return jsonify({"MAL":"No se encontro pelicula con ese ID"})
    return jsonify({"MAL": "No se encontro peliculas "})








def json_PutMovie(id):
    new_data = request.get_json()
    pos = int(id)
    if movies:
        ids = [movie["id"] for movie in movies]
        print(id)
        if not new_data:
            return jsonify({"ERROR": 'No hay datos a cambiar'}), HTTPStatus.BAD_REQUEST
        if pos not in ids:
            return jsonify({"ERROR": "No hay peliculas con ese ID"}), HTTPStatus.NO_CONTENT
        if "anio" and "director" and "genero" and "imgURL" and "sinopsis" and "title" not in new_data:
            return jsonify({"ERROR": 'Falta informacion'}), HTTPStatus.BAD_REQUEST
        else:
            pelicula = movies[pos - 1]
            comm = pelicula["comentarios"]
            movies[pos - 1] = {
            "title": new_data["title"],
            "sinopsis": new_data["sinopsis"],
            "director": new_data["director"],
            "genero": new_data["genero"],
            "anio": new_data["anio"],
            "id": pos,
            "imgURL": new_data["imgURL"],
            "comentarios": comm
            }
            print(comm)
            return jsonify({'mensaje':'good'}), HTTPStatus.OK
    else:
        return jsonify({"Error": "No hay peliculas"}), HTTPStatus.NO_CONTENT







