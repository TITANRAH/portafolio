import {
  GanttChartSquare,
  Blocks,
  Gem,
  GanttChartSquareIcon,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ServicesData {
  icon: JSX.Element;
  title: string;
  description: string;
}

const servicesData: ServicesData[] = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: "Front-end Development",
    description:
      "Convierto tu visión en experiencias cautivadoras. Desarrollo interfaces intuitivas y atractivas para tu sitio web, optimizando la usabilidad y creando una presencia digital impactante. ¡Haz que tu marca destaque con mi servicio de Front-end!",
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: "Back-end Development",
    description:
      "Construyo la columna vertebral de tu sitio web. Desde la gestión de datos hasta la funcionalidad del servidor, desarrollo soluciones robustas y eficientes. Optimizo el rendimiento para una experiencia de usuario fluida.",
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: "App Development",
    description:
      "Transformo ideas en aplicaciones dinámicas. Desarrollo soluciones móviles intuitivas y eficientes, aprovechando las últimas tecnologías. Desde la conceptualización hasta la implementación, construyo aplicaciones que destacan. ¡Haz que tu visión cobre vida con mi servicio de Desarrollo de Aplicaciones! ",
  },
];

const Services = () => {
  return (
    <section className="mb-12 xl:mb-36">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">
          Mis Servicios
        </h2>
        <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
          {servicesData.map((s, index) => {
            return (
              <Card
                key={index}
                className="w-full max-w-[424px] h-[350px] flex flex-col pt-16 pb-10 justify-center items-center relative"
              >
                <CardHeader className="text-primary absolute -top-[60px]">
                  <div className="w-[140px] bg-white dark:bg-background flex justify-center items-center">
                    {s.icon}
                  </div>
                </CardHeader>

                <CardContent className="text-center">
                  <CardTitle className="mb-4">{s.title}</CardTitle>
                  <CardDescription className="text-lg">{s.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
