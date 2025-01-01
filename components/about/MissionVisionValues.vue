<template>
  <section class="page-intro-cerv section-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 bord-thin-right rest">
          <div class="row justify-content-end rest">
            <div class="col-md-5 rest">
              <div class="cont">
                <div class="mb-40">
                  <h2 class="fz-100 numb-font">1.</h2>
                </div>
                <h4 class="main-color">{{ t('pageQuienesSomos.sessionMissionVisionValues.mission.title') }}</h4>
                <div class="flex flex-col gap-2 text mt-30">
                  <h5>{{ t('pageQuienesSomos.sessionMissionVisionValues.mission.subtitle') }}</h5>
                  <p>
                    {{ t('pageQuienesSomos.sessionMissionVisionValues.mission.content') }}
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-5 rest">
              <div class="img fit-img bord-thin-left">
                <NuxtImg src="/dark/assets/imgs/intro/quienes-somos-03.webp" alt="" class="rounded-3xl"/>
              </div>
            </div>
          </div>
          <div class="flex-col-reverse row md:flex-row justify-content-end bord-thin-top rest">
            <div class="col-md-5 rest">
              <div class="img fit-img">
                <NuxtImg src="/dark/assets/imgs/intro/quienes-somos-04.webp" alt="" class="rounded-3xl"/>
              </div>
            </div>
            <div class="col-md-5 rest">
              <div class="cont bord-thin-left">
                <div class="mb-40">
                  <h2 class="fz-100 numb-font">2.</h2>
                </div>
                <h4 class="main-color">{{ t('pageQuienesSomos.sessionMissionVisionValues.vision.title') }}</h4>
                <div class="flex flex-col gap-2 text mt-30">
                  <h5>{{ t('pageQuienesSomos.sessionMissionVisionValues.vision.subtitle') }}</h5>
                  <p>
                    {{ t('pageQuienesSomos.sessionMissionVisionValues.vision.content') }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 rest">
          <div class="bord-thin-top mt-100 position-re">
            <div class="row">
              <div class="col-md-11">
                <div class="cont">
                  <div class="mb-40">
                    <h2 class="fz-100 numb-font">3.</h2>
                  </div>
                  <h4 class="main-color">{{ t('pageQuienesSomos.sessionMissionVisionValues.values.title') }}</h4>
                  <div class="flex flex-col gap-2 text mt-30">
                    <h5>{{ t('pageQuienesSomos.sessionMissionVisionValues.values.subtitle') }}
                    </h5>
                    <p>
                      {{ t('pageQuienesSomos.sessionMissionVisionValues.values.content') }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-dots bg-img" data-background="/dark/assets/imgs/patterns/dots.png"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import loadBackgroudImages from '@/common/loadBackgroudImages';
const { t } = useI18n()

onMounted(() => {
  loadBackgroudImages();
});
</script>
