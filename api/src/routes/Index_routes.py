from main import app
from ..controllers.Movies import *
from ..controllers.Users import *


#Movies Routes


#GET  movies con LOG

app.add_url_rule("/home" ,view_func=json_GetMovies,methods=['GET'])

#GET movies sin LOG

app.add_url_rule("/" ,view_func=json_GetMoviesNoLog,methods=['GET'])

#GET movie por ID

app.add_url_rule('/movieid=<int:id>',view_func=get_MovieId,methods=['GET'])

#Crear Movie

app.add_url_rule("/creator" ,view_func=create_movie,methods=['POST'])

#Borrar Movie

app.add_url_rule('/delmovie<int:id>', view_func=delete_movie, methods=['DELETE'])

#Editar Movie

app.add_url_rule('/editmovie<int:id>',view_func=json_PutMovie,methods=['PUT'])

#Editar Movie test

app.add_url_rule('/editmovietest<int:id>',view_func=json_PutMovieTest,methods=['PUT'])

# DIRECTORES ROUTES

#Directores

# Get directores y numero de peliculas creada #testeado
app.add_url_rule("/directordic" ,view_func=json_GetDirectores,methods=['GET'])

#Directores GET/POST por nombre (INPUT) #testeado
app.add_url_rule("/directorInput" ,view_func=json_GetDirectoresInput,methods=['POST'])

# Get directores y las peliculas de él #testeado
app.add_url_rule("/director" ,view_func=get_DirectoresFull,methods=['GET'])




# COMENTARIOS ROUTES

#Get comentarios #testeado
app.add_url_rule("/comments<int:id>",view_func=json_GetComments,methods=['GET'])

#Post comentarios
app.add_url_rule("/postcomment<int:id>",view_func=create_comment,methods=['POST'])


# GENEROS RUOTES #testeado

app.add_url_rule("/generos",view_func=get_Generos,methods=['GET'])


#Login

app.add_url_rule("/api/auth", view_func=auth, methods=['POST'])
#aa PROBLEMA
app.add_url_rule("/api/validtoken", view_func=ValidToken, methods=['POST'])