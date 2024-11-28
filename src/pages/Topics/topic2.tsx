import ArrowSvg from "@/components/arrowSvg";
import TransitionEffect from "@/components/transitionEffect/TransitionEffect";
import { Button } from "@/components/ui/button";
import { engageChampions, engageFeatures } from "@/lib/constants/engageChampions";
import { motion } from "framer-motion";
import React, { useState } from "react";

const Topic2Page: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

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
  {engageFeatures.map((feature, index) => (
    <li key={index}>
      <span className={`font-semibold ${feature.highlight}`}>
        {feature.text.split(" ")[0]}
      </span>{" "}
      {feature.text.slice(feature.text.indexOf(" ") + 1)}
    </li>
  ))}
</ul>

                    <h3 className="text-start text-2xl font-bold text-white mt-8 mb-4">
                      EJEMPLOS:
                    </h3>
                    <div className="flex items-center gap-4">
                      {engageChampions.map((champion, index) => (
                        <img
                          key={index}
                          src={champion.src}
                          alt={champion.alt}
                          className="w-20 h-20 object-contain rounded-md border border-white"
                        />
                      ))}
                    </div>
                  </div>
                )}

                <Button
                  className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 mt-6"
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
        <div className="w-full h-full flex gap-20">
          <div className="flex flex-col w-full gap-10">
            <div className="relative min-h-[300px] min-w-[400px] border-2 border-orange-500 rounded-md overflow-hidden group">
              <img
                src="../engage.png"
                alt="Engage"
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h2 className="text-white text-2xl font-bold mb-4">Engages</h2>
                <Button
                  className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600"
                  onClick={() => setSelectedCard("Engage")}
                >
                  Ver más detalles
                </Button>
              </div>
            </div>

            <div className="w-full flex items-center justify-center transform rotate-[-90deg]">
              <ArrowSvg color="#8b5cf6" />
            </div>
            <div className="relative min-h-[300px] min-w-[400px] border-2 border-purple-500 rounded-md overflow-hidden group">
              <img
                src="../peel.png"
                alt="Peel"
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h2 className="text-white text-2xl font-bold mb-4">Peel</h2>
                <Button
                  className="bg-purple-500 text-white px-6 py-2 rounded-md hover:bg-purple-600"
                  onClick={() => setSelectedCard("Peel")}
                >
                  Ver más detalles
                </Button>
              </div>
            </div>
          </div>

          {/* Middle Arrows */}
          <div className="flex py-28 flex-col w-full items-center justify-between">
            <div className="">
              <ArrowSvg color="#f97316" />
            </div>

            <div className="transform rotate-[-135deg]">
              <ArrowSvg color="#f43f5e" />
            </div>

            <div className="transform rotate-[-180deg]">
              <ArrowSvg color="#f43f5e" />
            </div>
          </div>

          <div className="flex flex-col w-full gap-10">
            <div className="relative min-h-[300px] min-w-[400px] border-2 border-green-500 rounded-md overflow-hidden group">
              <img
                src="../sustain.png"
                alt="Sustain"
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h2 className="text-white text-2xl font-bold mb-4">Sustain</h2>
                <Button
                  className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600"
                  onClick={() => setSelectedCard("Sustain")}
                >
                  Ver más detalles
                </Button>
              </div>
            </div>

            <div className="w-full flex items-center justify-center transform rotate-[90deg]">
              <ArrowSvg color="#22c55e" />
            </div>

            <div className="relative min-h-[300px] min-w-[400px] border-2 border-rose-500 rounded-md overflow-hidden group">
              <img
                src="../poke.png"
                alt="Poke"
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h2 className="text-white text-2xl font-bold mb-4">Poke</h2>
                <Button
                  className="bg-rose-500 text-white px-6 py-2 rounded-md hover:bg-rose-600"
                  onClick={() => setSelectedCard("Poke")}
                >
                  Ver más detalles
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topic2Page;
