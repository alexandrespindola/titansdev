<template>
  <main class="main-bg o-hidden">
    <HeroMain />
    <Services />
    <About />
    <Marquee />
    <Portfolio />
    <Skills />
    <Tech />
    <Contact />
  </main>
</template>

<script lang="ts" setup>
import { companyName } from '~/utils/constants';
import { useHead } from '@vueuse/head';

useSeoMeta({
  title: `${companyName} | Agencia Digital`,
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
      // O URL deve ser o mesmo da página atual
      url: "https://titansdev.es",
      // Atualizando a descrição
      description: 'Explora nuestros servicios de desarrollo de sitios web, sistemas en línea, aplicaciones móviles y marketing digital.',
      // Mantendo a estrutura existente
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
       // Adicionando endereço se aplicável
       address: {
         '@type': 'PostalAddress',
         'streetAddress': 'Aldea Portecelos, 27',
         'addressLocality': 'Parada de Amoeiro',
         'addressRegion': 'Ourense',
         'postalCode': 'CP 32170',
         'addressCountry': 'España'
       },
       contactPoint: {
         '@type': 'ContactPoint',
         'telephone': '+34-640-500-184',
         'contactType': 'Servicio al Cliente',
         'areaServed': ['ES'],
         'availableLanguage': ['Español']
       },
       sameAs: [
         // Links para perfis sociais
         // Exemplo:
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
