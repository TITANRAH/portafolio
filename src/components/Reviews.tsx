"use client";
import Image, { StaticImageData } from "next/image";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import "swiper/css";
import "swiper/css/pagination";
import avatar1 from "../../public/reviews/avatar-1.png";
import avatar2 from "../../public/reviews/avatar-2.jpeg";
import avatar3 from "../../public/reviews/avatar-3.jpeg";
import avatar4 from "../../public/reviews/avatar-4.jpeg";
import avatar5 from "../../public/reviews/avatar-5.jpeg";

// import required modules
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface Reviews {
  avatar: StaticImageData;
  name: string;
  job: string;
  review: string;
}

const reviewsData: Reviews[] = [
  {
    avatar: avatar1,
    name: "Gabriel Cortés",
    job: "Tech Lead",
    review:
      "lorem ipsum dolor sit amet, consectetur adip   inc commodo euismod tempor  invidunt ut labore et dolore magna aliqu",
  },
  {
    avatar: avatar2,
    name: "Mario Alvarez",
    job: "Tech Lead UI/UX",
    review:
      "lorem ipsum dolor sit amet, consectetur adip   inc commodo euismod tempor  invidunt ut labore et dolore magna aliqu",
  },
  {
    avatar: avatar3,
    name: "Carolina Pulgar",
    job: "TI Factory Manager & Architect",
    review:
      "lorem ipsum dolor sit amet, consectetur adip   inc commodo euismod tempor  invidunt ut labore et dolore magna aliqu",
  },
  {
    avatar: avatar4,
    name: "Gustavo Cortinez",
    job: "CTO",
    review:
      "lorem ipsum dolor sit amet, consectetur adip   inc commodo euismod tempor  invidunt ut labore et dolore magna aliqu",
  },
  {
    avatar: avatar5,
    name: "Consuelo Cifuentes",
    job: "Gerente de Operaciones",
    review:
      "lorem ipsum dolor sit amet, consectetur adip   inc commodo euismod tempor  invidunt ut labore et dolore magna aliqu",
  },
];

const Reviews = () => {
  return (
    <section className="xl:pt-60">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 text-center mx-auto"> Recomendaciones</h2>
        <Swiper
          slidesPerView={1}
          breakpoints={{
            // cuantos se veran segun medida
            640: { slidesPerView: 2 },
            1400: { slidesPerView: 3 },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          className="h-[350px]"
        >
          {reviewsData.map((r, index) => {
            return (
              <SwiperSlide key={index}>
                <Card className="bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]">
                  <CardHeader className="p-0 mb-10">

                    <div className="flex items-center gap-x-4">
                        {/* imageavatar */}
                      <Image 
                      className="rounded-full"
                        src={r.avatar} 
                        alt="avatar"
                        width={70}
                        height={70}
                        priority
                        />
                        {/* name  */}
                        <div className="flex flex-col">
                            <CardTitle>
                                {r.name}
                            </CardTitle>
                            <p>{r.job}</p>
                        </div>
                    </div>
                  </CardHeader>

                  <CardDescription className="text-lg text-muted-foreground">
                    {r.review}
                  </CardDescription>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
