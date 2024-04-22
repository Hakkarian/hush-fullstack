from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List
import psycopg2

from backend_sammy_gorilla.config.postgre_config import configure_postgresql


app = FastAPI()

conn, cur = configure_postgresql()

class Picture(BaseModel):
    id: int
    cloudinary_id: str
    cloudinary_url: str

@app.get("/pictures", response_model=List[Picture])
async def get_pictures(page: int = 1, page_size: int = 4):
    offset = (page - 1) * page_size
    cur.execute("SELECT * FROM pictures ORDER BY id LIMIT %s OFFSET %s", (page_size, offset))
    pictures = cur.fetchall()

    if not pictures:
        raise HTTPException(status_code=404, detail="No pictures found for the given page")

    return [Picture(id=pic[0], cloudinary_id=pic[1], cloudinary_url=pic[2]) for pic in pictures]