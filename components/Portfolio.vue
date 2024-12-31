<template>
  <section class="portfolio-tab crev my-[7rem]" data-scroll-index="3">
    <div class="container">
      <div class="sec-head mb-80">
        <h6 class="sub-title main-color mb-25">{{ t('pageHome.sessionPortfolio.subtitle') }}</h6>
        <div class="bord pt-25 bord-thin-top d-flex align-items-center">
          <h2 class="fw-600 text-u ls1">
            {{ t('pageHome.sessionPortfolio.title') }} <span class="fw-200">{{ t('pageHome.sessionPortfolio.titleSpan')
              }}</span>
          </h2>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-5 d-flex align-items-center justify-content-center">
          <div class="glry-img">
            <!-- <div id="tab-1" class="bg-img tab-img current" data-background="/dark/assets/imgs/portfolio/jtba.webp">
            </div>
            <div id="tab-2" class="bg-img tab-img" data-background="/dark/assets/imgs/portfolio/pejoterday.webp"></div>
            <div id="tab-3" class="bg-img tab-img"
              data-background="/dark/assets/imgs/portfolio/fisioterapia-pelvica.webp"></div>
            <div id="tab-4" class="bg-img tab-img" data-background="/dark/assets/imgs/portfolio/ifv.webp"></div>
            <div id="tab-5" class="bg-img tab-img"
              data-background="/dark/assets/imgs/portfolio/gnosis-deutschland.webp"></div> -->
            <div v-for="(project, index) in projects" :key="index" :id=project.tab class="bg-img tab-img"
              :class="{ current: index === 0 }" :data-background="project.img"></div>
          </div>
        </div>
        <div class="col-lg-6 offset-lg-1 content">
          <div v-for="(project, key) in projects" :key="key">
            <div @mouseenter="handleMouseEnter" class="cluom mb-30" :data-tab=project.tab>
              <div class="info">
                <h6 class="sub-title opacity-7">{{ t('pageHome.sessionPortfolio.category.webDevelopment') }}</h6>
                <h4>{{ project.title }}</h4>
              </div>
              <div class="img">
                <NuxtImg :src="project.img" alt="" />
              </div>
              <div class="more text-u ls1 fz-12">
                <NuxtLink :to="project.link" target="blank">
                  {{ t('pageHome.sessionPortfolio.cta') }} <i class="ml-15 ti-arrow-top-right"></i>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import loadBackgroudImages from '@/common/loadBackgroudImages';
const { t } = useI18n()

const projects = {
  jtba: {
    tab: 'tab-1',
    title: 'JTBA Perícias',
    category: t('pageHome.sessionPortfolio.category.webDevelopment'),
    link: 'https://www.jtba.com.br/',
    img: '/dark/assets/imgs/portfolio/jtba.webp',
  },
  pejoterday: {
    tab: 'tab-2',
    title: 'PejoterDay',
    category: t('pageHome.sessionPortfolio.category.webDevelopment'),
    link: 'https://pejoterday.com.br',
    img: '/dark/assets/imgs/portfolio/pejoterday.webp',
  },
  fisioterapiaPelvica: {
    tab: 'tab-3',
    title: 'Clínica Pélvica',
    category: t('pageHome.sessionPortfolio.category.webDevelopment'),
    link: 'https://clinicapelvica.com.br/',
    img: '/dark/assets/imgs/portfolio/fisioterapia-pelvica.webp',
  },
  ifv: {
    tab: 'tab-4',
    title: 'IFV',
    category: t('pageHome.sessionPortfolio.category.webDevelopment'),
    link: 'https://ifv.org.br',
    img: '/dark/assets/imgs/portfolio/ifv.webp',
  },
  gnosisDeutschland: {
    tab: 'tab-5',
    title: 'Gnosis Deutschland',
    category: t('pageHome.sessionPortfolio.category.webDevelopment'),
    link: 'https://gnosisdeutschland.org.br',
    img: '/dark/assets/imgs/portfolio/gnosis-deutschland.webp',
  },
}

onMounted(() => {
  loadBackgroudImages();
  document.querySelector('#tab-1').classList.add('current')
});

function handleMouseEnter(event) {
  var tab_id = event.currentTarget.getAttribute('data-tab')

  document.querySelectorAll('.cluom').forEach((el) => {
    el.classList.remove('current')
  })
  event.currentTarget.classList.add('current')

  document.querySelectorAll('.glry-img .tab-img').forEach((el) => el.classList.remove('current'))
  document.querySelector('#' + tab_id).classList.add('current')

  if (event.currentTarget.classList.contains('current')) return false
}

function handleMouseLeave() {
  document.querySelectorAll('.glry-img .tab-img').forEach((el) => el.classList.remove('current'))
}
</script>
