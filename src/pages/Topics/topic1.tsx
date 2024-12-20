import MarkAsCompleted from "@/components/markAsCompleted";
import TransitionEffect from "@/components/transitionEffect/TransitionEffect";
import { useUpdateAndNavigate } from "@/hooks/useUpdateAndNavigate";
import React, { useEffect } from "react";

const Topic1Page: React.FC = () => {
  const { isChecked, isCompleted ,setIsChecked, combinate } = useUpdateAndNavigate({
    topicId: 1,
    nextRoute: "/topic/2",
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
          Comprendiendo el Rol de Soporte
        </h1>
        <div className="px-20">
          <p className="italic text-black text-justify">
            En terminos generales, este rol es crucial el éxito de cualquier
            team en cualquier juego. Este rol es usualmente subestimado porque
            mayormente debes realizar pocas acciones en cuanto a las distintas
            posiciones, pero es por eso que es importante, en las pocas acciones
            que puedes realizar son las que pueden marcar una diferencia en
            cualquier tipo de partida, enfocandote en puntos que voy a hablar
            más adelante.
          </p>
          <h2 className="mt-8 text-2xl font-semibold text-pink-600">
            ¿Qué implica ser un soporte?
          </h2>
          <p className="mt-4">
            Ser un soporte no solo se trata de proteger al adc o al carry de la
            partida en si, sino también de desempeñar un papel integral en la
            toma de decisiones estratégicas. Un soporte efectivo:
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>
              <span className="font-semibold">Proporciona visión:</span> Colocar
              wards en lugares estratégicos para asegurar el control del mapa y
              anticiparse a las emboscadas enemigas.
            </li>
            <li>
              <span className="font-semibold">Controlar objetivos:</span> Ayudar
              a asegurar dragones, barones y otros objetivos críticos.
            </li>
            <li>
              <span className="font-semibold">Proporciona utilidad:</span> Usar
              habilidades que beneficien al equipo, como curaciones, escudos o
              disengages
            </li>
            <li>
              <span className="font-semibold">Iniciar peleas:</span> Identificar
              la mejor oportunidad para iniciar peleas favorables o separar a
              algun enemigo del equipo rival
            </li>
          </ul>
          <h2 className="mt-8 text-2xl font-semibold text-pink-600">
            Características de un buen soporte
          </h2>
          <p className="mt-4">
            Como tal tu rol no necesita hacer demasiadas acciones, tienes que
            concentrarte en habilidades tácticas , conocimiento del juego ,
            tener paciencia y, sobre todo, una actitud altruista y positiva.
            Estas son algunas de las cualidades esenciales:
          </p>
          <ol className="list-decimal list-inside mt-4 space-y-2">
            <li>
              <span className="font-semibold">Comunicación efectiva: </span>
              Pese a que es molesto en algunos casos, puedes resolverlo
              silenciando a tus aliados y concentrandote en cumplir tu funcion,
              mantén al equipo informado sobre la posición enemiga y objetivos
              importantes.
            </li>
            <li>
              <span className="font-semibold">Adaptabilidad: </span>
              Puede ser un poco complicado adaptarse a algunas situaciones pero
              todo se aprende con experiencia y practica
            </li>
            <li>
              <span className="font-semibold">Juego en equipo: </span>
              Lo más importante de esto, sin importar si tus aliados son unos
              npcs tienes que jugar con ellos, no te dejes llevar por
              pensamientos como "ah no este tipo es malo", si la partida se da
              por perdida pues se perdio, pero aprenderás de ello y estarás
              mejor preparada para la próxima.
            </li>
          </ol>
          <h2 className="mt-8 text-2xl font-semibold text-pink-600">
            Conclusión
          </h2>
          <p className="mt-4">
            Nunca te dejes llevar por comentarios de los demás respecto a tus
            campeones/manera de jugar, etc. Si tu juegas esta posicion es porque
            te gusta y deberias enfocarte unicamente en lo que gusta, a veces
            las pequeñas acciones en la partida pueden cambiar el rumbo de esta
            y asegurar una victoria.
          </p>
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

export default Topic1Page;
