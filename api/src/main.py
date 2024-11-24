from fastapi import FastAPI

from src.routers.auth_router import AuthRouter
from src.routers.server_router import ServerRouter
from src.routers.payment_router import PaymentRouter

app = FastAPI()

app.include_router(AuthRouter)
app.include_router(ServerRouter)
app.include_router(PaymentRouter)

@app.get("/")
def test_hello_world_endpoint():
    return {
        'msg': "Hello from API!"
    }