import React, { useEffect, useState } from "react";

const CustomCursor: React.FC = () => {

  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateCursor);

    return () => window.removeEventListener("mousemove", updateCursor);
  }, []);

  return (
    <div
      className="custom-cursor"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      }}
    >
        <img
        src="/cursor.png"
        alt="Custom Cursor"
        className="cursor-image"
      />
    </div>
  );
};

export default CustomCursor;
