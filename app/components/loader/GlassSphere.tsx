import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// 创建泡泡组件
interface BubbleProps {
  size: number;
  color: string;
  x: number;
  y: number;
  delay: number;
  duration: number;
}

const Bubble = ({ size, color, x, y, delay, duration }: BubbleProps) => {
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color} 0%, rgba(255,255,255,0.5) 70%, transparent 100%)`,
        boxShadow: `0 0 10px ${color}`,
        left: `${x}%`,
        top: `${y}%`,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 0.8, 0.4, 0.8, 0],
        scale: [0, 1, 1.2, 1, 0],
        y: [0, -100, -200],
      }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Infinity,
        repeatDelay: Math.random() * 2,
        ease: "easeInOut"
      }}
    />
  );
};

export default function GlassSphere() {
  const [bubbles, setBubbles] = useState<BubbleProps[]>([]);

  useEffect(() => {
    const createBubbles = () => {
      const bubblesArray: BubbleProps[] = [];
      
      for (let i = 0; i < 15; i++) {
        bubblesArray.push({
          size: Math.random() * 60 + 20,
          color: Math.random() > 0.5 ? '#9795f0' : '#ddd6f3',
          x: Math.random() * 80 + 10,
          y: Math.random() * 80 + 10,
          delay: Math.random() * 2,
          duration: Math.random() * 6 + 4
        });
      }
      
      setBubbles(bubblesArray);
    };
    
    createBubbles();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className="fixed inset-0 w-full h-full flex items-center justify-center z-50 bg-gradient-to-tr from-[#ffffff] to-[#fff5f8]"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 1.2, opacity: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="w-full h-full relative"
      >
        <div className="relative w-full h-full overflow-hidden">
          {bubbles.map((bubble, index) => (
            <Bubble key={index} {...bubble} />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
} 