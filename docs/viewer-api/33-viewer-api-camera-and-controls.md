# Viewer API – Camera and Controls

Use these methods to inspect or move the camera programmatically.

## Camera positioning

| Function | Description |
| --- | --- |
| `api.getCameraLookAt(callback)` | Returns camera position and target. |
| `api.setCameraLookAt(position, target, duration)` | Moves the camera to a position and target over the given duration. |
| `api.getCameraPosition(callback)` / `api.setCameraPosition(position, duration)` | Get or set camera position. |
| `api.getCameraOrientation(callback)` / `api.setCameraOrientation(quaternion, duration)` | Get or set camera orientation. |
| `api.resetCamera(duration)` | Reset camera to the initial state. |
| `api.getFieldOfView(callback)` / `api.setFieldOfView(fov)` | Get or set field of view. |

## Navigation modes

- `navigation: 'orbit'` (default) or `navigation: 'fps'` can be passed during initialization.
- `fps_speed` controls first-person speed (see initialization options).

## Notes

- Use `viewerready` before issuing camera commands.
- Behavior may change; check the official Sketchfab documentation for up-to-date camera options.
