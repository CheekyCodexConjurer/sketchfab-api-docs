// List public models with simple sorting and pagination.
const API_TOKEN = process.env.SKETCHFAB_API_TOKEN || 'YOUR_API_TOKEN';

async function listModels(cursor) {
  const url = new URL('https://api.sketchfab.com/v3/models');
  url.searchParams.set('sort_by', 'createdAt');
  url.searchParams.set('count', '24');
  if (cursor) url.searchParams.set('cursor', cursor);

  const res = await fetch(url, {
    headers: { Authorization: `Token ${API_TOKEN}` }
  });

  if (!res.ok) {
    console.error('Request failed', res.status, await res.text());
    return;
  }

  const data = await res.json();
  console.log('Models:', data.results.map((m) => m.name));
  console.log('Next cursor:', data.cursors?.next);
}

listModels().catch((err) => console.error(err));
