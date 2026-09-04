// Lokale Vorschau des statischen Exports aus out/.
//   node vorschau.mjs        (Port 3456, oder PORT aus der Umgebung)
// Kein Formular-Backend: /api/... antwortet mit 204.
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { join, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const OUT = join(fileURLToPath(new URL('./', import.meta.url)), 'out');
const TYPEN = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.woff2': 'font/woff2',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.ico': 'image/x-icon',
};

const PORT = Number(process.env.PORT) || 3456;

createServer(async (req, res) => {
  let pfad = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  if (pfad.startsWith('/api/')) { res.writeHead(204); return res.end(); }
  if (pfad.endsWith('/')) pfad += 'index.html';
  // Next legt Routen als seite.html ab, nicht als seite/index.html. Ohne Endung
  // werden deshalb drei Schreibweisen der Reihe nach versucht.
  const kandidaten = extname(pfad)
    ? [pfad]
    : [pfad + '.html', pfad + '/index.html', pfad];
  let datei = null; let inhalt = null;
  try {
    for (const k of kandidaten) {
      try { inhalt = await readFile(join(OUT, k)); datei = join(OUT, k); break; } catch { /* naechster */ }
    }
    if (!inhalt) throw new Error('nicht gefunden');
    res.writeHead(200, { 'Content-Type': TYPEN[extname(datei).toLowerCase()] || 'application/octet-stream' });
    res.end(inhalt);
  } catch {
    try {
      const vierNullVier = await readFile(join(OUT, '404.html'));
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(vierNullVier);
    } catch {
      res.writeHead(404); res.end('nicht gefunden');
    }
  }
}).listen(PORT, () => console.log(`Vorschau: http://localhost:${PORT}`));
