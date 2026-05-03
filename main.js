/* ── main.js ── Portfolio logic & effects for Juan Camilo Velásquez ── */

// ── POPULATE FROM data.js ──────────────────────────────────────────────────
function populate() {
  document.getElementById('footerYear').textContent = new Date().getFullYear();
  renderProjects('all');
  renderInterests();
  renderClarice();
  renderBlog();
  renderAdvocacy();
  renderCommunities();
  initSpotify();
  initProjectFilter();
}

// ── ADVOCACY ──────────────────────────────────────────────────────────────
function renderAdvocacy() {
  const grid = document.getElementById('advocacyGrid');
  ADVOCACY.forEach(a => {
    const card = document.createElement('div');
    card.className = 'advocacy-card reveal';
    card.style.setProperty('--card-color', a.color);
    card.innerHTML = `
      <div class="advocacy-icon">${a.icon}</div>
      <h3>${a.title}</h3>
      <p>${a.body}</p>
      <a href="${a.link}" class="advocacy-cta" style="color:${a.color};border-color:${a.color}40" target="_blank" rel="noopener">
        ${a.cta} <i class="fas fa-arrow-right"></i>
      </a>
    `;
    grid.appendChild(card);
  });
}

// ── COMMUNITIES ───────────────────────────────────────────────────────────
function renderCommunities() {
  const grid = document.getElementById('communitiesGrid');
  COMMUNITIES.forEach(c => {
    const card = document.createElement('div');
    card.className = 'community-card reveal';
    card.style.borderColor = c.color + '30';
    card.innerHTML = `
      <div class="community-header">
        <span class="community-icon">${c.icon}</span>
        <span class="community-name" style="color:${c.color}">${c.name}</span>
        <span class="community-badge" style="background:${c.color}18;color:${c.color};border:1px solid ${c.color}40">${c.badge}</span>
      </div>
      <p class="community-desc">${c.description}</p>
      <a href="${c.link}" class="community-link" style="color:${c.color}" target="_blank" rel="noopener">
        Ver comunidad <i class="fas fa-arrow-right"></i>
      </a>
    `;
    grid.appendChild(card);
  });
}

// ── SPOTIFY ───────────────────────────────────────────────────────────────
function initSpotify() {
  document.getElementById('spotifyLabel').textContent = SPOTIFY.label;
  document.getElementById('spotifyDesc').textContent  = SPOTIFY.description;
  const frame = document.getElementById('spotifyFrame');
  if (frame) {
    frame.src = `https://open.spotify.com/embed/playlist/${SPOTIFY.playlistId}?utm_source=generator&theme=0`;
  }
}



// ── PROJECTS ──────────────────────────────────────────────────────────────
function renderProjects(filter) {
  const grid = document.getElementById('projectsGrid');
  grid.innerHTML = '';
  const list = filter === 'featured'
    ? PROJECTS.filter(p => p.featured)
    : PROJECTS;

  list.forEach(p => {
    const card = document.createElement('div');
    card.className = 'project-card reveal';
    if (p.featured) card.style.borderColor = 'rgba(88,166,255,.3)';
    const links = `
      <a href="${p.github}" class="project-link" target="_blank" rel="noopener">
        <i class="fab fa-github"></i> Código
      </a>
      ${p.demo ? `<a href="${p.demo}" class="project-link" target="_blank"><i class="fas fa-external-link-alt"></i> Demo</a>` : ''}
    `;
    card.innerHTML = `
      <div class="project-icon">${p.icon}</div>
      <h3>${p.title}${p.featured ? ' <span style="color:var(--accent);font-size:.7rem;font-family:var(--mono)">★ destacado</span>' : ''}</h3>
      <p>${p.description}</p>
      <div class="research-tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
      <div class="project-links">${links}</div>
    `;
    grid.appendChild(card);
  });
  initReveal();
}

function initProjectFilter() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProjects(btn.dataset.filter);
    });
  });
}

// ── INTERESTS ─────────────────────────────────────────────────────────────
function renderInterests() {
  const grid = document.getElementById('interestsGrid');
  INTERESTS.forEach(item => {
    const card = document.createElement('div');
    card.className = 'interest-card reveal';
    card.style.borderColor = item.color + '33';
    card.innerHTML = `
      <div class="interest-icon">${item.icon}</div>
      <div class="interest-body">
        <div class="interest-label" style="color:${item.color}">${item.label}</div>
        <div class="interest-desc">${item.description}</div>
      </div>
    `;
    grid.appendChild(card);
  });
}

// ── CLARICE ───────────────────────────────────────────────────────────────
function renderClarice() {
  const container = document.getElementById('clariceQuotes');
  CLARICE_QUOTES.forEach(q => {
    const card = document.createElement('div');
    card.className = 'clarice-quote-card reveal';
    card.innerHTML = `
      <p class="clarice-quote-text">"${q.text}"</p>
      <span class="clarice-quote-note">— ${q.note}</span>
    `;
    container.appendChild(card);
  });
}

