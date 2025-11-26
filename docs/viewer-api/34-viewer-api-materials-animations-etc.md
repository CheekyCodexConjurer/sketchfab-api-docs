# Viewer API – Scene, Materials, Animations, Filters

These methods control scene graph nodes, materials, animations, post-processing, and lighting.

## Scene graph and objects

| Function | Description |
| --- | --- |
| `api.getSceneGraph(callback)` | Returns the node hierarchy. |
| `api.getNodeMap(callback)` | Returns a map of all nodes. |
| `api.getNodeBoundingBox(nodeId, callback)` | Returns a node’s bounding box. |
| `api.hide(nodeIds)` / `api.show(nodeIds)` | Hide or show nodes (single ID or array). |
| `api.isVisible(nodeId, callback)` | Check node visibility. |
| `api.setScale(nodeId, vector3)` | Set node scale. |
| `api.setPosition(nodeId, vector3)` / `api.setRotation(nodeId, quaternion)` | Set position or rotation. |

## Materials and textures

| Function | Description |
| --- | --- |
| `api.getMaterialList(callback)` | List materials in the model. |
| `api.getMaterial(materialId, callback)` | Retrieve a material. |
| `api.updateMaterial(materialId, data)` | Update parameters (colors, textures, metalness, roughness). |
| `api.createMaterial(materialData, callback)` | Create a custom material and get its ID. |
| `api.deleteMaterial(materialId)` | Remove a custom material. |

## Animations

| Function | Description |
| --- | --- |
| `api.getAnimations(callback)` | List animations. |
| `api.playAnimation(id, loop, autoplay, duration)` | Play an animation. |
| `api.pauseAnimation()` / `api.stopAnimation()` | Pause or stop playback. |
| `api.setCurrentAnimationByUID(uid)` | Set the active animation. |

## Post-processing and filters

| Function | Description |
| --- | --- |
| `api.getPostProcessingFilters(callback)` | List available filters (Bloom, DOF, Vignette, etc.). |
| `api.getFilter(name, callback)` / `api.setFilter(name, params)` | Read or set filter parameters. |
| `api.setPostProcessingFilter(name, enabled)` | Toggle a filter. |

## Lighting and environment

| Function | Description |
| --- | --- |
| `api.getLightList(callback)` | List lights in the scene. |
| `api.setLight(lightId, params)` | Update light properties (type, color, intensity). |
| `api.setBackground(color_or_texture)` | Change the background color or HDR image. |
| `api.setEnvironment(mapUid)` | Set a custom HDR environment map. |

## Notes

- Use `viewerready` before calling these functions.
- See `examples/javascript/viewer-api-basic-embed.js` for basic wiring.
- Behavior may change; consult official Sketchfab docs for the latest capabilities.
