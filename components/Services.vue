<template>
  <section id="services" class="services-crev section-padding" data-scroll-index="1">
    <div class="container">
      <div class="sec-head mb-80">
        <h6 class="sub-title main-color mb-25">{{ t('pageHome.sessionServices.subtitle') }}</h6>
        <div class="bord pt-25 bord-thin-top d-flex align-items-center">
          <h2 class="font-semibold tracking-[1px] uppercase">
            {{ t('pageHome.sessionServices.title') }}
          </h2>
        </div>
      </div>
      <div class="flex flex-row flex-wrap w-full gap-8">
        <div v-for="(item, i) in serviceItems" :key="i" class="flex  w-full md:w-[45%] lg:w-[30%] bg-[#1d1d1d] rounded-xl">
          <div
            class="flex flex-col flex-grow gap-4 p-2 rounded-lg md:flex-row hover hover:bg-gradient-to-br hover:from-green-700 hover:to-green-900">
            <NuxtLinkLocale :to="item.link" class="flex flex-col w-auto p-4 md:p-8">
              <div class="flex flex-col gap-4">
                <div class="flex flex-row">
                  <NuxtImg :src="item.img" alt="" class="w-20 " />
                </div>
              </div>
              <div class="flex flex-col flex-grow gap-2">
                <h5 class="mt-4 text-xl md:text-2xl">{{ t(item.titleKey) }}</h5>
                <div class="flex flex-col flex-grow">
                  <p class="mb-4">{{ t(item.descKey) }}</p>
                </div>
                <div class="flex flex-row mt-auto gap-x-2">
                  <span>{{ t('pageHome.sessionServices.cta') }}</span>
                  <UIcon name="hugeicons:arrow-down-right-01" class="rotate-icon"></UIcon>
                </div>
              </div>
            </NuxtLinkLocale>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { t } = useI18n()
const { serviceItems } = useServiceItems()
</script>

<style lang="scss" scoped>
.texto {
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
}

.rotate-icon {
  transform: rotate(270deg);
}
</style>