from fastapi import FastAPI
from backend_sammy_gorilla.routes import pictures

app = FastAPI()

app.include_router(pictures.router)