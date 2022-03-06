import sqlite3 as sql
from ..config import *

baseDatos = ubicacionDB

def formatDataDirector(data):
    nameColums = ('id','name')
    dataForm = {}
    cont = 0
    
    for e in data:
        dataForm[nameColums[cont]] = e
        cont += 1
    return dataForm

def newDirector(name):
    global baseDatos
    
    conn = sql.connect(baseDatos)
    cursor = conn.cursor()
    
    intruciones = f"INSERT INTO Director VALUES (null,'{name}')"
    cursor.execute(intruciones)

    conn.commit()
    conn.close()

def directorId(id):
    global baseDatos
    conn = sql.connect(baseDatos)
    cursor = conn.cursor()

    intruciones = f"SELECT * FROM Director WHERE id = '{id}'"
    cursor.execute(intruciones)
    datos = cursor.fetchall()

    conn.commit()
    conn.close()
    
    if len(datos) != 0:        
        return formatDataDirector(datos[0])
    return False

def allDirector():
    global baseDatos
    conn = sql.connect(baseDatos)
    cursor = conn.cursor()

    intruciones = f"SELECT * FROM Director"
    cursor.execute(intruciones)
    datos = cursor.fetchall()

    conn.commit()
    conn.close()
    
    listDatos = []
    for e in datos:
        listDatos.append(formatDataDirector(e))
    
    if len(listDatos) != 0:
        return listDatos
    return False

if __name__ == '__main__':
    pass