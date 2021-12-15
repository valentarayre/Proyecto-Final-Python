from flask import Flask, jsonify, request
from http import HTTPStatus
from db.db import createDB

app = Flask(__name__)

@app.route("/", methods=['GET'])
def hello_world():
    return jsonify({'message': 'Hello Word'}), HTTPStatus.OK

if __name__ == '__main__':
    createDB()
    app.run(debug=True)
