<template>
  <section class="contact section-padding" data-scroll-index="6">
    <div class="container">
      <div class="flex flex-col lg:flex-row">
        <div class="w-full valign lg:w-2/5">
          <div class="sec-head info-box full-width md-mb80">
            <div class="phone fz-30 fw-600 underline main-color">
              <a href="#0">+1 840 841 25 69</a>
            </div>
            <div class="morinfo mt-50 pb-30 bord-thin-bottom">
              <h6 class="mb-15">Dirección</h6>
              <p>Besòs 1, 08174 Sant Cugat del Vallès, Barcelona</p>
            </div>
            <div class="morinfo mt-30 pb-30 bord-thin-bottom">
              <h6 class="mb-15">Email</h6>
              <p>contacto@titansdev.es</p>
            </div>

            <div class="social-icon-circle mt-50 flex flex-row gap-x-3">
              <a href="#0">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#0">
                <i class="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="w-full offset-lg-1 valign lg:w-3/5">
          <div class="full-width">
            <div class="sec-head mb-50">
              <h6 class="sub-title main-color mb-15">Vamos a hablar</h6>
              <h3 class="text-u ls1">
                Enviar un <span class="fw-200">mensaje</span>
              </h3>
            </div>
            <form id="contact-form" class="form2" @submit.prevent="submitForm">
              <div class="messages"></div>

              <div class="controls row">
                <div class="w-1/2">
                  <div class="form-group mb-30">
                    <input id="form_first_name" type="text" name="first_name" placeholder="Nombre"
                      v-model="form.first_name" required />
                  </div>
                </div>

                <div class="w-1/2">
                  <div class="form-group mb-30">
                    <input id="form_last_name" type="text" name="last_name" placeholder="Apellido"
                      v-model="form.last_name" required />
                  </div>
                </div>

                <div class="w-full lg:w-1/2">
                  <div class="form-group mb-30">
                    <input id="form_email" type="email" name="email" placeholder="E-mail" v-model="form.email"
                      required />
                  </div>
                </div>

                <div class="w-full lg:w-1/2">
                  <div class="form-group mb-30 flex flex-row flex-nowrap items-center">
                    <USelect v-model="form.prefix_code" :options="countryCodes" option-attribute="country"
                      value-attribute="code" :placeholder="'🇪🇸 +34'" color="transparent" class="w-32">
                      <template #label>
                        {{ form.prefix_code }}
                      </template>
                      <template #option="{ option }">
                        {{ option.country }} ({{ option.code }})
                      </template>
                    </USelect>
                    <input id="form_phone" type="text" name="phone" placeholder="Teléfono" v-model="form.phone"
                      required />
                  </div>
                </div>

                <div class="w-full">
                  <div class="form-group mb-30">
                    <input id="form_subject" type="text" name="subject" placeholder="Asunto" v-model="form.subject" />
                  </div>
                </div>

                <div class="w-full">
                  <div class="form-group">
                    <textarea id="form_message" name="message" placeholder="Mensaje" v-model="form.message" rows="4"
                      required></textarea>
                  </div>
                  <div class="mt-30">
                    <button type="submit" class="butn butn-full butn-bord radius-30">
                      <span class="text">Enviar</span>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

const countryCodes = [
  { country: '🇪🇸 +34', code: '+34' },
  { country: '🇩🇪 +49', code: '+49' },
  { country: '🇧🇷 +55', code: '+55' },
  { country: '🇺🇸 +1', code: '+1' },
  { country: '🇵🇹 +351', code: '+351' },
  { country: '🇫🇷 +33', code: '+33' },
]

const form = ref({
  first_name: '',
  last_name: '',
  email: '',
  prefix_code: '+34',
  phone: '',
  subject: '',
  message: ''
});

const submitForm = async () => {
  const webhookUrl = 'https://primary-production-a860.up.railway.app/webhook/b8923c39-b30b-454c-b816-b4f497a164c3';

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form.value)
    });

    if (response.ok) {
      alert('Mensagem enviada com sucesso!');
      // Clean the form
      form.value = {
        first_name: '',
        last_name: '',
        email: '',
        prefix_code: '+34',
        phone: '',
        subject: '',
        message: ''
      };
    } else {
      alert('Erro ao enviar a mensagem.');
    }
  } catch (error) {
    console.error('Erro:', error);
    alert('Erro ao enviar a mensagem.');
  }
};
</script>