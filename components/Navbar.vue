<template>
  <nav class="navbar navbar-expand-lg nav-crev z-10">
    <div class="container p-4 flex flex-row flex-nowrap">
      <NuxtLink to="/" class="logo w-36">
        <img src="/dark/assets/imgs/titansdev-logo-white.webp" alt="logo" />
      </NuxtLink>

      <ul class="hidden md:flex flex-row md:gap-6 lg:gap-12">
        <NuxtLink to="/" class="menu font-bold">Home</NuxtLink>
        <NuxtLink to="/servicios" class="menu font-bold">Servicios</NuxtLink>
        <NuxtLink to="/desarrollo-web" class="menu font-bold">Páginas Web</NuxtLink>
        <NuxtLink to="/quienes-somos" class="menu font-bold">Quiénes Somos</NuxtLink>
        <NuxtLink to="/contacto" class="menu font-bold">Contacto</NuxtLink>
      </ul>

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
    <NuxtLink to="/">
      <div class="logo w-36">
        <img src="/dark/assets/imgs/titansdev-logo-white.webp" alt="" />
      </div>
    </NuxtLink>
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
                <div class="o-hidden">
                  <NuxtLink to="/" class="link cursor-pointer dmenu" @click="closeMenu">
                    <span data-text="Home">Home</span>
                  </NuxtLink>
                </div>
              </li>
              <li @click="toggleSubMenu" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
                <div class="o-hidden">
                  <div class="link cursor-pointer dmenu">
                    <span data-text="Servicios">Servicios</span>
                    <i></i>
                  </div>
                </div>
                <div class="sub-menu no-bord">
                  <ul>
                    <li>
                      <div class="o-hidden">
                        <NuxtLink to="/desarrollo-web" class="link cursor-pointer sub-dmenu" @click="closeMenu">
                          <span data-text="Páginas Web"> Páginas Web </span>
                        </NuxtLink>
                      </div>
                    </li>
                    <li>
                      <div class="o-hidden">
                        <NuxtLink to="/servicios" class="link cursor-pointer sub-dmenu" @click="closeMenu">
                          <span data-text="Sistemas Web"> Sistemas Web </span>
                        </NuxtLink>
                      </div>
                    </li>
                    <li>
                      <div class="o-hidden">
                        <NuxtLink to="/servicios" class="link cursor-pointer sub-dmenu" @click="closeMenu">
                          <span data-text="Apps Móviles"> Apps Móviles </span>
                        </NuxtLink>
                      </div>
                    </li>
                    <li>
                      <div class="o-hidden">
                        <NuxtLink to="/servicios" class="link cursor-pointer sub-dmenu" @click="closeMenu">
                          <span data-text="Automatización de Workflows">Automatización de Workflows
                          </span>
                        </NuxtLink>
                      </div>
                    </li>
                    <li>
                      <div class="o-hidden">
                        <NuxtLink to="/servicios" class="link cursor-pointer sub-dmenu" @click="closeMenu">
                          <span data-text="Marketing Digital"> Marketing Digital </span>
                        </NuxtLink>
                      </div>
                    </li>
                    <li>
                      <div class="o-hidden">
                        <NuxtLink to="/servicios" class="link cursor-pointer sub-dmenu" @click="closeMenu">
                          <span data-text="Google Mi Negócio"> Google Mi Negócio </span>
                        </NuxtLink>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
                <div class="o-hidden">
                  <NuxtLink to="/quienes-somos" class="link cursor-pointer dmenu" @click="closeMenu">
                    <span data-text="Quienes Somos">Quiénes Somos</span>
                  </NuxtLink>
                </div>
              </li>
              <li @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
                <div class="o-hidden">
                  <NuxtLink to="/contacto" class="link cursor-pointer dmenu" @click="closeMenu">
                    <span data-text="Contacto Us">Contacto</span>
                  </NuxtLink>
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