# Models

Model endpoints handle listing, uploading, updating, and interacting with models.

## GET /v3/models

**Summary**  
List public, published models. Supports sorting and filters.

**Authentication**  
Not required for public data.

**Request**

```http
GET https://api.sketchfab.com/v3/models?sort_by=createdAt&count=24
```

* **Query parameters**

| Name | Required | Description |
| --- | --- | --- |
| sort_by | no | Sorting: `createdAt`, `viewCount`, `likedAt`. |
| search | no | Free-text search. |
| tags | no | Filter by tags. |
| categories | no | Filter by category slugs. |
| count | no | Page size (max 24). |
| cursor | no | Pagination cursor. |

**Response**  
200 OK – paginated list of model objects with `cursors`, `next`, `previous`.

## POST /v3/models

**Summary**  
Upload a new model via multipart form data.

**Authentication**  
Required – Token or OAuth.

**Request**

```http
POST https://api.sketchfab.com/v3/models
Authorization: Token YOUR_API_TOKEN
Content-Type: multipart/form-data
```

* **Form fields**

| Field | Required | Description |
| --- | --- | --- |
| modelFile | yes | Model archive/file to upload. |
| name | no | Title. |
| description | no | Description text. |
| tags | no | Array of tag strings. |
| categories | no | Array of category slugs. |
| private | no | Boolean, private models (requires eligible plan). |
| password | no | Password for protected models. |
| isInspectable | no | Enable Inspector; required for downloadable models. |
| license | no | License slug supported by Sketchfab. |
| isArEnabled | no | Enable AR (premium). |
| isPublished | no | Auto-publish after processing. |
| options | no | Viewer options payload. |

**Upload limits**

- File size caps: ~50 MB (Basic), ~200 MB (Pro), ~500 MB (Business).

**Response**  
201 Created – returns the new model UID and a `Location` header for the created resource.

## GET /v3/models/{uid}

**Summary**  
Retrieve model details (metadata, stats, files, user info, viewer and embed URLs).

**Authentication**  
Not required for public models; required for private models.

**Response**  
200 OK – model object.

## PATCH /v3/models/{uid}

**Summary**  
Update model attributes (name, description, tags, categories, privacy, license, password, options).

**Authentication**  
Required – Token or OAuth.

**Request**

```http
PATCH https://api.sketchfab.com/v3/models/{uid}
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

## DELETE /v3/models/{uid}

**Summary**  
Delete a model.

**Authentication**  
Required – Token or OAuth.

## GET /v3/models/{uid}/comments

**Summary**  
List comments on a model.

**Authentication**  
Not required for public models.

**Response**  
200 OK – paginated comment list.

## POST /v3/models/{uid}/comments

**Summary**  
Add a comment to a model.

**Authentication**  
Required – Token or OAuth.

**Request**

```http
POST https://api.sketchfab.com/v3/models/{uid}/comments
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

Body:

```json
{ "body": "Great model!" }
```

## DELETE /v3/models/{uid}/comments/{commentUid}

**Summary**  
Remove a comment.

**Authentication**  
Required – Token or OAuth.

## POST /v3/models/{uid}/like

**Summary**  
Like a model on behalf of the authenticated user.

**Authentication**  
Required – Token or OAuth.

## DELETE /v3/models/{uid}/like

**Summary**  
Remove the like.

**Authentication**  
Required – Token or OAuth.

## GET /v3/models/{uid}/download

**Summary**  
Download API entry point. Returns temporary URLs for glTF/GLB and USDZ archives.

**Authentication**  
Required – OAuth.

**Notes**

- URLs expire after a short time. Use them immediately to download the archive.

## PATCH /v3/models/{uid}/options

**Summary**  
Update viewer options (e.g., shading, physics, downloadability flags).

**Authentication**  
Required – Token or OAuth.

## POST /v3/models/{uid}/report

**Summary**  
Report abuse for a model on behalf of the authenticated user.

**Authentication**  
Required – Token or OAuth.

## GET /v3/models/{uid}/files

**Summary**  
List files associated with the model (original upload, generated glTF, etc.).

**Authentication**  
Required for private models.

## Notes

- Pagination uses common conventions (`count` up to 24, cursors included).
- Some filters or sort options may require specific permissions or plans.
- Behavior may change. Check official Sketchfab docs for the latest information.
