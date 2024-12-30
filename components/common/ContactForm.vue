<template>
  <form id="contact-form" class="form2" @submit.prevent="submitForm">
    <input type="text" name="bot-field" v-model="form['bot-field']" style="display: none;" />
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
        <div class="flex flex-row items-center form-group mb-30 flex-nowrap">
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
          <UToggle v-model="form.acceptance_privacy_terms" name="acceptance_privacy_terms" required />
        </div>
        <span class="text-red-500">*</span>
        <p>Estoy de acuerdo con la <NuxtLinkLocale to="/politica-de-privacidad" class="main-color">Política de Privacidad.
          </NuxtLinkLocale>
        </p>
      </div>
      <div v-if="errorMessage" class="mt-2 text-red-500">
        {{ errorMessage }}
      </div>
      <div class="mt-30">
        <button type="submit" class="butn butn-full butn-bord radius-30" :disabled="isSubmitting">
          <span class="text">{{ isSubmitting ? 'Enviando...' : 'Enviar' }}</span>
        </button>
      </div>
    </div>
  </form>
</template>

<script lang="ts" setup>
import { useContactForm } from '~/composables/useContactForm';

const { countryCodes, form, submitForm, isSubmitting, errorMessage } = useContactForm();

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
    lead_source: 'Website',
    'bot-field': ''
  };
});

</script>