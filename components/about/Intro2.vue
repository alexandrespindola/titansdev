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
                <h4 class="main-color">Nuestra Misión</h4>
                <div class="text mt-30 flex flex-col gap-2">
                  <h5>Tecnología al alcance de todos los emprendedores</h5>
                  <p>
                    Impulsar su crecimiento e innovación ofreciéndoles tecnología asequible y personalizada para
                    alcanzar sus objetivos.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-5 rest">
              <div class="img fit-img bord-thin-left">
                <img src="/dark/assets/imgs/intro/quienes-somos-01.webp" alt="" class="rounded-3xl"/>
              </div>
            </div>
          </div>
          <div class="row flex-col-reverse md:flex-row justify-content-end bord-thin-top rest">
            <div class="col-md-5 rest">
              <div class="img fit-img">
                <img src="/dark/assets/imgs/intro/quienes-somos-02.webp" alt="" class="rounded-3xl"/>
              </div>
            </div>
            <div class="col-md-5 rest">
              <div class="cont bord-thin-left">
                <div class="mb-40">
                  <h2 class="fz-100 numb-font">2.</h2>
                </div>
                <h4 class="main-color">Nuestra Visión</h4>
                <div class="text mt-30 flex flex-col gap-2">
                  <h5>Crear soluciones para pequeñas y medianas empresas</h5>
                  <p>
                    Impulse sus servicios con soporte tecnológico profesional.
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
                  <h4 class="main-color">Nuestros Valores</h4>
                  <div class="text mt-30 flex flex-col gap-2">
                    <h5>Su futuro digital, nuestra experiencia
                    </h5>
                    <p>
                      Compromiso con la innovación, integridad en cada proyecto y dedicación para superar sus
                      expectativas.
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

onMounted(() => {
  loadBackgroudImages();
});
</script>
