import datetime
import os
import uuid

import stripe
from dateutil.relativedelta import relativedelta
from fastapi import APIRouter, status
from pydantic import BaseModel
from sql.models import Order, OrderStatus
from sqlalchemy import create_engine, select
from sqlalchemy.orm import Session
from utils.responses import PaymentRequiredResponse, StandardResponse

# TODO: engine as dependency
engine = create_engine("mysql+pymysql://root:root_password@db:3306/playgrid", echo=True) #TODO: Change DB passwords from default, and add to .env

# TODO: stripe as dependency
stripe.api_key = os.environ["STRIPE_SECRET_KEY"]
BASE_URL = os.environ["BASE_URL"]

PaymentRouter = APIRouter(prefix='/payment')

class GeneratePaymentResponse(BaseModel):
    msg: str = ""
    paymentURL: str
@PaymentRouter.get('/{serverId}')
def generate_payment_session(serverId: str) -> GeneratePaymentResponse:
    order_id = uuid.uuid5(uuid.uuid4(), serverId)

    with Session(engine) as session:
        order = Order(
            order_uuid = str(order_id), 
            user_id = 1, #TODO: Get user id from request
            server_id = serverId,
            expiration_date = datetime.datetime.today()+relativedelta(months=1), # TODO: get purchase_date from request
            status = OrderStatus.pending
        )
        session.add(order)
        session.commit()


    session = stripe.checkout.Session.create(
      success_url=f"{BASE_URL}/redirect/{order_id}",
      cancel_url=f"{BASE_URL}/", #TODO: ADD cancel url + manage cancel in second endpoint
      currency='pln',
      line_items=[{"price": "price_1QQsFVDY0D7JFcFXvW4OV4Sf", "quantity": 1}], #TODO: Get item from request
      mode="payment"
    )

    return {
        'msg': 'Payment session created',
        'paymentURL': session.url
    }

# TODO: Manage canceled payment in endpoint
# TODO: Add AWS integration (webhook lambda + simple db in the cloud)
@PaymentRouter.get('/redirect/{orderUuid}', responses={
    status.HTTP_402_PAYMENT_REQUIRED: {'model': PaymentRequiredResponse}
})
def confirm_payment_url(orderUuid: str) -> StandardResponse:
    with Session(engine) as session:
        order = session.scalars(select(Order).where(Order.order_uuid == orderUuid)).one()
        order.status = OrderStatus.successful
        session.commit()
    return {
        'msg': 'Payment confirmed'
    }