import sqlite3 as sql
from ..config import *

baseDatos = ubicacionDB

def formatDataMovies(data):
    nameColums = ('id','title','sinopsis','image_url','id_director','id_genero')
    dataForm = {}
    cont = 0
    
    for e in data:
        dataForm[nameColums[cont]] = e
        cont += 1
    return dataForm

def exists(params,table):
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
    return datos != 0

def newMovie(title,sinopsis,image_url,id_director,id_genero):
    global baseDatos
    
    conn = sql.connect(baseDatos)
    cursor = conn.cursor()
    
    intruciones = f"INSERT INTO Movies VALUES (null,'{title}','{sinopsis}','{image_url}','{id_director}','{id_genero}')"
    cursor.execute(intruciones)
    
    conn.commit()
    conn.close()

def MovieId(id):
    global baseDatos
    conn = sql.connect(baseDatos)
    cursor = conn.cursor()

    intruciones = f"SELECT * FROM Movies WHERE id = '{id}'"
    cursor.execute(intruciones)
    datos = cursor.fetchall()

    conn.commit()
    conn.close()
    
    if len(datos) != 0:        
        return formatDataMovies(datos[0])
    return False

def allMovies():
    global baseDatos
    conn = sql.connect(baseDatos)
    cursor = conn.cursor()

    intruciones = f"SELECT * FROM Movies"
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

    intruciones = f"SELECT * FROM Movies WHERE id_genero = '{idGenero}'"
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
