import React from "react";
import { motion } from "framer-motion";

interface MessageFromCatProps{
    message: string;
}

const MessageFromCat:React.FC<MessageFromCatProps> = ({message}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="absolute bg-white text-black px-4 py-2 rounded-md shadow-md border border-gray-300"
    >
      <p className="italic text-lg w-40">
        {message}
      </p>
    </motion.div>
  );
};

export default MessageFromCat;
