import ImageCarousel from '@/components/imageCarousel';
import TransitionEffect from '@/components/transitionEffect/TransitionEffect';
import Icon from '@/components/ui/Icon';
import React from 'react';
import { useNavigate } from 'react-router-dom';  // Importa useNavigate


const topics = [
  {
    title: 'Comprendiendo el Rol de Soporte',
    description: 'Aprende la importancia de un buen soporte en el equipo.',
  },
  {
    title: 'Tipos de Campeones de Soporte',
    description:
      'Conoce los diferentes estilos: defensivo, agresivo y utilidad.',
  },
  {
    title: 'Pros/Contras',
    description:
      'Entiende los puntos fuertes y débiles de cada enfoque.',
  },
  {
    title: 'Objetos',
    description:
      'Aprende a priorizar los objetos clave para tu equipo.',
  },
  {
    title: 'Fase de Líneas',
    description:
      'Domina el arte del posicionamiento y el poke.',
  },
  {
    title: 'Control de Visión',
    description:
      'Maximiza el impacto de los wards y elimina la visión enemiga.',
  },
  {
    title: 'Roaming',
    description:
      'Ayuda a otras líneas en los momentos clave.',
  },
  {
    title: 'Comunicación y Coordinación',
    description:
      'Mantén a tu equipo informado y sincronizado.',
  },
  {
    title: 'Adaptación y Aprendizaje',
    description:
      'Mejora continuamente ajustando tu estilo según las partidas.',
  },
];

const TopicsPage = () => {
  const navigate = useNavigate();

  const handleNavigate = (topicId: number) => {
    navigate(`/topic/${topicId}`); 
  };

  return (
    <>
      <TransitionEffect />
      <div className="mt-10 pb-12 bg-gradient-to-b from-pink-50 to-pink-100 px-12 lg:px-20 text-gray-800 ">
        <h1 className="mt-24 text-4xl font-bold text-center text-pink-700 mb-12">
          Guía para el Rol de Soporte
        </h1>
        <div className="flex justify-between">

          <div className="w-full">
            <ol className="list-decimal space-y-6 text-lg lg:text-xl pl-8 lg:pl-12">
              {topics.map((topic, index) => (
                <li key={index} className="flex items-center justify-between w-4/5">
                  <div>
                    <span className="font-semibold">{topic.title}</span>
                    <p className="text-sm text-gray-600 mt-2">{topic.description}</p>
                  </div>
                  <Icon  onClick={() => handleNavigate(index + 1)}  name='chevronpink' width={25} /> 
                </li>
              ))}
            </ol>
          </div>
          <div className="w-full">
            <ImageCarousel />
          </div>
        </div>
      </div>
    </>
  );
};

export default TopicsPage;
