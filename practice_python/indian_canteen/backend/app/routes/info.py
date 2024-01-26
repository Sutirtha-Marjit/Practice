from flask import Blueprint, jsonify

info_bp = Blueprint("info", __name__)

@info_bp.route("/")
def index():
    return jsonify(message="Welcome to the index route!")

@info_bp.route("/about")
def about():
    return jsonify(message="This is the about route.")

@info_bp.route("/experiment")
def experiment():
    dict = {
        "name":"Food Item Name",
        "price": 26.50,
        "offer": "56%"
    }
    return jsonify(dict)