<template>
  <section class="py-20 process">
    <div class="container flex flex-row flex-wrap justify-center">
      <div class="w-full sec-head pb-80">
        <h6 class="sub-title main-color mb-25">{{ t('pageDesarrolloWeb.sessionOurProcess.subtitle') }}</h6>
        <div class="bord pt-25 bord-thin-top d-flex align-items-center">
          <h2 class="fw-600">
            {{ t('pageDesarrolloWeb.sessionOurProcess.title') }}
          </h2>
        </div>
      </div>
      <div class="row md-marg">
        <div class="col-lg-3 col-md-6 item md-mb50">
          <div class="icon-img-60 mb-30">
            <NuxtImg src="/dark/assets/imgs/serv-icons/3.png" alt="" />
          </div>
          <h5 class="mb-15">{{ t('pageDesarrolloWeb.sessionOurProcess.list.step1.title') }}</h5>
          <p>
            {{ t('pageDesarrolloWeb.sessionOurProcess.list.step1.content') }}
          </p>
        </div>
        <div class="col-lg-3 col-md-6 item md-mb50">
          <div class="icon-img-60 mb-30">
            <NuxtImg src="/dark/assets/imgs/serv-icons/4.png" alt="" />
          </div>
          <h5 class="mb-15">{{ t('pageDesarrolloWeb.sessionOurProcess.list.step2.title') }}
          </h5>
          <p>
            {{ t('pageDesarrolloWeb.sessionOurProcess.list.step2.content') }}
          </p>
        </div>
        <div class="col-lg-3 col-md-6 item sm-mb50">
          <div class="icon-img-60 mb-30">
            <NuxtImg src="/dark/assets/imgs/serv-icons/5.png" alt="" />
          </div>
          <h5 class="mb-15">{{ t('pageDesarrolloWeb.sessionOurProcess.list.step3.title') }}
          </h5>
          <p>
            {{ t('pageDesarrolloWeb.sessionOurProcess.list.step3.content') }}
          </p>
        </div>
        <div class="col-lg-3 col-md-6 item">
          <div class="icon-img-60 mb-30">
            <NuxtImg src="/dark/assets/imgs/serv-icons/6.png" alt="" />
          </div>
          <h5 class="mb-15">{{ t('pageDesarrolloWeb.sessionOurProcess.list.step4.title') }}</h5>
          <p>
            {{ t('pageDesarrolloWeb.sessionOurProcess.list.step4.content') }}
          </p>
        </div>
      </div>
      <div class="pt-8">
        <CommonButtonsCtaCita />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>