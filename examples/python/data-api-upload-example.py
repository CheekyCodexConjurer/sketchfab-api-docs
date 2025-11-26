"""
Upload a model with the Data API using multipart/form-data.
Requires requests: pip install requests
"""

import os
import requests

API_TOKEN = os.environ.get("SKETCHFAB_API_TOKEN") or "YOUR_API_TOKEN"
MODEL_PATH = "path/to/model.zip"

files = {"modelFile": open(MODEL_PATH, "rb")}
data = {
    "name": "My Model",
    "description": "Uploaded via Sketchfab Data API",
    "isPublished": True,
}

response = requests.post(
    "https://api.sketchfab.com/v3/models",
    headers={"Authorization": f"Token {API_TOKEN}"},
    files=files,
    data=data,
    timeout=60,
)

if response.ok:
    print("Created model UID:", response.json().get("uid"))
    print("Location header:", response.headers.get("Location"))
else:
    print("Upload failed", response.status_code, response.text)
