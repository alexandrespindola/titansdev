<template>
  <section class="process">
    <div class="relative isolate px-6 py-24 sm:py-32 lg:px-8">
      <div class="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl" aria-hidden="true">
        <div class="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#2e9c18] to-[#40ea1e] opacity-30" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
      </div>
      <div class="mx-auto max-w-4xl text-center">
        <h2 class="sub-title text-[#40ea1e]">Precios</h2>
        <h3 class="mt-2 text-balance text-5xl font-semibold tracking-tight text-white sm:text-6xl">Choose the right plan for you</h3>
      </div>
      <p class="mx-auto mt-6 max-w-2xl text-pretty text-center">Choose an affordable plan that’s packed with the best features for engaging your audience, creating customer loyalty, and driving sales.</p>
      <div class="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
        <div v-for="(tier, tierIdx) in tiers" :key="tier.id" :class="[tier.featured ? 'relative bg-black shadow-2xl' : 'bg-white sm:mx-8 lg:mx-0', tier.featured ? '' : tierIdx === 0 ? 'rounded-t-3xl sm:rounded-b-none lg:rounded-bl-3xl lg:rounded-tr-none' : 'sm:rounded-t-none lg:rounded-bl-none lg:rounded-tr-3xl', 'rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10']">
          <h3 :id="tier.id" :class="[tier.featured ? 'text-[#40ea1e]' : 'text-[#40ea1e]', 'text-base/7 font-semibold']">{{ tier.name }}</h3>
          <p class="mt-4 flex items-baseline gap-x-2">
            <span :class="[tier.featured ? 'text-white' : 'text-gray-900', 'text-5xl font-semibold tracking-tight']">{{ tier.priceMonthly }}</span>
            <span :class="[tier.featured ? 'text-gray-400' : 'text-gray-500', 'text-base']">/month</span>
          </p>
          <p :class="[tier.featured ? 'text-gray-300' : 'text-gray-600', 'mt-6 text-base/7']">{{ tier.description }}</p>
          <ul role="list" :class="[tier.featured ? 'text-gray-300' : 'text-gray-600', 'mt-8 space-y-3 text-sm/6 sm:mt-10']">
            <li v-for="feature in tier.features" :key="feature.title" class="flex gap-x-3">
              <UIcon :name="feature.uicon" class="w-6 h-6"/>
              {{ feature.title }}
            </li>
          </ul>
          <div class="flex flex-row justify-center flex-wrap pt-4">
            <CommonButtonsCtaContact/>
            <CommonButtonsCtaCita/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const tiers = [
  {
    name: 'Hobby',
    id: 'tier-hobby',
    href: '#',
    priceMonthly: '$29',
    description: "The perfect plan if you're just getting started with our product.",
    features: [
      { title: '25 products', uicon: 'hugeicons:cursor-pointer-01' },
      { title: 'Basic support', uicon: 'hugeicons:cursor-pointer-02' }
    ],
    featured: false,
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    href: '#',
    priceMonthly: '$99',
    description: 'Dedicated support and infrastructure for your company.',
    features: [
      { title: 'Unlimited products', uicon: 'hugeicons:cursor-pointer-02' },
      { title: 'Unlimited subscribers', uicon: 'hugeicons:cursor-pointer-02' },
      { title: 'Advanced analytics', uicon: 'hugeicons:cursor-pointer-02' },
      { title: 'Dedicated support representative', uicon: 'hugeicons:cursor-pointer-02' },
      { title: 'Marketing automations', uicon: 'hugeicons:cursor-pointer-02' },
      { title: 'Custom integrations', uicon: 'hugeicons:cursor-pointer-02' }
    ],
    featured: true,
  },
]
</script>