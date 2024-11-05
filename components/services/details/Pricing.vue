<template>
  <section class="process">
    <div class="relative isolate px-6 py-24 sm:py-32 lg:px-8">
      <div class="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl" aria-hidden="true">
        <div class="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#2e9c18] to-[#40ea1e] opacity-30"
          style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
      </div>
      <div class="mx-auto max-w-4xl text-center">
        <h2 class="sub-title text-[#40ea1e]">Precios</h2>
        <h3 class="mt-2 text-balance text-5xl font-semibold tracking-tight text-white sm:text-6xl">Elija el mejor plan
          para usted</h3>
      </div>
      <p class="mx-auto mt-6 max-w-2xl text-pretty text-center">Elija un plan asequible con las mejores funciones para atraer a su público, fidelizar a sus clientes e impulsar las ventas.</p>
      <div
        class="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-7xl lg:grid-cols-3">
        <div v-for="(tier, tierIdx) in tiers" :key="tier.id"
          :class="[tier.featured ? 'relative bg-gradient-to-br from-[#141414] to-black  shadow-2xl' : 'bg-gradient-to-br from-white to-[#f5f5f5]  sm:mx-8 lg:mx-0', tier.featured ? '' : tierIdx === 0 ? 'rounded-t-3xl sm:rounded-b-none lg:rounded-bl-3xl lg:rounded-tr-none' : 'sm:rounded-t-none lg:rounded-bl-none lg:rounded-tr-3xl', 'rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10']">
          <h3 :id="tier.id" :class="[tier.featured ? 'text-[#40ea1e]' : 'text-[#1a1a1a]', 'text-base/7 font-semibold']">
            {{ tier.name }}</h3>
          <div class="mt-4 flex items-baseline gap-x-2">
          <div v-show="tier.id != 'paquete-premium'">
            <span :class="[tier.featured ? 'text-gray-400' : 'text-gray-500', 'text-base']">A partir de</span>
          </div>
          <div>
            <span
              :class="[tier.featured ? 'text-white' : 'text-gray-900', tier.id != 'paquete-premium' ? 'text-5xl' : 'text-4xl', 'font-semibold tracking-tight']">
              {{ tier.priceMonthly }}
            </span>
          </div>
          <div v-show="tier.id != 'paquete-premium'">
            <span :class="[tier.featured ? 'text-gray-400' : 'text-gray-500', 'text-base']"> + IVA</span>
          </div>
          </div>
          <p :class="[tier.featured ? 'text-gray-300' : 'text-gray-600', 'mt-6 text-base/7']">{{ tier.description }}</p>
          <ul role="list"
            :class="[tier.featured ? 'text-gray-300' : 'text-gray-600', 'mt-8 space-y-3 text-sm/6 sm:mt-10']">
            <li v-for="feature in tier.features" :key="feature.title" :class="[tier.featured ? 'font-medium':'', 'flex text-base gap-x-3']">
              <UIcon :name="feature.uicon" :class="[tier.featured ? 'main-color': '', 'w-7 h-7 self-center']" />
              {{ feature.title }}
            </li>
          </ul>
        </div>

      </div>
      <div class="flex flex-col justify-center items-center lg:flex-row lg:gap-x-8">
        <CommonButtonsCtaContact />
        <CommonButtonsCtaCita />
      </div>
    </div>
  </section>
</template>

<script setup>
const tiers = [
  {
    name: 'Paquete Básico',
    id: 'paquete-basico',
    href: '#',
    priceMonthly: '€450',
    description: "Ideal para pequeñas empresas que buscan establecer su presencia en línea con un sitio web profesional y funcional.",
    features: [
      { title: 'Diseño de 1 a 10 páginas', uicon: 'hugeicons:laptop-programming' },
      { title: 'Hospedaje y dominio incluidos', uicon: 'hugeicons:hard-drive' },
      { title: 'Diseño responsive para móviles', uicon: 'hugeicons:laptop-phone-sync' },
      { title: 'Optimización SEO básica', uicon: 'hugeicons:seo' },
      { title: 'Formulario de contacto', uicon: 'hugeicons:file-01' },
      { title: 'Integración con redes sociales', uicon: 'hugeicons:marketing' },
    ],
    featured: false,
  },
  {
    name: 'Paquete Profesional',
    id: 'paquete-profesional',
    href: '#',
    priceMonthly: '€950',
    description: 'Perfecto para negocios en crecimiento que necesitan más que un sitio web estático para interactuar con sus clientes.',
    features: [
      { title: 'Todo lo del Paquete Básico', uicon: 'hugeicons:checkmark-badge-01' },
      { title: 'Sistema de citas online', uicon: 'hugeicons:time-schedule' },
      { title: 'Notificaciones por WhatsApp', uicon: 'hugeicons:whatsapp' },
      { title: 'Configuración de Google Mi Negocio', uicon: 'hugeicons:google' },
      { title: 'Crecación de contenido para blog', uicon: 'hugeicons:file-edit' },
      { title: 'Galería de productos/servicios', uicon: 'hugeicons:paragraph-bullets-point-01' },
      { title: 'Automatización de marketing básica', uicon: 'hugeicons:workflow-square-05' },
      { title: 'Integración con CRM básico', uicon: 'hugeicons:user-account' },
      { title: 'Optimización para motores de búsqueda avanzada', uicon: 'hugeicons:global-search' },
    ],
    featured: true,
  },
  {
    name: 'Paquete Premium',
    id: 'paquete-premium',
    href: '#',
    priceMonthly: 'Consultar',
    description: "Solución integral para empresas que requieren sistemas web complejos y altamente personalizados.",
    features: [
      { title: 'Desarrollo de sistemas web', uicon: 'hugeicons:web-validation' },
      { title: 'Integración con sistemas', uicon: 'hugeicons:workflow-square-10' },
      { title: 'E-commerce (tiendas virtuales)', uicon: 'hugeicons:shopping-cart-check-01' },
      { title: 'Paneles de administración', uicon: 'hugeicons:dashboard-browsing' },
      { title: 'Automatización de procesos', uicon: 'hugeicons:work-update' },
      { title: 'Escalabilidad para crecimiento', uicon: 'hugeicons:computer-cloud' },
    ],
    featured: false,
  },
]
</script>