// ── BLOG ──────────────────────────────────────────────────────────────────
const TYPE_META = {
  video: { icon: '▶', label: 'Video',    color: '#f78166' },
  paper: { icon: '📄', label: 'Paper',   color: '#58a6ff' },
  post:  { icon: '✍️', label: 'Post',    color: '#3fb950' },
  talk:  { icon: '🎙️', label: 'Talk',   color: '#ffa657' },
};
const LANG_FLAG = { 'es': '🇨🇴 ES', 'en': '🇺🇸 EN', 'es/en': '🌎 ES/EN' };

function renderBlog() {
  const grid = document.getElementById('blogGrid');
  BLOG_POSTS.forEach(post => {
    const card = document.createElement('div');
    card.className = 'blog-card rich-card reveal';
    const d   = new Date(post.date);
    const dStr = d.toLocaleDateString('es-CO', { year:'numeric', month:'long', day:'numeric' });
    const meta = TYPE_META[post.type] || TYPE_META.post;
    const flag = LANG_FLAG[post.lang] || '';

    // YouTube thumbnail if video
    const thumbHtml = post.videoId ? `
      <a href="${post.link}" target="_blank" rel="noopener" class="blog-thumb">
        <img src="https://img.youtube.com/vi/${post.videoId}/hqdefault.jpg"
             alt="${post.title}" loading="lazy" />
        <div class="thumb-play">▶</div>
      </a>` : '';

    // Paper PDF link
    const pdfHtml = post.paperLink ? `
      <a href="${post.paperLink}" target="_blank" rel="noopener" class="blog-pdf">
        <i class="fas fa-file-pdf"></i> PDF
      </a>` : '';

    card.innerHTML = `
      ${thumbHtml}
      <div class="blog-card-body">
        <div class="blog-meta-row">
          <span class="blog-type-badge" style="color:${meta.color};border-color:${meta.color}40;background:${meta.color}12">
            ${meta.icon} ${meta.label}
          </span>
          <span class="blog-lang">${flag}</span>
          <span class="blog-date">${dStr}</span>
        </div>
        <div class="blog-tag-line">${post.tag}</div>
        <h3><a href="${post.link}" target="_blank" rel="noopener">${post.title}</a></h3>
        <p>${post.excerpt}</p>
        <div class="blog-author">${post.author || ''}</div>
        <div class="blog-actions">
          <a href="${post.link}" class="blog-read" target="_blank" rel="noopener">
            ${post.type === 'video' ? '▶ Ver video' : 'Leer más'} <i class="fas fa-arrow-right"></i>
          </a>
          ${pdfHtml}
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}



// ── LOADER ─────────────────────────────────────────────────────────────────
const LOADER_ASCII = `
     ██╗██╗   ██╗ █████╗ ███╗  ██╗
     ██║██║   ██║██╔══██╗████╗ ██║
     ██║██║   ██║███████║██╔██╗██║
██   ██║╚██╗ ██╔╝██╔══██║██║╚████║
╚█████╔╝ ╚████╔╝ ██║  ██║██║ ╚███║
 ╚════╝   ╚═══╝  ╚═╝  ╚═╝╚═╝  ╚══╝
`.trim();

function initLoader() {
  document.getElementById('loaderAscii').textContent = LOADER_ASCII;
  setTimeout(() => {
    document.getElementById('loader').classList.add('hidden');
    startTypewriter();
    startWindowTyping();
  }, 1800);
}

// ── TYPEWRITER ─────────────────────────────────────────────────────────────
function startTypewriter() {
  const el = document.getElementById('typedGreeting');
  const text = 'echo "Hola, soy Juan Camilo 👋"';
  let i = 0;
  const iv = setInterval(() => {
    el.textContent = text.slice(0, ++i);
    if (i === text.length) clearInterval(iv);
  }, 42);
}

// ── TERMINAL WINDOW ────────────────────────────────────────────────────────
function startWindowTyping() {
  const body = document.getElementById('windowBody');
  const lines = [
    { text: '$ whoami', color: '#3fb950' },
    { text: 'Juan Camilo Velásquez · @mojojv', color: '#e6edf3' },
    { text: '', color: '' },
    { text: '$ cat intereses.txt', color: '#3fb950' },
    { text: '→ HealthTech · IA médica · Data Science', color: '#58a6ff' },
    { text: '→ Geometría · Literatura · Física', color: '#58a6ff' },
    { text: '', color: '' },
    { text: '$ git log --oneline -4', color: '#3fb950' },
    { text: 'a1b2c3  Lia for Women — oncology AI', color: '#e6edf3' },
    { text: 'd4e5f6  Centiali — urban mobility', color: '#e6edf3' },
    { text: 'g7h8i9  PulmoScan CNN', color: '#e6edf3' },
    { text: 'j0k1l2  VisionBeyondImages PyCon', color: '#e6edf3' },
    { text: '', color: '' },
    { text: '$ cat quote.txt', color: '#3fb950' },
    { text: '"Escribir es una maldición que salva."', color: '#c678dd' },
    { text: '  — Clarice Lispector', color: '#c678dd' },
    { text: '', color: '' },
    { text: '$ status --open-to-collab', color: '#3fb950' },
    { text: '● Abierto a colaboraciones 🇨🇴', color: '#3fb950' },
  ];

  let li = 0, ci = 0;
  body.textContent = '';

  function typeLine() {
    if (li >= lines.length) return;
    const { text, color } = lines[li];
    const span = document.createElement('span');
    span.style.color = color;
    body.appendChild(span);
    body.appendChild(document.createTextNode('\n'));

    if (!text) { li++; setTimeout(typeLine, 100); return; }
    const iv = setInterval(() => {
      span.textContent = text.slice(0, ++ci);
      if (ci === text.length) { clearInterval(iv); ci = 0; li++; setTimeout(typeLine, 180); }
    }, 22);
  }
  setTimeout(typeLine, 300);
}

// ── BACKGROUND CANVAS ──────────────────────────────────────────────────────
function initCanvas() {
  const canvas = document.getElementById('bgCanvas');
  const ctx = canvas.getContext('2d');
  const chars = '01アイウエオΔ∞∮∇∂λπΩ{}[]<>/';
  let cols, drops;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    cols = Math.floor(canvas.width / 20);
    drops = Array(cols).fill(1);
  }
  resize();
  window.addEventListener('resize', resize);

  function draw() {
    ctx.fillStyle = 'rgba(10,12,16,.08)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#58a6ff';
    ctx.font = '13px JetBrains Mono, monospace';
    drops.forEach((y, i) => {
      const c = chars[Math.floor(Math.random() * chars.length)];
      ctx.fillText(c, i * 20, y * 20);
      if (y * 20 > canvas.height && Math.random() > .975) drops[i] = 0;
      drops[i]++;
    });
  }
  setInterval(draw, 55);
}

// ── CURSOR ─────────────────────────────────────────────────────────────────
function initCursor() {
  const cur = document.getElementById('cursor');
  const fol = document.getElementById('cursorFollower');
  let fx = 0, fy = 0, mx = 0, my = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cur.style.left = mx + 'px'; cur.style.top = my + 'px';
  });

  (function loop() {
    fx += (mx - fx) * .12; fy += (my - fy) * .12;
    fol.style.left = fx + 'px'; fol.style.top = fy + 'px';
    requestAnimationFrame(loop);
  })();

  document.querySelectorAll('a, button, .btn, .skill-tag, .filter-btn, .interest-card').forEach(el => {
    el.addEventListener('mouseenter', () => cur.style.transform = 'translate(-50%,-50%) scale(2.5)');
    el.addEventListener('mouseleave', () => cur.style.transform = 'translate(-50%,-50%) scale(1)');
  });
}

// ── SCROLL REVEAL ──────────────────────────────────────────────────────────
function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: .1 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

// ── ACTIVE NAV ─────────────────────────────────────────────────────────────
function initScrollSpy() {
  const sections = document.querySelectorAll('.section');
  const links    = document.querySelectorAll('.nav-link');
  const nav      = document.getElementById('navbar');
  let lastY = 0;

  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    nav.style.transform = (y > lastY && y > 100) ? 'translateY(-100%)' : '';
    lastY = y;

    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      const bot = top + sec.offsetHeight;
      if (y >= top && y < bot) {
        links.forEach(l => l.classList.remove('active'));
        const active = document.querySelector(`#nav-${sec.id}`);
        if (active) active.classList.add('active');
      }
    });
  });
}

// ── MOBILE NAV ─────────────────────────────────────────────────────────────
function initMobileNav() {
  const toggle = document.getElementById('navToggle');
  const links  = document.getElementById('navLinks');
  toggle.addEventListener('click', () => links.classList.toggle('open'));
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));
}

// ── CONTACT FORM ───────────────────────────────────────────────────────────
function initForm() {
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = form.querySelector('button[type=submit]');
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando…';
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(form)
      });
      if (res.ok) {
        btn.innerHTML = '<i class="fas fa-check"></i> ¡Mensaje enviado!';
        btn.style.background = 'var(--accent2)';
        form.reset();
      } else throw new Error();
    } catch {
      btn.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Error — escríbeme directo';
      btn.style.background = 'var(--accent3)';
      btn.disabled = false;
    }
  });
}

// ── INIT ───────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  populate();
  initLoader();
  initCanvas();
  initCursor();
  initScrollSpy();
  initMobileNav();
  initForm();
  setTimeout(initReveal, 2200);
});
