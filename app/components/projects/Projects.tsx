import { useRef } from 'react';
import { motion } from 'framer-motion';
import AnimatedElement from '../ui/AnimatedElement';
import ProjectCard from './ProjectCard';

// 示例项目数据
const projects = [
  {
    id: 1,
    title: '人工智能驱动的数据可视化平台',
    description: '基于React和D3.js开发的交互式数据分析平台，融合了AI辅助分析功能和先进的动态图表。',
    image: '/projects/data-viz.jpg',
    tags: ['React', 'D3.js', 'AI', 'TypeScript'],
    link: '#',
  },
  {
    id: 2,
    title: '沉浸式电子商务体验',
    description: '为高端品牌打造的现代电子商务平台，使用Next.js、Framer Motion和Three.js提供3D产品展示和自然手势交互。',
    image: '/projects/ecommerce.jpg',
    tags: ['Next.js', 'Three.js', 'Framer Motion', 'Stripe'],
    link: '#',
  },
  {
    id: 3,
    title: '智能家居控制系统',
    description: '响应式智能家居控制面板，具有实时数据流和动画状态转换，为用户提供流畅的控制体验。',
    image: '/projects/smart-home.jpg',
    tags: ['React', 'WebSockets', 'GSAP', 'IoT'],
    link: '#',
  },
  {
    id: 4,
    title: '增强现实社交网络',
    description: '创新的移动应用，结合了增强现实功能，允许用户在现实世界中分享和发现虚拟内容。',
    image: '/projects/ar-social.jpg',
    tags: ['React Native', 'AR.js', 'Firebase', 'WebGL'],
    link: '#',
  },
];

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="projects" className="section relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-36 bg-gradient-to-b from-[#0a0118] to-transparent z-10 pointer-events-none" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <AnimatedElement className="mb-12 text-center">
          <h2 className="text-gradient text-4xl sm:text-5xl font-bold mb-4">作品集</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            探索我创造的沉浸式数字体验和创新界面设计
          </p>
        </AnimatedElement>
        
        <div className="relative px-4">
          <div 
            ref={containerRef}
            className="flex flex-col gap-16 md:gap-20"
          >
            {projects.map((project, index) => (
              <AnimatedElement
                key={project.id}
                delay={0.2 * index}
                direction={index % 2 === 0 ? 'left' : 'right'}
              >
                <ProjectCard 
                  project={project} 
                  reverse={index % 2 !== 0} 
                />
              </AnimatedElement>
            ))}
          </div>
          
          <div className="absolute left-0 top-1/4 w-1/3 h-1/2 bg-purple-500/5 blur-3xl rounded-full pointer-events-none" />
          <div className="absolute right-0 bottom-1/4 w-1/3 h-1/2 bg-teal-500/5 blur-3xl rounded-full pointer-events-none" />
        </div>
        
        <AnimatedElement className="mt-20 text-center">
          <motion.a
            href="#contact"
            className="glow-button inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            有项目想法？联系我
          </motion.a>
        </AnimatedElement>
      </div>
    </section>
  );
} 