<template>
  <section class="contact section-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-5 valign">
          <div class="sec-head md-mb80">
            <h2 class="text-u ls1">
              Permítanos ayudar a su <span class="font-light">negocio</span>
            </h2>
            <p class="mt-20 mb-20">
              Estamos aquí para ayudarle a encontrar las mejores soluciones tecnológicas para usted y sus clientes.
            </p>
            <div class="row">
              <div class="col-md-6">
                <div class="morinfo mt-30">
                  <h6 class="mb-15">Dirección</h6>
                  <p>Aldea Portecelos, 27 - Parada de Amoeiro, Ourense, España - CP 32170</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="morinfo mt-30">
                  <h6 class="mb-15">E-mail</h6>
                  <p>contacto@titansdev.es</p>
                </div>
              </div>
            </div>
            <div class="phone fz-30 fw-600 mt-30 main-color">
              <NuxtLink to="https://wa.me/+34640500184" target="_blank">
                <div class="phone text-3xl lg:text-4xl fw-600 main-color flex flex-row gap-3 items-center">
                  <UIcon name="logos:whatsapp-icon" />
                  +34 640 500 184
                </div>
              </NuxtLink>
              <CommonButtonsCtaCita />
            </div>
            <ul class="rest social-text d-flex mt-60">
              <li class="mr-30">
                <a href="#0" class="hover-this">
                  <span class="hover-anim">Facebook</span>
                </a>
              </li>
              <li>
                <a href="#0" class="hover-this">
                  <span class="hover-anim">Instagram</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-6 offset-lg-1 valign">
          <div class="full-width">
            <div class="sec-head mb-50">
              <h3 class="text-u ls1">
                Enviar un <span class="fw-200">mensaje</span>
              </h3>
            </div>
            <CommonContactForm> </CommonContactForm>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>