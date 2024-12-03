import React, { useEffect } from "react";
import TransitionEffect from "@/components/transitionEffect/TransitionEffect";
import { wardsData } from "@/lib/constants/wardsData";
import ImageMagnifier from "@/components/ImageMagnifier";
import MarkAsCompleted from "@/components/markAsCompleted";
import { useUpdateAndNavigate } from "@/hooks/useUpdateAndNavigate";
import MessageFromCat from "@/components/messageFromCat";

const Topic7Page: React.FC = () => {

  const { isChecked, isCompleted,setIsChecked, combinate } = useUpdateAndNavigate({
    topicId: 7,
    nextRoute: "/topic/8",
  });

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <TransitionEffect />
      <div className="mt-10 pb-16 bg-gradient-to-b from-pink-50 to-pink-100 px-12 lg:px-20 text-gray-800">
        <h1 className="mt-24 text-4xl font-bold text-center text-pink-700 mb-12">
          Control de Visión
        </h1>
        <div className="flex justify-center">
          <p className="italic text-black text-lg text-justify w-2/3 pb-10 px-10">
            Wardear es una de tus funciones principales y a la que deberias
            darle más prioridad en toda la partida, estos son unos ejemplos de
            los mejores wards que puedes colocar (hay más, pero estos en mi
            opinión son los más optimos), ten en cuenta que para wardear
            necesitas lo siguiente:
          </p>
        </div>
        <div className="bg-gray-50 border border-gray-300 rounded-lg shadow-md p-6 mx-4 mb-12 px-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Algunos consejos antes de aplicar esto:
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              <span className="font-medium">
                Siempre tener en cuenta el estado de tu oleada.
              </span>
            </li>
            <li>
              Tener en cuenta cuánto tiempo tengas a disposición
              <span className="text-sm text-gray-500 italic">
                {" "} (esto te ayudará a decidir si tienes tiempo largo para dejar
                wards profundos o poco tiempo para unos no tan profundos pero
                efectivos)
              </span>
            </li>
            <li>
              Siempre es bueno pedir ayuda al jungla para que te acompañe a
              wardear.
            </li>
          </ul>
        </div>
        {wardsData.map((ward, index) => (
          <div
            key={index}
            className="mb-16 px-4 flex justify-between gap-10 font-primaryRegular"
          >
            <div className="w-full">
              <h2 className="text-2xl font-semibold text-pink-600 mb-4">
                {ward.title}
              </h2>
              <p className="text-lg mb-4">{ward.description}</p>
              <div className="w-full flex items-center justify-center mt-8">
              <MessageFromCat message={ward.catMessage}/>
              </div>
            </div>
            <div className="w-full rounded-lg overflow-hidden">
              <ImageMagnifier image={ward.image} />
            </div>
          </div>
        ))}
        <MarkAsCompleted
          isCompleted={isCompleted}
          combinate={combinate}
          isChecked={isChecked}
          setIsChecked={setIsChecked}
        />
      </div>
    </>
  );
};

export default Topic7Page;
