<template>
  <header class="header page-header-error valign">
    <div class="container">
      <div class="text-center">
        <div class="row justify-content-center">
          <div class="col-lg-5">
            <div class="text mt-40 gap-4 flex flex-col">
              <div class=" min-h-24">
                <CommonCheckAnimationVue />
              </div>
              <h2 class="mb-10 text-6xl lg:text-7xl">¡Gracias!</h2>
              <p>Su mensaje se ha enviado correctamente y uno de nuestros representantes se pondrá en contacto con usted
                en breve.</p>
              <NuxtLink to="/" class="butn butn-md butn-bg main-colorbg text-dark radius-30 mt-30 self-center">
                <span class="text">Volver al Inicio</span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
