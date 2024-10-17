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
        //"/blog",
        "/contacto",
        //"/equipo",
        //"/faq",
        //"/portafolio",
        //"/post",
        //"/proyecto",
        "/quienes-somos",
        //"/servicio",
        "/servicios",
        //"/showcase"
      ],
    },
  },
  alias: {
    "@": fileURLToPath(new URL("./", import.meta.url)),
  },
  app: {
    head: {
      title: "TitansDev - Agencia Digital",
      htmlAttrs: {
        lang: "es",
      },
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          charset: "utf-8",
        },
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
          content: "/titansdev-thumb.webp",
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
        { src: "/dark/assets/js/imgReveal/imagesloaded.pkgd.min.js" },
        { src: "/dark/assets/js/ScrollSmoother.min.js" },
        { src: "/dark/assets/js/scripts.js", defer: true },
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
  modules: ["@nuxt/ui", "@nuxtjs/cloudinary"],
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
