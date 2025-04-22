import { motion } from 'framer-motion';
import MouseGlow from '../ui/MouseGlow';
import AnimatedElement from '../ui/AnimatedElement';
import FloatingOrb from './FloatingOrb';

export default function Hero() {
  return (
    <section id="hero" className="section relative overflow-hidden bg-[#f5f5f0]">
      <div className="absolute right-1/4 top-1/3 w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-gradient-to-r from-red-400 via-orange-300 to-yellow-200 rounded-full blur-[100px] opacity-60 pointer-events-none" />
      
      <div className="container mx-auto max-w-7xl relative z-10 px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-12 items-center h-full min-h-[calc(100vh-5rem)]">
          <div>
            <AnimatedElement delay={0.3}>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-black mb-6 tracking-tight leading-none">
                WELCOME
              </h1>
              
              <p className="text-lg md:text-xl text-gray-700 max-w-xl mb-12 leading-relaxed">
                Crafting digital experiences with precision and creativity. Transforming ideas into elegant, functional interfaces that resonate with users.
              </p>
              
              <div className="flex flex-wrap gap-6 mt-10">
                <a href="#projects" className="border-2 border-black bg-black text-white hover:bg-transparent hover:text-black px-8 py-3 font-medium transition-all duration-300 text-lg">
                  查看作品
                </a>
                <a href="#contact" className="border-2 border-black px-8 py-3 font-medium hover:bg-black hover:text-white transition-all duration-300 text-lg">
                  联系我
                </a>
              </div>
            </AnimatedElement>
          </div>
          
          <div className="relative hidden md:block">
            <FloatingOrb 
              className="absolute z-0 left-10 top-20"
              size={120}
              color="purple"
            />
            <FloatingOrb 
              className="absolute z-0 right-10 bottom-20"
              size={80} 
              color="teal"
              delay={0.5}
            />
            <FloatingOrb 
              className="absolute z-0 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
              size={150} 
              color="purple"
              delay={1}
            />
          </div>
        </div>
        
        <div className="absolute bottom-12 left-6 md:left-12">
          <div className="flex flex-col gap-1">
            <div className="w-16 h-[2px] bg-black mb-2"></div>
            <span className="text-sm text-gray-600">WE ARE THE LEADERS IN</span>
            <span className="text-sm text-gray-600">WEB & MOBILE DESIGN</span>
          </div>
        </div>
        
        <div className="absolute bottom-12 right-6 md:right-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="inline-flex items-center gap-2"
          >
            <span className="text-sm">WHO WE ARE</span>
            <div className="w-12 h-[1px] bg-black"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 