import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ProjectModal from './ProjectModal';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  fullDescription?: string;
  gallery?: string[];
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        className="horizontal-scroll-card bg-white border-2 border-black cursor-pointer"
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
        <div className="p-6 flex flex-col h-[180px]">
          <h4 className="text-xl font-bold mb-2">{project.title}</h4>
          <p className="text-sm text-gray-700 mb-4 line-clamp-2">{project.description}</p>
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
          <div 
            className="text-black flex items-center group text-sm mt-auto font-medium relative z-10"
            onClick={(e) => {
              e.stopPropagation();
              setIsModalOpen(true);
            }}
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
          </div>
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