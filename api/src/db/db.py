import sqlite3
from pathlib import Path
from ..config import *
from .dataexample import ListToDirectores,ListToGenero,ListToMovies,ListToUser

baseDatos = ubicacionDB
baseExample = baseExample


def createDB():
    global baseDatos
    global baseExample
    database = Path(baseDatos)
    if not database.is_file():
        conn = sqlite3.connect(baseDatos)
        cursor = conn.cursor()

        sql_file = open(baseExample)
        sql_as_string = sql_file.read()
        cursor.executescript(sql_as_string)

        for genero in ListToGenero:
            intruciones = f"INSERT INTO Genero VALUES (null, '{genero}')"
            cursor.execute(intruciones)

        for user in ListToUser:
            intruciones = f"INSERT INTO Users VALUES (null, '{user[0]}','{user[1]}','{user[2]}')"
            cursor.execute(intruciones)

        for movie in ListToMovies:
            intruciones = f"INSERT INTO Movies VALUES (null,'{movie[0]}','{movie[1]}','{movie[2]}','{movie[3]}','{movie[4]}','{movie[5]}','{movie[6]}')"
            
            cursor.execute(intruciones)

        for director in ListToDirectores:
            intruciones = f"INSERT INTO Director VALUES (null, '{director}')"
            cursor.execute(intruciones)

        conn.commit()
        conn.close()


if __name__ == "__main__":
    pass
