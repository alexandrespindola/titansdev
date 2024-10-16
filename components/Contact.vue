<template>
  <section class="contact py-28" data-scroll-index="6">
    <div class="container">
      <div class="flex flex-col md:flex-row md:gap-4">
        <div class="w-full valign md:w-2/5">
          <div class="sec-head info-box full-width md-mb80">
            <div class="phone fz-30 fw-600 underline main-color">
              <NuxtLink to="https://wa.me/+34642887239">+34 642 887 239</NuxtLink>
            </div>
            <div class="morinfo mt-50 pb-30 bord-thin-bottom">
              <h6 class="mb-15">Dirección</h6>
              <p>Besòs 1, 08174 Sant Cugat del Vallès, Barcelona</p>
            </div>
            <div class="morinfo mt-30 pb-30 bord-thin-bottom">
              <h6 class="mb-15">Email</h6>
              <p>contacto@titansdev.es</p>
            </div>

            <div class="social-icon-circle mt-50 flex flex-row gap-x-3">
              <NuxtLink to="/" target="blank">
                <i class="fab fa-instagram"></i>
              </NuxtLink>
              <NuxtLink to="/" target="blank">
                <i class="fab fa-linkedin"></i>
              </NuxtLink>
            </div>
          </div>
        </div>
        <div class="w-full offset-lg-1 valign md:w-3/5">
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

<script setup>
</script>