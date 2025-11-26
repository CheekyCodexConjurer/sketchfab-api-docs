# Search, Notifications, Comments, Likes

This file covers cross-cutting endpoints for discovery and user interactions.

## GET /v3/search

**Summary**  
Search models, collections, or users.

**Authentication**  
Not required for public data.

**Request**

```http
GET https://api.sketchfab.com/v3/search?type=models&q=robot&count=24
```

* **Query parameters**

| Name | Required | Description |
| --- | --- | --- |
| q | yes | Search term. |
| type | no | `models`, `collections`, or `users`. |
| categories | no | Filter by category slugs. |
| tags | no | Filter by tags. |
| sort_by | no | Sorting options such as `createdAt`, `viewCount`, `likedAt`. |
| count | no | Page size (max 24). |
| cursor | no | Pagination cursor. |

**Response**  
200 OK – paginated results.

## GET /v3/notifications

**Summary**  
Retrieve notifications for the authenticated user.

**Authentication**  
Required – Token or OAuth.

**Response**  
200 OK – paginated notification list.

## GET /v3/invitations

**Summary**  
List pending organization/team invitations for the authenticated user.

**Authentication**  
Required – Token or OAuth.

**Response**  
200 OK – paginated invitation list.

## GET /v3/comments/{uid}

**Summary**  
Fetch a specific comment by UID.

**Authentication**  
Not required for public comments.

**Response**  
200 OK – comment object.

## DELETE /v3/comments/{uid}

**Summary**  
Delete a comment (requires permission).

**Authentication**  
Required – Token or OAuth.

## GET /v3/likes/{uid}

**Summary**  
Check like status for a model relative to the authenticated user.

**Authentication**  
Not required for public check; some details may require auth.

**Response**  
200 OK – like object indicating state.

## Notes

- Pagination follows common conventions (`count` up to 24, cursors included).
- Behavior may change. Refer to official Sketchfab docs for authoritative details.
