# Download API – JavaScript Usage

Client-side downloads use the same Download API endpoint but must handle CORS and ZIP extraction.

## Browser flow

1. Obtain an OAuth access token (Implicit or Authorization Code).
2. Call `GET /v3/models/{uid}/download` with the token.
3. Use the returned `gltf.url` or `usdz.url` to fetch the archive.
4. Unzip glTF content in memory (e.g., with `zip.js`) and hand off to a glTF loader such as three.js.

## Example

See `examples/javascript/download-api-browser.js` for a minimal browser fetch example that:

- Requests the download URL with `Authorization: Bearer ...`.
- Fetches the glTF archive.
- Notes where to plug in an unzipper and loader.

## Cross-origin and file handling

- The returned download URLs are time-limited and already authorized.
- Handle ZIPs in memory to avoid file system prompts on the web.
- Respect licensing requirements before importing or redistributing assets.
