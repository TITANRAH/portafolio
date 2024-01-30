import { HomeIcon, MailIcon, PhoneCall } from "lucide-react";
// form componentes propio
import Form from "@/components/Form";

const ContactPage = () => {
  return (
    <section>
      <div className="container mx-auto">
        {/* text ilustracion */}

        <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              !Hola¡
            </div>
            <h1 className="h1 max-w-md mb-8">Trabajemos juntos</h1>
            <p className="subtitle max-w-[400px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
              nihil nulla recusandae totam error veniam, accusamus sint quod ex
              delectus soluta obcaecati. Cumque distinctio doloremque tempora
              nam sit velit quo.
            </p>
          </div>
          {/* info text y form */}
          <div
            className="hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark 
            bg-contain bg-top bg-no-repeat"
          ></div>
        </div>

        <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
          
          <div className="flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg">
            {/* mail */}
            <div className="flex items-center gap-x-8">
              <MailIcon size={18} className="text-primary"/>
              <div>titanrah@gmail.com</div>
            </div>
            {/* address */}
            <div className="flex items-center gap-x-8">
              <HomeIcon size={18} className="text-primary"/>
              <div>Puente Alto, Santiago, Chile</div>
            </div>
            {/* phone */}
            <div className="flex items-center gap-x-8">
              <PhoneCall size={18} className="text-primary"/>
              <div>+569455555555</div>
            </div>
          </div>

        <Form/>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
