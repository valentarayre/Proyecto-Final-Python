from ..repositories.Movies import *

def get_Movie_data():
    return allMovies()


def create_Movie(DataData):
    return DataData

"""     if not (("title" in DataData) and ("sinopsis" in DataData) and ("image_url" in DataData) and ("id_director" in DataData) and ("id_genero" in Data)):
        return jsonify({"message":"Error Falta parametros"}), HTTPStatus.BAD_REQUEST
    if not (exists(DataData["id_director"],'Director') and exists(DataData["id_genero"],'Genero')):
        return jsonify({"message":"Error Director o Genero no existe"}), HTTPStatus.BAD_REQUEST
    if existTitle(DataData["title"]):
        return jsonify({"message":"Error Titulo Repetido"}), HTTPStatus.BAD_REQUEST

newData(Data["title"],Data["sinopsis"],Data["image_url"],Data["id_director"],Data["id_genero"])
return jsonify({"message": "Pelicula Creada"}), HTTPStatus.OK
    return DataData
#No lo probe xd
"""  