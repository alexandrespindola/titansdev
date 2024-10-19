<template>
  <section class="process py-20">
    <div class="container">
      <div class="sec-head pb-80">
        <h6 class="sub-title main-color mb-25">Nuestro Proceso</h6>
        <div class="bord pt-25 bord-thin-top d-flex align-items-center">
          <h2 class="fw-600">
            Desarrollo <span class="fw-200">del Trabajo</span>
          </h2>
        </div>
      </div>
      <div class="row md-marg">
        <div class="col-lg-3 col-md-6 item md-mb50">
          <div class="icon-img-60 mb-30">
            <img src="/dark/assets/imgs/serv-icons/3.png" alt="" />
          </div>
          <h5 class="mb-15">1. Análisis</h5>
          <p>
            Realizamos un estudio de su negocio, objetivos y público objetivo. Definimos la estrategia digital adecuada, ya sea para aumentar la visibilidad en línea o para una transformación digital integral.
          </p>
        </div>
        <div class="col-lg-3 col-md-6 item md-mb50">
          <div class="icon-img-60 mb-30">
            <img src="/dark/assets/imgs/serv-icons/4.png" alt="" />
          </div>
          <h5 class="mb-15">2. Desarrollo
          </h5>
          <p>
            Creamos soluciones a medida, desde páginas web profesionales hasta sistemas web y apps móviles. Aplicamos las mejores prácticas de UX/UI y optimización para buscadores.
          </p>
        </div>
        <div class="col-lg-3 col-md-6 item sm-mb50">
          <div class="icon-img-60 mb-30">
            <img src="/dark/assets/imgs/serv-icons/5.png" alt="" />
          </div>
          <h5 class="mb-15">3. Implementación
          </h5>
          <p>
            Ponemos en marcha las soluciones desarrolladas, configuramos herramientas de marketing digital, servidores y automatizamos procesos. Realizamos pruebas y ajustes para garantizar un rendimiento óptimo.
          </p>
        </div>
        <div class="col-lg-3 col-md-6 item">
          <div class="icon-img-60 mb-30">
            <img src="/dark/assets/imgs/serv-icons/6.png" alt="" />
          </div>
          <h5 class="mb-15">4. Mantenimiento</h5>
          <p>
            Proporcionamos soporte y mantenimiento de los sitios web y sistemas implementados. Nos aseguramos de que todas las plataformas estén actualizadas, seguras y funcionando de manera eficiente.
          </p>
        </div>
      </div>
    </div>
    <!-- <div>
    <h1>Posts</h1>
    <p v-if="error">Erro ao carregar posts: {{ error.message }}</p>
    <ul v-else-if="posts && posts.data">
      <li v-for="post in posts.data" :key="post.id">
        {{ post.title }}
        {{ post.subtitle }}
      </li>
    </ul>
    <p v-else>Carregando posts...</p>
  </div> -->
  </section>
</template>

<!-- <script setup>

const config = useRuntimeConfig()

const { data: posts, error } = await useFetch(`${config.public.strapiUri}/api/posts`, {
  headers: {
    'Authorization': `Bearer ${config.strapiApiToken}`
  }
})

</script> -->