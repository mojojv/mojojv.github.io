// ── DATA.JS ── Edita este archivo para personalizar tu sitio
// 🎵 Spotify: pon tu Playlist ID en SPOTIFY.playlistId
// 🐍 Python Medellín: @pythonmedellin
// GitHub: mojojv | Instagram: juancavelasqup

const SITE = {
  name:        "Juan Camilo Velásquez",
  firstName:   "Juan Camilo",
  lastName:    "Velásquez",
  initials:    "JV",
  role:        "Data Scientist · HealthTech · AI",
  tagline:     "Apasionado por la intersección entre datos, salud y matemáticas. Creo que la ciencia y el arte comparten la misma curiosidad.",
  location:    "Medellín, Colombia",
  affiliation: "Data Science",
  email:       "juancavelasqup@gmail.com",
  linkedin:    "https://linkedin.com/in/juan-camilo-velásquez-pérez",
  github:      "https://github.com/mojojv",
  instagram:   "https://www.instagram.com/juancavelasqup/",
  stackoverflow: "https://stackoverflow.com/users/JuanCamilo13915",
  twitter:     "https://x.com/JuanCamilo13915",
  githubAvatar:"https://avatars.githubusercontent.com/u/108507422?v=4",
  formspree:   "https://formspree.io/f/YOUR_FORM_ID",
};

const PROJECTS = [
  {
    icon: "🧬",
    title: "Lia for Women",
    description: "Sistema de soporte con IA para mujeres en diagnóstico oncológico. Combina asistencia clínica y psicosocial mediante modelos inteligentes e interfaces interactivas.",
    tags: ["Python", "AI", "HealthTech", "LLM"],
    github: "https://github.com/mojojv/Lia-for-Women-",
    demo: null,
    featured: true
  },
  {
    icon: "🏙️",
    title: "Centiali AI",
    description: "Dashboard centralizado de analítica y soporte a decisiones para la Alcaldía de Medellín, integrando datasets de transporte y movilidad urbana.",
    tags: ["Python", "Data Engineering", "Streamlit"],
    github: "https://github.com/mojojv/Centiali-AI",
    demo: null,
    featured: true
  },
  {
    icon: "🫁",
    title: "PulmoScan CNN",
    description: "Sistema de diagnóstico cardiopulmonar con Redes Neuronales Convolucionales para análisis de imágenes médicas como radiografías de tórax.",
    tags: ["Python", "CNN", "Medical Imaging", "Deep Learning"],
    github: "https://github.com/mojojv/PulmoScan-CNN",
    demo: null,
    featured: true
  },
  {
    icon: "🔬",
    title: "Oncological ASTRAI",
    description: "Modelo multimodal de ML para detección de enfermedades oncológicas a partir de imágenes médicas DICOM y datos clínicos.",
    tags: ["Python", "Multimodal ML", "DICOM"],
    github: "https://github.com/mojojv/repositorio-central-proyecto-Oncol-gico-Astrai-Eafit-",
    demo: null,
    featured: false
  },
  {
    icon: "🎓",
    title: "OpitLearn",
    description: "Infraestructura integral de datos académicos para gestión institucional y acompañamiento estudiantil con analítica avanzada y machine learning.",
    tags: ["Python", "MLOps", "Analytics"],
    github: "https://github.com/mojojv/OpitLearn-",
    demo: null,
    featured: false
  },
  {
    icon: "👁️",
    title: "VisionBeyondImages",
    description: "Proyecto para PyCon 2026: visión por computadora más allá de los píxeles — percepción, interpretación y razonamiento visual en AI.",
    tags: ["Python", "Computer Vision", "PyCon"],
    github: "https://github.com/mojojv/VisionBeyondImages",
    demo: null,
    featured: false
  }
];

