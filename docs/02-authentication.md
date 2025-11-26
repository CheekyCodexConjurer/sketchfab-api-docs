# Authentication

Sketchfab supports API tokens and OAuth 2.0 access tokens. Use the `Authorization` header on every authenticated request.

## API tokens

- Header format: `Authorization: Token <api_token>`.
- Works for many Data API endpoints (public and private resources as permitted by the token owner).

## OAuth 2.0

- Header format: `Authorization: Bearer <access_token>`.
- Supported flows:
  - **Authorization Code** – for server-side apps that can keep a client secret.
  - **Implicit** – for browser/mobile apps where the token is returned in the redirect fragment.
  - **Username/Password** – for environments without a browser. Use cautiously.
- Access tokens are valid for about one month. Renew with the refresh token or re-run the flow.
- Include the token on every authenticated request.

### Authorization Code (outline)

1. Redirect user to the Sketchfab authorization URL with your client ID and redirect URI.
2. User approves; Sketchfab redirects back with an authorization code.
3. Exchange the code (and client secret) for an access token and refresh token.

### Implicit (outline)

1. Redirect user to the Sketchfab authorization URL specifying `response_type=token`.
2. User approves; the access token is returned in the URL fragment of the redirect URI.

### Username/Password (outline)

1. Send credentials to the token endpoint with the `password` grant type.
2. Receive an access token (and possibly refresh token) to call the APIs.

### Example headers

```http
GET https://api.sketchfab.com/v3/models
Authorization: Token YOUR_API_TOKEN
```

```http
GET https://api.sketchfab.com/v3/me
Authorization: Bearer YOUR_OAUTH_ACCESS_TOKEN
```

## Password-protected models

For models protected by a password, include:

```
Authorization: Bearer <access_token>
x-skfb-model-pwd: <base64-encoded-password>
```

## Notes

- Behavior may change. Refer to the official Sketchfab documentation for the most up-to-date details.
- Use OAuth when acting on behalf of users (downloads, private resources).
- Rate limits may apply; exceeding them can return HTTP 429.
