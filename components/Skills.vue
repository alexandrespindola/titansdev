<template>
  <section
    class="about-crev py-10 position-re ontop"
    data-scroll-index="4"
  >
    <div class="container">
      <div class="row lg-marg">
        <div class="col-lg-6">
          <div class="left-block md-mb50">
            <div class="d-flex align-items-center">
              <div>
                <div class="img fit-img radius-30">
                  <img src="/dark/assets/imgs/intro/skills.webp" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 valign">
          <div class="content full-width">
            <div class="sec-head mb-30">
              <h6 class="sub-title mb-15 main-color">Nuestras Habilidades</h6>
              <h2>Experimente la magia de TitansDev</h2>
            </div>
            <div class="row justify-content-end">

                <div class="text">
                  <p>
                    Ya sea desarrollando sitios web, aplicaciones móviles o sistemas personalizados, nuestro equipo se dedica a crear experiencias innovadoras que impulsen su negocio.

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
      <div class="team section-padding pb-0">
        <div class="row gap-y-12 justify-center">
          <div class="md:w-1/2 lg:w-1/3">
            <div class="item">
              <div class="img">
                <img src="/dark/assets/imgs/team/hector.webp" alt="" />
                <div class="info">
                  <span class="fz-12">CEO</span>
                  <h6 class="fz-18">Héctor Patiño</h6>
                </div>
              </div>
              <div class="social">
                <div class="links">
                  <a href="#0">
                    <i class="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="md:w-1/2 lg:w-1/3">
            <div class="item">
              <div class="img">
                <img src="/dark/assets/imgs/team/melike.webp" alt="" />
                <div class="info">
                  <span class="fz-12">CCO</span>
                  <h6 class="fz-18">Melike Öktem</h6>
                </div>
              </div>
              <div class="social">
                <div class="links">
                  <a href="#0">
                    <i class="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="md:w-1/2 lg:w-1/3">
            <div class="item">
              <div class="img">
                <img src="/dark/assets/imgs/team/cristiane.webp" alt="" />
                <div class="info">
                  <span class="fz-12">CMO</span>
                  <h6 class="fz-18">Cristiane Bortolini</h6>
                </div>
              </div>
              <div class="social">
                <div class="links">
                  <a href="https://www.linkedin.com/in/cristiane-bortolini-577492223/" target="_blank">
                    <i class="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="md:w-1/2 lg:w-1/3">
            <div class="item">
              <div class="img">
                <img src="/dark/assets/imgs/team/alexandre.webp" alt="" />
                <div class="info">
                  <span class="fz-12">CTO</span>
                  <h6 class="fz-18">Alexandre Spindola</h6>
                </div>
              </div>
              <div class="social">
                <div class="links">
                  <a href="https://www.linkedin.com/in/alexandrespindola/" target="_blank">
                    <i class="fab fa-linkedin"></i>
                  </a>
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
