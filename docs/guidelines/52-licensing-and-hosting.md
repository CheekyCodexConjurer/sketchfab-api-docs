# Licensing and Hosting

Sketchfab supports multiple licenses, including Creative Commons variants. Use `/v3/licenses` to fetch supported slugs.

## Key practices

- Display license terms and attribution when users download or reuse models.
- Honor password-protected or private settings; do not bypass download restrictions.
- Store and display author attribution where required by the chosen license.
- For downloadable models, ensure `isInspectable` is enabled when uploading if inspection is needed.

## Notes

- Licensing rules may change. Always confirm requirements on the official Sketchfab developer site.
- Respect rate limits and hosting constraints; downloads use time-limited URLs from the Download API.
