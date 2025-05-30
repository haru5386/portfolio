import { useState } from 'react';
import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Project } from '@/types/index.type';
import Tag from '../ui/tag';

interface ProjectModalProps {
  readonly project: Project;
  readonly isOpen: boolean;
  readonly onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [imageSrc, setImageSrc] = useState(project.image);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[95%] sm:max-w-4xl p-0 overflow-y-auto max-h-[95vh] border-2 border-black bg-white">
        <DialogHeader className="sticky top-0 bg-white z-10 py-4 px-6 border-b-2 border-black">
          <div className="flex justify-between items-center">
            <DialogTitle className="text-xl font-bold ">{project.title}</DialogTitle>
            <DialogClose className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-full">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18"/>
                <path d="m6 6 12 12"/>
              </svg>
            </DialogClose>
          </div>
        </DialogHeader>
            
        <div className="relative w-full aspect-video">
          <Image
            src={imageSrc}
            alt={project.title}
            fill
            className="object-contain object-top-center"
          />
        </div>
                      
        {project.gallery && project.gallery.length > 0 && (
              <div className="grid grid-cols-5 gap-4">
                {project.gallery.map((img, index) => (
                  <div key={index} className="relative border aspect-video border-gray-200"
                  onClick={() => setImageSrc(img)}
                  >
                    <Image
                      src={img}
                      alt={project.title}
                      fill
                      className="object-contain object-top"
                    />
                  </div>
                ))}
              </div>
          )}
            
        <div className="p-6">
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
              
          <h4 className="text-lg font-bold mb-3">{project.title}</h4>
          <h6 className="text-md font-bold mb-1">角色：{project.role}</h6>
          <ul className="text-gray-700 mb-8 list-disc list-inside">
            {project.fullDescription?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
              
         {project.link && <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-5 py-3 bg-black text-white font-medium hover:bg-gray-800 transition-colors"
          >
            訪問專案
          </a>}
        </div>
      </DialogContent>
    </Dialog>
  );
} 