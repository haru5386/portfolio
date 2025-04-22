import { useEffect } from 'react';
import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";

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

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  // 当模态框打开时禁止背景滚动
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  // 键盘监听，按Esc关闭模态框
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0 overflow-y-auto max-h-[90vh] border-2 border-black">
        <DialogHeader className="sticky top-0 bg-white z-10 p-6 border-b-2 border-black">
          <div className="flex justify-between items-center">
            <DialogTitle className="text-2xl font-bold">{project.title}</DialogTitle>
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
            
        <div className="relative w-full h-[300px] md:h-[400px]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
            
        <div className="p-6">
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span 
                key={tag} 
                className="px-3 py-1 text-xs bg-[#f5f5f0] border border-black text-black"
              >
                {tag}
              </span>
            ))}
          </div>
              
          <p className="text-gray-700 mb-8">
            {project.fullDescription || project.description}
          </p>
              
          {project.gallery && project.gallery.length > 0 && (
            <div className="mb-8">
              <h4 className="text-xl font-bold mb-4">项目图集</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.gallery.map((img, index) => (
                  <div key={index} className="relative h-[200px] border border-gray-200">
                    <Image
                      src={img}
                      alt={`${project.title} gallery ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
              
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-5 py-3 bg-black text-white font-medium hover:bg-gray-800 transition-colors"
          >
            访问项目
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
} 