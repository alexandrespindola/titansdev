<template>
  <header>
    <nav class="z-10 navbar navbar-expand-lg nav-crev">
      <div class="container flex flex-row p-4 flex-nowrap">
        <NuxtLinkLocale to="/" class="logo w-36">
          <NuxtImg src="/dark/assets/imgs/titansdev-logo-white.webp" alt="logo" />
        </NuxtLinkLocale>

        <ul class="flex-row hidden md:flex md:gap-6 lg:gap-12">
          <NuxtLinkLocale to="/" class="font-bold menu">Home</NuxtLinkLocale>
          <NuxtLinkLocale to="/servicios" class="font-bold menu">Servicios</NuxtLinkLocale>
          <NuxtLinkLocale to="/desarrollo-web" class="font-bold menu">Páginas Web</NuxtLinkLocale>
          <NuxtLinkLocale to="/quienes-somos" class="font-bold menu">Quiénes Somos</NuxtLinkLocale>
          <NuxtLinkLocale to="/contacto" class="font-bold menu">Contacto</NuxtLinkLocale>
          <CommonLanguageSelectorVue />
        </ul>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        </button>

        <div class="cursor-pointer topnav">
          <UIcon @click="toggleMenu" name="hugeicons:menu-11"></UIcon>
        </div>
      </div>
    </nav>

    <div :class="`hamenu one-scroll ${isOpen ? 'open' : ''}`">
      <NuxtLinkLocale to="/">
        <div class="logo w-36">
          <NuxtImg src="/dark/assets/imgs/titansdev-logo-white.webp" alt="" />
        </div>
      </NuxtLinkLocale>
      <div @click="closeMenu" class="cursor-pointer close-menu">
        <UIcon @click="toggleMenu" name="hugeicons:cancel-01"></UIcon>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-lg-2">
            <div class="menu-text">
              <div class="text">
                <h2>Menu</h2>
              </div>
            </div>
          </div>
          <div class="col-lg-7">
            <div class="menu-links">
              <ul class="main-menu rest">
                <li @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
                  <div class="o-hidden">
                    <NuxtLinkLocale to="/" class="cursor-pointer link dmenu" @click="closeMenu">
                      <span data-text="Home">Home</span>
                    </NuxtLinkLocale>
                  </div>
                </li>
                <li @click="toggleSubMenu" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
                  <div class="o-hidden">
                    <div class="cursor-pointer link dmenu">
                      <span data-text="Servicios">Servicios</span>
                      <i></i>
                    </div>
                  </div>
                  <div class="sub-menu no-bord">
                    <ul>
                      <li>
                        <div class="o-hidden">
                          <NuxtLinkLocale to="/desarrollo-web" class="cursor-pointer link sub-dmenu" @click="closeMenu">
                            <span data-text="Páginas Web"> Páginas Web </span>
                          </NuxtLinkLocale>
                        </div>
                      </li>
                      <li>
                        <div class="o-hidden">
                          <NuxtLinkLocale to="/servicios" class="cursor-pointer link sub-dmenu" @click="closeMenu">
                            <span data-text="Sistemas Web"> Sistemas Web </span>
                          </NuxtLinkLocale>
                        </div>
                      </li>
                      <li>
                        <div class="o-hidden">
                          <NuxtLinkLocale to="/servicios" class="cursor-pointer link sub-dmenu" @click="closeMenu">
                            <span data-text="Automatización de Workflows">Automatización de Workflows
                            </span>
                          </NuxtLinkLocale>
                        </div>
                      </li>
                      <li>
                        <div class="o-hidden">
                          <NuxtLinkLocale to="/servicios" class="cursor-pointer link sub-dmenu" @click="closeMenu">
                            <span data-text="Marketing Digital"> Marketing Digital </span>
                          </NuxtLinkLocale>
                        </div>
                      </li>
                      <li>
                        <div class="o-hidden">
                          <NuxtLinkLocale to="/servicios" class="cursor-pointer link sub-dmenu" @click="closeMenu">
                            <span data-text="Google Mi Negócio"> Google Mi Negócio </span>
                          </NuxtLinkLocale>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
                  <div class="o-hidden">
                    <NuxtLinkLocale to="/quienes-somos" class="cursor-pointer link dmenu" @click="closeMenu">
                      <span data-text="Quienes Somos">Quiénes Somos</span>
                    </NuxtLinkLocale>
                  </div>
                </li>
                <li @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
                  <div class="o-hidden">
                    <NuxtLinkLocale to="/contacto" class="cursor-pointer link dmenu" @click="closeMenu">
                      <span data-text="Contacto Us">Contacto</span>
                    </NuxtLinkLocale>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="cont-info">
              <div class="item mb-50">
                <h6 class="sub-title mb-15 opacity-7">Dirección</h6>
                <h5>
                  Aldea Portecelos, 27 - Parada de Amoeiro, Ourense, España - CP 32170
                </h5>
              </div>
              <div class="item mb-50">
                <h6 class="sub-title mb-15 opacity-7">Redes Sociales</h6>
                <ul class="rest social-text">
                  <li class="mb-10">
                    <a href="#0" class="hover-this">
                      <span class="hover-anim">Facebook</span>
                    </a>
                  </li>
                  <li class="mb-10">
                    <a href="#0" class="hover-this">
                      <span class="hover-anim">Instagram</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="mb-40 item">
                <h6 class="sub-title mb-15 opacity-7">Contacto</h6>
                <h5>
                  <a href="mailto:contacto@titansdev.es">contacto@titansdev.es</a>
                </h5>
                <h5 class="mt-10 underline">
                  <NuxtLink to="https://wa.me/+34640500184">+34 640 500 184</NuxtLink>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>

import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const isOpen = ref(false);

function toggleMenu() {
  isOpen.value = !isOpen.value;
}

function closeMenu() {
  isOpen.value = false;
}

watch(isOpen, (newValue) => {
  if (newValue) {
    document.body.classList.add('hamenu-open');
  } else {
    document.body.classList.remove('hamenu-open');
  }
});

function handleMouseEnter(event) {
  document.querySelectorAll('ul.main-menu li').forEach((item) => {
    item.classList.add('hoverd');
  });
  event.currentTarget.classList.remove('hoverd');
}

function handleMouseLeave() {
  document
    .querySelectorAll('ul.main-menu li')
    .forEach((item) => item.classList.remove('hoverd'));
}

function toggleSubMenu(event) {
  const subMenu = event.currentTarget.querySelector('.sub-menu');
  const isSubMenuOpen = subMenu?.classList.contains('sub-open');

  // Fechar todos os submenus
  document.querySelectorAll('.sub-menu').forEach((item) => {
    item.classList.remove('sub-open');
    item.style.maxHeight = '0';
    item.previousElementSibling.children[0].classList.remove('dopen');
  });

  // Alternar o submenu clicado
  if (subMenu && !isSubMenuOpen) {
    subMenu.classList.add('sub-open');
    subMenu.style.maxHeight = '450px';
    subMenu.previousElementSibling.children[0].classList.add('dopen');
  } else {
    // Se o submenu já estava aberto, feche o menu principal
    closeMenu();
  }
}

</script>

<style lang="scss" scoped>
.nav-crev {
  z-index: 10;
}

.hamenu {
  position: fixed;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: #000;
  transition: left 0.3s ease;
  overflow-y: auto;
  z-index: 50;
}

.hamenu.open {
  left: 0;
}

body.hamenu-open {
  overflow: hidden;
  height: 100vh;
  position: fixed;
  width: 100%;
}
</style>