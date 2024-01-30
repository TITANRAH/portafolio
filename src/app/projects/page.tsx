"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";
import adminVet from "../../../public/work/admin-pacientes.jpg";
import validadorRecetas from "../../../public/work/validador-receta.jpg";
import appMovil from "../../../public/work/appmovil1.jpg";
import ecommerce from "../../../public/work/ecommerce.jpg";
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

// limpio de repetidos y le agrego un elemento mas all projects

const uniqueCategories: string[] = [
  "all projects",
  ...(new Set<string>(projectCard.map((c) => c.category)) as any),
];

// console.log('unoque',uniqueCategories);

const ProyectsPage = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [categoryDefault, setCategory] = useState("all projects");

  // si la propiedad seteada es igual a all project mandame los proyectos todos si no
  // mandame proyectos por categoria
  // y al abrir el componente el valor designado es all projects como se ve 
  // en el use state 
  // y como abajo estoy mapeando el filteredProjects lo primero que se veran 
  // son todos los proyectos
  const filteredProjects = projectCard.filter((project) => {
    return categoryDefault == "all projects"
      ? project
      : project.category == categoryDefault;
  });
  // console.log(categoryDefault);
  console.log("filtrados", filteredProjects);

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          Mis Proyectos
        </h2>
        {/* tabs */}

        <Tabs defaultValue={categoryDefault} className="mb-24 xl:mb-48 ">
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  key={index}
                  value={category}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs content */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 gap-x-2 lg:grid-cols-3">
            {
              filteredProjects.map((project, index) => {
                return (
                  <TabsContent value={categoryDefault} key={index}>
                    <ProjectCard proyect={project}/>
                  </TabsContent>
                )
              })
            }

          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default ProyectsPage;