// ── BLOG_POSTS ── Artículos reales con links, videos y papers
// lang: "es" | "en" | "es/en"
// type: "video" | "paper" | "post" | "talk"
const BLOG_POSTS = [
  {
    date: "2025-08-03",
    lang: "en",
    type: "video",
    tag: "Brain Imaging · Python",
    title: "Big Brains, Small Targets: Whole-Brain Image Analysis with Python",
    excerpt: "Ishrat Zaman (PyCon AU 2025) muestra cómo identificar y contar neuronas individuales en regiones cerebrales diminutas usando Python. Fascinante intersección entre neurociencia computacional y análisis reproducible de imágenes.",
    link: "https://www.youtube.com/watch?v=ccLnpjCD5k4",
    videoId: "ccLnpjCD5k4",
    paperLink: null,
    author: "Ishrat Zaman — PyCon AU 2025"
  },
  {
    date: "2026-04-01",
    lang: "en",
    type: "paper",
    tag: "Medical AI · Imaging",
    title: "A Survey on Deep Learning for Medical Image Analysis",
    excerpt: "Comprehensive review of DL applications in medical imaging: from CNNs for radiology to transformer-based segmentation. Essential reading for anyone building clinical AI systems.",
    link: "https://arxiv.org/abs/1702.05747",
    videoId: null,
    paperLink: "https://arxiv.org/pdf/1702.05747",
    author: "Litjens et al. — Medical Image Analysis, Elsevier"
  },
  {
    date: "2026-03-15",
    lang: "es",
    type: "talk",
    tag: "Python Medellín · Community",
    title: "¿Por qué Python en HealthTech? — Charla en Python Medellín",
    excerpt: "Cómo Python se ha convertido en el lenguaje de facto de la IA médica: ecosistema, librerías clave (nibabel, pydicom, monai) y proyectos open-source que están cambiando el diagnóstico clínico.",
    link: "https://www.meetup.com/python-medellin/",
    videoId: null,
    paperLink: null,
    author: "Juan Camilo Velásquez — Python Medellín"
  },
  {
    date: "2026-02-10",
    lang: "en",
    type: "paper",
    tag: "Geometry · Mathematics",
    title: "Teichmüller Space and Quasiconformal Maps in Shape Analysis",
    excerpt: "Mathematical foundations of Teichmüller theory applied to shape analysis and medical morphology. The paper establishes rigorous connections between Beltrami differentials and biological surface deformations.",
    link: "https://arxiv.org/abs/1303.0330",
    videoId: null,
    paperLink: "https://arxiv.org/pdf/1303.0330",
    author: "Gu & Yau — Journal of Differential Geometry"
  },
  {
    date: "2026-01-20",
    lang: "es/en",
    type: "post",
    tag: "Open Source · IA",
    title: "MONAI: El framework de IA médica que todo Data Scientist debería conocer",
    excerpt: "MONAI (Medical Open Network for AI) es el PyTorch de la medicina. Te explico cómo usarlo para construir pipelines de segmentación y clasificación de imágenes médicas desde cero.",
    link: "https://monai.io/",
    videoId: null,
    paperLink: "https://arxiv.org/abs/2211.02701",
    author: "Cardoso et al. — Project MONAI · NumFOCUS"
  },
  {
    date: "2025-11-05",
    lang: "en",
    type: "video",
    tag: "LLMs · HealthTech",
    title: "Med-PaLM 2: Towards Expert-Level Medical Question Answering",
    excerpt: "Google's Med-PaLM 2 alcanza nivel de médico experto en el benchmark MedQA. Analizamos sus implicaciones éticas, capacidades y limitaciones para el despliegue en sistemas de salud reales.",
    link: "https://www.youtube.com/watch?v=yAIc8zW0XY4",
    videoId: "yAIc8zW0XY4",
    paperLink: "https://arxiv.org/abs/2305.09617",
    author: "Singhal et al. — Google Research"
  }
];

// ── INTERESTS ── Lo que me apasiona más allá del código
const INTERESTS = [
  {
    icon: "📚",
    label: "Literatura",
    description: "Clarice Lispector, Borges, García Márquez",
    color: "#c678dd"
  },
  {
    icon: "🧮",
    label: "Matemáticas",
    description: "Geometría diferencial, topología, teoría de caos",
    color: "#58a6ff"
  },
  {
    icon: "🏥",
    label: "HealthTech",
    description: "AI aplicada a la medicina y diagnóstico clínico",
    color: "#3fb950"
  },
  {
    icon: "🎵",
    label: "Música",
    description: "Jazz, música clásica, electrónica ambient",
    color: "#f78166"
  },
  {
    icon: "🌎",
    label: "Colombia",
    description: "Orgulloso de Medellín y su ecosistema tecnológico",
    color: "#ffa657"
  },
  {
    icon: "🔭",
    label: "Ciencia",
    description: "Física, cosmología, biología computacional",
    color: "#79c0ff"
  }
];

