import { useMousePosition } from '@/lib/hooks/useMousePosition';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface MouseFollowerProps {
  size?: number;
  color?: string;
  delay?: number;
  opacity?: number;
}

export default function MouseFollower({
  size = 25,
  color = 'rgba(255, 255, 255, 0.8)',
  delay = 0.03,
  opacity = 0.8,
}: MouseFollowerProps) {
  const { x, y } = useMousePosition();
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    // 更快显示
    const timer = setTimeout(() => {
      setVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;
  
  return (
    <>
      {/* 主光标 */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-difference rounded-full"
        style={{
          width: size,
          height: size,
          backgroundColor: color,
          opacity,
        }}
        animate={{
          x: x - size / 2,
          y: y - size / 2,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 500,
          delay,
        }}
      />
      
      {/* 光环效果 */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-40 rounded-full"
        style={{
          width: size * 2,
          height: size * 2,
          border: `1px solid ${color}`,
          opacity: opacity * 0.5,
        }}
        animate={{
          x: x - size,
          y: y - size,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 400,
          delay: delay * 1.1,
        }}
      />
    </>
  );
} 