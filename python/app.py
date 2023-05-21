from flask import Flask
from flask import send_file
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/noncapisconulla")
def gjs():
    return send_file('prova.json')

if __name__ == "__main__":
    app.run()