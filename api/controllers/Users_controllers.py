import sqlite3 as sql

baseDatos = './api/db/db.sqlite3'

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
    datos = []
    for row in cursor.execute(intruciones):        
        aux = {"id":row[0],"username":row[1],"email":row[2],"password":row[3]}        
        datos.append(aux)    

    conn.commit()
    conn.close()
    
    return datos

if __name__ == "__main__":
    allUsers()
    pass
