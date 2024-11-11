from typing import List
from pydantic import BaseModel


class NotAuthorizedResponse(BaseModel):
    detail: str = 'Authentication error'
class PaymentRequiredResponse(BaseModel):
    detail: str = 'Payment required'

class BadParameter(BaseModel):
    field: str
    msg: str
class BadRequestResponse(BaseModel):
    detail: str = 'Bad request'
    context: List[BadParameter]
    
class StandardResponse(BaseModel):
    msg: str
