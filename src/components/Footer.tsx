import Socials from "./Socials";
const Footer = () => {
  return (
    <div className="bg-secondary py-12">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between">
          <Socials
            containerStyles="flex gap-x-6 mx-auto xl:mx-0 mb-4"
            iconStyles="text-primary dark:text-white/70 text-[20px] hover:text-white dark:hover:text-primary transition-all"
          />
          <div className="text-muted-foreground text-center">
            Copyright &copy; TitanDev Todos los derechos reservados
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
