<template>
  <section class="about" data-scroll-index="2">
    <div class="container section-padding bord-thin-top">
      <div class="flex flex-row flex-wrap justify-center gap-8">
        <div class="w-full xl:w-[48%]">
          <div class="cont flex flex-col">
            <h6 class="sub-title main-color mb-15">Qué Hacemos</h6>
            <h3>
              Déjenos hacer el trabajo con la tecnología, para que usted pueda centrarse en lo importante de su negocio.
            </h3>
            <div class="d-flex align-items-end mt-4 gap-x-8">
              <div class="hidden sm:block">
                <NuxtLink to="/quienes-somos" class="d-flex align-items-end">
                  <span class="sub-title nowrap">Sobre Nosotros</span>
                  <span class="fz-70 line-height-45 ti-arrow-top-right"></span>
                </NuxtLink>
              </div>
              <p>
                Sabemos que su tiempo es valioso y que debe centrarse en hacer crecer su negocio. Por eso nos ocupamos
                desde la creación y automatización de sitios web hasta la generación de clientes potenciales
                cualificados.
              </p>
            </div>

          </div>
        </div>
        <div class="w-full lg:w-2/3 xl:w-[48%]">
          <div class="img-vid">
            <NuxtImg src="/dark/assets/imgs/intro/intro-touchscreen-plant.webp" alt="" />
            <div class="curv-butn main-bg">
              <div class="icon">
                <i class="fas fa-play"></i>
              </div>
              <div class="shap-left-top">
                <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-11 h-11">
                  <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                    fill="#1a1a1a"></path>
                </svg>
              </div>
              <div class="shap-right-bottom">
                <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-11 h-11">
                  <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                    fill="#1a1a1a"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>