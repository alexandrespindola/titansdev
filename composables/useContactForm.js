import { ref } from 'vue';

export function useContactForm() {
  const countryCodes = [
    { country: '🇪🇸', code: '+34' },
    { country: '🇩🇪', code: '+49' },
    { country: '🇧🇷', code: '+55' },
    { country: '🇺🇸', code: '+1' },
    { country: '🇵🇹', code: '+351' },
    { country: '🇫🇷', code: '+33' },
  ];

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

  return {
    countryCodes,
    form,
    submitForm
  };
}