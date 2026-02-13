import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface FloatingPhotoFrameProps {
  image: string;
  delay?: number;
  position?: { x: number; y: number };
  size?: { width: number; height: number };
  rotation?: number;
}

const FloatingPhotoFrame = ({
  image,
  delay = 0,
  position = { x: 0, y: 0 },
  size = { width: 200, height: 250 },
  rotation = 0,
}: FloatingPhotoFrameProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) * 0.01,
        y: (e.clientY - window.innerHeight / 2) * 0.01,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      className="absolute pointer-events-none opacity-30"
      initial={{ opacity: 0, scale: 0, rotate: rotation }}
      animate={{
        opacity: [0, 0.3, 0.25, 0.3],
        scale: [0, 1, 0.95, 1],
        y: [0, -40, 0],
        rotate: [rotation, rotation + 5, rotation - 5, rotation],
        x: mousePosition.x,
      }}
      transition={{
        duration: 7 + delay * 0.5,
        delay: delay * 0.3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        width: `${size.width}px`,
        height: `${size.height}px`,
      }}
    >
      <div className="relative w-full h-full">
        {/* Frame border */}
        <div className="absolute inset-0 border-8 border-background shadow-lg" />
        
        {/* Photo */}
        <div className="absolute inset-2 overflow-hidden">
          <motion.img
            src={image}
            alt="Floating photo"
            className="w-full h-full object-cover"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Decorative corner */}
        <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-foreground/20" />
        <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-foreground/20" />
        <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-foreground/20" />
        <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-foreground/20" />
      </div>
    </motion.div>
  );
};

export default FloatingPhotoFrame;
