# Contributing

Guidelines for contributors and future LLM agents maintaining these docs.

## Principles

- Keep files small, focused, and written in clear technical English.
- Follow the endpoint template in `docs/data-api/11-data-api-common-conventions.md`.
- Avoid duplication; place shared rules in a single file and cross-reference.
- Always mark the unofficial nature of this repo where relevant.
- Store runnable-looking code in `examples/` instead of embedding large blocks in docs.
- Use kebab-case filenames with numeric prefixes to preserve reading order.

## Process

- Validate behaviors against the official Sketchfab documentation before merging changes.
- Update related docs together to keep cross-links accurate.
- When adding examples, include minimal comments and keep dependencies light.

## LLM-specific notes

- Maintain predictable headings and section order for easier chunking.
- Prefer bullet lists and compact tables over long prose.
- Do not invent new endpoints or parameters; only document what is confirmed.
