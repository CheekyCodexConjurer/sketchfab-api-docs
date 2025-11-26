# Viewer API – Initialization and Options

Initialize the viewer by passing a model UID and options to `client.init`. Most URL parameters can also be provided as options.

## Initialization pattern

```javascript
var iframe = document.getElementById('api-frame');
var client = new Sketchfab('1.12.1', iframe);

client.init('MODEL_UID', {
  success: function(api) {
    api.start();
  },
  error: function() {
    console.error('Viewer error');
  },
  autostart: 1
});
```

## Common options

| Option | Default | Description |
| --- | --- | --- |
| camera | 1 | Show initial camera animation; set to 0 to skip. |
| autostart | 0 | Auto-start loading; useful when only one model is on the page. |
| autospin | 0 | Rotate the model after loading; negative values invert direction. |
| annotation | off | Jump directly to a specific annotation (1–100). |
| annotation_cycle | off | Duration (seconds) per annotation in Autopilot. |
| annotations_visible | 1 | Show or hide all annotations. |
| annotation_tooltip_visible | 1 | Show or hide annotation tooltips. |
| dnt | 0 | Disable audience/analytics tracking. |
| navigation | orbit | Set to `fps` to start in first-person mode. |
| preload | 0 | Preload all resources before displaying; increases load time and may impact mobile devices. |
| max_texture_size | 8192 | Clamp texture resolution (power of two). |
| fps_speed | 25 | First-person navigation speed. |

## Passing parameters via URL

Any supported URL parameter (e.g., `autospin`, `autostart`) can be placed either in the iframe `src` or in the `init` options object. Keep usage consistent within your application.

## Notes

- The `success` callback provides the `api` object for further control.
- Behavior may change. Consult official Sketchfab docs for the latest supported options.
