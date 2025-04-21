import { useMousePosition } from '@/lib/hooks/useMousePosition';
import { motion } from 'framer-motion';

interface MouseGlowProps {
  color?: 'purple' | 'teal';
  size?: number;
  opacity?: number;
  blur?: number;
}

export default function MouseGlow({
  color = 'purple',
  size = 400,
  opacity = 0.15,
  blur = 100,
}: MouseGlowProps) {
  const { x, y } = useMousePosition();
  
  const glowColor = color === 'purple' 
    ? 'rgba(167, 139, 250, ' + opacity + ')'
    : 'rgba(94, 234, 212, ' + opacity + ')';

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{
        background: `radial-gradient(circle ${size}px at ${x}px ${y}px, ${glowColor}, transparent)`,
        filter: `blur(${blur}px)`,
      }}
      animate={{
        background: `radial-gradient(circle ${size}px at ${x}px ${y}px, ${glowColor}, transparent)`,
      }}
      transition={{
        type: 'spring',
        damping: 15,
        stiffness: 50,
      }}
    />
  );
} 