# Download API Overview

The Download API extends the Data API to provide temporary URLs for downloadable models (glTF/GLB and USDZ) via:

```
GET https://api.sketchfab.com/v3/models/{uid}/download
```

## Flow

1. **Authenticate the user** – Use OAuth 2.0. Downloads require an authenticated user.
2. **Request download authorization** – Call the endpoint above with the Bearer token. The response returns short-lived URLs for `gltf.url` and `usdz.url` plus file sizes.
3. **Download the archive** – Fetch the returned URLs directly. No extra auth is needed because the URLs include access tokens.
4. **Unzip glTF** – The glTF download is a ZIP containing `scene.gltf`, `scene.bin`, and a `textures/` folder.
5. **Load the model** – Use a glTF library (e.g., three.js) or a USDZ-capable viewer (native on iOS).

## Authentication

- Required: `Authorization: Bearer <access_token>`.
- URLs expire after a short period; download promptly.

## Notes

- Behavior may change. Refer to the official Sketchfab documentation for the most up-to-date details.
- Respect licensing terms when downloading and redistributing content.
