from .info import info_bp

def init_app(app):
    app.register_blueprint(info_bp)
