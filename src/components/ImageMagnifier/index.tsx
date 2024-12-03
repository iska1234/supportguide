import React, { useState } from "react";

interface ImageMagnifierProps{
    image: string;
}

const ImageMagnifier: React.FC<ImageMagnifierProps> = ({image}) => {
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomPosition({ x, y });
  };

  return (
    <div
      className="relative group overflow-hidden rounded-lg"
      onMouseMove={handleMouseMove}
    >
      <img
        src={image}
        alt="Movimientos Roaming"
        className="object-cover w-full h-full rounded-lg"
      />
      <div
        className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300"
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
          backgroundSize: "200%",
        }}
      />
    </div>
  );
};

export default ImageMagnifier;
