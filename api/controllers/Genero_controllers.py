import sqlite3 as sql

baseDatos = './api/db/db.sqlite3'

def formatDataGenero(data):
    nameColums = ('id','name')
    dataForm = {}
    cont = 0
    
    for e in data:
        dataForm[nameColums[cont]] = e
        cont += 1
    return dataForm

def newGenero(name):
    global baseDatos
    
    conn = sql.connect(baseDatos)
    cursor = conn.cursor()
    
    intruciones = f"INSERT INTO Genero VALUES (null,'{name}')"
    cursor.execute(intruciones)

    conn.commit()
    conn.close()

def GeneroId(id):
    global baseDatos
    conn = sql.connect(baseDatos)
    cursor = conn.cursor()

    intruciones = f"SELECT * FROM Genero WHERE id = '{id}'"
    cursor.execute(intruciones)
    datos = cursor.fetchall()

    conn.commit()
    conn.close()
    
    if len(datos) != 0:        
        return formatDataGenero(datos[0])
    return False

def allGenero():
    global baseDatos
    conn = sql.connect(baseDatos)
    cursor = conn.cursor()

    intruciones = f"SELECT * FROM Genero"
    cursor.execute(intruciones)
    datos = cursor.fetchall()

    conn.commit()
    conn.close()
    
    listDatos = []
    for e in datos:
        listDatos.append(formatDataGenero(e))
    
    if len(listDatos) != 0:
        return listDatos
    return False

if __name__ == '__main__':
    pass