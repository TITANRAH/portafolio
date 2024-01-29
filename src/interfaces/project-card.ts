import { StaticImageData } from "next/image";

export interface ProjectCardInterface {
    image: StaticImageData;
    category: string;
    name: string;
    description: string;
    link: string;
    github: string;
  }