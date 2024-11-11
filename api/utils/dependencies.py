from typing import Annotated, Optional
from fastapi import Depends
from fastapi.security import OAuth2PasswordBearer
from pydantic import BaseModel


oauth2_scheme = OAuth2PasswordBearer(tokenUrl="auth/login") 

class User(BaseModel):
    username: str
    password: str
    
async def get_current_user(token: Annotated[User, Depends(oauth2_scheme)]) -> Optional[User]:
    user = User(username="testUser", password="testPasswd")
    return user