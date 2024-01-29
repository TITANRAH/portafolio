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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed diam non pro pos   posuere elit. Ut enim ad minim veniam et    al. Lorem ipsum dolor sit amet, consectet           dolor sit amet, sed diam non pro posuere elit. Lorem ipsum dolor sit amet, consect ",
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: "Back-end Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed diam non pro pos   posuere elit. Ut enim ad minim veniam et    al. Lorem ipsum dolor sit amet, consectet           dolor sit amet, sed diam non pro posuere elit. Lorem ipsum dolor sit amet, consect ",
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: "App Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed diam non pro pos   posuere elit. Ut enim ad minim veniam et    al. Lorem ipsum dolor sit amet, consectet           dolor sit amet, sed diam non pro posuere elit. Lorem ipsum dolor sit amet, consect ",
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
                className="w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative"
              >
                <CardHeader className="text-primary absolute -top-[60px]">
                  <div className="w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center">
                    {s.icon}
                  </div>
                </CardHeader>

                <CardContent className="text-center">
                  <CardTitle className="mb-4 ">{s.title}</CardTitle>
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
