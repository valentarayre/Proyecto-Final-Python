import jwt
from datetime import datetime, timedelta, timezone
from ..repositories.Users import *
from ..config import secretJWT


def AuthUser(email, password):
    UserFound = findUserByData(email, password)
    if len(UserFound) == 0:
        return False
    UserData = UserFound[0]
    expiredTime = datetime.now(tz=timezone.utc) + timedelta(hours=6)

    return jwt.encode(
        {
            "id": UserData[0],
            "name": UserData[1],
            "exp": expiredTime
        },
        secretJWT,
        algorithm="HS256"
    )
