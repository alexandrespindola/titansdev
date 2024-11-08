import { fileURLToPath } from "node:url";

export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  typescript: {
    shim: false,
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        "/",
        "/404",
        "/blog",
        "/cita",
        "/contacto",
        "/desarrollo-web",
        "/gracias",
        "/politica-de-cookies",
        "/politica-de-privacidad",
        "/quienes-somos",
        "/servicios",
        "/terminos-de-uso",
        "/sitemap.xml",
      ],
    },
  },
  alias: {
    "@": fileURLToPath(new URL("./", import.meta.url)),
  },
  app: {
    head: {
      charset: "utf-8",
      title: "TitansDev | Agencia Digital",
      viewport: "width=device-width, initial-scale=1",
      htmlAttrs: {
        lang: "es",
      },
      meta: [
        {
          "http-equiv": "X-UA-Compatible",
          content: "IE=edge",
        },
        {
          name: "keywords",
          content:
            "TitansDev, Agencia Digital, Desarrollo Web, Marketing Digital",
        },
        {
          name: "description",
          content:
            "TitansDev - Agencia Digital: Desarrollo Web y Marketing Digital",
        },
        {
          name: "author",
          content: "TitansDev",
        },
        {
          name: "adopt-website-id",
          content: "ab2eb4b2-28e0-4ac0-9aa2-1318cc77567c",
        },

        // Meta tags Open Graph
        {
          property: "og:title",
          content: "TitansDev - Tecnologías Modernas para su Negocio",
        },
        {
          property: "og:description",
          content:
            "Soluciones Tecnológicas Asequibles para Acelerar el Crecimiento de Pequeñas y Medianas Empresas",
        },
        {
          property: "og:image",
          content: "https://titansdev.es/titansdev-thumb.webp",
        },
        {
          property: "og:image:width",
          content: "1200",
        },
        {
          property: "og:image:height",
          content: "630",
        },
        {
          property: "og:url",
          content: "https://titansdev.es",
        },
        {
          property: "og:type",
          content: "website",
        },
      ],
      link: [
        {
          rel: "shortcut icon",
          href: "/dark/assets/imgs/titansdev-favicon.svg",
        },
        // Google Fonts
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700&display=swap",
        },
      ],
      script: [
        { src: "/dark/assets/js/plugins.js" },
        { src: "/dark/assets/js/TweenMax.min.js" },
        { src: "/dark/assets/js/charming.min.js" },
        { src: "/dark/assets/js/countdown.js" },
        { src: "/dark/assets/js/ScrollTrigger.min.js" },
        { src: "/dark/assets/js/gsap.min.js" },
        { src: "/dark/assets/js/splitting.min.js" },
        { src: "/dark/assets/js/isotope.pkgd.min.js" },
        { src: "/dark/assets/js/ScrollSmoother.min.js" },
        { src: "/dark/assets/js/scripts.js", defer: true, async: true },
      ],
    },
    layoutTransition: {
      name: "layout",
      mode: "out-in",
    },
  },
  css: [
    "swiper/css/bundle",
    "@/styles/globals.css",
    "@/public/dark/assets/scss/style.scss",
  ],
  modules: [
    "@nuxt/ui",
    "@nuxtjs/cloudinary",
    "@zadigetvoltaire/nuxt-gtm",
    "@nuxt/content",
    "@nuxthq/studio",
    "@nuxtjs/strapi",
    "@nuxtjs/sitemap",
    "nuxt-schema-org",
    "@nuxtjs/robots"
  ],
  gtm: {
    id: "GTM-K5F3KFP3",
  },
  runtimeConfig: {
    public: {
      strapiUri: process.env.STRAPI_URL,
    },
    strapiApiToken: process.env.STRAPI_API_TOKEN,
  },
  site: {
    url: "https://titansdev.es",
    name: "TitansDev",
    gzip: true,
    videos: [
      {
        thumbnail_loc: 'https://res.cloudinary.com/xmfm6mhw3gwctndtcubgx2rptnae/video/upload/w_640,h_360,c_fill,q_auto,f_auto/so_0/video-notebook-streaming_jxwrof.jpg',
        title: 'Video de Notebook',
        description: 'Video de Notebook',
        content_loc: 'https://res.cloudinary.com/xmfm6mhw3gwctndtcubgx2rptnae/video/upload/v1234567890/video-notebook-streaming_jxwrof.mp4',
        player_loc: 'https://titansdev.com',
        duration: '8',
        publication_date: '2024-11-08',
      },
    ],
  },
  vite: {
    build: {
      terserOptions: {
        compress: {
          drop_console: true,
        },
        output: {
          comments: false,
        },
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
        },
      },
    },
  },
  webpack: {
    extractCSS: true,
    optimization: {
      splitChunks: {
        layouts: true,
      },
    },
  },
  compatibilityDate: "2024-10-03",
});
