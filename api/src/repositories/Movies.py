import re
import sqlite3 as sql
from ..config import *

baseDatos = ubicacionDB

def selectDataMovie():
    selectMovie = "Movies.*, Director.name AS director_name,  Genero.name AS genero_name"
    innerDirector = "INNER JOIN Director ON Movies.id_director = Director.id"
    innerGenero = "INNER JOIN Genero ON Movies.id_director = Genero.id"
    return f"SELECT  {selectMovie} FROM 'Movies' {innerDirector} {innerGenero}"

def formatDataMovies(data):
    nameColums = ('id', 'title', 'sinopsis', 'image_url', 'year',
                  'id_director', 'id_genero','id_user', 'director_name', 'genero_name')
    dataForm = {}
    cont = 0

    for e in data:
        dataForm[nameColums[cont]] = e
        cont += 1
    return dataForm


def exists(params, table):
    global baseDatos
    conn = sql.connect(baseDatos)
    cursor = conn.cursor()

    intruciones = f"SELECT * FROM '{table}' WHERE id = '{params}'"
    cursor.execute(intruciones)
    datos = cursor.fetchall()

    conn.commit()
    conn.close()

    return datos != 0


def existTitle(params):
    global baseDatos
    conn = sql.connect(baseDatos)
    cursor = conn.cursor()

    intruciones = f"SELECT * FROM Movies WHERE title = '{params}'"
    cursor.execute(intruciones)
    datos = cursor.fetchall()

    conn.commit()
    conn.close()
    return len(datos) != 0


def newMovie(title, sinopsis, image_url, year, id_director, id_genero, id_User):
    global baseDatos

    conn = sql.connect(baseDatos)
    cursor = conn.cursor()

    intruciones = f"INSERT INTO Movies VALUES (null,'{title}','{sinopsis}','{image_url}','{year}','{id_director}','{id_genero}','{id_User}')"

    cursor.execute(intruciones)
    
    conn.commit()
    conn.close()

    return cursor.lastrowid


def updateMovie(id, title, sinopsis, image_url, year, id_director, id_genero):
    global baseDatos

    conn = sql.connect(baseDatos)
    cursor = conn.cursor()

    setIntrucciones = f"title='{title}',sinopsis='{sinopsis}',image_url='{image_url}',year='{year}',id_director='{id_director}',id_genero='{id_genero}'"

    intruciones = f"UPDATE Movies SET {setIntrucciones} WHERE id = '{id}'"

    cursor.execute(intruciones)

    conn.commit()
    conn.close()


def MovieId(id):
    global baseDatos
    conn = sql.connect(baseDatos)
    cursor = conn.cursor()

    intruciones = f"{selectDataMovie()} WHERE Movies.id = '{id}'"
    cursor.execute(intruciones)
    datos = cursor.fetchall()
    conn.commit()
    conn.close()

    if len(datos) != 0:
        return formatDataMovies(datos[0])
    return False


def UserIsOwnerMovie(idPelicula, idUser):
    global baseDatos
    conn = sql.connect(baseDatos)
    cursor = conn.cursor()

    intruciones = f"SELECT * FROM Movies WHERE id = '{idPelicula}' AND id_user = '{idUser}'"
    cursor.execute(intruciones)
    datos = cursor.fetchall()

    conn.commit()
    conn.close()
    
    return len(datos) > 0


def allMovies(limit):
    global baseDatos
    conn = sql.connect(baseDatos)
    cursor = conn.cursor()

    if limit:
        intruciones = f"{selectDataMovie()} order by Movies.id desc LIMIT 10"
        print(intruciones)
    else:
        intruciones = f"{selectDataMovie()} order by Movies.id desc"

    print(intruciones)
    cursor.execute(intruciones)
    datos = cursor.fetchall()

    conn.commit()
    conn.close()

    listDatos = []
    for e in datos:
        listDatos.append(formatDataMovies(e))

    if len(listDatos) != 0:
        return listDatos
    return False


def deleteMoviesId(id):
    global baseDatos
    conn = sql.connect(baseDatos)
    cursor = conn.cursor()

    intruciones = f"DELETE FROM Movies WHERE id = '{id}'"
    cursor.execute(intruciones)

    conn.commit()
    conn.close()


def moviesFromGenero(idGenero):
    global baseDatos
    conn = sql.connect(baseDatos)
    cursor = conn.cursor()

    intruciones = f"{selectDataMovie()} WHERE id_genero = '{idGenero}'"
    cursor.execute(intruciones)
    datos = cursor.fetchall()

    conn.commit()
    conn.close()

    listDatos = []
    for e in datos:
        listDatos.append(formatDataMovies(e))

    if len(listDatos) != 0:
        return listDatos
    return False


if __name__ == '__main__':
    pass
