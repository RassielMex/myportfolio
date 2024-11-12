import * as yup from "yup";

const errorMessages = {
  required: "Este campo es requerido",
  email: "Introduzca un email válido",
  max: (max) => {
    return `Este campo no debe exceder los ${max} caracteres`;
  },
};

export const contactFormSchema = yup.object({
  name: yup.string().required(errorMessages.required),
  email: yup
    .string()
    .email(errorMessages.email)
    .required(errorMessages.required),
  message: yup
    .string()
    .required(errorMessages.required)
    .max(200, ({ max }) => {
      return errorMessages.max(max);
    }),
});
