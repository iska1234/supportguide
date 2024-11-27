import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useNavigate } from "react-router-dom";
import { messagesIntro, positionsIntro } from "@/lib/constants/intro";

const IntroPage: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  useEffect(() => {
    const totalDuration = 0;
    const updateInterval = 50;
    const increment = 100 / (totalDuration / updateInterval);

    const progressTimer = setInterval(() => {
      setProgress((prev) => Math.min(prev + increment, 100));
    }, updateInterval);

    const messageTimer = setInterval(() => {
      setMessageIndex((prevIndex) =>
        Math.min(prevIndex + 1, messagesIntro.length - 1)
      );
    }, 2000);

    const loaderTimer = setTimeout(() => {
      setIsLoading(false);
      clearInterval(progressTimer);
      clearInterval(messageTimer);
    }, totalDuration);

    return () => {
      clearTimeout(loaderTimer);
      clearInterval(progressTimer);
      clearInterval(messageTimer);
    };
  }, []);

  const handleCheckboxChange = (checked: boolean) => {
    setIsCheckboxChecked(checked);
  };

  const goLogin = () => {
    navigate("/login");
  };

  if (!isLoading) {
    return (
      <div className="h-screen w-screen relative bg-pink-50 text-gray-900 overflow-hidden flex items-center justify-center">
        <div className="text-center  w-1/3 flex flex-col gap-4">
          <p className=" text-3xl font-primarySemibold">¡Bienvenida!</p>
          <p className="font-primaryRegular">
            Me es todo un placer tenerte aquí, perdona la intro aburrida pero
            quería hacer algo original, en una de las pocas cosas donde me va
            bien es aquí, inventándome alguna idea y plasmándola en la web.
            <br />
            <br />
            Espero te guste, eres una persona muy especial para mí y créeme que
            si me dieron ganas de hacer esto, tqm♥
          </p>
          <div className="flex justify-center items-center gap-2 font-primaryRegular mt-4">
            <Checkbox
              checked={isCheckboxChecked}
              onCheckedChange={handleCheckboxChange}
              className="data-[state=checked]:bg-pink-300 data-[state=checked]:border-none border-black text-white"
            />
            <label
              htmlFor="terms1"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Omitir intro de 10 segundos para el próximo ingreso
            </label>
          </div>

          <Button
            onClick={goLogin}
            className="mx-auto w-1/2 bg-pink-300 hover:bg-pink-400"
            disabled={!isCheckboxChecked}
          >
            Ingresar :D
          </Button>
        </div>
        {["/dm.png", "/stickerwsp.png", "/pastito.png", "/florDorada.png"].map(
          (src, index) => (
            <motion.img
              key={index}
              src={src}
              alt={`Imagen ${index + 1}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: [0, 15, 0] }}
              transition={{
                delay: index * 0.3,
                opacity: { duration: 0.8, ease: "easeOut" },
                y: {
                  duration: 3 + index * 0.5,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                },
              }}
              style={{
                ...positionsIntro[index],
                filter: "drop-shadow(0px 0px 10px rgba(249, 168, 212, 1))",
                borderRadius: "8px",
              }}
              className="absolute w-32  object-cover "
            />
          )
        )}
      </div>
    );
  }

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-pink-200 text-black">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.5, opacity: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="flex flex-col items-center"
      >
        <div className="relative">
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "linear",
            }}
            className="w-20 h-20 border-4 border-t-transparent border-pink-600 rounded-full"
          ></motion.div>
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-lg font-bold">{Math.floor(progress)}%</p>
          </div>
        </div>

        <p className="mt-4 text-lg font-semibold">
          {messagesIntro[Math.min(messageIndex, messagesIntro.length - 1)]}
        </p>
      </motion.div>
    </div>
  );
};

export default IntroPage;