// ── SPOTIFY ── Widget de lo que estás escuchando
// Para obtener tu Playlist ID: abre Spotify → tu playlist → Share → Copy link
// El link es: https://open.spotify.com/playlist/ESTE_ES_EL_ID
const SPOTIFY = {
  playlistId: "37i9dQZF1DXcBWIGoYBM5M", // 🎵 Cambia por tu playlist favorita
  label:      "Lo que suena mientras programo",
  description: "Ambient, jazz, electrónica — el soundtrack del código"
};

// ── COMMUNITIES ── Comunidades tech que apoyas y organizas
const COMMUNITIES = [
  {
    name:        "Python Medellín",
    role:        "Organizador",
    icon:        "🐍",
    description: "Comunidad de Python más activa de Medellín. Meetups mensuales, charlas técnicas y espacios de aprendizaje para todos los niveles. Únete y construye con nosotros.",
    link:        "https://www.meetup.com/python-medellin/",
    color:       "#3fb950",
    badge:       "Co-organizador"
  },
  {
    name:        "PyData Colombia",
    role:        "Miembro activo",
    icon:        "📊",
    description: "Comunidad hispana de ciencia de datos, machine learning y herramientas open-source del ecosistema Python. Eventos, tutoriales y proyectos colaborativos.",
    link:        "https://pydata.org/",
    color:       "#58a6ff",
    badge:       "Colaborador"
  },
  {
    name:        "PyCon Colombia",
    role:        "Speaker / Asistente",
    icon:        "🎙️",
    description: "La conferencia nacional de Python en Colombia. Espacio para compartir conocimiento, hacer networking y empujar el ecosistema tech latinoamericano.",
    link:        "https://www.pycon.co/",
    color:       "#ffa657",
    badge:       "Speaker"
  },
  {
    name:        "LatinR",
    role:        "Participante",
    icon:        "📈",
    description: "Conferencia latinoamericana sobre el uso de R en investigación y ciencia de datos. Puente entre estadística, ciencia y comunidad.",
    link:        "https://latin-r.com/",
    color:       "#c678dd",
    badge:       "Comunidad"
  }
];

// ── ADVOCACY POSTS ── Mensajes sobre comunidad y desarrollo
const ADVOCACY = [
  {
    icon: "🐍",
    title: "¿Por qué Python Medellín importa?",
    body: "Las comunidades técnicas locales son los aceleradores más poderosos del ecosistema. En Python Medellín construimos conocimiento colectivo, abrimos puertas y demostramos que la innovación también se hace desde Medellín.",
    cta: "Únete a Python Medellín",
    link: "https://www.meetup.com/python-medellin/",
    color: "#3fb950"
  },
  {
    icon: "🔬",
    title: "Investigación + Código Abierto",
    body: "Creo firmemente que la investigación científica debe ser open-source. Cada proyecto que comparto en GitHub es un ladrillo en la construcción de un ecosistema científico más accesible en Latinoamérica.",
    cta: "Ver mis repos",
    link: "https://github.com/mojojv",
    color: "#58a6ff"
  },
  {
    icon: "🧠",
    title: "IA que salva vidas, no solo métricas",
    body: "El machine learning en salud no es sobre accuracy del 99%. Es sobre el paciente que recibe un diagnóstico más temprano, la doctora que toma una decisión más informada. Eso es lo que me mueve.",
    cta: "Ver proyectos HealthTech",
    link: "#projects",
    color: "#f78166"
  }
];

// ── CLARICE QUOTES ── Para la sección literaria
const CLARICE_QUOTES = [
  {
    text: "Yo no quiero tener la terrible limitación de quien vive solo de lo que es posible hacer sentido.",
    note: "A Paixão Segundo G.H., 1964"
  },
  {
    text: "Escribir es una maldición que salva.",
    note: "A Descoberta do Mundo, 1984"
  },
  {
    text: "La cosa más difícil no es vivir con los otros. Es vivir con uno mismo.",
    note: "Uma Aprendizagem ou O Livro dos Prazeres, 1969"
  },
  {
    text: "Me interesa mucho el misterio. Me interesa lo que no se puede explicar.",
    note: "Entrevista con Júlio Lerner, 1977"
  }
];
