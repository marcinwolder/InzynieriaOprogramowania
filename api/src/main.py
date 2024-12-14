from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from src.routers.auth_router import AuthRouter
from src.routers.server_router import ServerRouter
from src.routers.payment_router import PaymentRouter

app = FastAPI()

origins = [
    "http://playgrid.pl",
    "http://localhost",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

app.include_router(AuthRouter)
app.include_router(ServerRouter)
app.include_router(PaymentRouter)

@app.get("/")
def test_hello_world_endpoint():
    return {
        'msg': "Hello from API!"
    }