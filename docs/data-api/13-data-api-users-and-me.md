# Users and Profile

These endpoints expose the authenticated user and public user profiles.

## GET /v3/me

**Summary**  
Return information about the authenticated user (UID, name, stats, subscriptions, upload allowances).

**Authentication**  
Required – Token or OAuth.

**Request**

```http
GET https://api.sketchfab.com/v3/me
Authorization: Bearer YOUR_ACCESS_TOKEN
```

**Response**  
200 OK – user object.

## PATCH /v3/me

**Summary**  
Update profile fields such as bio, city, country, social links.

**Authentication**  
Required – Token or OAuth.

**Request**

```http
PATCH https://api.sketchfab.com/v3/me
Content-Type: application/json
Authorization: Token YOUR_API_TOKEN
```

Example body:

```json
{
  "bio": "3D artist",
  "city": "Paris",
  "country": "FR",
  "website": "https://example.com"
}
```

## GET /v3/users/{userUid}

**Summary**  
Return public information about a specific user (name, avatar, model counts, followers).

**Authentication**  
Not required for public data.

**Request**

```http
GET https://api.sketchfab.com/v3/users/{userUid}
```

**Response**  
200 OK – public user object.

## GET /v3/users/{userUid}/models

**Summary**  
List published models from a user.

**Authentication**  
Not required for public models.

**Response**  
200 OK – paginated model list. Supports filtering and pagination parameters.

## GET /v3/users/{userUid}/likes

**Summary**  
List models liked by the user.

**Authentication**  
Not required for public information.

**Response**  
200 OK – paginated model list.

## GET /v3/users/{userUid}/followers

**Summary**  
List followers of the user.

**Authentication**  
Not required for public information.

**Response**  
200 OK – paginated user list.

## GET /v3/users/{userUid}/followings

**Summary**  
List users that the user follows.

**Authentication**  
Not required for public information.

**Response**  
200 OK – paginated user list.

## Notes

- Pagination follows common conventions (`count` up to 24, cursors provided).
- Behavior may change. Refer to the official Sketchfab documentation for authoritative details.
