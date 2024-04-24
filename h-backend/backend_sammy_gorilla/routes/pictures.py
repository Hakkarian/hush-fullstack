from flask import request
from fastapi import APIRouter, HTTPException, UploadFile, File
import cloudinary.uploader
from typing import List

from backend_sammy_gorilla.config.postgre_config import configure_postgresql
from backend_sammy_gorilla.models.picture import Picture

router = APIRouter(prefix="/pictures", tags=["pictures"])

conn, cur = configure_postgresql()

@router.get("", response_model=List[Picture])
async def get_pictures(page: int = 1, page_size: int = 4):
    offset = (page - 1) * page_size
    cur.execute("SELECT * FROM pictures ORDER BY id LIMIT %s OFFSET %s", (page_size, offset))
    pictures = cur.fetchall()

    if not pictures:
        raise HTTPException(status_code=404, detail="No pictures found for the given page")

    return [Picture(id=pic[0], cloudinary_id=pic[1], cloudinary_url=pic[2]) for pic in pictures]

# @router.post("/add", response_model=Picture)
# async def create_picture(image: UploadFile = File(...)):
#     try:
#         result = cloudinary.uploader.upload(image.file)
#         url = result['url']
#         id = result['public_id']

#         cur.execute("""
#             INSERT INTO pictures (cloudinary_url, cloudinary_id)
#             VALUES (%s, %s)
#             RETURNING *
#         """, (url, id))

#         image_data = cur.fetchone()
#         conn.commit()

#         return Picture(id=image_data[0], cloudinary_id=image_data[1], cloudinary_url=image_data[2])

#     except Exception as e:
#         raise HTTPException(status_code=500, detail=str(e))