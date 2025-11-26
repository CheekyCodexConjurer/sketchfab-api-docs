"""
Simple OAuth 2.0 password grant example.
Replace TOKEN_URL with the official Sketchfab token endpoint from the developer docs.
"""

import os
import requests

TOKEN_URL = os.environ.get("SKETCHFAB_TOKEN_URL") or "<replace-with-official-token-endpoint>"
CLIENT_ID = os.environ.get("SKETCHFAB_CLIENT_ID") or "YOUR_CLIENT_ID"
CLIENT_SECRET = os.environ.get("SKETCHFAB_CLIENT_SECRET") or "YOUR_CLIENT_SECRET"
USERNAME = os.environ.get("SKETCHFAB_USERNAME") or "user@example.com"
PASSWORD = os.environ.get("SKETCHFAB_PASSWORD") or "password"

payload = {
    "grant_type": "password",
    "username": USERNAME,
    "password": PASSWORD,
}

response = requests.post(
    TOKEN_URL,
    data=payload,
    auth=(CLIENT_ID, CLIENT_SECRET),
    timeout=30,
)

if response.ok:
    tokens = response.json()
    print("Access token:", tokens.get("access_token"))
    print("Refresh token:", tokens.get("refresh_token"))
else:
    print("Token request failed", response.status_code, response.text)
