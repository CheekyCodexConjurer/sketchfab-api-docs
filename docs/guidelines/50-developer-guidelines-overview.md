# Developer Guidelines Overview

These notes summarize Sketchfab’s recommendations for building exporters or integrations. This is community-maintained; verify against official guidance.

## Core principles

- Use the Data API v3 endpoints (`/v3/...`) for publishing and managing content.
- Prefer OAuth 2.0 for user-friendly authentication.
- When publishing models, include a `source` field identifying your application (name and URL).
- Let users set title, description, tags, categories, privacy, license, and passwords during upload.
- Respect Creative Commons and other licenses; show attribution when downloading or redistributing models.

## Importers and downloads

- If your app imports Sketchfab models, reuse available importer widgets or libraries rather than reimplementing the flow.
- Enforce license display and attribution in the UI when users download assets.

## Notes

- Behavior and best practices may evolve. Check the official Sketchfab developer site for updates.
