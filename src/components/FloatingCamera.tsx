import { motion } from "framer-motion";
import { Camera } from "lucide-react";

interface FloatingCameraProps {
  delay?: number;
  size?: number;
  position?: { x: number; y: number };
  rotation?: number;
}

const FloatingCamera = ({
  delay = 0,
  size = 40,
  position = { x: 0, y: 0 },
  rotation = 0,
}: FloatingCameraProps) => {
  return (
    <motion.div
      className="absolute pointer-events-none opacity-20"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 0.2, 0.15, 0.2],
        scale: [0, 1, 0.9, 1],
        y: [0, -30, 0],
        rotate: [rotation, rotation + 10, rotation - 10, rotation],
      }}
      transition={{
        duration: 6 + delay * 0.5,
        delay: delay * 0.3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <Camera size={size} className="text-foreground" strokeWidth={1} />
    </motion.div>
  );
};

export default FloatingCamera;
