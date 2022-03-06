import sqlite3 as sql

baseDatos = './api/db/db.sqlite3'

def formatDataUsers(data):
    nameColums = ('id','username','email','password')
    dataForm = {}
    cont = 0
    
    for e in data:
        dataForm[nameColums[cont]] = e
        cont += 1
    return dataForm

def emailUnicode(email):
    global baseDatos
    conn = sql.connect(baseDatos)
    cursor = conn.cursor()

    intruciones = f"SELECT * FROM Users WHERE email='{email}'"
    cursor.execute(intruciones)
    datos = cursor.fetchall()    

    conn.commit()
    conn.close()
    
    return len(datos) == 0

def newUser(username, email, password):
    global baseDatos
    
    conn = sql.connect(baseDatos)
    cursor = conn.cursor()
    
    intruciones = f"INSERT INTO Users VALUES (null, '{username}', '{email}', '{password}')"
    cursor.execute(intruciones)
    

    conn.commit()
    conn.close()

def allUsers():
    global baseDatos
    conn = sql.connect(baseDatos)
    cursor = conn.cursor()

    intruciones = f"SELECT * FROM Users"    
    cursor.execute(intruciones)
    datos = cursor.fetchall()  

    conn.commit()
    conn.close()
    
    listDatos = []
    for e in datos:
        listDatos.append(formatDataUsers(e))
    
    if len(listDatos) != 0:
        return listDatos
    return False

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

def deleteUser(id):
    global baseDatos
    conn = sql.connect(baseDatos)
    cursor = conn.cursor()

    intruciones = f"DELETE FROM Users WHERE id = '{id}'"
    cursor.execute(intruciones)

    conn.commit()
    conn.close()

if __name__ == "__main__":
    print(allUsers())
    pass
