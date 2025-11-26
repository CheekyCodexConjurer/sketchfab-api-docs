// Minimal Viewer API embed example for browser usage.
// Include the viewer script in your HTML:
// <script src="https://static.sketchfab.com/api/sketchfab-viewer-1.12.1.js"></script>
// <iframe src="" id="api-frame" allow="autoplay; fullscreen; xr-spatial-tracking"></iframe>

const iframe = document.getElementById('api-frame');
const client = new Sketchfab('1.12.1', iframe);

client.init('MODEL_UID', {
  success: function(api) {
    api.addEventListener('viewerready', function() {
      console.log('Viewer ready');
      api.start();
    });
  },
  error: function() {
    console.error('Sketchfab API error');
  },
  autostart: 1,
  autospin: 0.2
});
