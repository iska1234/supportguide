import React, { useEffect } from "react";
import MarkAsCompleted from "@/components/markAsCompleted";
import TransitionEffect from "@/components/transitionEffect/TransitionEffect";
import { useUpdateAndNavigate } from "@/hooks/useUpdateAndNavigate";

const Topic8Page: React.FC = () => {
  const { isChecked, isCompleted, setIsChecked, combinate } = useUpdateAndNavigate({
    topicId: 8,
    nextRoute: "/topic/9",
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
      <div className="min-h-screen mt-10 pb-16 bg-gradient-to-b from-pink-50 to-pink-100 px-12 lg:px-20 text-gray-800 ">
        <h1 className="mt-24 text-4xl font-bold text-center text-pink-700 mb-12">
          Comunicación y Coordinación
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center w-full md:w-2/3 mx-auto space-y-6 md:space-y-0 md:space-x-10 mt-10">
  <p className="italic text-black text-lg text-justify w-full md:w-2/3 pb-10 px-4">
    La comunicación y la coordinación son clave para asegurar
    victorias consistentes. Te voy a enseñar a cómo comunicarte de manera efectiva con tu equipo
    para maximizar tu impacto en la partida.
  </p>
  <img
    src="../wheelPing.webp"
    alt="Comunicación en LoL"
    className="w-2/3 md:w-1/3 rounded-lg"
  />
</div>

        <div className="px-4 mt-10 text-black text-lg space-y-6 flex flex-col gap-8">
          <section>
            <h2 className="text-2xl font-semibold text-pink-600">
              ¿Por qué es importante la comunicación?
            </h2>
            <p>
              La comunicación es esencial para compartir información como la posición de enemigos,
              cds de habilidades, y objetivos. Un equipo bien comunicado puede sacar partidas adelante incluso cuando están casi perdiads
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-pink-600">Consejos prácticos:</h2>
            <ul className="list-disc pl-5">
              <li>
                Utiliza los pings en el mapa para indicar objetivos o advertir sobre peligros (siempre intenta practicar esto, no gastes tus pings de otra manera porque tienen una carga como de 15s)
              </li>
              <li>
                No spamees el chat con mensajes innecesarios; mantén la comunicación concisa y relevante (A menos que te de un ataque de iska y se quieras callar a un egoplayer, puedes hacerlo y luego mutearlo para seguir jugando)
              </li>
              <li>
                Escucha a tus compañeros y sé receptivo (ESTO ULTIMO CASI NO FUNCIONA, pero siempre hay que intentar tenerlo en cuenta)
              </li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-pink-600">Herramientas para mejorar la coordinación:</h2>
            <ul className="list-disc pl-5">
              <li>
                Planifica jugadas en torno a power spikes o habilidades clave como 
                <span className="font-bold text-pink-700"> la R de Malphite</span>.
              </li>
              <li>
                Prioriza objetivos globales como <span className="font-bold text-pink-700">drakes</span> y 
                <span className="font-bold text-pink-700"> el Nashor</span>.
              </li>
            </ul>
          </section>
        </div>
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

export default Topic8Page;
