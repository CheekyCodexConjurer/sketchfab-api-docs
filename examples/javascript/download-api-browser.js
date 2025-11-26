// Browser-side Download API example.
// Requires an OAuth access token and a model UID that is downloadable.

const ACCESS_TOKEN = 'YOUR_OAUTH_ACCESS_TOKEN';
const MODEL_UID = 'MODEL_UID';

async function fetchDownload() {
  const res = await fetch(`https://api.sketchfab.com/v3/models/${MODEL_UID}/download`, {
    headers: { Authorization: `Bearer ${ACCESS_TOKEN}` }
  });

  if (!res.ok) {
    console.error('Download auth failed', res.status, await res.text());
    return;
  }

  const data = await res.json();
  const gltfUrl = data.gltf?.url;
  if (!gltfUrl) {
    console.error('No glTF URL returned');
    return;
  }

  const zipRes = await fetch(gltfUrl);
  const blob = await zipRes.blob();
  console.log(`Downloaded glTF ZIP (${blob.size} bytes).`);

  // TODO: unzip with a library like zip.js and load via your glTF pipeline (e.g., three.js).
}

fetchDownload().catch((err) => console.error(err));
