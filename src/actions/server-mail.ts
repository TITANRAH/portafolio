
import { z } from "zod";

const emailSchema = z.object({
 
  to: z.string().min(3).max(255), 
  from: z.string().min(3).max(255),
  subject: z.string().min(3).max(255),
  text: z.string().min(3).max(255),
  html: z.string().min(3).max(255),

});

export const sendEmail = async (formData: FormData) => {
  const data = Object.fromEntries(formData);
  const emailParsed = emailSchema.safeParse(data);


  if (!emailParsed.success) {
    // console.log("cayo en el if de success false");

    // console.log(emailParsed.error);
    return { ok: false, message: emailParsed.error};
  }

  const send = emailParsed.data;
  // console.log(data);
  const endpoint = "mail";
  const mailUrl = `${process.env.NEXT_PUBLIC_URL_MAIL}/${endpoint}`;

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

 
  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify( send ),
  };

  try {
    const result = await fetch(mailUrl, {
      ...requestOptions,
      cache: "no-store",
    }).then((r) => r.json());
    // console.log({ result });

    return result;
  } catch (error) {
    console.log("Ocurrió un error");
    console.error(error);
    return null;
  }
};
