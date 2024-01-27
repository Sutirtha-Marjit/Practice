#main init file

from flask import Flask
from app.routes.init import init_app

def start():
    print("Flask Routing started ...")
    app = Flask(__name__)
    init_app(app)
    app.run()