# Categories, Tags, and Licenses

Use these endpoints to retrieve taxonomy and licensing metadata.

## GET /v3/categories

**Summary**  
List available categories (slug, name, description).

**Authentication**  
Not required.

**Request**

```http
GET https://api.sketchfab.com/v3/categories
```

**Response**  
200 OK – list of categories.

## GET /v3/tags

**Summary**  
List popular tags (slug, counts).

**Authentication**  
Not required.

**Request**

```http
GET https://api.sketchfab.com/v3/tags
```

**Response**  
200 OK – list of tags.

## GET /v3/licenses

**Summary**  
Return supported licenses (slug, name, URL).

**Authentication**  
Not required.

**Request**

```http
GET https://api.sketchfab.com/v3/licenses
```

**Response**  
200 OK – list of licenses.

## Notes

- These endpoints are read-only and unauthenticated.
- Use slugs returned here when tagging uploads or setting licenses.
- Behavior may change. Refer to official Sketchfab docs for the latest details.
