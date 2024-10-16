<template>
  <footer class="modern-footer pt-80">
    <div class="footer-container">
      <div class="container ontop">
        <div class="row pb-30 bord-thin-bottom">
          <div class="col-lg-5">
            <div class="logo">
              <img src="/dark/assets/imgs/titansdev-logo-white.webp" alt="" class=" w-44" />
            </div>
          </div>
          <div class="col-lg-7">
            <div class="social-media d-flex justify-content-end">
              <ul class="rest d-flex align-items-center fz-14">
                <li class="hover-this cursor-pointer ml-50">
                  <a href="#0" class="hover-anim">
                    <i class="fab fa-linkedin-in mr-10"></i> LinkedIn
                  </a>
                </li>
                <li class="hover-this cursor-pointer ml-50">
                  <a href="#0" class="hover-anim">
                    <i class="fab fa-instagram mr-10"></i> Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="row pt-80">
          <div class="col-lg-7">
            <div class="call-action">
              <h2 class="d-slideup wow fz-60 fw-600">
                <span class="sideup-text">
                  <span class="up-text">¿Tiene un proyecto en mente?</span>
                </span>
                <span class="sideup-text">
                  <span class="up-text underline">
                    <a href="/contacto" class="main-color">
                      Vamos a trabajar juntos.
                    </a>
                  </span>
                </span>
              </h2>
              <div class="info mt-80 d-flex align-items-center">
                <div>
                  <a href="mailto:contacto@titansdev.es" class="butn butn-md butn-bord-thin radius-30">
                    <span class="text">contacto@titansdev.es</span>
                  </a>
                </div>
                <div>
                  <a href="#0" class="butn butn-md butn-bord-thin radius-30 ml-30">
                    <span class="text">+2 456 (343) 24 45</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 offset-lg-1 bord-left">
            <div class="column">
              <h6 class="sub-title mb-30">Links Útiles</h6>
              <div class="row">
                <div class="col-6">
                  <ul class="rest fz-14">
                    <li class="mb-15">
                      <a href="/quienes-somos">Quiénes Somos</a>
                    </li>
                    <li class="mb-15">
                      <a href="/servicios">Servicios</a>
                    </li>
                    <li>
                      <a href="/contacto">Contacto</a>
                    </li>
                  </ul>
                </div>
                <div class="col-6">
                  <ul class="rest fz-14">
                    <li class="mb-15">
                      <a href="/">FAQS</a>
                    </li>
                    <li class="mb-15">
                      <a href="/">Term & Conditions</a>
                    </li>
                    <li class="mb-15">
                      <a href="/">Privacy policy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col gap-2 pt-12 pb-12 lg:pt-32">
            <p class="fz-14 w-full flex flex-row justify-center gap-1">
              <NuxtLink to="/" class="main-color text-center">
                TitansDev
              </NuxtLink>
              <span>© 2024</span>
            </p>
            <p class="fz-14 self-center text-center">
              Producido con ❤️ por TitansDev
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup>
import { onMounted } from 'vue';
onMounted(() => {
  gsap.set('.footer-container', { yPercent: -50 });
  const uncover = gsap.timeline({ paused: true });
  uncover.to('.footer-container', { yPercent: 0, ease: 'none' });

  ScrollTrigger.create({
    trigger: 'main',
    start: 'bottom bottom',
    end: '+=50%',
    animation: uncover,
    scrub: true,
  });
});
</script>
