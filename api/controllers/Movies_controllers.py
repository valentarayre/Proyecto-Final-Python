import sqlite3 as sql

baseDatos = './api/db/db.sqlite3'

def existDirector(id):
    return True
def existGenero(id):
    return True
def existTitleDirector(title):
    return True

def newMovie(title,sinopsis,image_url,id_director,id_genero):
    global baseDatos
    
    conn = sql.connect(baseDatos)
    cursor = conn.cursor()
    
    intruciones = f"INSERT INTO Movies VALUES (null,'{title}','{sinopsis}','{image_url}','{id_director}','{id_genero}')"
    cursor.execute(intruciones)
    

    conn.commit()
    conn.close()

def allMovies():
    global baseDatos
    conn = sql.connect(baseDatos)
    cursor = conn.cursor()

    intruciones = f"SELECT * FROM Movies"
    cursor.execute(intruciones)
    datos = cursor.fetchall()

    conn.commit()
    conn.close()
    
    return datos