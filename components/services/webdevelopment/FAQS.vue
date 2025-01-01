<template>
  <section class="faqs py-[3rem] md:py-[7rem]">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-lg-5 valign">
          <div class="faq-img md-mb50">
            <NuxtImg src="/dark/assets/imgs/intro/faq.webp" alt="" class="rounded-3xl" />
          </div>
        </div>
        <div class="col-lg-6 valign">
          <div class="full-width">
            <div class="sec-head mb-50">
              <h6 class="sub-title main-color mb-15">¿Quieres saber más?</h6>
              <h3>FAQ (Preguntas Frecuentes)</h3>
            </div>
            <UAccordion :items="faqItems" :ui="{ wrapper: 'flex flex-col w-full' }">
              <template #default="{ item, open }">
                <div class="border-b border-[#252525] ">
                  <UButton color="black" variant="ghost" class="flex flex-row justify-start w-full gap-3"
                    :ui="{ rounded: 'rounded-none', padding: { sm: 'p-3' } }">
                    <template #leading>
                      <div
                        class="flex flex-row w-12 -my-1 bg-transparent rounded-full">
                        <UIcon :name="item.icon" class="w-7 h-7 text-[#40ea1e]" />
                      </div>
                    </template>
                    <span class="text-xl text-left">{{ item.question }}</span>
                    <template #trailing>
                      <UIcon name="i-heroicons-chevron-right-20-solid"
                        class="w-5 h-5 transition-transform duration-200 transform ms-auto"
                        :class="[open && 'rotate-90']" />
                    </template>
                  </UButton>
                </div>
              </template>
              <template #item="{ item }">
                <div class="px-3 py-2 text-lg text-white">
                  {{ item.answer }}
                </div>
              </template>
            </UAccordion>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
const { t } = useI18n()
const { faqWebdevelopmentItems } = useFaqWebdevelopmentItems()

interface FAQItem {
  question: string;
  icon: string;
  defaultOpen?: boolean;
  answer: string;
}

const faqItems = ref<FAQItem[]>([]);

onMounted(() => {
  faqItems.value = faqWebdevelopmentItems.value.map(item => ({
    question: t(item.question),
    icon: item.icon,
    defaultOpen: item.defaultOpen,
    answer: t(item.answer)
  }))
})
</script>