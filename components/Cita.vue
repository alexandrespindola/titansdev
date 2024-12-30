<template>
  <header class="header page-header-error valign">
    <div class="container">
      <div class="text-center">
        <div class="row justify-content-center">
          <div class="col-lg-5">
            <div class="flex flex-col gap-4 mt-40 text">
              <div class=" min-h-24">
                <CommonCheckAnimationVue />
              </div>
              <h2 class="mb-10 text-6xl lg:text-7xl">¡Gracias!</h2>
              <p>Su cita se ha reservado correctamente.</p>
              <NuxtLinkLocale to="/" class="self-center butn butn-md butn-bg main-colorbg text-dark radius-30 mt-30">
                <span class="text">Volver al Inicio</span>
              </NuxtLinkLocale>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
