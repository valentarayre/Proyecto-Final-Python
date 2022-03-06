from flask import Flask
from db.db import createDB


app = Flask(__name__)

#Importa Lista de Rutas
from routes.Index_routes import *

if __name__ == '__main__':    
    createDB()
    app.run(debug=True)
