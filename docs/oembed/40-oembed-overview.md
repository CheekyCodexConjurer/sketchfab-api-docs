# oEmbed Overview

Sketchfab supports oEmbed for lightweight embedding of models or collections.

**Endpoint**

```
GET https://sketchfab.com/oembed
```

## Parameters

| Name | Required | Description |
| --- | --- | --- |
| url | yes | URL of the model page (`https://sketchfab.com/models/{uid}`) or a collection. |
| maxwidth | no | Maximum width of the returned embed. |
| maxheight | no | Maximum height. |

The viewer keeps a 16:9 aspect ratio.

## Response (model example)

```json
{
  "provider_name": "Sketchfab",
  "title": "Model Name",
  "author_name": "Author",
  "html": "<iframe width=\"640\" height=\"360\" src=\"https://sketchfab.com/models/{uid}/embed\" frameborder=\"0\" allowfullscreen mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\"></iframe>",
  "thumbnail_url": "https://media.sketchfab.com/.../thumb.jpg"
}
```

## Response (collection example)

Pass the collection URL in `url` to embed a playlist; the response returns an embed iframe for the collection.

## Notes

- Behavior may change. Refer to the official Sketchfab documentation for the latest oEmbed details.
