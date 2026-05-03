# Portfolio — Tu sitio personal

## 🚀 Cómo personalizar

Edita **`data.js`** — es el único archivo que necesitas tocar:

```js
const SITE = {
  name:        "Tu Nombre Completo",
  firstName:   "Tu",
  lastName:    "Apellido",
  initials:    "TN",
  role:        "Tu rol profesional",
  location:    "Tu Ciudad, País",
  affiliation: "Tu Universidad / Lab",
  email:       "tu@email.com",
  linkedin:    "https://linkedin.com/in/TU_LINKEDIN",
  github:      "https://github.com/TU_GITHUB",
  formspree:   "https://formspree.io/f/TU_FORM_ID",  // gratis en formspree.io
};
```

Luego edita los arrays `RESEARCH`, `PROJECTS`, y `BLOG_POSTS` con tus propios datos.

---

## 📁 Estructura de archivos

```
portfolio/
├── index.html   → estructura HTML
├── style.css    → diseño completo (dark mode, animaciones)
├── main.js      → lógica, efectos, terminal, matrix rain
├── data.js      → ✏️  TUS DATOS (edita solo este)
└── README.md    → esta guía
```

---

## 🌐 Despliegue

### Opción A — GitHub Pages (gratis, recomendado)
1. Crea un repo en GitHub: `tu-usuario.github.io`
2. Sube los 4 archivos al repo
3. Ve a **Settings → Pages → Source: main branch**
4. Tu sitio estará en `https://tu-usuario.github.io` en ~2 min

### Opción B — Netlify (drag & drop)
1. Ve a [netlify.com](https://netlify.com) → Log in
2. Arrastra la carpeta `portfolio/` al dashboard
3. ¡Listo! Obtienes URL gratis tipo `tu-nombre.netlify.app`

### Opción C — Vercel
```bash
npm i -g vercel
vercel --cwd portfolio/
```

---

## ✉️ Formulario de contacto
1. Crea cuenta en [formspree.io](https://formspree.io) (gratis)
2. Crea un nuevo formulario y copia el endpoint
3. Pégalo en `data.js` → `formspree: "https://formspree.io/f/XXXX"`

---

## 🎨 Personalizar colores
En `style.css`, cambia las variables CSS:
```css
:root {
  --accent:  #58a6ff;  /* azul principal */
  --accent2: #3fb950;  /* verde terminal */
  --accent3: #f78166;  /* naranja blog */
}
```
