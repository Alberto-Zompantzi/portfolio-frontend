import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_96en384';
const TEMPLATE_ID = 'template_9ry45mb';
const PUBLIC_KEY = 'ZgvYoOJRnRWKWYs4T';

export const sendEmail = async (formElement: HTMLFormElement) => {
  return await emailjs.sendForm(
    SERVICE_ID,
    TEMPLATE_ID,
    formElement,
    PUBLIC_KEY
  );
};
