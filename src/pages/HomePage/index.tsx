import TransitionEffect from "@/components/transitionEffect/TransitionEffect";
import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <TransitionEffect />
      <div className="-mt-10 min-h-screen bg-pink-50 px-24 flex items-center justify-center text-gray-800">
        <div className="flex items-center flex-col justify-center w-1/2">
          <h1 className="text-4xl font-primaryBold text-pink-600 mb-4">
            Guía de Supports
            <span className="ml-2 text-sm">by iska</span>
          </h1>
          <p className="text-lg text-center font-primaryMedium text-gray-700 w-3/4">
            Esta es una guía que fue hecha en base a toda mi experiencia
            respecto al rol de support. Apta para cualquier elo/región. Donde
            aprenderás tanto bases del rol y algunos tips personales.
          </p>
          <Link to={"/topics"}>
            <Button className="bg-pink-400  text-white font-primaryRegular mt-8 hover:bg-pink-500">
              Comenzar
            </Button>
          </Link>
        </div>
        <div
          className="relative flex items-center justify-center"
          style={{ height: "350px", width: "350px" }}
        >
          <img
            src="photoIska.webp"
            alt="Imagen de tecnología e innovación"
            style={{
              filter: "drop-shadow(0px 0px 10px rgba(249, 168, 212, 1))",
              borderRadius: "8px",
            }}
            className="rounded-lg shadow-md w-full h-full object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
