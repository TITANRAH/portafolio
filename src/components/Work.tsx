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
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, delectus esse? Hic optio ratione minus laboriosam voluptatum iure alias enim recusandae. Cum ab architecto corporis explicabo odio excepturi suscipit voluptatem?",
    link: "",
    github: "",
  },
  {
    image: validadorRecetas,
    category: "next js 14",
    name: "validador de recetas",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, delectus esse? Hic optio ratione minus laboriosam voluptatum iure alias enim recusandae. Cum ab architecto corporis explicabo odio excepturi suscipit voluptatem?",
    link: "",
    github: "",
  },
  {
    image: appMovil,
    category: "flutter",
    name: "aplicación movil",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, delectus esse? Hic optio ratione minus laboriosam voluptatum iure alias enim recusandae. Cum ab architecto corporis explicabo odio excepturi suscipit voluptatem?",
    link: "",
    github: "",
  },
  {
    image: ecommerce,
    category: "next js 14",
    name: "Ecommerce",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, delectus esse? Hic optio ratione minus laboriosam voluptatum iure alias enim recusandae. Cum ab architecto corporis explicabo odio excepturi suscipit voluptatem?",
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </p>
          <Link href={"/projects"}>
            <Button>Todos los Proyectos</Button>
          </Link>
        </div>
        {/* slider */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[600px] xl:h-[500px]"
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
