import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface FloatingImageProps {
  src: string;
  alt: string;
  className?: string;
  delay?: number;
  floatIntensity?: number;
  parallaxSpeed?: number;
}

const FloatingImage = ({
  src,
  alt,
  className = "",
  delay = 0,
  floatIntensity = 20,
  parallaxSpeed = 0.5,
}: FloatingImageProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) * parallaxSpeed,
        y: (e.clientY - window.innerHeight / 2) * parallaxSpeed,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [parallaxSpeed]);

  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={
        isHovered
          ? {
              y: [0, -floatIntensity, 0],
              rotate: [0, 2, -2, 0],
            }
          : {
              y: [0, floatIntensity, 0],
              rotate: [0, -1, 1, 0],
            }
      }
      transition={{
        y: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        },
        rotate: {
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      style={{
        x: mousePosition.x * 0.1,
      }}
    >
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.4 }}
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default FloatingImage;
