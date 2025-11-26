# Exporter Workflows and UI

When building “Publish to Sketchfab” features in 3D tools, follow these practices:

- Integrate the Data API v3 upload endpoint (`POST /v3/models`) via OAuth 2.0 for better user experience.
- Include UI fields for title, description, tags, categories, privacy, password, license, and downloadability.
- Add a `source` indicator in uploads (application name and URL) so users know where the model came from.
- Clearly present Creative Commons or other license information before publishing and when enabling downloads.
- Provide feedback on upload progress and final status using the returned model UID and `Location` header.

If your tool also imports models, surface license terms prominently and reuse the importer widget where possible.
