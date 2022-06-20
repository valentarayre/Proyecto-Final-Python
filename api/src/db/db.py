import sqlite3
from pathlib import Path
from ..config import *

baseDatos = ubicacionDB
baseExample = baseExample

# JSON
jsondb = JsonDB

def createDB():
    global baseDatos
    global baseExample
    database = Path(baseDatos)
    if not database.is_file():
        generos = ["Acción","Aventuras","Comedia","Documental","Drama","Fantasía","Musical","Suspense","Terror"]
        userslist = [
            ["User 1","correo1@gmail.com","12345"],
            ["User 2","correo2@gmail.com","12345"],
            ["User 3","correo3@gmail.com","12345"],
            ["User 4","correo4@gmail.com","12345"]
        ]

        conn = sqlite3.connect(baseDatos)
        cursor = conn.cursor()

        sql_file = open(baseExample)
        sql_as_string = sql_file.read()
        cursor.executescript(sql_as_string)

        for genero in generos:
            intruciones = f"INSERT INTO Genero VALUES (null, '{genero}')"
            cursor.execute(intruciones)
        for user in userslist:
            intruciones = f"INSERT INTO Users VALUES (null, '{user[0]}','{user[1]}','{user[2]}')"
            cursor.execute(intruciones)
            
        conn.commit()
        conn.close()

if __name__ == "__main__":    
    pass
