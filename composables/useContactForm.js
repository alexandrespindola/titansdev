export function useContactForm() {
  const countryCodes = [
    { country: "🇪🇸 +34", code: "+34" }, // Espanha
    { country: "🇩🇪 +49", code: "+49" }, // Alemanha
    { country: "🇦🇩 +376", code: "+376" }, // Andorra
    { country: "🇦🇷 +54", code: "+54" }, // Argentina
    { country: "🇦🇹 +43", code: "+43" }, // Áustria
    { country: "🇧🇪 +32", code: "+32" }, // Bélgica
    { country: "🇧🇴 +591", code: "+591" }, // Bolívia
    { country: "🇧🇷 +55", code: "+55" }, // Brasil
    { country: "🇧🇬 +359", code: "+359" }, // Bulgária
    { country: "🇨🇦 +1", code: "+1" }, // Canadá
    { country: "🇨🇱 +56", code: "+56" }, // Chile
    { country: "🇨🇴 +57", code: "+57" }, // Colômbia
    { country: "🇨🇷 +506", code: "+506" }, // Costa Rica
    { country: "🇨🇺 +53", code: "+53" }, // Cuba
    { country: "🇩🇰 +45", code: "+45" }, // Dinamarca
    { country: "🇩🇴 +1-809", code: "+1-809" }, // República Dominicana
    { country: "🇪🇨 +593", code: "+593" }, // Equador
    { country: "🇸🇻 +503", code: "+503" }, // El Salvador
    { country: "🇺🇸 +1", code: "+1" }, // Estados Unidos
    { country: "🇫🇮 +358", code: "+358" }, // Finlândia
    { country: "🇫🇷 +33", code: "+33" }, // França
    { country: "🇬🇷 +30", code: "+30" }, // Grécia
    { country: "🇬🇹 +502", code: "+502" }, // Guatemala
    { country: "🇭🇳 +504", code: "+504" }, // Honduras
    { country: "🇭🇺 +36", code: "+36" }, // Hungria
    { country: "🇮🇪 +353", code: "+353" }, // Irlanda
    { country: "🇮🇹 +39", code: "+39" }, // Itália
    { country: "🇱🇻 +371", code: "+371" }, // Letônia
    { country: "🇱🇹 +370", code: "+370" }, // Lituânia
    { country: "🇱🇺 +352", code: "+352" }, // Luxemburgo
    { country: "🇲🇹 +356", code: "+356" }, // Malta
    { country: "🇲🇨 +377", code: "+377" }, // Mônaco
    { country: "🇲🇽 +52", code: "+52" }, // México
    { country: "🇳🇮 +505", code: "+505" }, // Nicarágua
    { country: "🇳🇱 +31", code: "+31" }, // Países Baixos
    { country: "🇵🇦 +507", code: "+507" }, // Panamá
    { country: "🇵🇾 +595", code: "+595" }, // Paraguai
    { country: "🇵🇪 +51", code: "+51" }, // Peru
    { country: "🇵🇹 +351", code: "+351" }, // Portugal
    { country: "🇵🇷 +1-787", code: "+1-787" }, // Porto Rico
    { country: "🇬🇧 +44", code: "+44" }, // Reino Unido
    { country: "🇨🇿 +420", code: "+420" }, // República Checa
    { country: "🇷🇴 +40", code: "+40" }, // Romênia
    { country: "🇸🇲 +378", code: "+378" }, // San Marino
    { country: "🇸🇮 +386", code: "+386" }, // Eslovênia
    { country: "🇸🇰 +421", code: "+421" }, // Eslováquia
    { country: "🇸🇪 +46", code: "+46" }, // Suécia
    { country: "🇨🇭 +41", code: "+41" }, // Suíça
    { country: "🇺🇾 +598", code: "+598" }, // Uruguai
    { country: "🇻🇪 +58", code: "+58" }, // Venezuela
  ];

  const form = ref({
    first_name: "",
    last_name: "",
    email: "",
    prefix_code: "+34",
    phone: "",
    subject: "",
    message: "",
    acceptance_receive_marketing_info: false,
    acceptance_privacy_terms: false,
    lead_source: "Website",
    "bot-field": "",
  });

  const isSubmitting = ref(false);
  const errorMessage = ref("");

  const submitForm = async () => {
    if (form.value["bot-field"]) {
      console.log("Possible bot submission detected");
      return;
    }

    if (!form.value.acceptance_privacy_terms) {
      errorMessage.value =
        "Debe aceptar la Política de Privacidad para continuar.";
      return;
    }

    isSubmitting.value = true;
    errorMessage.value = '';

    // Development
    //const webhookUrl = 'https://primary-production-a860.up.railway.app/webhook-test/b8923c39-b30b-454c-b816-b4f497a164c3';

    // Production
    const webhookUrl =
      "https://primary-production-a860.up.railway.app/webhook/b8923c39-b30b-454c-b816-b4f497a164c3";

    try {
      const formData = { ...form.value };
      delete formData['bot-field'];

      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Clear the form after successful submission
        Object.keys(form.value).forEach((key) => {
          if (typeof form.value[key] === "boolean") {
            form.value[key] = false;
          } else {
            form.value[key] = "";
          }
        });
        form.value.prefix_code = "+34";

        // Redirects to the thank you page
        await navigateTo("/gracias");
      } else {
        throw new Error("Server response failure");
      }
    } catch (error) {
      console.error("Error:", error);
      errorMessage.value ="Error al enviar el mensaje. Vuelva a intentarlo más tarde.";
    } finally {
      isSubmitting.value = false
    }
  };

  return {
    countryCodes,
    form,
    submitForm,
    isSubmitting,
    errorMessage
  };
}
