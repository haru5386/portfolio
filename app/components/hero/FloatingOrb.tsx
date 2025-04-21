import { motion } from 'framer-motion';

interface FloatingOrbProps {
  className?: string;
  size?: number;
  color?: 'purple' | 'teal';
  delay?: number;
}

export default function FloatingOrb({
  className = '',
  size = 100,
  color = 'purple',
  delay = 0,
}: FloatingOrbProps) {
  const colorClass = color === 'purple' ? 'purple-glow' : 'teal-glow';
  const baseColor = color === 'purple' ? 'rgba(167, 139, 250, 0.1)' : 'rgba(94, 234, 212, 0.1)';
  const gradientColor = color === 'purple' ? 'rgba(167, 139, 250, 0.3)' : 'rgba(94, 234, 212, 0.3)';
  
  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 1.2, 
        delay, 
        type: 'spring',
        stiffness: 50
      }}
    >
      <motion.div
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
      >
        <div
          className={`rounded-full ${colorClass} animate-pulse-glow`}
          style={{
            width: `${size}px`,
            height: `${size}px`,
            background: `radial-gradient(circle, ${gradientColor} 0%, ${baseColor} 70%, transparent 100%)`,
            backdropFilter: 'blur(8px)',
          }}
        />
      </motion.div>
    </motion.div>
  );
} 