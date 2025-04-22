import { useRef } from 'react';
import AnimatedElement from '../ui/AnimatedElement';
import ProjectCard from './ProjectCard';

// 示例项目数据
const projects = [
  {
    id: 1,
    title: '人工智能驱动的数据可视化平台',
    description: '基于React和D3.js开发的交互式数据分析平台，融合了AI辅助分析功能和先进的动态图表。',
    fullDescription: '这一创新平台通过融合先进的AI算法与直观的可视化工具，彻底改变了企业数据分析的方式。用户可以上传、处理并可视化大型数据集，同时获得AI驱动的见解和预测。该平台的独特之处在于其自适应界面，能够根据用户的分析习惯和偏好自动调整，提供个性化的数据探索体验。\n\n核心技术包括React前端框架、D3.js可视化库、TensorFlow.js用于客户端机器学习处理，以及WebGL加速的图形渲染。平台还采用了WebSocket实时数据流，确保所有分析和可视化都能实时更新。',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=2070&auto=format&fit=crop'
    ],
    tags: ['React', 'D3.js', 'AI', 'TypeScript', 'WebGL'],
    link: '#',
  },
  {
    id: 2,
    title: '沉浸式电子商务体验',
    description: '为高端品牌打造的现代电子商务平台，使用Next.js、Framer Motion和Three.js提供3D产品展示和自然手势交互。',
    fullDescription: '这个高端电子商务平台为奢侈品和设计师品牌提供了一个沉浸式的购物体验。该平台的核心特色是其3D产品展示功能，允许顾客以前所未有的方式与产品互动 - 旋转、缩放并从任何角度查看详细信息。\n\n通过Framer Motion实现的微交互和动画转场，以及Three.js驱动的3D渲染，创造了流畅而吸引人的用户旅程。平台还集成了高级AI推荐系统，分析用户偏好并提供个性化的产品建议。在技术方面，该项目使用Next.js确保快速加载时间和SEO优化，并采用Stripe无缝处理支付流程。',
    image: 'https://images.unsplash.com/photo-1614308458125-e6446884fc28?q=80&w=2022&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1626968361222-291e74711449?q=80&w=2070&auto=format&fit=crop'
    ],
    tags: ['Next.js', 'Three.js', 'Framer Motion', 'Stripe', 'PWA'],
    link: '#',
  },
  {
    id: 3,
    title: '智能家居控制系统',
    description: '响应式智能家居控制面板，具有实时数据流和动画状态转换，为用户提供流畅的控制体验。',
    fullDescription: '这一智能家居控制系统为用户提供了一个统一的界面，用于管理和监控家中的所有智能设备。该系统的设计理念是简约与功能的平衡，使技术小白也能轻松掌握复杂的家居自动化。\n\n平台的核心是一个实时控制面板，显示各种设备的状态，并通过精心设计的交互和状态动画提供即时反馈。用户可以创建自定义场景、设置自动化规则，并通过自适应学习算法，系统会随着时间推移了解用户习惯并提供个性化建议。\n\n在技术实现上，系统采用了React作为前端框架，WebSockets实现实时数据传输，GSAP处理高级动画效果，并使用多种IoT协议（包括Zigbee、Z-Wave和MQTT）确保与市场上大多数智能设备的兼容性。',
    image: 'https://images.unsplash.com/photo-1585399000684-d2f72660f092?q=80&w=2071&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544506473-78fb6e9a3631?q=80&w=2070&auto=format&fit=crop'
    ],
    tags: ['React', 'WebSockets', 'GSAP', 'IoT', 'Redux'],
    link: '#',
  },
  {
    id: 4,
    title: '增强现实社交网络',
    description: '创新的移动应用，结合了增强现实功能，允许用户在现实世界中分享和发现虚拟内容。',
    fullDescription: '这款前沿移动应用将增强现实技术与社交网络无缝结合，创造了一种全新的数字社交体验。用户可以在真实世界的位置创建、分享和发现AR内容，从艺术装置到实用信息，所有内容都与地理位置绑定。\n\n应用的核心功能包括实时AR内容创建工具、基于位置的内容发现、社交互动功能（如评论、点赞和分享），以及高级筛选器让用户根据兴趣和位置浏览内容。用户界面设计注重简洁和直观，确保AR体验的流畅性不受复杂控制的干扰。\n\n技术上，这款应用使用React Native作为主要开发框架，AR.js和Three.js处理增强现实渲染，Firebase提供实时数据库和认证服务，以及WebGL用于高性能图形处理。位置服务和地图集成则使用了Google Maps API。',
    image: 'https://images.unsplash.com/photo-1569012871812-f38ee64cd54c?q=80&w=2070&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1596202515349-c9c107cee131?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1484406566174-9da000fda645?q=80&w=2089&auto=format&fit=crop'
    ],
    tags: ['React Native', 'AR.js', 'Firebase', 'WebGL', 'Geolocation'],
    link: '#',
  },
];

export default function Projects() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -330, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 330, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="section relative overflow-hidden bg-[#f5f5f0]">
      {/* 模糊的颜色块 */}
      <div className="absolute left-1/4 top-1/3 w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-gradient-to-r from-orange-200 via-red-300 to-red-400 rounded-full blur-[100px] opacity-40 pointer-events-none" />
      
      <div className="container mx-auto max-w-7xl relative z-10 px-6 md:px-12">
        <div className="flex justify-between items-center mb-16">
          <AnimatedElement>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-black tracking-tight">
              作品集
            </h2>
          </AnimatedElement>
          
          <div className="flex gap-3">
            <button 
              onClick={handlePrev}
              aria-label="Previous projects"
              className="w-12 h-12 border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
            >
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
                <path d="m15 18-6-6 6-6"/>
              </svg>
            </button>
            <button 
              onClick={handleNext}
              aria-label="Next projects"
              className="w-12 h-12 border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
            >
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
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </button>
          </div>
        </div>
        
        <div 
          ref={scrollContainerRef}
          className="horizontal-scroll hide-scrollbar pb-8"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        <div className="flex items-center gap-4 mt-20">
          <div className="w-16 h-[2px] bg-black"></div>
          <span className="text-sm font-medium">查看更多作品</span>
        </div>
      </div>
    </section>
  );
} 