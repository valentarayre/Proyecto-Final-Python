import sqlite3 as sql
from ..config import *

baseDatos = ubicacionDB

def formatDataUsers(data):
    nameColums = ('id','username','email','password')
    dataForm = {}
    cont = 0
    
    for e in data:
        dataForm[nameColums[cont]] = e
        cont += 1
    return dataForm

def UserId(id):
    global baseDatos
    conn = sql.connect(baseDatos)
    cursor = conn.cursor()

    intruciones = f"SELECT * FROM Users WHERE id = '{id}'"
    cursor.execute(intruciones)
    datos = cursor.fetchall()

    conn.commit()
    conn.close()
    
    if len(datos) != 0:        
        return formatDataUsers(datos[0])
    return False

def findUserByData(email,password):
    global baseDatos
    conn = sql.connect(baseDatos)
    cursor = conn.cursor()
    intruciones = f"SELECT * FROM Users WHERE email = '{email}' and password = '{password}'"
    cursor.execute(intruciones)
    datos = cursor.fetchall()
    conn.commit()
    conn.close()

    return datos

if __name__ == "__main__":    
    pass
