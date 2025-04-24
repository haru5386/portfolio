import AnimatedElement from '../ui-components/AnimatedElement';
import ProjectParallax from './ProjectParallax';

export default function Projects() {
  

  return (
    <section id="projects" className="min-h-screen w-full flex flex-col justify-center pt-20 pb-8 relative scroll-snap-start relative overflow-hidden bg-[#f5f5f0]">
      <div className="absolute left-1/4 top-1/3 w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-gradient-to-r from-orange-200 via-red-300 to-red-400 rounded-full blur-[100px] opacity-40 pointer-events-none" />
      
      <div className="container mx-auto max-w-7xl relative z-10 px-6 md:px-12 ">
          <AnimatedElement>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-black tracking-tight mb-12">
            Portfolio
            </h2>
          </AnimatedElement>
      </div>
        <ProjectParallax />
    </section>
  );
} 