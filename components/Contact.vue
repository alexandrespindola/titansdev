<template>
  <section class="contact pt-12 pb-24">
    <div class="container">
      <div class="flex flex-col w-full lg:flex-row gap-x-8">
        <div class="w-full valign lg:w-2/5">
          <div class="sec-head info-box full-width md-mb80">
            <NuxtLink to="https://wa.me/+34642887239" target="_blank">
              <div class="phone text-2xl lg:text-3xl fw-600 main-color flex flex-row gap-3 items-center">
                <UIcon name="logos:whatsapp-icon" />
                +34 640 500 184
              </div>
            </NuxtLink>
            <div class="flex flex-row justify-start">
              <CommonButtonsCtaCita />
            </div>
            <div class="morinfo mt-50 pb-30 bord-thin-bottom">
              <h6 class="mb-15">Dirección</h6>
              <p>Aldea Portecelos, 27 - Parada de Amoeiro<br>
                Ourense, España - CP 32170</p>
            </div>
            <div class="morinfo mt-30 pb-30 bord-thin-bottom">
              <h6 class="mb-15">Email</h6>
              <p>contacto@titansdev.es</p>
            </div>
            <div class="social-icon-circle mt-50 flex flex-row gap-x-3">
              <NuxtLink to="/" target="blank">
                <i class="fab fa-facebook"></i>
              </NuxtLink>
              <NuxtLink to="/" target="blank">
                <i class="fab fa-instagram"></i>
              </NuxtLink>
            </div>
          </div>
        </div>
        <div class="w-full valign lg:w-3/5">
          <div class="full-width">
            <div class="sec-head mb-50">
              <h6 class="sub-title main-color mb-15">Vamos a hablar</h6>
              <h3 class="text-u ls1">
                Envíanos un <span class="fw-200">mensaje</span>
              </h3>
            </div>
            <CommonContactForm> </CommonContactForm>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>