import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";
import DevImg from "./DevImg";
import imagenDev from "../../public/hero/develop-titan2.png";
import Image from 'next/image'

import vsCodeImage from '../../public/about/vscode.svg'
import wordpressImage from '../../public/about/wordpress.svg'
import figmaImage from '../../public/about/figma.svg'



// info
interface InfoData {
  icon: JSX.Element;
  text: string;
}

const infoData: InfoData[] = [
  {
    icon: <User2 size={20} />,
    text: "Sergio Miranda",
  },
  // {
  //   icon: <PhoneCall size={20} />,
  //   text: "+5695555555",
  // },
  {
    icon: <MailIcon size={20} />,
    text: "titanrah@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Naci el 20 de septiembre de 1985",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Analista de Sistema, Técnico en Soporte Computacional, Bootcamp Desafío Latam",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Puente Alto, Santiago, Chile",
  },
];
// quali
interface QualificationData {
  title: string;
  data: DataQuality[];
}
interface DataQuality {
  university?: string;
  company?: string;
  role?: string;
  qualificacion?: string;
  years: string;
}
const qualificationData: QualificationData[] = [
  {
    title: "educación",
    data: [
      {
        university: "Santo Tomás",
        qualificacion: "Ténico en Comunicación Audiovisual",
        years: "2011 - 2014",
      },
      {
        university: "Inacap",
        qualificacion: "Ténico en Soporte Computacional",
        years: "2015 - 2018",
      },
      {
        university: "Esucomex",
        qualificacion: "Analista de Sistemas, mención web",
        years: "2018 - 2021",
      },
      {
        university: "Desafío Latam",
        qualificacion: "Full-Stack PERN",
        years: "2021 - 2022",
      },
    ],
  },
  {
    title: "experiencia",
    data: [
      {
        company: "Municipalidad de Maipú",
        role: "Mesa de Ayuda y Soporte Informático",
        years: "2019 - 2020",
      },
      {
        company: "G-Connection",
        role: "Soporte Informático",
        years: "2020 - 2021",
      },
      {
        company: "StrixSoft",
        role: "Dev Front",
        years: "2021",
      },
      {
        company: "Medismart",
        role: "Lider Técnico Front-End",
        years: "2021 - Presente",
      },
    ],
  },
];

// skils
interface SkillData {
  title: string;
  data: DataSkills[];
}

interface DataSkills {
  name?: string;
  imagePath?: string;
}

const skillsData: SkillData[] = [
  {
    title: "skills",
    data: [
      {
        name: "HTML, CSS",
      },
      {
        name: "Front-end Development",
      },
      {
        name: "Javascript, Dart",
      },
      {
        name: "Back-end Development",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imagePath: vsCodeImage,
      },

      {
        imagePath: wordpressImage,
      },

      {
        imagePath: figmaImage,
      },


    ],
  },
];

