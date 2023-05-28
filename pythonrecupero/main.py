from flask import Flask
from flask import jsonify
from flask import request
from flask_pymongo import PyMongo
from flask_cors import CORS
import geojson
import random

app = Flask(__name__)

# Stringa di connessione al DB
app.config["MONGO_URI"] = "mongodb+srv://S3ba26:Facebook2015@cluster0.ztaqymo.mongodb.net/pokemon" #Importante qui va specificato il nome del DB

mongo = PyMongo(app)
# Per rispondere alle chiamate cross origin
CORS(app)

@app.route("/all")
def get_all():
    tane = mongo.db.tane
    output = [] 
    for s in tane.find().limit(100):
        output.append({"lat": s['lat'], "lng":s['lng']})
    return jsonify(output)



@app.route('/pikachu', methods=['GET'])
def getpikachu():
    tane = mongo.db.tane
    output = []
    for s in tane.find():
        output.append({"lat": s["lat"], "lng":s["lng"]})
                            
    return jsonify(output[random.randrange(0, len(output))])

@app.route('/charmender', methods=['GET'])
def getcharmender():
    tane = mongo.db.tane
    output = []
    for s in tane.find():
        output.append({"lat": s["lat"], "lng":s["lng"]})
                            
    return jsonify(output[random.randrange(0, len(output))])

@app.route('/bulbasaur', methods=['GET'])
def get_bulbasaur():
    tane = mongo.db.tane
    output = []
    for s in tane.find():
        output.append({"lat": s["lat"], "lng":s["lng"]})
                            
    return jsonify(output[random.randrange(0, len(output))])

@app.route('/snorlax', methods=['GET'])
def get_snorlax():
    tane = mongo.db.tane
    output = []
    for s in tane.find():
        output.append({"lat": s["lat"], "lng":s["lng"]})
                            
    return jsonify(output[random.randrange(0, len(output))])


if __name__ == "__main__":
    app.run()
  

