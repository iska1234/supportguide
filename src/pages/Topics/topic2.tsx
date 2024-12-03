import ArrowSvg from "@/components/arrowSvg";
import ChampionsTable from "@/components/championsTable/championsTable";
import TooltipComponent from "@/components/genericTooltip";
import TransitionEffect from "@/components/transitionEffect/TransitionEffect";
import { Button } from "@/components/ui/button";
import { engageChampions } from "@/lib/constants/engageChampions";
import { peelChampions } from "@/lib/constants/peelChampions";
import { pokeChampions } from "@/lib/constants/pokeChampions";
import { sustainChampions } from "@/lib/constants/sustainChampions";
import { motion } from "framer-motion";
import React, { useState } from "react";
import MessageFromCat from "@/components/messageFromCat";
import { useUpdateAndNavigate } from "@/hooks/useUpdateAndNavigate";
import MarkAsCompleted from "@/components/markAsCompleted";

const Topic2Page: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const { isChecked, isCompleted ,setIsChecked, combinate } = useUpdateAndNavigate({
    topicId: 2,
    nextRoute: "/topic/3",
  });
  
  
  return (
    <div className="mt-10 pb-16 min-h-screen bg-gradient-to-b from-pink-50 to-pink-100 px-12 lg:px-20 text-gray-800">
      <TransitionEffect />

      {selectedCard && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative w-[90%] h-[95%] rounded-md overflow-hidden"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={`../${selectedCard.toLowerCase()}.png`}
              alt={selectedCard}
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center py-4 px-8">
              <h2 className="text-white text-4xl font-bold mb-6">
                {selectedCard}
              </h2>

              {selectedCard === "Engage" && (
                <div className="text-white text-lg mb-6 space-y-4">
                  <ul className="list-disc space-y-2">
                    <li>
                      <span className="font-semibold text-orange-500">
                        Perfectos para aprovechar el mal posicionamiento
                      </span>{" "}
                      de los oponentes.
                    </li>
                    <li>
                      Funcionan excepcionalmente bien con{" "}
                      <span className="font-semibold text-orange-500">
                        ADC agresivos
                      </span>
                      .
                    </li>
                    <li>
                      Muy útiles para{" "}
                      <span className="font-semibold text-orange-500">
                        moverse por el mapa y crear oportunidades
                      </span>
                      .
                    </li>
                    <li>
                      Excelentes en equipos con{" "}
                      <span className="font-semibold text-orange-500">
                        rápida respuesta a iniciaciones
                      </span>
                      .
                    </li>
                    <li>
                      Es clave{" "}
                      <span className="font-semibold text-orange-500">
                        conocer nuestros puntos fuertes
                      </span>{" "}
                      para saber el momento adecuado para iniciar.
                    </li>
                    <li>
                      Son efectivos contra soportes de{" "}
                      <span className="font-semibold text-orange-500">
                        sustain
                      </span>
                      , aprovechando su falta de movilidad.
                    </li>
                  </ul>

                  <h3 className="text-start text-2xl font-bold text-white mt-8 mb-4">
                    EJEMPLOS:
                  </h3>
                  <div className="flex items-center gap-4">
                    {engageChampions.map((champion, index) => (
                      <TooltipComponent
                        key={index}
                        content={
                          <span
                            className={`px-2 font-primarySemibold border-transparent text-center  mt-2 w-36 opacity-100 transition-opacity duration-300`}
                          >
                            {champion.alt}
                          </span>
                        }
                        triggerContent={
                          <img
                            key={index}
                            src={champion.src}
                            alt={champion.alt}
                            className="w-20 h-20 object-contain rounded-md border border-white"
                          />
                        }
                        contentClass="bg-pink-600 text-white"
                        triggerClass=""
                        side="bottom"
                        delayDuration={100}
                      />
                    ))}
                  </div>
                </div>
              )}
              {selectedCard === "Sustain" && (
                <div className="text-white text-lg mb-6 space-y-4">
                  <ul className="list-disc space-y-2">
                    <li>
                      <span className="font-semibold text-green-500">
                        Ideales contra campeones de poke
                      </span>{" "}
                      que dependen de hostigamiento a distancia.
                    </li>
                    <li>
                      Funcionan muy bien con{" "}
                      <span className="font-semibold text-green-500">
                        ADC de escalado
                      </span>{" "}
                      que necesitan tiempo para alcanzar su máximo potencial.
                    </li>
                    <li>
                      Malos para{" "}
                      <span className="font-semibold text-green-500">
                        roamear
                      </span>{" "}
                      debido a su naturaleza estática.
                    </li>
                    <li>
                      Son muy{" "}
                      <span className="font-semibold text-green-500">
                        buenos en composiciones con tanks y bruisers
                      </span>{" "}
                      que aguantan mucho daño.
                    </li>
                    <li>
                      <span className="font-semibold text-green-500">
                        El posicionamiento es clave
                      </span>{" "}
                      ya que no tienen formas de cubrirse fácilmente.
                    </li>
                    <li>
                      Suelen ser{" "}
                      <span className="font-semibold text-green-500">
                        muy frágiles
                      </span>{" "}
                      y necesitan estar protegidos.
                    </li>
                    <li>
                      Fuertes contra los{" "}
                      <span className="font-semibold text-green-500">
                        soportes de poke
                      </span>{" "}
                      gracias a su habilidad de mitigar daño constante.
                    </li>
                  </ul>

                  <h3 className="text-start text-2xl font-bold text-white mt-8 mb-4">
                    EJEMPLOS:
                  </h3>
                  <div className="flex items-center gap-4">
                    {sustainChampions.map((champion, index) => (
                      <TooltipComponent
                        key={index}
                        content={
                          <span
                            className={`px-2 font-primarySemibold border-transparent text-center  mt-2 w-36 opacity-100 transition-opacity duration-300`}
                          >
                            {champion.alt}
                          </span>
                        }
                        triggerContent={
                          <img
                            key={index}
                            src={champion.src}
                            alt={champion.alt}
                            className="w-20 h-20 object-contain rounded-md border border-white"
                          />
                        }
                        contentClass="bg-green-600 text-white"
                        triggerClass=""
                        side="bottom"
                        delayDuration={100}
                      />
                    ))}
                  </div>
                </div>
              )}

              {selectedCard === "Peel" && (
                <div className="text-white text-lg mb-6 space-y-4">
                  <ul className="list-disc space-y-2">
                    <li>
                      <span className="font-semibold text-purple-500">
                        Ideales contra campeones de engage/asesinos
                      </span>{" "}
                      que intentan iniciar peleas o eliminar a los aliados
                      prioritarios.
                    </li>
                    <li>
                      Funcionan excepcionalmente bien con{" "}
                      <span className="font-semibold text-purple-500">
                        ADC de DPS
                      </span>{" "}
                      como Vayne, Twitch o Jinx.
                    </li>
                    <li>
                      <span className="font-semibold text-purple-500">
                        Malos para roamear
                      </span>{" "}
                      debido a su dependencia del equipo.
                    </li>
                    <li>
                      Suelen ser{" "}
                      <span className="font-semibold text-purple-500">
                        útiles incluso cuando van 0/10
                      </span>{" "}
                      ya que su función principal es proteger y apoyar.
                    </li>
                    <li>
                      Aunque no es su enfoque principal,{" "}
                      <span className="font-semibold text-purple-500">
                        pueden ser buenos pokeando
                      </span>{" "}
                      para desgastar a los enemigos.
                    </li>
                    <li>
                      <span className="font-semibold text-purple-500">
                        Muy frágiles
                      </span>{" "}
                      y requieren posicionamiento cuidadoso para sobrevivir.
                    </li>
                    <li>
                      Fuertes contra{" "}
                      <span className="font-semibold text-purple-500">
                        soportes de engage
                      </span>{" "}
                      al mantener a salvo a sus aliados prioritarios.
                    </li>
                    <li>
                      Débiles contra{" "}
                      <span className="font-semibold text-purple-500">
                        campeones de poke
                      </span>{" "}
                      que puedan hostigar desde lejos sin comprometerse.
                    </li>
                  </ul>

                  <h3 className="text-start text-2xl font-bold text-white mt-8 mb-4">
                    EJEMPLOS:
                  </h3>
                  <div className="flex items-center gap-4">
                    {peelChampions.map((champion, index) => (
                      <TooltipComponent
                        key={index}
                        content={
                          <span
                            className={`px-2 font-primarySemibold border-transparent text-center  mt-2 w-36 opacity-100 transition-opacity duration-300`}
                          >
                            {champion.alt}
                          </span>
                        }
                        triggerContent={
                          <img
                            key={index}
                            src={champion.src}
                            alt={champion.alt}
                            className="w-20 h-20 object-contain rounded-md border border-white"
                          />
                        }
                        contentClass="bg-purple-600 text-white"
                        triggerClass=""
                        side="bottom"
                        delayDuration={100}
                      />
                    ))}
                  </div>
                </div>
              )}

              {selectedCard === "Poke" && (
                <div className="text-white text-lg mb-6 space-y-4">
                  <ul className="list-disc space-y-2">
                    <li>
                      <span className="font-semibold text-rose-500">
                        Excelentes para hostigar a distancia
                      </span>{" "}
                      y desgastar al equipo enemigo antes de las peleas.
                    </li>
                    <li>
                      Funcionan muy bien con{" "}
                      <span className="font-semibold text-rose-500">
                        composiciones de control de zonas
                      </span>{" "}
                      o ADCs de largo alcance.
                    </li>
                    <li>
                      <span className="font-semibold text-rose-500">
                        Débiles contra soportes de sustain
                      </span>{" "}
                      que mitigan su daño a largo plazo.
                    </li>
                    <li>
                      Pueden ser{" "}
                      <span className="font-semibold text-rose-500">
                        vulnerables al engage
                      </span>{" "}
                      debido a su falta de movilidad.
                    </li>
                    <li>
                      Brillan en{" "}
                      <span className="font-semibold text-rose-500">
                        fases de líneas largas
                      </span>{" "}
                      donde pueden presionar constantemente a los enemigos.
                    </li>
                    <li>
                      Su efectividad disminuye si{" "}
                      <span className="font-semibold text-rose-500">
                        no capitalizan su ventaja temprana
                      </span>{" "}
                      para obtener objetivos.
                    </li>
                  </ul>

                  <h3 className="text-start text-2xl font-bold text-white mt-8 mb-4">
                    EJEMPLOS:
                  </h3>
                  <div className="flex items-center gap-4">
                    {pokeChampions.map((champion, index) => (
                      <TooltipComponent
                        key={index}
                        content={
                          <span
                            className={`px-2 font-primarySemibold border-transparent text-center  mt-2 w-36 opacity-100 transition-opacity duration-300`}
                          >
                            {champion.alt}
                          </span>
                        }
                        triggerContent={
                          <img
                            key={index}
                            src={champion.src}
                            alt={champion.alt}
                            className="w-20 h-20 object-contain rounded-md border border-white"
                          />
                        }
                        contentClass="bg-pink-600 text-white"
                        triggerClass=""
                        side="bottom"
                        delayDuration={100}
                      />
                    ))}
                  </div>
                </div>
              )}

              <Button
                className={`px-6 py-2 rounded-md mt-4 text-white ${
                  selectedCard === "Engage"
                    ? "bg-orange-500 hover:bg-orange-600"
                    : selectedCard === "Peel"
                    ? "bg-purple-500 hover:bg-purple-600"
                    : selectedCard === "Sustain"
                    ? "bg-green-500 hover:bg-green-600"
                    : selectedCard === "Poke"
                    ? "bg-rose-500 hover:bg-rose-600"
                    : "bg-gray-500 hover:bg-gray-600"
                }`}
                onClick={() => setSelectedCard(null)}
              >
                Cerrar
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}

      <div className="px-4">
        <h1 className="mt-24 text-4xl font-bold text-center text-pink-700 mb-12">
          Tipos de campeones de soporte
        </h1>
        <div className="flex justify-between ">
          <p className="italic text-black text-lg text-justify w-2/3 pb-10 px-10">
            Hay diversos tipos de campeones, cada uno puede cumplir 1, 2 o hasta
            3 funciones diferentes, hay distintas maneras de usarlos, recuerda
            que las clasificaciones son generales, dependiendo del tipo de
            partida o la necesidad de esta es de la manera más óptima en la que
            servirá el personaje.{" "}
          
            La elección del soporte adecuado puede ser determinante para contrarrestar la composición enemiga y potenciar las fortalezas de tu equipo. Por ello, es esencial adaptarse a las necesidades específicas de cada partida y coordinar estrategias con tus compañeros para maximizar la efectividad en el juego. {" "}
            <span
              className="text-pink-700 font-bold cursor-pointer underline"
              onClick={() => {
                const tableSection = document.getElementById("champions-table");
                tableSection?.scrollIntoView({ behavior: "smooth" });
              }}
            >
               Explora también los subtipos de soportes
            </span>
          </p>

          <MessageFromCat message="Pasa el cursor para que puedas ver más detalles c:"/>
     
        </div>
        <div className="w-full h-full flex gap-20">
          <div className="flex flex-col w-full gap-10">
            <div className="relative min-h-[300px] min-w-[400px] border-2 border-orange-500 rounded-md overflow-hidden group">
              <img
                src="../engage.webp"
                alt="Engage"
                className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <h2 className="text-white text-2xl font-bold mb-4">Engages</h2>
                <Button
                  className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 z-20"
                  onClick={() => setSelectedCard("Engage")}
                >
                  Ver más detalles
                </Button>
              </div>
            </div>

            <div className="w-full flex flex-col items-center justify-center transform rotate-[-90deg]">
              <p className="text-xl font-primaryBold">Fuerte contra</p>
              <ArrowSvg color="#8b5cf6" />
            </div>

            <div className="relative min-h-[300px] min-w-[400px] border-2 border-purple-500 rounded-md overflow-hidden group">
              <img
                src="../peel.webp"
                alt="Peel"
                className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <h2 className="text-white text-2xl font-bold mb-4">Peel</h2>
                <Button
                  className="bg-purple-500 text-white px-6 py-2 rounded-md hover:bg-purple-600 z-20"
                  onClick={() => setSelectedCard("Peel")}
                >
                  Ver más detalles
                </Button>
              </div>
            </div>
          </div>

          <div className="flex py-28 flex-col w-full items-center justify-between">
            <div className="flex items-center flex-col">
              <p className="text-xl font-primaryBold">Fuerte contra</p>
              <ArrowSvg color="#f97316" />
            </div>

            <div className="transform rotate-[-135deg] flex items-center flex-col">
              <ArrowSvg color="#f43f5e" />
              <p className="text-xl font-primaryBold rotate-[-180deg]">
                Fuerte contra (situacional)
              </p>
            </div>

            <div className="transform rotate-[-180deg] flex items-center flex-col">
              <ArrowSvg color="#f43f5e" />
              <p className="text-xl font-primaryBold rotate-[-180deg]">
                Fuerte contra
              </p>
            </div>
          </div>

          <div className="flex flex-col w-full gap-10">
            <div className="relative min-h-[300px] min-w-[400px] border-2 border-green-500 rounded-md overflow-hidden group">
              <img
                src="../sustain.webp"
                alt="Sustain"
                className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <h2 className="text-white text-2xl font-bold mb-4">Sustain</h2>
                <Button
                  className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 z-20"
                  onClick={() => setSelectedCard("Sustain")}
                >
                  Ver más detalles
                </Button>
              </div>
            </div>

            <div className="w-full flex flex-col items-center justify-center transform rotate-[90deg]">
              <ArrowSvg color="#22c55e" />
              <p className="text-xl font-primaryBold rotate-[-180deg]">
                Fuerte contra
              </p>
            </div>

            <div className="relative min-h-[300px] min-w-[400px] border-2 border-rose-500 rounded-md overflow-hidden group">
              <img
                src="../poke.webp"
                alt="Poke"
                className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <h2 className="text-white text-2xl font-bold mb-4">Poke</h2>
                <Button
                  className="bg-rose-500 text-white px-6 py-2 rounded-md hover:bg-rose-600 z-20"
                  onClick={() => setSelectedCard("Poke")}
                >
                  Ver más detalles
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4" id="champions-table">
        <h3 className="mt-24 text-2xl font-bold text-start text-pink-700 mb-4">
          Subtipos de support
        </h3>
        <p className="italic text-black text-justify pb-10">
          Aqui hay otros sub-tipos, esto refuerza el concepto de arriba dando
          opciones más especificas dependiendo de la situacion
        </p>
        <ChampionsTable />
      </div>
      <MarkAsCompleted 
        isCompleted={isCompleted}
        combinate={combinate}
        isChecked={isChecked}
        setIsChecked={setIsChecked}
      />
    </div>
  );
};

export default Topic2Page;
