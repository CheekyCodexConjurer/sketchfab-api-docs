# Viewer API – Core Functions and Events

After `client.init` succeeds, the `api` object exposes core lifecycle helpers and event hooks.

## Core functions

| Function | Description |
| --- | --- |
| `api.addEventListener(event, callback)` | Listen to events such as `viewerready`, `annotationFocus`, `animationReady`, `click`, `doubleClick`, `mousemove`, `touchstart`. |
| `api.load([callback])` | Preload the model before starting the viewer. |
| `api.start()` / `api.stop()` | Start or pause rendering. |
| `api.getScreenShot([x, y, width, height], mimeType, callback)` | Capture a screenshot. |
| `api.pickColor(x, y, callback)` | Return the color at a screen coordinate. |
| `api.getWorldToScreenCoordinates(vector3, callback)` | Convert world coordinates to screen coordinates. |

## Event basics

```javascript
api.addEventListener('viewerready', function() {
  console.log('Viewer ready');
});
```

- Events provide payloads specific to the event type (e.g., annotation data on `annotationFocus`).
- Use `viewerready` to trigger initial camera moves or UI setup.

## Notes

- See `examples/javascript/viewer-api-basic-embed.js` for a minimal event wiring example.
- Behavior and available events may evolve; check the official Sketchfab documentation for updates.
