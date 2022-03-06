import sqlite3 as sql
from pathlib import Path

baseDatos = './api/db/db.sqlite3'


def createDB():
    global baseDatos
    database = Path(baseDatos)
    if not database.is_file():
        generos = ["Acción","Aventuras","Comedia","Documental","Drama","Fantasía","Musical","Suspense","Terror"]
        
        conn = sql.connect(baseDatos)
        cursor = conn.cursor()

        sql_file = open(baseDatos)
        sql_as_string = sql_file.read()
        cursor.executescript(sql_as_string)

        for genero in generos:
            intruciones = f"INSERT INTO Genero VALUES (null, '{genero}')"
            cursor.execute(intruciones)
        
        conn.commit()
        conn.close()

if __name__ == "__main__":
    pass
