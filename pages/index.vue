<template>
  <main class="main-bg o-hidden">
    <LazyHeroMain />
    <LazyServices />
    <LazyAbout />
    <LazyMarquee />
    <LazyPortfolio />
    <LazySkills />
    <LazyTech />
    <LazyContact />
  </main>
</template>

<script lang="ts" setup>
import { companyName } from '~/utils/constants';
import { useHead } from '@vueuse/head';

useSeoMeta({
  title: `${companyName} | Agencia Digital`,
  description: 'TitansDev es una agencia digital especializada en desarrollo web y marketing digital. Ofrecemos soluciones personalizadas para impulsar el crecimiento de tu negocio. ¡Descubre cómo podemos ayudarte hoy!',
  ogTitle: 'TitansDev - Tecnologías Modernas para su Negocio',
  ogDescription: 'Soluciones Tecnológicas Asequibles para Acelerar el Crecimiento de Pequeñas y Medianas Empresas',
  ogImage: 'https://titansdev.es/titansdev-thumb.webp',
  ogUrl: 'https://titansdev.es',
});

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@id": "https://titansdev.es/#website",
      "@type": "WebSite",
      "name": "TitansDev",
      "url": "https://titansdev.es",
      "description": "TitansDev es una agencia digital que ofrece soluciones tecnológicas para pequeñas y medianas empresas, incluyendo desarrollo de sitios web, sistemas, aplicaciones móviles y marketing digital.",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://titansdev.es/?s={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@id": "https://titansdev.es/#webpage",
      "@type": "WebPage",
      "name": 'TitansDev | Agencia Digital',
      url: "https://titansdev.es",
      description: 'Explora nuestros servicios de desarrollo de sitios web, sistemas en línea, aplicaciones móviles y marketing digital.',
    },
    {
      "@type": 'Organization',
      '@id': 'https://titansdev.es/#organization',
      'name': 'TitansDev',
      'url': 'https://titansdev.es',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://titansdev.es/dark/assets/imgs/titansdev-logo-white.webp'
      },
       address: {
         '@type': 'PostalAddress',
         'streetAddress': 'Aldea Portecelos, 27',
         'addressLocality': 'Parada de Amoeiro',
         'addressRegion': 'Ourense',
         'postalCode': 'CP 32170',
         'addressCountry': 'ES'
       },
       contactPoint: {
         '@type': 'ContactPoint',
         'telephone': '+34-640-500-184',
         'contactType': 'Servicio al Cliente',
         'areaServed': ['ES'],
         'availableLanguage': ['Español']
       },
       sameAs: [
         // 'https://www.facebook.com/titansdev',
         // 'https://twitter.com/titansdev'
       ]
    }
  ]
};

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify(schema)
    }
  ]
});
</script>
