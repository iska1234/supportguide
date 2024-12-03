import TransitionEffect from "@/components/transitionEffect/TransitionEffect";
import { wardsDescriptions } from "@/lib/constants/wardsDescription";
import React from "react";

const Topic5Page: React.FC = () => {
  return (
    <>
      <TransitionEffect />
      <div className="mt-10 pb-16 bg-gradient-to-b from-pink-50 to-pink-100 px-12 lg:px-20 text-gray-800 ">
        <h1 className="mt-24 text-4xl font-bold text-center text-pink-700 mb-12">
          Fase de Lineas como Soporte
        </h1>
        <div className="flex flex-col space-y-10">
          <section className="text-black text-lg text-justify pb-10 px-10">
            <h2 className="text-2xl font-semibold text-pink-600">
              Introducción
            </h2>
            <p>
              Como soporte, tu rol principal en la fase de líneas es proteger a
              tu tirador (ADC), controlar la visión y ayudar a generar ventajas
              en bot. Esta sección te dará las claves para maximizar tu impacto en
              el juego temprano
            </p>
          </section>

          <section className="text-black text-lg text-justify pb-10 px-10">
            <h2 className="text-2xl font-semibold text-pink-600">
              1. Control de Visión
            </h2>
            <p>
              Utiliza tus wards estratégicamente para evitar emboscadas y dar
              información a tu equipo. Tus wards en etapa de lineas son muy
              importantes, hay muchos casos donde se puedan usar, va a depender
              de factores como, junglas enemigos, junglas aliados, pathing del
              jungla, matchup de bot, etc. A continuación mostraré algunos
              puntos importantes
            </p>
            <div className="flex flex-col gap-10 w-full mt-8">
              {wardsDescriptions.map((description, i) => (
                <div key={i} className="flex justify-around items-center">
                  <p className="w-1/3 font-primaryRegular">{description}</p>
                  <div className="w-[600px] h-full overflow-hidden rounded-lg border border-pink-300">
                    <img
                      src={`../ward${i + 1}.webp`}
                      alt={`Ward ${i + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="text-black text-lg text-justify pb-10 px-10">
            <h2 className="text-2xl font-semibold text-pink-600">
              2. Posicionamiento
            </h2>
            <p>
              Mantén una posición que permita proteger a tu tirador mientras
              amenazas al enemigo. No te expongas innecesariamente a habilidades
              del rival, pero asegúrate de estar cerca para usar tus habilidades
              cuando sea necesario.
              <br /> <br /> <strong>Ojo</strong>: Esto no siempre tienes que
              hacerlo, habrán partidas donde no podras tener la presión y habrán
              otras donde si, todo depende del tipo de matchup, a veces respetar
              un poco y ser paciente te puede dar beneficios a largo plazo
            </p>
            <div className="w-full justify-between gap-20 flex mt-8">
              <div className="w-full gap-4 flex flex-col">
                <p className="font-primaryMedium">
                  Ejemplo de buen posicionamiento
                </p>
                <div className="w-[600px] h-[400px] overflow-hidden rounded-lg">
                  <img
                    src="../buenPosicionamiento.webp"
                    className="w-full h-full object-cover"
                    alt="Buen posicionamiento"
                  />
                </div>
                <div className="text-center px-8 flex items-center justify-center">
                  Tienes que mantener siempre la línea de acuerdo a como estés
                  con tu ADC. Si la rompes, pueden ocurrir sucesos negativos en
                  la botlane.
                </div>
              </div>
              <div className="w-full gap-4 flex flex-col">
                <p className="font-primaryMedium">
                  Ejemplo de mal posicionamiento
                </p>
                <div className="w-[600px] h-[400px] overflow-hidden rounded-lg">
                  <img
                    src="../malPosicionamiento.webp"
                    className="w-full h-full object-cover"
                    alt="Mal posicionamiento"
                  />
                </div>

                <div className="text-center px-8 flex items-center justify-center">
                  Si haces esto posiblemente te puedan meter un trade donde tu
                  adc no esté para protegerte
                </div>
              </div>
            </div>
          </section>

          <section className="text-black text-lg text-justify pb-10 px-10">
            <h2 className="text-2xl font-semibold text-pink-600">
              3. Comunicación
            </h2>
            <p>
              Comunica constantemente lo que vas a hacer. No necesitas
              escribirlo, puedes:
            </p>
            <ul className="list-disc list-inside">
              <li>Enviar alertas de "en camino" o "cuidado".</li>
              <li>Pinguear dónde empezó el jungla.</li>
              <li>Intentar iniciar.</li>
              <li>Ganar el bush.</li>
              <li>Ganar la presión.</li>
              <li>Pushear la wave.</li>
            </ul>
          </section>

          <section className="text-black text-lg text-justify pb-10 px-10">
            <h2 className="text-2xl font-semibold text-pink-600">
              4. Objetivos
            </h2>
            <p>
              Juega con tu team para asegurar los objetivos de early, por
              ejemplo, los early drakes, los primeros voids y la torre. Para asegurar estos objetivos tienes que tener en cuenta los puntos anteriores, un paso a la vez.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default Topic5Page;
