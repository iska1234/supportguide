import TransitionEffect from "@/components/transitionEffect/TransitionEffect";
import React from "react";

const Topic9Page:React.FC  = () => {
  return (
    <>
      <TransitionEffect />
      <div className="mt-10 pb-16 bg-gradient-to-b from-pink-50 to-pink-100 px-12 lg:px-20 text-gray-800 ">
        <h1 className="mt-24 text-4xl font-bold text-center text-pink-700 mb-12">
          Adaptación y aprendizaje
        </h1>
        <div className="flex justify-between ">
          <p className="italic text-black text-lg text-justify w-2/3 pb-10 px-10">
            Los soportes en League of Legends desempeñan un papel crucial al
            proteger, potenciar y ayudar a su equipo. La elección de objetos
            puede marcar la diferencia entre el éxito y la derrota en la
            partida. A continuación, voy a hablar de mi experiencia en items
            hasta la actualidad
          </p>
        </div>
        <div className="px-4 mt-10 text-black text-lg"></div>
      </div>
    </>
  );
};

export default Topic9Page;
