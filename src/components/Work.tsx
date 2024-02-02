"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import ProjectCard from "@/components/ProjectCard";
import { StaticImageData } from "next/image";
import adminVet from "../../public/work/admin-pacientes.jpg";
import validadorRecetas from "../../public/work/validador-receta.jpg";
import appMovil from "../../public/work/appmovil1.jpg";
import ecommerce from "../../public/work/ecommerce.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProjectCardInterface } from "@/interfaces/project-card";

const projectCard: ProjectCardInterface[] = [
  {
    image: adminVet,
    category: "react js",
    name: "admin veterinaria",
    description:
      "Administrador para veterinarios permite controlar las atenciones realizadas a las mascotas de los clientes, lo realicé siguiendo un curso de Juan Pablo de la Torre, utilicé React js.",
    link: "",
    github: "",
  },
  {
    image: validadorRecetas,
    category: "next js 14",
    name: "validador de recetas",
    description:
      "Validador de recetas fue una solución que necesitaban en mi trabajo, para validar en farmacias las recetas que se generan a través de la plataforma médica proporcionada por la empresa para los usuarios, utilice Next js 14, conectando a una lambda function en AWS y desplegada en Vercel con dominio propio.",
    link: "",
    github: "",
  },
  {
    image: appMovil,
    category: "flutter",
    name: "aplicación movil",
    description:
      "Esta app movil fue parte de un proyecto en mi trabajo, que pretendia llevar la plataforma web a un ambiente movil Ios y Android, se realizó una versión con un equipo de trabajo, pero luego la reescribi en solitario optimizando el código usando gestores de estado como Riverpod y Arquitectura Limpia, pese a la reescritura del código ,es la versión anterior la que esta hoy en Producción.",
    link: "",
    github: "",
  },
  {
    image: ecommerce,
    category: "next js 14",
    name: "Ecommerce",
    description:
      "TesloShop es un curso completo de Ecommerce realizado en Next js 15 dictaminado por Fernando Herrera el cual realicé y me ayudó a obtener bases y más, referente al uso de Typescript, Prisma, Postgress, Docker, Zustand, Zod, React Hook Form, etc. y por supuesto Next js 14.",
    link: "",
    github: "",
  },
];

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* text */}
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h:[400px] flex flex-col justify-center">
          <h2 className="section-title mb-4">Últimos proyectos</h2>
          <p className="subtitle mb-8">
            Algunos de los proyectos que he realizado estudiando y otros realizados en mi empresa actual.
          </p>
          <Link href={"/projects"}>
            <Button>Todos los Proyectos</Button>
          </Link>
        </div>
        {/* slider */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[550px] xl:h-[600px]"
            slidesPerView={1}
            breakpoints={{
              600: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{clickable:true}}
          >
            {projectCard.slice(0, 4).map((p, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard proyect={p} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
