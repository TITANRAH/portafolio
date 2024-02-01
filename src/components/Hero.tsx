'use client'

import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";
import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
  RiAccountBoxLine,
  RiFlagFill,
} from "react-icons/ri";
import DevImg from "./DevImg";
import Badge from "./Badge";
import Socials from "./Socials";
import imagenDev from "../../public/hero/develop-titan.png";
import { sendEmail } from "@/actions/server-mail";
import { Mail } from "@/interfaces/mail";

// components



const Hero = () => {
  const urlCV =
    "https://drive.google.com/file/d/1xcZLibg_C90Ts-soaqeGBt8N7ey-R9R6/view?usp=sharing";
  return (
    // declare el bg-hero en tailwind config para poder usarlo
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-cover bg-bottom dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between  gap-x-8">
          {/* text */}
          <div
            className="flex max-w-[600px] flex-col  justify-center mx-auto xl:mx-0  
                text-center xl:text-left"
          >
            {/* trackin es el espacio entre letras */}
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Developer Full-Stack & Leader Tech Front-end
            </div>
            <h1 className="h1 mb-4">Hola. Soy Sergio </h1>

            <p className="subtitle max-w-[490px] mx-auto xl:mx-0 ">
              {" "}
              Me apasiona el mundo del desarrollo, actualmente trabajo en una empresa donde mi rol es ser lider técnico del area front-end. además 
              mi otra gran pasión es hacer música rap y esto me ha permitido recorrer mi páis y otros paises también.
              <br/>
              <br/>
              Me la paso gran parte de mi tiempo a conocer nuevas herramientas de desarrollo y técnologias nuevas, entre las técnologias que mas me gustan 
              son Flutter, Vue js, React,  Node js, MongoDb, PostgresSql, Firebase y últimamente Next js 14, la cual utilizo en mi trabajo actual y en la que ralicé este portafolio mientras estudiaba esta técnologia, 
              este portafolio tiene como valor agregado el uso de TypeScript, React Hoook Form, Zod y lo desplegue en Vercel, por el lado del Backend utilicé Node, Express, Nodemailer y lo desplegue en Railway,
              esto permite que puedas enviarme mensajes a través del formulario de este portafolio, en donde encontrarás varias app's que he realizado estudiando y otras que he realizado en 
              mi trabajo. 
              <br/>
              <br/>
              Bienvenido ¡
            </p>
            {/* buttons */}
            <div className="flex flex-col gap-y-4 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href={"/contact"}>
                <Button className="gap-x-2">
                  Contáctame
                  <Send size={18} />{" "}
                </Button>
              </Link>
              <Link href={urlCV} download={'https://drive.google.com/file/d/1xcZLibg_C90Ts-soaqeGBt8N7ey-R9R6/view?usp=sharing'}>
                <Button variant="secondary" className="gap-x-2 text-white">
                  Descarga mi CV <Download size={18} />
                </Button>
              </Link>
            </div>

            {/* socials */}

            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>
          {/* image*/}
          <div className="hidden xl:flex relative">
            {/* badge 1  años*/}
            <Badge
              icon={<RiBriefcase4Fill />}
              endCountNum={2}
              badgeText="Años de experiencia"
              startCountText="+"
              containerStyle="absolute top-[10%] -left-[5rem]"
            />

            {/* badge 2  proyectos*/}

            <Badge
              icon={<RiTodoFill />}
              endCountNum={150}
              badgeText="Visibilidad de Proyectos"
              startCountText="+"
              containerStyle="absolute top-[45%] -left-[1rem]"
            />
            {/* badge 3 team */}

            <Badge
              icon={<RiTeamFill />}
              endCountNum={150}
              badgeText="Visibilidad de Clientes"
              startCountText="+"
              containerStyle="absolute top-[40%] -right-8"
            />
            {/* badge 4 paises */}

            <Badge
              icon={<RiFlagFill />}
              endCountNum={5}
              badgeText="Paises visitados"
              containerStyle="absolute top-[2%] -right-0"
            />
            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[490px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div>
            <DevImg
              imgUrl={imagenDev}
              containerStyles="bg-hero_shape  w-[510px] h-[462px] bg-no-repeat relative bg-bottom"
            />
          </div>
        </div>
        {/* icon */}

        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
