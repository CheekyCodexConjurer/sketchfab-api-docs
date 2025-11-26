// Minimal Data API upload example (Node 18+ with global fetch/FormData).
// Replace placeholders before running.
import fs from 'fs';

const API_TOKEN = process.env.SKETCHFAB_API_TOKEN || 'YOUR_API_TOKEN';
const MODEL_PATH = 'path/to/your/model.zip';

async function uploadModel() {
  const form = new FormData();
  form.append('modelFile', fs.createReadStream(MODEL_PATH));
  form.append('name', 'My Model');
  form.append('description', 'Uploaded via API');
  form.append('isPublished', true);

  const res = await fetch('https://api.sketchfab.com/v3/models', {
    method: 'POST',
    headers: { Authorization: `Token ${API_TOKEN}` },
    body: form
  });

  if (!res.ok) {
    console.error('Upload failed', res.status, await res.text());
    return;
  }

  const data = await res.json();
  console.log('Created model UID:', data.uid);
  console.log('Location header:', res.headers.get('location'));
}

uploadModel().catch((err) => console.error(err));
