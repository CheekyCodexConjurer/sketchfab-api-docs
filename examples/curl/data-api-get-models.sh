#!/usr/bin/env bash
# List models with an API token.

API_TOKEN="${SKETCHFAB_API_TOKEN:-YOUR_API_TOKEN}"

curl "https://api.sketchfab.com/v3/models?sort_by=createdAt&count=24" \
  -H "Authorization: Token ${API_TOKEN}"
