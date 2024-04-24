from pydantic import BaseModel

class Picture(BaseModel):
    id: int
    cloudinary_id: str
    cloudinary_url: str