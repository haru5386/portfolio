import Image from 'next/image';
import { motion } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

interface ProjectCardProps {
  project: Project;
  reverse?: boolean;
}

export default function ProjectCard({ project, reverse = false }: ProjectCardProps) {
  return (
    <motion.div 
      className={`grid grid-cols-1 ${reverse ? 'md:grid-cols-[1fr_1.2fr]' : 'md:grid-cols-[1.2fr_1fr]'} gap-8 md:gap-12 items-center`}
      whileHover={{
        y: -5,
        transition: { duration: 0.2 }
      }}
    >
      <div className={`${reverse ? 'md:order-2' : ''}`}>
        <motion.div 
          className="glass overflow-hidden rounded-xl aspect-video relative project-card"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-teal-500/10 z-10" />
          <Image
            src={project.image}
            alt={project.title}
            width={600}
            height={340}
            className="w-full h-full object-cover z-0"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-black/70 transition-opacity duration-300 z-20">
            <motion.a
              href={project.link}
              className="glass px-6 py-3 rounded-full hover:purple-glow transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              查看详情
            </motion.a>
          </div>
        </motion.div>
      </div>
      
      <div className={`${reverse ? 'md:order-1 md:pr-6' : 'md:pl-6'} flex flex-col`}>
        <h3 className="text-2xl md:text-3xl font-bold mb-3 text-gradient">{project.title}</h3>
        <p className="text-gray-300 mb-6">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className="glass px-3 py-1 text-sm text-purple-300 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <motion.a
          href={project.link}
          className="self-start text-teal-300 flex items-center group"
          whileHover={{ x: 5 }}
        >
          <span className="mr-2">查看项目</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </motion.a>
      </div>
    </motion.div>
  );
} 