# Architecture Overview

Sketchfab exposes several public interfaces. This repository mirrors their main areas in modular files so each topic can be read independently.

## High-level components

- **Data API v3 (REST)** – CRUD operations for models, users, collections, organizations, comments, likes, search, and metadata. Base URL: `https://api.sketchfab.com/v3`.
- **Download API** – Returns short-lived URLs for downloadable models (glTF/GLB and USDZ) via `GET /v3/models/{uid}/download`.
- **Viewer API (JavaScript)** – Client-side library (`sketchfab-viewer-<version>.js`) to embed and control the 3D viewer in an iframe.
- **OAuth 2.0** – Authorization Code, Implicit, and Username/Password flows. Tokens are sent in `Authorization: Bearer <access_token>`.
- **API Token** – Alternative to OAuth for many endpoints: `Authorization: Token <api_token>`.
- **oEmbed** – Lightweight embedding endpoint at `https://sketchfab.com/oembed`.
- **Developer/Exporter Guidelines** – Recommended behaviors for apps that publish to Sketchfab or import downloadable content.

## Shared concepts

- **Authentication** – Many endpoints accept either API tokens or OAuth access tokens. Some features (downloads, private models) require OAuth.
- **Pagination** – List endpoints default to 24 items, return `next`, `previous`, and `cursors`. `count` is capped at 24.
- **Formats** – JSON responses; ISO-8601 timestamps; rate limits can return HTTP 429 (Too Many Requests).
- **Resources** – Models, Users, Organizations, Collections, Categories, Tags, Licenses, Comments, Likes, Notifications, Invitations.

## Where to go next

- See `docs/02-authentication.md` for token formats and OAuth flows.
- Data API details start at `docs/data-api/10-data-api-overview.md`.
- Download API notes start at `docs/download-api/20-download-api-overview.md`.
- Viewer API entry point is `docs/viewer-api/30-viewer-api-overview.md`.
- oEmbed is documented in `docs/oembed/40-oembed-overview.md`.
- Guidelines live under `docs/guidelines/`.
