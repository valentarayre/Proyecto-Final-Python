from ..repositories.Movies import *
from ..repositories.Comentarios import *


def get_Movie_data_with_limit(limit):
    return allMovies(limit)


def get_Movie_data():
    return allMovies(False)


def select_MovieFromId(id):
    FindMovie = MovieId(id)
    if(FindMovie == False):
        return {"msg": "La pelicula Selecionada no Existe", "status": False}
    return {"data": FindMovie, "status": True}


def delete_Movie(idMovie, idUser):
    if (MovieId(idMovie) == False):
        return {"msg": "La pelicula Selecionada no Existe", "status": False}
    if(UserIsOwnerMovie(idMovie,idUser) == False):
        return {"msg": "No es el dueño de la pelicula", "status": False}
    if (allComentariosMovie(idMovie) != False):
        return {"msg": "La pelicula Tiene Comentarios", "status": False}

    deleteMoviesId(idMovie)
    return {"msg": "La pelicula se borro correctamente", "status": True}

# TODO: Agregar ID User
def create_Movie(Data):
    if not (("year" in Data) and ("title" in Data) and ("sinopsis" in Data) and ("image_url" in Data) and ("id_director" in Data) and ("id_genero" in Data)):
        return {"msg": "Error Falta parametros", "status": False}
    if not (exists(Data["id_director"], 'Director') and exists(Data["id_genero"], 'Genero')):
        return {"msg": "Error Director o Genero no existe", "status": False}
    if existTitle(Data["title"]):
        return {"msg": "Error Titulo Repetido", "status": False}

    userid = 1
    IdToMovie = newMovie(Data["title"], Data["sinopsis"], Data["image_url"], Data["year"],
             Data["id_director"], Data["id_genero"], userid)
    dataToMovie = MovieId(IdToMovie)
    
    return {"msg": "Pelicula Creada", "data":dataToMovie, "status": True}


def update_Movie(idMovie, Data):
    selectMovie = MovieId(idMovie)

    if (selectMovie == False):
        return {"msg": "La pelicula Selecionada no Existe", "status": False}
    if not (("year" in Data) and ("title" in Data) and ("sinopsis" in Data) and ("image_url" in Data) and ("id_director" in Data) and ("id_genero" in Data)):
        return {"msg": "Error Falta parametros", "status": False}
    if not (exists(Data["id_director"], 'Director') and exists(Data["id_genero"], 'Genero')):
        return {"msg": "Error Director o Genero no existe", "status": False}

    if selectMovie["title"] != Data["title"]:
        if existTitle(Data["title"]):
            return {"msg": "Error Titulo Repetido", "status": False}

    updateMovie(idMovie, Data["title"], Data["sinopsis"], Data["image_url"], Data["year"],
                Data["id_director"], Data["id_genero"])
    dataToMovie = MovieId(idMovie)
    return {"msg": "Pelicula Actualizada","data": dataToMovie, "status": True}
