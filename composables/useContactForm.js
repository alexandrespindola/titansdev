export function useContactForm() {
  const { countryCodes } = useCountryCodes();

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
    errorMessage.value = "";

    // webhook integration
    const config = useRuntimeConfig();
    const webhookUrl = config.public.formWebhookUrl;

    try {
      const formData = { ...form.value };
      delete formData["bot-field"];

      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        Object.keys(form.value).forEach((key) => {
          if (typeof form.value[key] === "boolean") {
            form.value[key] = false;
          } else {
            form.value[key] = "";
          }
        });
        form.value.prefix_code = "+34";

        await navigateTo("/gracias");
      } else {
        throw new Error("Server response failure");
      }
    } catch (error) {
      console.error("Error:", error);
      errorMessage.value =
        "Error al enviar el mensaje. Vuelva a intentarlo más tarde.";
    } finally {
      isSubmitting.value = false;
    }
  };

  return {
    countryCodes,
    form,
    submitForm,
    isSubmitting,
    errorMessage,
  };
}
