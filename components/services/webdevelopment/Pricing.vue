<template>
  <section class="process">
    <div class="relative px-6 py-24 isolate sm:py-32 lg:px-8">
      <div class="absolute inset-x-0 overflow-hidden -top-3 -z-10 transform-gpu px-36 blur-3xl" aria-hidden="true">
        <div class="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#2e9c18] to-[#40ea1e] opacity-30"
          style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
      </div>
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="sub-title text-[#40ea1e]">{{ t('pageDesarrolloWeb.sessionPricing.subtitle') }}</h2>
        <h3 class="mt-2 text-5xl font-semibold tracking-tight text-white text-balance sm:text-6xl">{{ t('pageDesarrolloWeb.sessionPricing.title') }}</h3>
      </div>
      <p class="max-w-2xl mx-auto mt-6 text-center text-pretty">{{ t('pageDesarrolloWeb.sessionPricing.content') }}</p>
      <div
        class="grid items-center max-w-lg grid-cols-1 mx-auto mt-16 gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-7xl lg:grid-cols-3">
        <div v-for="(tier, tierIdx) in tiers" :key="tier.id"
          :class="[tier.featured ? 'relative bg-gradient-to-br from-[#141414] to-black  shadow-2xl' : 'bg-gradient-to-br from-white to-[#f5f5f5]  sm:mx-8 lg:mx-0', tier.featured ? '' : tierIdx === 0 ? 'rounded-t-3xl sm:rounded-b-none lg:rounded-bl-3xl lg:rounded-tr-none' : 'sm:rounded-t-none lg:rounded-bl-none lg:rounded-tr-3xl', 'rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10']">
          <h3 :id="tier.id" :class="[tier.featured ? 'text-[#40ea1e]' : 'text-[#1a1a1a]', 'text-base/7 font-semibold']">
            {{ tier.name }}</h3>
          <div class="flex items-baseline mt-4 gap-x-2">
          <div v-show="tier.id != 'paquete-premium'">
            <span :class="[tier.featured ? 'text-gray-400' : 'text-gray-500', 'text-base']">{{ t('pageDesarrolloWeb.sessionPricing.basic.startingFrom') }}</span>
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
      <div class="flex flex-col items-center justify-center lg:flex-row lg:gap-x-8">
        <CommonButtonsCtaContact />
        <CommonButtonsCtaCita />
      </div>
    </div>
  </section>
</template>

<script setup>
const { t } = useI18n()

const tiers = [
  {
    name: t('pageDesarrolloWeb.sessionPricing.basic.title'),
    id: 'paquete-basico',
    href: '#',
    priceMonthly: '€370',
    description: t('pageDesarrolloWeb.sessionPricing.basic.content'),
    features: [
      { title: t('pageDesarrolloWeb.sessionPricing.basic.list.item1'), uicon: 'hugeicons:laptop-programming' },
      { title: t('pageDesarrolloWeb.sessionPricing.basic.list.item2'), uicon: 'hugeicons:hard-drive' },
      { title: t('pageDesarrolloWeb.sessionPricing.basic.list.item3'), uicon: 'hugeicons:laptop-phone-sync' },
      { title: t('pageDesarrolloWeb.sessionPricing.basic.list.item4'), uicon: 'hugeicons:seo' },
      { title: t('pageDesarrolloWeb.sessionPricing.basic.list.item5'), uicon: 'hugeicons:file-01' },
      { title: t('pageDesarrolloWeb.sessionPricing.basic.list.item6'), uicon: 'hugeicons:marketing' },
    ],
    featured: false,
  },
  {
    name: t('pageDesarrolloWeb.sessionPricing.profesional.title'),
    id: 'paquete-profesional',
    href: '#',
    priceMonthly: '€670',
    description: t('pageDesarrolloWeb.sessionPricing.profesional.content'),
    features: [
      { title: t('pageDesarrolloWeb.sessionPricing.profesional.list.item1'), uicon: 'hugeicons:checkmark-badge-01' },
      { title: t('pageDesarrolloWeb.sessionPricing.profesional.list.item2'), uicon: 'hugeicons:time-schedule' },
      { title: t('pageDesarrolloWeb.sessionPricing.profesional.list.item3'), uicon: 'hugeicons:whatsapp' },
      { title: t('pageDesarrolloWeb.sessionPricing.profesional.list.item4'), uicon: 'hugeicons:google' },
      { title: t('pageDesarrolloWeb.sessionPricing.profesional.list.item5'), uicon: 'hugeicons:file-edit' },
      { title: t('pageDesarrolloWeb.sessionPricing.profesional.list.item6'), uicon: 'hugeicons:paragraph-bullets-point-01' },
      { title: t('pageDesarrolloWeb.sessionPricing.profesional.list.item7'), uicon: 'hugeicons:workflow-square-05' },
      { title: t('pageDesarrolloWeb.sessionPricing.profesional.list.item8'), uicon: 'hugeicons:user-account' },
      { title: t('pageDesarrolloWeb.sessionPricing.profesional.list.item9'), uicon: 'hugeicons:global-search' },
    ],
    featured: true,
  },
  {
    name: t('pageDesarrolloWeb.sessionPricing.premium.title'),
    id: 'paquete-premium',
    href: '#',
    priceMonthly: t('pageDesarrolloWeb.sessionPricing.premium.startingFrom'),
    description: t('pageDesarrolloWeb.sessionPricing.premium.content'),
    features: [
      { title: t('pageDesarrolloWeb.sessionPricing.premium.list.item1'), uicon: 'hugeicons:web-validation' },
      { title: t('pageDesarrolloWeb.sessionPricing.premium.list.item2'), uicon: 'hugeicons:workflow-square-10' },
      { title: t('pageDesarrolloWeb.sessionPricing.premium.list.item3'), uicon: 'hugeicons:shopping-cart-check-01' },
      { title: t('pageDesarrolloWeb.sessionPricing.premium.list.item4'), uicon: 'hugeicons:dashboard-browsing' },
      { title: t('pageDesarrolloWeb.sessionPricing.premium.list.item5'), uicon: 'hugeicons:work-update' },
      { title: t('pageDesarrolloWeb.sessionPricing.premium.list.item6'), uicon: 'hugeicons:computer-cloud' },
    ],
    featured: false,
  },
]
</script>