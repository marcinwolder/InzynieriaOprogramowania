from typing import Annotated, Any, Dict
from fastapi import APIRouter, Depends, Header, status
from pydantic import BaseModel

from utils.responses import *

ServerRouter = APIRouter(prefix='/server')

class PullConfigResponse(BaseModel):
    msg: str
    config: Dict[str, Any]
@ServerRouter.get('/{serverId}', responses={
    status.HTTP_401_UNAUTHORIZED: {'model': NotAuthorizedResponse},
    status.HTTP_402_PAYMENT_REQUIRED: {'model': PaymentRequiredResponse},
    status.HTTP_400_BAD_REQUEST: {'model': BadRequestResponse}
})
def pull_server_config(serverId: str) -> PullConfigResponse:
    return {
        'msg': 'Server config downloaded',
        'config': {}
    }

class PushConfigBody(BaseModel):
    config: Dict[str, Any]
@ServerRouter.post('/{serverId}', responses={
    status.HTTP_401_UNAUTHORIZED: {'model': NotAuthorizedResponse},
    status.HTTP_402_PAYMENT_REQUIRED: {'model': PaymentRequiredResponse},
    status.HTTP_400_BAD_REQUEST: {'model': BadRequestResponse}
})
def push_server_config(serverId: str, body: PushConfigBody) -> StandardResponse:
    return {
        'msg': 'Server config updated'
    }

class CreateServerBody(BaseModel):
    name: str
    gameName: str
    config: Dict[str, Any]
class CreateServerResponse(BaseModel):
    msg: str
    serverId: int
@ServerRouter.put('/', responses={
    status.HTTP_401_UNAUTHORIZED: {'model': NotAuthorizedResponse},
    status.HTTP_402_PAYMENT_REQUIRED: {'model': PaymentRequiredResponse},
    status.HTTP_400_BAD_REQUEST: {'model': BadRequestResponse}
})
def create_new_server(body: CreateServerBody) -> StandardResponse:
    return {
        'msg': 'Server created'
    }

@ServerRouter.delete('/{serverId}', responses={
    status.HTTP_401_UNAUTHORIZED: {'model': NotAuthorizedResponse},
    status.HTTP_400_BAD_REQUEST: {'model': BadRequestResponse}
})
def delete_server(serverId: str) -> StandardResponse:
    return {
        'msg': 'Server deleted'
    }