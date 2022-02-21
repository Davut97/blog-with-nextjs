import emailjs from "@emailjs/browser";
export const submitEmail = async (form) => {
  const serviceId = "service_4ovke4t";
  const templateId = "template_jo5s0S0i";
  const userId = "user_owlc5OsZ173Tkward1CrE";
  console.log(form.current);
  const result = await emailjs.sendForm(serviceId, templateId, form.current, userId);
  return result;
};
