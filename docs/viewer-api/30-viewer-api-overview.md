# Viewer API Overview

The Viewer API is a JavaScript library (`sketchfab-viewer-<version>.js`) that embeds and controls the Sketchfab 3D viewer inside an iframe.

## Basic setup

1. Include the library:

```html
<script src="https://static.sketchfab.com/api/sketchfab-viewer-1.12.1.js"></script>
```

2. Add an empty iframe:

```html
<iframe src="" id="api-frame" allow="autoplay; fullscreen; xr-spatial-tracking"></iframe>
```

3. Instantiate the client:

```javascript
var iframe = document.getElementById('api-frame');
var client = new Sketchfab('1.12.1', iframe);
```

4. Initialize a model:

```javascript
client.init('MODEL_UID', {
  success: onSuccess,
  error: onError
});
```

The `success` callback receives an `api` object for viewer control.

## What you can control

- Initialization options and URL parameters.
- Camera position, orientation, field of view.
- Scene graph nodes (visibility, transforms).
- Materials, animations, post-processing filters.
- Events (viewerready, annotationFocus, click, mousemove, etc.).

## Where to go next

- Initialization options: `docs/viewer-api/31-viewer-api-initialization-and-options.md`
- Core functions and events: `docs/viewer-api/32-viewer-api-core-functions-and-events.md`
- Camera and controls: `docs/viewer-api/33-viewer-api-camera-and-controls.md`
- Scene, materials, animations, and filters: `docs/viewer-api/34-viewer-api-materials-animations-etc.md`
- Example embed: `examples/javascript/viewer-api-basic-embed.js`

Behavior may change. Refer to the official Sketchfab documentation for the most current details.
