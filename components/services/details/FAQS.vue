<template>
  <section class="faqs py-[3rem] md:py-[7rem]">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-lg-5 valign">
          <div class="faq-img md-mb50">
            <img src="/dark/assets/imgs/intro/faq.webp" alt="" class="rounded-3xl" />
          </div>
        </div>
        <div class="col-lg-6 valign">
          <div class="full-width">
            <div class="sec-head mb-50">
              <h6 class="sub-title main-color mb-15">¿Quieres saber más?</h6>
              <h3>FAQ (Preguntas Frecuentes)</h3>
            </div>
            <UAccordion :items="faqItems" :ui="{ wrapper: 'flex flex-col w-full' }">
              <template #default="{ item, index, open }">
                <div class="border-b border-[#252525] ">
                  <UButton color="black" variant="ghost" class="w-full flex flex-row gap-3"
                    :ui="{ rounded: 'rounded-none', padding: { sm: 'p-3' } }">
                    <template #leading>
                      <div
                        class="w-12 h-12 rounded-full bg-transparent flex items-center justify-center -my-1">
                        <UIcon :name="item.icon" class="w-7 h-7 text-[#40ea1e]" />
                      </div>
                    </template>
                    <span class="truncate text-xl">{{ item.label }}</span>
                    <template #trailing>
                      <UIcon name="i-heroicons-chevron-right-20-solid"
                        class="w-5 h-5 ms-auto transform transition-transform duration-200"
                        :class="[open && 'rotate-90']" />
                    </template>
                  </UButton>
                </div>
              </template>
              <template #item="{ item }">
                <div class="py-2 px-3 text-lg text-white">
                  {{ item.content }}
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
import faqData from '@/data/faqWebDevelopment.json';
import type { content } from '#tailwind-config';

interface FAQItem {
  label: string;
  icon: string;
  defaultOpen?: boolean;
  content: string;
}

const faqItems = ref<FAQItem[]>([]);

onMounted(() => {
  faqItems.value = faqData.faqItems;
});
</script>