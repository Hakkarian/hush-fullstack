from weaviate import Client
import requests
import base64
import os
# creating a client object to interact with the Weaviate server. It specifies the scheme (http) and the host
# (localhost:8080) where the Weaviate server is running. This client object can be used to perform
# various operations such as creating classes, adding data, querying data, etc. */

weaviate_url = os.getenv("WEAVIATE_URL")
client = Client(weaviate_url)


# The `schemaConfig` object is defining the schema for a class called "Meme" in the Weaviate server.
# It specifies the properties and data types of the class. 
schema_config = {
        'class': "Hush",
        'vectorizer': "img2vec-neural",
        'vectorIndexType': "hnsw",
        'moduleConfig': {
            "img2vec-neural": {
            'imageFields': ["image"],
            },
        },
        'properties': [
            {
            'name': "image",
            'dataType': ["blob"],
            },
            {
            'name': "text",
            'dataType': ["string"],
            },
        ],
        }

# create a class with specified config

# Check if the class exists in Weaviate
existing_classes = client.schema.get()
class_exists = any(schema_class["class"] == "Hush" for schema_class in existing_classes["classes"])

if not class_exists:
    client.schema.create_class(schema_config)

# If the class doesn't exist, create it


def store_photo(image_url):
    # Download image from the URL
    response = requests.get(image_url)
    response.raise_for_status()

    image_data = response.content

    image_base64 = base64.b64encode(image_data).decode()

    data_properties = {
      "image": image_base64,
        "text": image_url.split("/")[-1].split(".")[0]
    }

    with client.batch() as batch:
        batch.add_data_object(data_properties,"Hush")


def search_similar(sample_image_path):
    
    sourceImage = {"image": sample_image_path}

    schema = client.schema.get()
    weaviate_results = client.query.get(
      "Hush", ["image"]
    ).with_near_image(
      sourceImage, encode=False
    ).with_limit(10).do()    
    print('that is a', schema)
    return weaviate_results["data"]["Get"]["Hush"]

# "http://res.cloudinary.com/dlw7wjlp3/image/upload/v1705452114/obgnyi7emkpac0lktdhx.jpg"

