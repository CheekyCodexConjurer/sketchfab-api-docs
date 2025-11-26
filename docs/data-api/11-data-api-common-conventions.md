# Data API Common Conventions

Use these shared rules across Data API endpoints.

## Base URL

```
https://api.sketchfab.com/v3
```

## Authentication headers

- API token: `Authorization: Token <api_token>`
- OAuth 2.0: `Authorization: Bearer <access_token>`
- Password-protected models: add `x-skfb-model-pwd: <base64-encoded-password>`

## Pagination

- Default page size: 24 items.
- `count` query parameter adjusts page size but is capped at 24.
- Responses include `next`, `previous`, and `cursors` for navigation.

## Sorting and filters

- Sorting options that recur: `createdAt`, `viewCount`, `likedAt`.
- Filters vary by endpoint (search terms, tags, categories, user, organization). See each resource file.

## Formats and limits

- JSON responses; ISO-8601 timestamps.
- Rate limiting can return HTTP 429 (Too Many Requests).
- POST/PATCH bodies are JSON unless noted as `multipart/form-data` (e.g., uploads).

## Endpoint template

````markdown
### GET /v3/resource

**Summary**  
Short description.

**Authentication**  
Token or OAuth (as required by the resource).

**Request**

- **Method & URL**

```http
GET https://api.sketchfab.com/v3/resource
```

* **Query parameters**

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| count | integer | no | Page size (max 24). |
| cursor | string | no | Pagination cursor. |

**Response**

* **200 OK** – JSON list.

```json
{
  "results": [],
  "cursors": { "next": "...", "previous": "..." },
  "next": "...",
  "previous": "..."
}
```

**Notes**

- Add brief, specific behaviors here.
````
