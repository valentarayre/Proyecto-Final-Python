from main import app
from routes.Users_routes import *
from routes.Movies_routes import *


#Movies Routes
app.add_url_rule("/api/Movies", view_func=get_Movies, methods=['GET'])
app.add_url_rule("/api/Movie", view_func=post_Movies, methods=['POST'])

#User Routes
app.add_url_rule("/api/Users", view_func=get_Users, methods=['GET'])
app.add_url_rule("/api/Register", view_func=post_Users, methods=['POST'])