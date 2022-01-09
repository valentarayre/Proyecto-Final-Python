import sqlite3 as sql

baseDatos = './api/db/db.sqlite3'

def formatDataComentarios(data):
    nameColums = ('id','id_Movie','id_User','Date')
    dataForm = {}
    cont = 0
    
    for e in data:
        dataForm[nameColums[cont]] = e
        cont += 1
    return dataForm

def newComentario(id_Movie,id_User,Date):
    global baseDatos
    
    conn = sql.connect(baseDatos)
    cursor = conn.cursor()
    
    intruciones = f"INSERT INTO Comentarios VALUES (null,'{id_Movie}','{id_User}','{Date}')"
    cursor.execute(intruciones)

    conn.commit()
    conn.close()

def ComentarioId(id):
    global baseDatos
    conn = sql.connect(baseDatos)
    cursor = conn.cursor()

    intruciones = f"SELECT * FROM Comentarios WHERE id = '{id}'"
    cursor.execute(intruciones)
    datos = cursor.fetchall()

    conn.commit()
    conn.close()
    
    if len(datos) != 0:        
        return formatDataComentarios(datos[0])
    return False

def allComentarios():
    global baseDatos
    conn = sql.connect(baseDatos)
    cursor = conn.cursor()

    intruciones = f"SELECT * FROM Comentarios"
    cursor.execute(intruciones)
    datos = cursor.fetchall()

    conn.commit()
    conn.close()
    
    listDatos = []
    for e in datos:
        listDatos.append(formatDataComentarios(e))
    
    if len(listDatos) != 0:
        return listDatos
    return False

def deleteComentarioId(id):
    global baseDatos
    conn = sql.connect(baseDatos)
    cursor = conn.cursor()

    intruciones = f"DELETE FROM Comentarios WHERE id = '{id}'"
    cursor.execute(intruciones)

    conn.commit()
    conn.close()

def allComentariosMovie(idMovie):
    global baseDatos
    conn = sql.connect(baseDatos)
    cursor = conn.cursor()

    intruciones = f"SELECT * FROM Comentarios WHERE id_Movie = '{idMovie}'"
    cursor.execute(intruciones)
    datos = cursor.fetchall()

    conn.commit()
    conn.close()
    
    listDatos = []
    for e in datos:
        listDatos.append(formatDataComentarios(e))
    
    if len(listDatos) != 0:
        return listDatos
    return False

if __name__ == '__main__':
    pass