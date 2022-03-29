from flask import Flask, jsonify

#from flask_cors import CORS

app = Flask(__name__, static_folder='./frontend/build', static_url_path='/') # where static files are stored
# static_url_path is seen in front end, static_folder seen in backend 

#CORS(app)

@app.route('/name/Hamza')
def lastName():
    return jsonify(lastName = 'Shaikh')

@app.route('/')
def index():
    return app.send_static_file('index.html')

if __name__ == '__main__':
    app.run()