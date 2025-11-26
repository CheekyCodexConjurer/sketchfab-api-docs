# Collections

Collections group models. Creation and updates require authentication.

## POST /v3/collections

**Summary**  
Create a new collection.

**Authentication**  
Required – Token or OAuth.

**Request**

```http
POST https://api.sketchfab.com/v3/collections
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

Body:

```json
{
  "name": "My Collection",
  "description": "Optional description",
  "isPrivate": false
}
```

**Response**  
201 Created – returns collection UID and `Location` header.

## GET /v3/collections/{uid}

**Summary**  
Retrieve collection details (name, description, models).

**Authentication**  
Not required for public collections.

**Response**  
200 OK – collection object.

## PATCH /v3/collections/{uid}

**Summary**  
Update collection metadata (name, description, privacy).

**Authentication**  
Required – Token or OAuth.

## DELETE /v3/collections/{uid}

**Summary**  
Delete a collection.

**Authentication**  
Required – Token or OAuth.

## GET /v3/collections/{uid}/models

**Summary**  
List models inside a collection.

**Authentication**  
Not required for public collections.

**Response**  
200 OK – paginated model list.

## POST /v3/collections/{uid}/models

**Summary**  
Add one or more models to a collection.

**Authentication**  
Required – Token or OAuth.

**Request**

```http
POST https://api.sketchfab.com/v3/collections/{uid}/models
Content-Type: application/json
```

Body:

```json
{ "models": ["MODEL_UID_1", "MODEL_UID_2"] }
```

## DELETE /v3/collections/{uid}/models/{modelUid}

**Summary**  
Remove a model from a collection.

**Authentication**  
Required – Token or OAuth.

## Notes

- Pagination follows common conventions (`count` up to 24, cursors included).
- Behavior may change. Refer to official Sketchfab docs for authoritative details.
