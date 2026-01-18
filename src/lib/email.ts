import emailjs from "@emailjs/browser";

interface EmailData {
  nom: string;
  email: string;
  telephone: string;
  formation: string;
  message: string;
}

export const sendEmail = async (data: EmailData): Promise<void> => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    console.warn("EmailJS non configuré - emails ne seront pas envoyés");
    return;
  }

  const templateParams = {
    name: data.nom,
    email: data.email,
    telephone: data.telephone,
    formation: data.formation,
    message: data.message || "Aucun message",
    title: "Nouvelle inscription - Formation WordPress",
    reply_to: data.email,
    sent_date : new Date().getFullYear()
  };

  try {
    await emailjs.send(serviceId, templateId, templateParams, publicKey);
    console.log("Email envoyé avec succès");
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error);
    throw error;
  }
};
