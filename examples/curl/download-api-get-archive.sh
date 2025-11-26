#!/usr/bin/env bash
# Retrieve a temporary download URL for a model (OAuth required).

ACCESS_TOKEN="${SKETCHFAB_ACCESS_TOKEN:-YOUR_OAUTH_ACCESS_TOKEN}"
MODEL_UID="${MODEL_UID:-MODEL_UID}"

# Step 1: request download URLs (gltf.url, usdz.url)
curl "https://api.sketchfab.com/v3/models/${MODEL_UID}/download" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"

# Step 2: copy the returned gltf.url or usdz.url and download it:
# curl -L "https://.../download?token=..." -o model.zip
