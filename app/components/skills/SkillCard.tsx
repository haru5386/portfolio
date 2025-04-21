import { motion } from 'framer-motion';

interface Skill {
  id: number;
  name: string;
  icon: string;
  category: string;
}

interface SkillCardProps {
  skill: Skill;
}

export default function SkillCard({ skill }: SkillCardProps) {
  return (
    <motion.div
      className="glass p-4 flex flex-col items-center justify-center text-center h-full interactive"
      whileHover={{ 
        scale: 1.05,
        boxShadow: '0 0 15px 5px rgba(167, 139, 250, 0.2)'
      }}
      transition={{ duration: 0.2 }}
    >
      <motion.div 
        className="text-3xl mb-2"
        animate={{ rotate: [0, 5, 0, -5, 0] }}
        transition={{ 
          duration: 2, 
          ease: "easeInOut", 
          repeat: Infinity,
          repeatDelay: Math.random() * 2 + 2
        }}
      >
        {skill.icon}
      </motion.div>
      <h4 className="text-sm font-semibold text-white">{skill.name}</h4>
    </motion.div>
  );
} 