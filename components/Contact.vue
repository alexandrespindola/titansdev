<template>
  <section class="pt-12 pb-24 contact">
    <div class="container">
      <div class="flex flex-col w-full lg:flex-row gap-x-8">
        <div class="w-full valign lg:w-2/5">
          <div class="sec-head info-box full-width md-mb80">
            <NuxtLink to="https://wa.me/+34640500184" target="_blank">
              <div class="flex flex-row items-center gap-3 text-2xl phone lg:text-3xl fw-600 main-color">
                <UIcon name="logos:whatsapp-icon" />
                +34 640 500 184
              </div>
            </NuxtLink>
            <div class="flex flex-row justify-start">
              <CommonButtonsCtaCita />
            </div>
            <div class="morinfo mt-50 pb-30 bord-thin-bottom">
              <h6 class="mb-15">{{ t('pageHome.sessionContact.address.title') }}</h6>
              <p>{{ t('pageHome.sessionContact.address.content1') }}<br>
                {{ t('pageHome.sessionContact.address.content2') }}</p>
            </div>
            <div class="morinfo mt-30 pb-30 bord-thin-bottom">
              <h6 class="mb-15">E-mail</h6>
              <p>contacto@titansdev.es</p>
            </div>
            <SocialMedia />
          </div>
        </div>
        <div class="w-full valign lg:w-3/5">
          <div class="full-width">
            <div class="sec-head mb-50">
              <h6 class="sub-title main-color mb-15">{{ t('pageHome.sessionContact.subtitle') }}</h6>
              <h3 class="text-u ls1">
                {{ t('pageHome.sessionContact.title') }}
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