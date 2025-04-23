import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ProjectModal from './ProjectModal';
import { Project } from '@/types/index.type';

interface ProjectCardProps {
  readonly project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        className="w-[85vw] md:max-w-[300px] max-w-[350px] relative rounded-lg flex-[0_0_auto] overflow-hidden bg-white border-2 border-black cursor-pointer snap-start h-max"
        whileHover={{ y: -10, transition: { duration: 0.3 } }}
        onClick={() => setIsModalOpen(true)}
      >
        <div className="relative w-full h-[240px]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="pb-6 px-6 pt-2 flex flex-col">
          <h4 className="text-xl font-bold mb-2">{project.title}</h4>
          <p className="text-sm text-gray-700 mb-4 h-14">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.slice(0, 3).map((tag) => (
              <span 
                key={tag} 
                className="px-3 py-1 text-xs bg-[#f5f5f0] border border-black text-black"
              >
                {tag}
              </span>
            ))}
          </div>
          <button 
            className="text-black flex items-center group text-sm mt-auto font-medium relative z-10 bg-transparent border-none p-0 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              setIsModalOpen(true);
            }}
          >
            <span className="mr-2">查看內容</span>
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
          </button>
        </div>
      </motion.div>

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