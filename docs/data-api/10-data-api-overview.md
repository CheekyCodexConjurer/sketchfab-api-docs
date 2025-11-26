# Data API v3 Overview

The Data API v3 is a REST interface at `https://api.sketchfab.com/v3` for managing Sketchfab resources (models, users, collections, organizations, tags, search, comments, likes).

**Authentication**  
Most endpoints accept either API tokens (`Authorization: Token ...`) or OAuth access tokens (`Authorization: Bearer ...`). Some features (private models, downloads) require OAuth.

**Formats**  
Requests use JSON or multipart form data (uploads). Responses are JSON. Timestamps follow ISO-8601.

**Pagination**  
List endpoints return 24 items by default, expose `next`, `previous`, and `cursors`. `count` is capped at 24.

**Rate limits**  
Sketchfab can return HTTP 429 (Too Many Requests) if quotas are exceeded.

This folder breaks down the API by resource. Shared conventions are in `11-data-api-common-conventions.md`.
