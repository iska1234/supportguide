import React from "react";
import { motion } from "framer-motion";
import Lottie from "../Lottie";
import CatAmim from "../../assets/animation/cat.json";
interface MessageFromCatProps{
    message: string;
}

const MessageFromCat:React.FC<MessageFromCatProps> = ({message}) => {
  return (
    <div className="flex items-center w- relative">
    <div className="">
      <Lottie animationData={CatAmim} width={"300px"} height={"300px"} />
      <div className="absolute top-0 -left-12">
      <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="absolute bg-white text-black z-40 px-4 py-2 rounded-md shadow-md border border-gray-300"
    >
      <p className="italic text-lg w-40">
        {message}
      </p>
    </motion.div>
      </div>
    </div>
   </div>
   
  );
};

export default MessageFromCat;
