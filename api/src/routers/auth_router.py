from typing import Annotated
from fastapi import APIRouter, Depends
from fastapi.security import OAuth2PasswordRequestForm
from pydantic import BaseModel

from utils.responses import BadRequestResponse

AuthRouter = APIRouter(prefix='/auth')

class LoginResponse(BaseModel):
    msg: str = 'Logged in successfully'
    token: str
@AuthRouter.post("/login", responses={
    400: {"model": BadRequestResponse}
})
async def login(form_data: Annotated[OAuth2PasswordRequestForm, Depends()]) -> LoginResponse:
    return {"access_token": "token", "token_type": "bearer"}

class RegisterBody(BaseModel):
    password: str
    username: str
    email: str
class RegisterResponse(BaseModel):
    msg: str = 'Successfully registered'
    token: str
@AuthRouter.post('/register', responses={
    400: {"model": BadRequestResponse}
})
def register_request(register_body: RegisterBody) -> RegisterResponse:
    return {
        'msg': 'Client registered successfully'
    }

class EmailResetResponse(BaseModel):
    msg: str
@AuthRouter.get('/reset/{username}')
def get_reset_email(username: str) -> EmailResetResponse:
    return {
        'msg': 'Password change confirmation email sent'
    }

class PasswordResetBody(BaseModel):
    password: str
class PasswordResetResponse(BaseModel):
    msg: str
@AuthRouter.post('/reset/{username}/{recovery_hash}', responses={
    400: {
        'description': 'Weak password',
        'model': BadRequestResponse
    }
})
def reset_password(username: str, hash: str, password_reset_body: PasswordResetBody) -> PasswordResetResponse:
    return {
        'msg': 'Password changed'
    }