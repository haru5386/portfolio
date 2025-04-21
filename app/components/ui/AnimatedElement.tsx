import { ReactNode } from 'react';
import { motion, Variant, Variants } from 'framer-motion';

type Direction = 'up' | 'down' | 'left' | 'right' | 'none';

interface AnimatedElementProps {
  children: ReactNode;
  direction?: Direction;
  duration?: number;
  delay?: number;
  className?: string;
  once?: boolean;
}

export default function AnimatedElement({
  children,
  direction = 'up',
  duration = 0.6,
  delay = 0,
  className = '',
  once = true,
}: AnimatedElementProps) {
  const getDirectionOffset = (direction: Direction): { x: number; y: number } => {
    switch (direction) {
      case 'up':
        return { x: 0, y: 40 };
      case 'down':
        return { x: 0, y: -40 };
      case 'left':
        return { x: 40, y: 0 };
      case 'right':
        return { x: -40, y: 0 };
      case 'none':
      default:
        return { x: 0, y: 0 };
    }
  };

  const offset = getDirectionOffset(direction);

  const variants: Variants = {
    hidden: {
      opacity: 0,
      x: offset.x,
      y: offset.y,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1.0], // Cubic bezier easing
      },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
} 