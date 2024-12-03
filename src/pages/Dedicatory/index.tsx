import TransitionEffect from "@/components/transitionEffect/TransitionEffect";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const DedicatoryPage: React.FC = () => {
  const [visibleParagraph, setVisibleParagraph] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleParagraph((prev) => (prev < 3 ? prev + 1 : prev));
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <TransitionEffect />
      <div className="min-h-screen mt-10 pb-16 bg-gradient-to-b from-pink-50 to-pink-100 px-12 lg:px-20 text-gray-800">
        <h1 className="mt-24 text-4xl font-bold text-center text-pink-700 mb-12">
          Dedicatoria
        </h1>
        <div className="flex flex-col gap-10 items-center justify-center w-3/4 mx-auto">
          {visibleParagraph >= 1 && (
            <motion.p
              className="italic text-black text-lg text-justify w-full md:w-2/3 px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Sabes, en el tiempo que te llevo conociendo, siempre me has parecido una persona genial, muy dedicada, enfocada en objetivos claros, respetuosa, divertida, demasiado profesional. Siempre te he tenido en un status muy alto y sabes, te lo tienes merecido, eres una persona increible y pese a que no estamos cerca, te tengo bastante cariño y aprecio, creme que si algun dia te llega a pasar algo (Dios no quiera que), yo seria el primero en mover cielo y tierra para que estés bien.
            </motion.p>
          )}
          {visibleParagraph >= 2 && (
            <motion.p
              className="italic text-black text-lg text-justify w-full md:w-2/3 px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Agradezco mucho el tiempo que hemos pasado juntos, han sido dias maravillosos, tanto como estos y los de antes, gracias por permitirme conocerte un poco más y seguir aprendiendo y seguir sorprendiendome de la gran persona que eres. Me haz llenado de bastantes alegrias y gracias a lo aprendido de ti he podido lograr cosas que posiblemente me hubieran seguido arrastrando en los días siguientes.
            </motion.p>
          )}
          {visibleParagraph >= 3 && (
            <motion.p
              className="italic text-black text-lg text-justify w-full md:w-2/3 px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Sé que esto no es algo suuper grande, pero me inspiraste a darte algo util que te pueda servir, yo siempre velaré por tu bienestar e intentaré apoyarte en TODO lo que pueda para que sigas avanzando en la vida de la misma bonita manera que lo llevas haciendo hasta ahora. Gracias por todo Erika, te quiero bastante, algún dia te daré un fuerte abrazo y te cocinaré esas comidas triples, es una promesa.
            </motion.p>
          )}
        </div>
      </div>
    </>
  );
};

export default DedicatoryPage;
