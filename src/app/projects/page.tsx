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
  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          Mis Proyectos
        </h2>
        {/* tabs */}

        <Tabs>
          <TabsList>
            {categories.map((category, index)=> {
              return (
                <TabsTrigger className="w-[170px] xl:w-auto">{category}</TabsTrigger>
              )
            })}
          </TabsList>

        </Tabs>
      </div>
    </section>
  );
};

export default ProyectsPage;
