"use client";

import { Mail } from "@/interfaces/mail";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { User, MailIcon, ArrowRightIcon, MessagesSquare, LucideMessageSquareText } from "lucide-react";
import { sendEmail } from "@/actions/server-mail";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

interface FormInputs {
  name: string;
  to: string;
  from: string;
  subject: string;
  text: string;
  html: string;
}

const Form = () => {
  const { handleSubmit, register,formState: { isValid, errors }, reset } = useForm<FormInputs>();
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [emailMessageSend, setEmailMessageSend] = useState<string>('');

  const onSubmit = async (data: FormInputs) => {

    console.log('entro al onsubmit');
    
    const formData = new FormData();

    const { ...mailToSend } = data;

    const html = `
    <h3>Hola mi nombre es <b>${mailToSend.name}</b>y el correo desde donde escribo es: <b>${mailToSend.from }</b></h3>
    <h2>El asunto por el que te escribo es :${mailToSend.subject}</h2>
    <br/>
    <p>${mailToSend.text}</p>
    <p>Gracias</p>
    `

    
    formData.append("to", 'granrah1@gmail.com');
    formData.append("from", mailToSend.from);
    formData.append("subject", mailToSend.subject);
    formData.append("text", mailToSend.text);
    formData.append("html", html);

    const resp = await sendEmail(formData);

    const {ok, message} = resp

    if (!ok) {
      setErrorMessage(message.message);
    }

    if (resp.status == 200){
      toast.success(resp.message);
      reset()
    }

    console.log("resp desde component", resp.status);
  };

  return (
    <form
      className="flex flex-col gap-y-4"
      onSubmit={handleSubmit(onSubmit)}
    >
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      
      <div className="relative flex items-center">
        <Input type="name" id="name" placeholder="Nombre" 
         {...register("name", { required: true })}
        />
       
        <User className="absolute right-6" size={20} />
      </div>
      
      <div className="relative flex items-center">
        <Input type="email" id="email" placeholder="Email"
         {...register("from", { required: true })}
        />
        <MailIcon className="absolute right-6" size={20}
        
        />
      </div>
      <div className="relative flex items-center">
        <Input type="text" id="subject" placeholder="Asunto"
         {...register("subject", { required: true })}
        />
        <LucideMessageSquareText className="absolute right-6" size={20}
        
        />
      </div>
      <div className="relative flex items-center">
        <Textarea placeholder="Escribe tu mensaje"
        {...register("text", { required: true })}
        />
        <MessagesSquare className="absolute top-4 right-6" size={20}
        />

        
      </div>
        {
          errors.text || errors.name || errors.from  || errors.subject? <p className="text-red-300 text-center">Los campos no pueden ir vacíos</p> : <></>
        }
        {
          errorMessage ? <p className="text-red-300 text-center">Los campos deben ser mayores a 3 caracteres y menores a 255 caracteres</p> : <></>
        }

      <Button className="flex items-center gap-x-1 max-w-[166px]">
        Contáctame
        <ArrowRightIcon size={20} />
      </Button>
    </form>
  );
};

export default Form;
