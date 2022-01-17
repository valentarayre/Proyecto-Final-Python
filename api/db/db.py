import sqlite3
from pathlib import Path

baseDatos = './db/db.sqlite3'


def createDB():
    global baseDatos
    database = Path(baseDatos)
    if not database.is_file():
        generos = ["Acción","Aventuras","Comedia","Documental","Drama","Fantasía","Musical","Suspense","Terror"]
        
        conn = sqlite3.connect(baseDatos)
        cursor = conn.cursor()

        sql_file = open('./db/db-example.sqlite3.sql')
        sql_as_string = sql_file.read()
        cursor.executescript(sql_as_string)

        for genero in generos:
            intruciones = f"INSERT INTO Genero VALUES (null, '{genero}')"
            cursor.execute(intruciones)
        
        conn.commit()
        conn.close()

if __name__ == "__main__":
    pass
