<template>
  <nav class="navbar navbar-expand-lg nav-crev">
    <div class="container p-4 flex flex-row flex-nowrap">
      <a class="logo w-36" href="/">
        <img src="/dark/assets/imgs/titansdev-logo-white.webp" alt="logo" />
      </a>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      </button>

      <div class="topnav">
        <div @click="toggleMenu" class="cursor-pointer flex flex-col justify-center">
          <span class="icon ti-align-right"></span>
        </div>
      </div>
    </div>
  </nav>

  <div :class="`hamenu one-scroll ${isOpen ? 'open' : ''}`">
    <div class="logo w-36">
      <img src="/dark/assets/imgs/titansdev-logo-white.webp" alt="" />
    </div>
    <div @click="closeMenu" class="close-menu cursor-pointer ti-close"></div>
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
                <div class="o-hidden ">
                  <a href="/" class="link cursor-pointer dmenu ">
                    <span class="fill-text" data-text="Home"> Home </span>
                  </a>
                </div>
              </li>
              <li @click="toggleSubMenu" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
                <div class="o-hidden">
                  <div class="link cursor-pointer dmenu">
                    <span class="fill-text" data-text="Servicios"> Servicios </span>
                    <i></i>
                  </div>
                </div>
                <div class="sub-menu no-bord">
                  <ul>
                    <li>
                      <div class="o-hidden">
                        <a href="/servicios" class="link cursor-pointer sub-dmenu">
                          <span class="fill-text" data-text="Páginas Web"> Páginas Web </span>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div class="o-hidden">
                        <a href="/servicios" class="link cursor-pointer sub-dmenu">
                          <span class="fill-text" data-text="Sistemas Web"> Sistemas Web </span>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div class="o-hidden">
                        <a href="/servicios" class="link cursor-pointer sub-dmenu">
                          <span class="fill-text" data-text="Apps Móviles"> Apps Móviles </span>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div class="o-hidden">
                        <a href="/servicios" class="link cursor-pointer sub-dmenu">
                          <span class="fill-text" data-text="Automatización de Workflows"> Automatización de Workflows </span>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div class="o-hidden">
                        <a href="/servicios" class="link cursor-pointer sub-dmenu">
                          <span class="fill-text" data-text="Marketing Digital"> Marketing Digital </span>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div class="o-hidden">
                        <a href="/servicios" class="link cursor-pointer sub-dmenu">
                          <span class="fill-text" data-text="Google Mi Negócio"> Google Mi Negócio </span>
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
                <div class="o-hidden">
                  <a href="/quienes-somos" class="link cursor-pointer dmenu">
                    <span class="fill-text" data-text="Quienes Somos"> Quiénes Somos </span>
                  </a>
                </div>
              </li>
              <li @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
                <div class="o-hidden">
                  <a href="/contacto" class="link">
                    <span class="fill-text" data-text="Contacto Us"> Contacto </span>
                  </a>
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
                541 Melville Geek, <br />
                Palo Alto, CA 94301
              </h5>
            </div>
            <div class="item mb-50">
              <h6 class="sub-title mb-15 opacity-7">Redes Sociales</h6>
              <ul class="rest social-text">
                <li class="mb-10">
                  <a href="#0" class="hover-this">
                    <span class="hover-anim">LinkedIn</span>
                  </a>
                </li>
                <li class="mb-10">
                  <a href="#0" class="hover-this">
                    <span class="hover-anim">Instagram</span>
                  </a>
                </li>
              </ul>
            </div>
            <div class="item mb-40">
              <h6 class="sub-title mb-15 opacity-7">Contacto</h6>
              <h5>
                <a href="mailto:contacto@titansdev.es">contacto@titansdev.es</a>
              </h5>
              <h5 class="underline mt-10">
                <a href="#0">+1 840 841 25 69</a>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

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
  const isOpen = subMenu?.classList.contains('sub-open');

  // Close all sub-menus
  document.querySelectorAll('.sub-menu').forEach((item) => {
    item.classList.remove('sub-open');
    item.style.maxHeight = '0';
    item.previousElementSibling.children[0].classList.remove('dopen');
  });

  // Toggle the clicked sub-menu
  if (subMenu && !isOpen) {
    subMenu.classList.add('sub-open');
    subMenu.style.maxHeight = '450px';
    subMenu.previousElementSibling.children[0].classList.add('dopen');
  }
}

function scrollToSection(id) {
  setTimeout(
    () =>
      document
        .querySelector(`[data-scroll-index="${id}"]`)
        ?.scrollIntoView({ smooth: true }),
    700
  );
}
</script>

<style scoped>
.hamenu {
  position: fixed;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: #000;
  transition: left 0.3s ease;
  overflow-y: auto;
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