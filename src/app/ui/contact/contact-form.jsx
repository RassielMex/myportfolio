"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactFormSchema } from "../../models/contact-form-schema";

export default function ContactForm() {
  const {
    register,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    handleSubmit,
    setError,
    reset,
  } = useForm({ resolver: yupResolver(contactFormSchema) });

  const onSubmit = async (data) => {
    try {
      const emailJSData = {
        service_id: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        template_id: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        user_id: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC,
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
      if (!response.ok) {
        throw new Error("Request to EmailJS falló");
      }
    } catch (error) {
      console.log(error);
      setError("root", { message: "Ops, su mensaje no pudo enviarse" });
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
        aria-disabled={isSubmitting}
        className="w-full p-4 rounded-md mb-2 bg-green_60 text-dark_2 aria-disabled:bg-slate-500"
      >
        {isSubmitting ? "Loading" : "¡Enviar!"}
      </button>
      {isSubmitSuccessful && (
        <p className="text-green_60 text-center">¡Mensage enviado con éxito!</p>
      )}
      {errors?.root && (
        <p className="text-red-600 text-center">{errors?.root?.message}</p>
      )}
    </form>
  );
}
