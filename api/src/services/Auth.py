import jwt
from ..repositories.Users import *
from ..config import secretJWT


def AuthUser(user):
    email = user["email"]
    password = user["password"]
    
    UserFound = findUserByData(email,password)
    if len(UserFound) == 0:
        return False
    UserData = UserFound[0]
    return jwt.encode({"id": UserData[0]}, secretJWT, algorithm="HS256")
    
    
        
    