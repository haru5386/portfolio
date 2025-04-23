import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ProjectModal from './ProjectModal';
import { Project } from '@/types/index.type';
import Tag from '../ui/tag';
interface ProjectCardProps {
  readonly project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className='image-container flex h-[100vh] w-[100vw] flex-[0_0_auto] flex-col md:flex-row'>
        <div className="relative w-full md:w-3/5 lg:w-2/3 h-[300px] md:h-full overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 60vw"
            className="object-contain transition-transform duration-500 hover:scale-105"
            priority
          />
          <div className="absolute bottom-8 left-8 md:hidden z-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-white shadow-text"
            >
              {project.title}
            </motion.h2>
          </div>
        </div>
        
        <div className="w-full md:w-2/5 lg:w-1/3 p-8 md:p-12 flex flex-col justify-center">
          <div className="mb-8 hidden md:block">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl font-bold text-black mb-3"
            >
              {project.title}
            </motion.h2>
            <div className="w-16 h-1 bg-black"></div>
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-gray-700 mb-8 leading-relaxed"
          >
            {project.description}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap gap-2 mb-10"
          >
            {project.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </motion.div>
          
          <motion.button 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="self-start flex items-center group font-medium relative z-10 bg-black text-white px-6 py-3 border-2 border-black hover:bg-white hover:text-black transition-colors duration-300"
            onClick={(e) => {
              e.stopPropagation();
              setIsModalOpen(true);
            }}
          >
            <span className="mr-2">查看詳情</span>
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
          </motion.button>
        </div>
      </div>

      {isModalOpen && (
        <ProjectModal 
          project={project} 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
        />
      )}
    </>
  );
} 