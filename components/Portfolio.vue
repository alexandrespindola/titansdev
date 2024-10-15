<template>
  <section class="portfolio-tab crev section-padding" data-scroll-index="3">
    <div class="container">
      <div class="sec-head mb-80">
        <h6 class="sub-title main-color mb-25">Nustro Portafolio</h6>
        <div class="bord pt-25 bord-thin-top d-flex align-items-center">
          <h2 class="fw-600 text-u ls1">
            Proyectos <span class="fw-200">Destacados</span>
          </h2>
<!--           <div class="ml-auto">
            <a href="/portafolio" class="go-more">
              <span class="text">Ver todos los Proyectos</span>
              <span class="icon ti-arrow-top-right"></span>
            </a>
          </div> -->
        </div>
      </div>
      <div class="row">
        <div class="col-lg-5 d-flex align-items-center justify-content-center">
          <div class="glry-img">
            <div
              id="tab-1"
              class="bg-img tab-img current"
              data-background="/dark/assets/imgs/portfolio/fisioterapia-pelvica.webp"
            ></div>
            <div
              id="tab-2"
              class="bg-img tab-img"
              data-background="/dark/assets/imgs/portfolio/pejoterday.webp"
            ></div>
            <div
              id="tab-3"
              class="bg-img tab-img"
              data-background="/dark/assets/imgs/portfolio/jtba.webp"
            ></div>
            <div
              id="tab-4"
              class="bg-img tab-img"
              data-background="/dark/assets/imgs/portfolio/ifv.webp"
            ></div>
            <div
              id="tab-5"
              class="bg-img tab-img"
              data-background="/dark/assets/imgs/portfolio/gnosis-deutschland.webp"
            ></div>
          </div>
        </div>
        <div class="col-lg-6 offset-lg-1 content">
          <div
            @mouseenter="handleMouseEnter"
            class="cluom mb-30 current"
            data-tab="tab-1"
          >
            <div class="info">
              <h6 class="sub-title opacity-7">Desarrollo Web</h6>
              <h4>Clinica Pelvica</h4>
            </div>
            <div class="img">
              <img src="/dark/assets/imgs/portfolio/fisioterapia-pelvica.webp" alt="" />
            </div>
            <div class="more text-u ls1 fz-12">
              <a href="https://clinicapelvica.com.br/">
                Ver Proyecto <i class="ml-15 ti-arrow-top-right"></i>
              </a>
            </div>
          </div>
          <div
            @mouseenter="handleMouseEnter"
            class="cluom mb-30"
            data-tab="tab-2"
          >
            <div class="info">
              <h6 class="sub-title opacity-7">Desarrollo Web</h6>
              <h4>PejoterDay</h4>
            </div>
            <div class="img">
              <img src="/dark/assets/imgs/portfolio/pejoterday.webp" alt="" />
            </div>
            <div class="more text-u ls1 fz-12">
              <a href="https://pejoterday.com.br">
                Ver Proyecto <i class="ml-15 ti-arrow-top-right"></i>
              </a>
            </div>
          </div>
          <div
            @mouseenter="handleMouseEnter"
            class="cluom mb-30"
            data-tab="tab-3"
          >
            <div class="info">
              <h6 class="sub-title opacity-7">Desarrollo Web</h6>
              <h4>JTBA Perícias</h4>
            </div>
            <div class="img">
              <img src="/dark/assets/imgs/portfolio/jtba.webp" alt="" />
            </div>
            <div class="more text-u ls1 fz-12">
              <a href="https://www.jtba.com.br/">
                Ver Proyecto <i class="ml-15 ti-arrow-top-right"></i>
              </a>
            </div>
          </div>
          <div
            @mouseenter="handleMouseEnter"
            class="cluom mb-30"
            data-tab="tab-4"
          >
            <div class="info">
              <h6 class="sub-title opacity-7">Desarrollo Web</h6>
              <h4>IFV</h4>
            </div>
            <div class="img">
              <img src="/dark/assets/imgs/portfolio/ifv.webp" alt="" />
            </div>
            <div class="more text-u ls1 fz-12">
              <a href="https://ifv.org.br">
                Ver Proyecto<i class="ml-15 ti-arrow-top-right"></i>
              </a>
            </div>
          </div>
          <div
            @mouseenter="handleMouseEnter"
            class="cluom mb-30"
            data-tab="tab-5"
          >
            <div class="info">
              <h6 class="sub-title opacity-7">Desarrollo Web</h6>
              <h4>Gnosis Deutschland</h4>
            </div>
            <div class="img">
              <img src="/dark/assets/imgs/portfolio/gnosis-deutschland.webp" alt="" />
            </div>
            <div class="more text-u ls1 fz-12">
              <a href="https://gnosisdeutschland.org.br">
                Ver Proyecto <i class="ml-15 ti-arrow-top-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import loadBackgroudImages from '@/common/loadBackgroudImages';

onMounted(() => {
  loadBackgroudImages();
});

function handleMouseEnter(event) {
  var tab_id = event.currentTarget.getAttribute('data-tab');

  document.querySelectorAll('.links-text li').forEach((el) => {
    el.classList.remove('current');
    // el.classList.add('no-active');
  });
  event.currentTarget.classList.add('current');
  // event.currentTarget.classList.remove('no-active');

  document
    .querySelectorAll('.glry-img .tab-img')
    .forEach((el) => el.classList.remove('current'));
  document.querySelector('#' + tab_id).classList.add('current');

  if (event.currentTarget.classList.contains('current')) return false;
}

function handleMouseLeave() {
  document
    .querySelectorAll('.glry-img .tab-img')
    .forEach((el) => el.classList.remove('current'));
}
</script>
