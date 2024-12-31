<template>
  <section class="position-re ontop">
    <div class="container">
      <div class="flex flex-col items-center justify-center gap-12 lg:flex-row">
        <div class="md:w-2/3 lg:w-1/3">
          <video autoplay muted
            src="https://res.cloudinary.com/xmfm6mhw3gwctndtcubgx2rptnae/video/upload/v1234567890/video-notebook-streaming_jxwrof.mp4"
            class="rounded-3xl">
          </video>
        </div>
        <div class="lg:w-1/2">
          <div class="content full-width">
            <div class="sec-head mb-30">
              <h6 class="sub-title mb-15 main-color">{{ t('pageHome.sessionSkills.subtitle') }}</h6>
              <h2>{{ t('pageHome.sessionSkills.title') }}</h2>
            </div>
            <div class="row justify-content-end">

              <div class="text">
                <p>
                  {{ t('pageHome.sessionSkills.description') }}
                </p>
              </div>
              <div class="mt-50">
                <div class="skills-box">
                  <div class="mb-40 skill-item">
                    <h5 class="sub-title mb-15">{{ t('pageHome.sessionSkills.skills.webDevelopment') }}</h5>
                    <div class="skill-progress">
                      <div class="progres" data-value="95%"></div>
                    </div>
                  </div>
                  <div class="mb-40 skill-item">
                    <h5 class="sub-title mb-15">{{ t('pageHome.sessionSkills.skills.appDevelopment') }}</h5>
                    <div class="skill-progress">
                      <div class="progres" data-value="90%"></div>
                    </div>
                  </div>
                  <div class="mb-40 skill-item">
                    <h5 class="sub-title mb-15">{{ t('pageHome.sessionSkills.skills.digitalMarketing') }}</h5>
                    <div class="skill-progress">
                      <div class="progres" data-value="85%"></div>
                    </div>
                  </div>
                  <div class="skill-item">
                    <h5 class="sub-title mb-15">{{ t('pageHome.sessionSkills.skills.workflowAutomation') }}</h5>
                    <div class="skill-progress">
                      <div class="progres" data-value="90%"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import isInView from '@/common/isInView';
const { t } = useI18n()

function handleShowProgressValues() {
  isInView({
    selector: '.skill-progress .progres',
    isElements: true,
    callback: (element) => {
      element.style.width = element.getAttribute('data-value');
    },
  });
}

onMounted(() => {
  window.addEventListener('scroll', handleShowProgressValues);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleShowProgressValues);
});
</script>
