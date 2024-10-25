<template>
  <form id="contact-form" class="form2" @submit.prevent="submitForm" netlify>
    <div class="controls row">
      <div class="w-full md:w-1/2">
        <div class="form-group mb-30">
          <input id="form_first_name" type="text" name="first_name" placeholder="Nombre" v-model="form.first_name"
            required />
        </div>
      </div>

      <div class="w-full md:w-1/2">
        <div class="form-group mb-30">
          <input id="form_last_name" type="text" name="last_name" placeholder="Apellido" v-model="form.last_name"
            required />
        </div>
      </div>

      <div class="w-full lg:w-1/2">
        <div class="form-group mb-30">
          <input id="form_email" type="email" name="email" placeholder="E-mail" v-model="form.email" required />
        </div>
      </div>

      <div class="w-full lg:w-1/2">
        <div class="form-group mb-30 flex flex-row flex-nowrap items-center">
          <USelect v-model="form.prefix_code" :options="countryCodes" option-attribute="country" value-attribute="code"
            :placeholder="'🇪🇸 +34'" color="green" class="w-40">
            <template #label>
              {{ form.prefix_code }}
            </template>
            <template #option="{ option }">
              {{ option.country }} ({{ option.code }})
            </template>
          </USelect>
          <input id="form_phone" type="text" name="phone" placeholder="Teléfono" v-model="form.phone" required />
        </div>
      </div>

      <div class="w-full">
        <div class="form-group mb-30">
          <input id="form_subject" type="text" name="subject" placeholder="Asunto" v-model="form.subject" />
        </div>
      </div>

      <div class="form-group">
        <textarea id="form_message" name="message" placeholder="Mensaje" v-model="form.message" rows="4"
          required></textarea>
      </div>

      <div class="flex flex-row gap-2 pt-4 pb-2">
          <div class="flex flex-col justify-center">
            <UToggle v-model="form.acceptance_receive_marketing_info" name="acceptance_receive_marketing_info" />
          </div>
          <p>Quiero recibir más información sobre los servicios de TitansDev.</p>
        </div>

        <div class="flex flex-row gap-2">
          <div class="flex flex-col justify-center">
            <UToggle v-model="form.acceptance_privacy_terms" name="acceptance_privacy_terms" />
          </div>
          <p><span class="text-red-500">*</span>Estoy de acuerdo con la <NuxtLink to="/politica-de-privacidad" class="main-color">Política de Privacidad.</NuxtLink></p>
        </div>

      <div class="mt-30">
        <button type="submit" class="butn butn-full butn-bord radius-30">
          <span class="text">Enviar</span>
        </button>

      </div>
    </div>
  </form>
</template>

<script lang="ts" setup>
import { useContactForm } from '~/composables/useContactForm';
import { onMounted } from 'vue';

const { countryCodes, form, submitForm } = useContactForm();

onMounted(() => {
  form.value = {
    first_name: '',
    last_name: '',
    email: '',
    prefix_code: '+34',
    phone: '',
    subject: '',
    message: '',
    acceptance_receive_marketing_info: false,
    acceptance_privacy_terms: false,
    lead_source: 'Website'
  };
});

</script>

<style lang="scss" scoped>

@use "@/public/dark/assets/scss/utility/variables" as vars;

</style>