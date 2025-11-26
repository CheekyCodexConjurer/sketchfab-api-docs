# Organizations

Organization endpoints use the `orgUid` (UID or name prefixed with `@`). Authentication is required (API token or OAuth).

## GET /v3/orgs/{orgUid}

**Summary**  
Retrieve organization details (profile, links, stats).

**Authentication**  
Token or OAuth.

**Request**

```http
GET https://api.sketchfab.com/v3/orgs/{orgUid}
Authorization: Token YOUR_API_TOKEN
```

**Response**  
200 OK – JSON organization object.

**Notes**

- Supports UID or display name prefixed by `@`.

## PATCH /v3/orgs/{orgUid}

**Summary**  
Update organization profile fields (bio, city, country, display name, social links, website, slogan).

**Authentication**  
Token or OAuth.

**Request**

```http
PATCH https://api.sketchfab.com/v3/orgs/{orgUid}
Authorization: Bearer YOUR_ACCESS_TOKEN
Content-Type: application/json
```

Example body:

```json
{
  "displayName": "Example Org",
  "bio": "3D team",
  "city": "Paris",
  "country": "FR",
  "website": "https://example.com"
}
```

**Response**  
200 OK – updated organization object.

## GET /v3/orgs/{orgUid}/members

**Summary**  
List members of the organization.

**Authentication**  
Token or OAuth.

**Request**

```http
GET https://api.sketchfab.com/v3/orgs/{orgUid}/members
```

**Response**  
200 OK – paginated member list with cursors.

## GET /v3/orgs/{orgUid}/models

**Summary**  
List models belonging to the organization.

**Authentication**  
Token or OAuth.

**Response**  
200 OK – paginated model list.

## GET /v3/orgs/{orgUid}/collections

**Summary**  
List collections owned by the organization.

**Authentication**  
Token or OAuth.

**Response**  
200 OK – paginated collection list.

## Notes

- Pagination uses the common conventions (`count` up to 24, `next`, `previous`, `cursors`).
- Behavior may change. Refer to the official Sketchfab documentation for the latest details.
