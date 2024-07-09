from .version import VERSION
from typing import Union

from fastapi import FastAPI

app = FastAPI()

@app.get("/", status_code=200, summary="回傳程式版本資訊，可用於確認伺服器活著.")
def root():
    """
    回傳程式版本資訊，可用於確認伺服器活著.
    """
    return {"msg": "server is ready.", "version": VERSION}


# @app.get("/")
# async def read_root():
#     return {"Hello": "World"}


@app.get("/items/{item_id}")
async def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}