import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";

const IntroPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);
    const [messageIndex, setMessageIndex] = useState(0);

    const messages = [
        "Cargando...",
        "Sigue cargando...",
        "Espera porfa, sigue cargando...",
        "Ya casi termina...",
        "No sé porque demora tanto...",
        "Culpa de los npcs",
    ];
    const positions = [
        { top: "10%", left: "20%" },
        { top: "30%", left: "70%" },
        { top: "60%", left: "15%" },
        { top: "80%", left: "50%" },
    ];


    useEffect(() => {
        const totalDuration = 0;
        const updateInterval = 50;
        const increment = 100 / (totalDuration / updateInterval);

        const progressTimer = setInterval(() => {
            setProgress((prev) => Math.min(prev + increment, 100));
        }, updateInterval);

        const messageTimer = setInterval(() => {
            setMessageIndex((prevIndex) => Math.min(prevIndex + 1, messages.length - 1));
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

    if (!isLoading) {

        return (
            <div className="h-screen w-screen relative bg-pink-50 text-gray-900 overflow-hidden flex items-center justify-center">
                <div className="text-center  w-1/3 flex flex-col gap-4">
                    <p className=" text-3xl font-primarySemibold">
                        ¡Bienvenida!
                    </p>
                    <p className="font-primaryRegular">
                        Me es todo un placer tenerte aquí, perdona la intro aburrida pero queria hacer algo original, en una de las pocas cosas donde me va bien es aqui, inventándome alguna idea y plasmandola en la web.
                        <br/><br/>
                        Espero te guste, eres una persona muy especial para mi y creeme que si me dieron ganas de hacer esto, tqm♥
                    </p>
                    <div className="flex items-center gap-2 font-primaryRegular mt-4">
                    <Checkbox className="data-[state=checked]:bg-pink-300 border-black text-white"/>
                    <label
                        htmlFor="terms1"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                        Omitir intro de 10 segundos para el proximo ingreso
                        </label>
                    </div>
                    <Link to={"/home"}>
                    <Button className="mx-auto w-1/2 bg-pink-200 hover:bg-pink-300">Ingresar :D</Button>
                    </Link>
                </div>
                {["/image1.png", "/image2.png", "/image3.png", "/image4.png"].map(
                    (src, index) => (
                        <motion.img
                            key={index}
                            src={src}
                            alt={`Imagen ${index + 1}`}
                            initial={{ y: 200, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                                delay: index * 0.3,
                                duration: 1,
                                ease: "easeOut",
                            }}
                            style={positions[index]}
                            className="absolute w-32 h-32 object-cover rounded-md shadow-lg"
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
                    {messages[Math.min(messageIndex, messages.length - 1)]}
                </p>
            </motion.div>
        </div>
    );
};

export default IntroPage;
