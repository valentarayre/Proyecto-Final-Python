from main import app
from ..controllers.Movies import *
from ..controllers.Users import *


#Movies Routes
app.add_url_rule("/api/movies", view_func=get_Movies, methods=['GET'])
app.add_url_rule("/api/movie", view_func=post_Movies, methods=['POST'])

app.add_url_rule("/api/auth", view_func=auth, methods=['POST'])
app.add_url_rule("/api/validtoken", view_func=ValidToken, methods=['POST'])