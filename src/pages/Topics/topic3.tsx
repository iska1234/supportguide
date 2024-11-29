import ProsContras from "@/components/championsTable/prosContras";
import Lottie from "@/components/Lottie";
import MessageFromCat from "@/components/messageFromCat";
import TransitionEffect from "@/components/transitionEffect/TransitionEffect";
import CatAmim from "../../assets/animation/cat.json";
import React from "react";
import MarkAsCompleted from "@/components/markAsCompleted";
import { useUpdateAndNavigate } from "@/hooks/useUpdateAndNavigate";

const Topic3Page:React.FC  = () => {

  const { isChecked, setIsChecked, combinate } = useUpdateAndNavigate({
    topicId: 3,
    nextRoute: "/topic/4",
  });
  
  return (
    <>
      <TransitionEffect />
      <div className="mt-10 pb-16 bg-gradient-to-b from-pink-50 to-pink-100 px-12 lg:px-20 text-gray-800 ">
        <h1 className="mt-24 text-4xl font-bold text-center text-pink-700 mb-12">
          Pros & Contras de Soportes
        </h1>
        <div className="flex justify-between ">
          <p className="italic text-black text-lg text-justify w-2/3 pb-10 px-10">
          Cada soporte posee habilidades únicas que se pueden clasificar en diversas fortalezas y debilidades. Algunos son expertos en peel y protección, mientras que otros destacan por su capacidad de iniciación o control de zonas. Sin embargo, cada campeón también tiene limitaciones inherentes que los hacen más adecuados para ciertas composiciones o estilos de juego, aqui pongo las pricipales segun mi criterio.

          </p>

          <div className="flex items-center w- relative">
          <div className="">
            <Lottie animationData={CatAmim} width={"300px"} height={"300px"} />
            <div className="absolute top-0 -left-16">
              <MessageFromCat message="El gatito dice que procures seguir la guía, caso contrario irá por ti c:"/>
            </div>
          </div>
         </div>
        </div>
        <p className="italic text-black text-lg text-justify w-2/3 pb-10 px-10">
        
            </p>
        <div className="px-4 ">
                    <ProsContras />
          </div>
          <MarkAsCompleted 
          combinate={combinate}
          isChecked={isChecked}
          setIsChecked={setIsChecked}
          />
        </div>
    </>
  );
};

export default Topic3Page;
