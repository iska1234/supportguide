import React from "react";
import MarkAsCompleted from "@/components/markAsCompleted";
import TransitionEffect from "@/components/transitionEffect/TransitionEffect";
import { useUpdateAndNavigate } from "@/hooks/useUpdateAndNavigate";
import MessageFromCat from "@/components/messageFromCat";

const Topic9Page: React.FC = () => {
  const { isChecked, isCompleted, setIsChecked, combinate } = useUpdateAndNavigate({
    topicId: 9,
    nextRoute: "/dedicatory",
  });

  return (
    <>
      <TransitionEffect />
      <div className="min-h-screen mt-10 pb-16 bg-gradient-to-b from-pink-50 to-pink-100 px-12 lg:px-20 text-gray-800">
        <h1 className="mt-24 text-4xl font-bold text-center text-pink-700 mb-12">
          Adaptación y Aprendizaje
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center w-full md:w-2/3 mx-auto space-y-6 md:space-y-0 md:space-x-10 mt-10">
          <p className="italic text-black text-lg text-justify w-2/3 pb-10 px-10">
            En esta y última sección, aprenderás a mejorar a base de tus experiencias, mejorar la toma de
            decisiones en tiempo real y evolucionar como jugador
          </p>
          <div className="">
          <MessageFromCat message="Usa cada partida de este juego como una manera de aprendizaje"/>
          </div>
        </div>
        <div className="px-4 mt-10 text-black text-lg space-y-6 flex flex-col gap-8">
          <section>
            <h2 className="text-2xl font-semibold text-pink-600">
              ¿Por qué es importante la adaptación?
            </h2>
            <p>
              Cada partida de LoL es única. Desde la selección de campeones hasta las decisiones
              dentro del juego, siempre hay factores impredecibles. Adaptarse rápidamente a nuevas
              estrategias, errores y dinámicas puede marcar la diferencia entre ganar y perder
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-pink-600">Claves para una buena adaptación:</h2>
            <ul className="list-disc pl-5">
              <li>
                <strong>Conoce tus fortalezas y debilidades:</strong> Juega campeones con los que te
                sientas cómodo y aprende cómo reaccionar ante situaciones difíciles
              </li>
              <li>
                <strong>Estudia a tus oponentes:</strong> Observa sus patrones de juego y aprovecha
                cualquier error que cometan (Usualmente no te tocará el mismo player 2 veces, pero puedes tomar el campeón con el que jugaste en contra como referencia)
              </li>
              <li>
                <strong>Cambia de estrategia:</strong> Si tu equipo está perdiendo, considera
                cambiar la composición de las peleas o priorizar objetivos como torretas o dragones
              </li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-pink-600">Aprendizaje continuo:</h2>
            <p>
              Cada partida es una oportunidad para mejorar. Analiza tus errores y aprende de tus
              éxitos. No te frustres con las derrotas; úsalas como motivación para progresar y seguir aprendiendo (En la actualidad incluso yo también sigo aprendiendo, nadie es perfecto en este juego)
            </p>
            <ul className="list-disc pl-5">
              <li>
                Mira retransmisiones de jugadores profesionales para aprender estrategias y
                microjuego
              </li>
              <li>
                Practica consistentemente y busca mantener una mentalidad positiva
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

export default Topic9Page;
