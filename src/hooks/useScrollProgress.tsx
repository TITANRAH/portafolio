"use client";
import { useState, useEffect } from "react";

const useScrollProgress = () => {
  const [completion, setCompletion] = useState<number>(0);

  useEffect(() => {
    const updateScrollCompletion = () => {
      const currentProgress: number = window.scrollY;
      const scrollHeight: number =
        document.body.scrollHeight - window.innerHeight;

      if (scrollHeight !== 0) {
        const progressPercentage: number =
          (currentProgress / scrollHeight) * 100;
        const roundedPercentage: string = progressPercentage.toFixed(2);
        setCompletion(Number(roundedPercentage));
      }
    };

    //Agrego el listener de scroll después de definir la función
    window.addEventListener("scroll", updateScrollCompletion);

    // Elimino el listener al desmontar el componente
    return () => {
      window.removeEventListener("scroll", updateScrollCompletion);
    };
  }, []); // La dependencia está vacía, por lo que se ejecutará una vez al montar el componente

  return completion;
};

export default useScrollProgress;