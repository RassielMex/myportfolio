"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactFormSchema } from "../../models/contact-form-schema";

export default function ContactForm() {
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm({ resolver: yupResolver(contactFormSchema) });

  const onSubmit = async (data) => {
    try {
      const emailJSData = {
        service_id: process.env.EMAILJS_SERVICE_ID,
        template_id: process.env.EMAILJS_TEMPLATE_ID,
        user_id: process.env.EMAILJS_PUBLIC,
        template_params: { ...data },
      };

      const response = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(emailJSData),
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="" onSubmit={handleSubmit(onSubmit)}>
      <fieldset className="gap-x-2 md:flex ">
        <div className="mb-2">
          <input
            {...register("name")}
            placeholder="Nombre"
            className="w-full p-4 rounded-md bg-dark_10 text-ligt_60"
          />
          {errors?.name && (
            <span className="text-red-500 font-light text-sm">
              {errors?.name?.message}
            </span>
          )}
        </div>
        <div className="mb-2">
          <input
            {...register("email")}
            placeholder="Email"
            className="w-full p-4 rounded-md bg-dark_10 text-ligt_60"
          />
          {errors?.email && (
            <span className="text-red-500 font-light text-sm">
              {errors?.email?.message}
            </span>
          )}
        </div>
      </fieldset>
      <div className="mb-2">
        <textarea
          {...register("message")}
          placeholder="Mensaje"
          className="w-full p-4 rounded-md bg-dark_10 text-ligt_60 h-48 max-h-48"
        />
        {errors?.message && (
          <span className="text-red-500 font-light text-sm">
            {errors?.message?.message}
          </span>
        )}
      </div>
      <button
        type="submit"
        className="w-full p-4 rounded-md mb-2 bg-green_60 text-dark_2 "
      >
        ¡Enviar!
      </button>
    </form>
  );
}
