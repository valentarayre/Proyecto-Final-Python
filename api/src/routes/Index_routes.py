from main import app
from ..controllers.Movies import *
from ..controllers.Users import *

# Rutes no validate
app.add_url_rule("/api/auth", view_func=auth, methods=['POST'])
app.add_url_rule("/api/movies/nologin",
                 view_func=get_MoviesNoLogin, methods=['GET'])

# Rutes Validate
app.add_url_rule("/api/movies", view_func=get_Movies, methods=['GET'])
app.add_url_rule("/api/movies", view_func=post_Movies, methods=['POST'])
app.add_url_rule("/api/movies/<id>", view_func=select_Movie, methods=['GET'])
app.add_url_rule("/api/movies/<id>",
                 view_func=delete_Movies, methods=['DELETE'])
app.add_url_rule("/api/movies/<id>", view_func=update_Movies, methods=['PUT'])
