import sqlite3 as sql

baseDatos = './api/db/db.sqlite3'

def newMovie(username, email, password):
    global baseDatos
    
    conn = sql.connect(baseDatos)
    cursor = conn.cursor()
    
    intruciones = f"INSERT INTO Movies VALUES (null, '{username}', '{email}', '{password}')"
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