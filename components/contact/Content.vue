<template>
  <section class="contact section-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-5 valign">
          <div class="sec-head md-mb80">
            <h2 class="text-u ls1">
              {{ t('pageContacto.letUsHelp')}} <span class="font-light">{{ t('pageContacto.business')}}</span>
            </h2>
            <p class="mt-20 mb-20">
              {{ t('pageContacto.content')}}            </p>
            <div class="row">
              <div class="col-md-6">
                <div class="morinfo mt-30">
                  <h6 class="mb-15">{{ t('pageContacto.address.title')}}</h6>
                  <p>{{ t('pageContacto.address.content')}}</p>
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
                <div class="flex flex-row items-center gap-3 text-3xl phone lg:text-4xl fw-600 main-color">
                  <UIcon name="logos:whatsapp-icon" />
                  +34 640 500 184
                </div>
              </NuxtLink>
              <CommonButtonsCtaCita />
            </div>
            <SocialMedia />
          </div>
        </div>
        <div class="col-lg-6 offset-lg-1 valign">
          <div class="full-width">
            <div class="sec-head mb-50">
              <h3 class="text-u ls1">
                {{ t('pageContacto.sendUs')}} <span class="fw-200">{{ t('pageContacto.message')}}</span>
              </h3>
            </div>
            <CommonContactForm> </CommonContactForm>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>