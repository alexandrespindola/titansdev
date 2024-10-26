<template>
  <section class="position-re ontop">
    <div class="container">
      <div class="flex flex-col lg:flex-row items-center justify-center gap-12">
        <div class="md:w-2/3 lg:w-1/3">
            <video autoplay muted
              src="https://res.cloudinary.com/xmfm6mhw3gwctndtcubgx2rptnae/video/upload/v1234567890/video-notebook-streaming_jxwrof.mp4" class="rounded-3xl">
            </video>
        </div>
        <div class="lg:w-1/2">
          <div class="content full-width">
            <div class="sec-head mb-30">
              <h6 class="sub-title mb-15 main-color">Nuestras Habilidades</h6>
              <h2>Experimente la magia de TitansDev</h2>
            </div>
            <div class="row justify-content-end">

              <div class="text">
                <p>
                  Ya sea desarrollando sitios web, aplicaciones móviles o sistemas personalizados, nuestro equipo se
                  dedica a crear experiencias innovadoras que impulsen su negocio.

                </p>
              </div>
              <div class="mt-50">
                <div class="skills-box">
                  <div class="skill-item mb-40">
                    <h5 class="sub-title mb-15">Creación de Páginas Web</h5>
                    <div class="skill-progress">
                      <div class="progres" data-value="95%"></div>
                    </div>
                  </div>
                  <div class="skill-item mb-40">
                    <h5 class="sub-title mb-15">Desarrollo de Aplicaciones</h5>
                    <div class="skill-progress">
                      <div class="progres" data-value="90%"></div>
                    </div>
                  </div>
                  <div class="skill-item mb-40">
                    <h5 class="sub-title mb-15">Marketing Digital</h5>
                    <div class="skill-progress">
                      <div class="progres" data-value="85%"></div>
                    </div>
                  </div>
                  <div class="skill-item">
                    <h5 class="sub-title mb-15">Automatización de Workflows</h5>
                    <div class="skill-progress">
                      <div class="progres" data-value="90%"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';
import isInView from '@/common/isInView';

function handleShowProgressValues() {
  isInView({
    selector: '.skill-progress .progres',
    isElements: true,
    callback: (element) => {
      element.style.width = element.getAttribute('data-value');
    },
  });
}

onMounted(() => {
  window.addEventListener('scroll', handleShowProgressValues);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleShowProgressValues);
});
</script>