const About = () => {
  // creo una funcion general para cualquiera de los arreglos
  const getData = (arr: any, title: string) => {
    return arr.find((item: any) => item.title === title);
  };

  // console.log('entro al console',getData(qualificationData, 'experience' ));

  return (
    <section className="mt-[40rem] md:mt-[10rem] xl:h-[860px] pb-12 xl:py-24 xl:max-w-[1380px] m-auto">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          Acerca de mi
        </h2>
      </div>
      <div className="flex flex-col xl:flex-row">
        {/* image */}
        <div className="hidden xl:flex flex-1 relative">
          <DevImg
            imgUrl={imagenDev}
            containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
          />
        </div>

        <div className="flex justify-center xl:flex-1">
          <Tabs defaultValue="personal">
            <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
              <TabsTrigger className="w-[170px] xl:w-auto" value="personal">
                Información Personal
              </TabsTrigger>
              <TabsTrigger
                className="w-[170px] xl:w-auto"
                value="qualifications"
              >
                Aptitudes
              </TabsTrigger>
              <TabsTrigger className="w-[170px] xl:w-auto" value="skills">
                Skills
              </TabsTrigger>
            </TabsList>

            {/* tabs content */}

            <div className="text-lg mx-5 mt-12 xl:mt-8">
              <TabsContent value="personal">
                <div className="text-center xl:text-left">
                  <h3 className="h3 mb-4">
                    Constante y apasionado con esta profesión
                  </h3>
                  <p className="subtitle max-w-xl max-auto xl:mx-0">
                    Me especializo en la constante busqueda del conocimiento,
                    para poder integrarlo en las aplicaciones que me piden día a
                    día, me mantengo al tanto de las nuevas tecnologías, y soy
                    incanzable a la hora de aprender.
                  </p>
                  {/* icons */}
                  <div className="grid xl:grid-cols-2 gap-4 mb-12">
                    {infoData.map((i, index) => {
                      return (
                        <div
                          key={index}
                          className="flex items-start gap-x-4 mx-auto xl:mx-0"
                        >
                          <div className="text-primary ">{i.icon}</div>
                          <div>{i.text}</div>
                        </div>
                      );
                    })}
                  </div>

                  {/* languajes */}

                  <div className="flex flex-col gap-y-2">
                    <div className="text-primary">Lenguaje</div>

                    <div className="border-b border-border"></div>
                    <div>Español</div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="qualifications">
                <div>
                  <h3 className="h3 mb-6">El camino del Guerrero</h3>
                  {/* experiencia y educacion wraper */}
                  <div className="grid md:grid-cols-2 gap-y-8">
                    {/* experiencia */}
                    <div>
                      <div className="flex gap-x-4 items-center text-[22px] text-primary mb-5">
                        <Briefcase />
                        <div className="capitalize font-medium ">
                          <h4 >
                            {getData(qualificationData, "experiencia").title}
                          </h4>
                        </div>
                      </div>
                      {/* list */}
                      <div className="flex flex-col gap-y-8">
                        {getData(qualificationData, "experiencia").data.map(
                          (item: any, index: any) => {
                            const { company, role, years } = item;

                            return (
                              <div
                                key={index}
                                className="flex items-center gap-x-8 group "
                              >
                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                  <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500">

                                  </div>
                                </div>
                                <div>
                                  <div className="font-semibold text-xl leading-none mb-2">
                                    {company}
                                  </div>
                                  <div className="text-lg leading-none text-muted-foreground mb-4">
                                    {role}
                                  </div>
                                  <div className="text-base font-medium">
                                    {years}
                                  </div>
                                </div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                    {/* educacion */}
                    <div>
                      <div className="flex gap-x-4 items-center text-[22px] text-primary mb-5">
                        <GraduationCap size={28} />
                        <div className="capitalize font-medium ">
                          <h4 >
                            {getData(qualificationData, "educación").title}
                          </h4>
                        </div>
                      </div>
                      {/* list */}
                      <div className="flex flex-col gap-y-8">
                        {getData(qualificationData, "educación").data.map(
                          (item: any, index: any) => {
                            const { university, qualificacion, years } = item;

                            return (
                              <div
                                key={index}
                                className="flex items-center gap-x-8 group"
                              >
                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                  <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500">

                                  </div>
                                </div>
                                <div>
                                  <div className="font-semibold text-xl leading-none mb-2">
                                    {university}
                                  </div>
                                  <div className="text-lg leading-none text-muted-foreground mb-4">
                                    {qualificacion}
                                  </div>
                                  <div className="text-base font-medium">
                                    {years}
                                  </div>
                                </div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              {/* skills */}
              <TabsContent value="skills">
                <div className="text-center xl:text-left">
                  <h3 className="h3 mb-8" >
                      Herramientas que uso a diario
                  </h3>

                  {/* skills */}
                  <div className="mb-16">
                    <h4 className="text-xl font-semibold mb-2">Skills</h4>
                    <div className="border-b border-border mb-4"></div>
                      {/* skill list */}

                      <div>
                        {
                          getData(skillsData, 'skills').data.map((s: any, index: any) => {
                           
                           const {name} = s;
                            return (
                            <div className="w-2/4 text-center xl:text-left mx-auto xl:mx-0" key={index}>
                              <div className="font-medium">
                                {name}
                              </div>
                            </div>
                            )
                          })
                        }
                      </div>
                  </div>

                  {/* tools */}
                  <div>
                    <h4 className="text-xl font-semibold mb-2 xl:text-left">Herramientas</h4>
                    <div className="border-b border-border mb-4"></div>
                    {/* tool list */}
                    <div className="flex gap-x-8 justify-center xl:justify-start">
                      {getData(skillsData, "tools").data.map((t: any, index: any) => {
                        const {imagePath} = t
                        console.log(imagePath);
                        
                        return (
                          <div key={index}>
                            <Image
                              src={imagePath}
                              alt='image'
                              width={48}
                              height={48}
                              priority
                              
                            />
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default About;
