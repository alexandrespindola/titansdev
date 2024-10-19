<template>
  <div class="policy-layout">
    <header>
      <nav>
        <NuxtLink to="/" class="home-link">Início</NuxtLink>
        <h1>{{ title }}</h1>
      </nav>
    </header>
    <main class="policy-content">
      <slot />
    </main>
    <footer>
      <p>&copy; {{ new Date().getFullYear() }} {{ companyName }}. Todos los derechos reservados.</p>
      <nav>
        <NuxtLink to="/politica-de-privacidad">Política de Privacidad</NuxtLink> |
        <NuxtLink to="/">Política de Cookies</NuxtLink> |
        <NuxtLink to="/">Términos y Condiciones</NuxtLink>
      </nav>
    </footer>
  </div>
</template>

<script setup>
const companyName = 'Su Empresa'
const route = useRoute()
const title = computed(() => {
  switch (route.path) {
    case '/politica-de-privacidad':
      return 'Política de Privacidad'
    case '/politica-de-cookies':
      return 'Política de Cookies'
    case '/terminos-y-condiciones':
      return 'Términos y Condiciones'
    default:
      return 'Documento Legal'
  }
})
</script>

<style scoped>
.policy-layout {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: #333;
}

header {
  margin-bottom: 30px;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
}

header nav {
  display: flex;
  align-items: center;
}

.home-link {
  margin-right: 20px;
  text-decoration: none;
  color: #007bff;
}

h1 {
  margin: 0;
  font-size: 24px;
}

.policy-content {
  background-color: #fff;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

footer {
  margin-top: 30px;
  text-align: center;
  font-size: 0.9em;
  color: #666;
}

footer nav {
  margin-top: 10px;
}

footer a {
  color: #007bff;
  text-decoration: none;
  margin: 0 5px;
}

@media (max-width: 600px) {
  .policy-layout {
    padding: 10px;
  }
  
  .policy-content {
    padding: 20px;
  }
}
</style>