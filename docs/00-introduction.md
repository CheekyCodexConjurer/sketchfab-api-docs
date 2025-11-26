# Sketchfab APIs – Community Docs

> ⚠️ **Unofficial, community-maintained documentation**  
> This repository is NOT an official Sketchfab publication. It is maintained by the community and may be incomplete or out of date. For the official, authoritative documentation, always refer to the Sketchfab developer site at https://sketchfab.com/developers.

This repo reorganizes public Sketchfab API information into small, focused files that are easy to navigate and LLM-friendly. It covers:

- Data API v3 (REST) for models, users, collections, organizations, tags, search, comments, and likes.
- Download API for retrieving glTF/GLB and USDZ archives.
- Viewer API (JavaScript) for embedding and controlling the 3D viewer.
- OAuth 2.0 authentication flows and API tokens.
- oEmbed endpoint for lightweight embedding.
- Developer/exporter guidelines and licensing reminders.

All content is rewritten from publicly available Sketchfab docs. If any behavior seems unclear or diverges from the official site, assume the official docs are authoritative.

## How to navigate

- Start with `docs/01-architecture-overview.md` for a map of available APIs.
- See `docs/02-authentication.md` for token usage and OAuth 2.0 flows.
- Each area (Data API, Download API, Viewer API, oEmbed, Guidelines) has its own folder under `docs/`.
- Example code lives under `examples/` (JavaScript, Python, curl).

## Support and updates

These docs are community-maintained and may lag behind the official Sketchfab documentation. Always validate behavior against the live endpoints and refer to the official site for authoritative details.
