const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

// Disable deprecated/removed defaults to avoid runtime warnings from marked v5+
marked.setOptions({
  mangle: false,
  headerIds: false
});

const CONTENT_DIR = path.join(__dirname, '..', 'content');
const OUT_DIR = path.join(__dirname, '..', 'dist');

function ensureOut() {
  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });
}

function getPosts() {
  const postsDir = path.join(CONTENT_DIR, 'posts');
  if (!fs.existsSync(postsDir)) return [];
  return fs.readdirSync(postsDir)
    .filter(f => f.endsWith('.md'))
    .map(f => {
      const file = path.join(postsDir, f);
      let raw = fs.readFileSync(file, 'utf8');
      raw = raw.replace(/!\[\[([^\]]+)\]\]/g, (match, p1) => `![${p1}](../../public/public/${encodeURIComponent(p1)})`);
      const lines = raw.split(/\r?\n/);
      const titleLine = lines.find(l => l.trim().startsWith('# ')) || '';
      const title = titleLine.replace(/^#\s+/, '') || f.replace('.md','');
      const html = marked.parse(raw);
      // excerpt: first paragraph
      const match = raw.split(/\r?\n\r?\n/).find(p => p.trim().length > 0) || '';
      const excerpt = marked.parse(match).replace(/<(\/)?p>/g,'').slice(0,250);
      return { slug: f.replace('.md',''), title, html, excerpt };
    })
    .sort((a,b) => a.title.localeCompare(b.title));
}

function renderHead(title=''){
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>${title}</title>
</script>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="https://rsms.me/inter/inter.css">
  <style>
    body{
      background:#0b0b0b;
      color:#e6e6e6;
      font-family: 'Inter', ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    }
  </style>
</head>
<body class="antialiased">
`;
}

function renderFooter(){
  return `
  <footer class="mt-12 py-6 text-center text-sm text-gray-400">&copy; ${new Date().getFullYear()} Evan Quah</footer>
</body>
</html>`;
}

function buildIndex(posts){
  const head = renderHead('Home - Evan Quah');
  const list = posts.map(p => `
    <article class="mb-8 border-b border-gray-800 pb-6">
      <h2 class="text-2xl text-white "><a class="hover:underline" href="posts/${p.slug}.html">${p.title}</a></h2>
      <p class="text-sm text-gray-400 mt-2">${p.excerpt}</p>
      <a class="mt-3 inline-block text-purple-400" href="posts/${p.slug}.html">Read →</a>
    </article>
  `).join('\n');

  const html = `${head}
  <div class="max-w-6xl mx-auto px-6 lg:px-0 py-12">
    <header class="flex items-center justify-between mb-8">
      <h1 class="text-3xl font-bold">Evan Quah</h1>
    </header>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <main class="lg:col-span-2">
        ${list}
      </main>
      <aside class="lg:col-span-1 bg-gray-900 p-6 rounded">
        <h3 class="text-lg  mb-3">Evan Quah</h3>
        <p class="text-sm text-gray-400 mb-4">SOC, DFIR, Threat Hunting and Big Nerd.</p>
        <div class="space-y-2 text-sm">
          <a class="block text-gray-300" href="https://github.com/Nagamakii">GitHub</a>
          <a class="block text-gray-300" href="https://www.linkedin.com/in/evanquah/">LinkedIn</a>
        </div>
      </aside>
    </div>
  </div>
  ${renderFooter()}`;

  fs.writeFileSync(path.join(OUT_DIR,'index.html'), html, 'utf8');
}

function buildPost(post){
  const head = renderHead(post.title);
  const html = `${head}
  <div class="max-w-4xl mx-auto px-6 py-12">
    <a class="text-sm text-gray-400 mb-4 inline-block" href="../index.html">← Back</a>
    <article>
      <h1 class="text-3xl  text-white mb-4">${post.title}</h1>
      <div class="prose prose-invert">${post.html}</div>
    </article>
  </div>
  ${renderFooter()}`;

  const outDir = path.join(OUT_DIR, 'posts');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, post.slug + '.html'), html, 'utf8');
}

function buildAll(){
  ensureOut();
  const posts = getPosts();
  const postSlugs = posts.map(p => p.slug);
  const postsDir = path.join(OUT_DIR, 'posts');
  if (fs.existsSync(postsDir)) {
    const existingFiles = fs.readdirSync(postsDir)
      .filter(f => f.endsWith('.html'))
      .map(f => f.replace('.html', ''));
    existingFiles.forEach(slug => {
      if (!postSlugs.includes(slug)) {
        fs.unlinkSync(path.join(postsDir, slug + '.html'));
      }
    });
  }
  buildIndex(posts);
  posts.forEach(buildPost);
  console.log('Site built to dist/ (open dist/index.html)');
}

buildAll();
