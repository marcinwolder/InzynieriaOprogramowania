from typing import Annotated
from fastapi import APIRouter, Depends, status
from pydantic import BaseModel

from utils.responses import PaymentRequiredResponse, StandardResponse
from utils.dependencies import User, get_current_user


PaymentRouter = APIRouter(prefix='/payment')

class GeneratePaymentResponse(BaseModel):
    msg: str
    paymentUrl: str
@PaymentRouter.get('/{serverId}')
def generate_payment_url(serverId: str, current_user: Annotated[User | None, Depends(get_current_user)]) -> GeneratePaymentResponse:
    return {
        'msg': 'Payment link created',
        'paymentUrl': 'https://127.0.0.1:8000'
    }


@PaymentRouter.get('/redirect/{orderId}', responses={
    status.HTTP_402_PAYMENT_REQUIRED: {'model': PaymentRequiredResponse}
})
def confirm_payment_url(orderId: str, current_user: Annotated[User | None, Depends(get_current_user)]) -> StandardResponse:
    return {
        'msg': 'Payment confirmed'
    }