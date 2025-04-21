import { motion } from 'framer-motion';
import MouseGlow from '../ui/MouseGlow';
import AnimatedElement from '../ui/AnimatedElement';
import FloatingOrb from './FloatingOrb';

export default function Hero() {
  return (
    <section id="hero" className="section relative overflow-hidden">
      <MouseGlow color="purple" size={600} />
      
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-purple-500/10 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-teal-500/10 to-transparent blur-3xl pointer-events-none" />
      
      <div className="container mx-auto max-w-6xl relative z-10 flex flex-col items-center justify-center h-full">
        <FloatingOrb 
          className="absolute z-0 left-10 top-40 sm:left-20 sm:top-32"
          size={100}
          color="purple"
        />
        <FloatingOrb 
          className="absolute z-0 right-10 bottom-40 sm:right-20 sm:bottom-32"
          size={80} 
          color="teal"
          delay={1}
        />
        
        <AnimatedElement className="text-center mb-6" delay={0.3}>
          <h2 className="text-2xl sm:text-3xl font-light">你好，我是</h2>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-gradient mt-2 mb-4">
            前端工程师
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-2xl mx-auto">
            创造未来感的界面与引人入胜的用户体验
          </p>
        </AnimatedElement>
        
        <AnimatedElement
          className="mt-10 glass p-8 sm:p-10 max-w-xl mx-auto relative"
          delay={0.6}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-teal-500/10 rounded-2xl z-[-1]" />
          <p className="text-gray-200 mb-4">
            我专注于打造具有科技感和引人入胜的网站体验，将未来主义设计与高性能前端技术相结合。
          </p>
          <p className="text-gray-200">
            精通 React、TypeScript 和动效设计，用创新思维解决复杂的用户界面挑战。
          </p>
          
          <motion.div 
            className="mt-6 flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <a href="#projects" className="glow-button text-center">
              查看作品
            </a>
            <a href="#contact" className="border border-white/10 hover:border-white/30 bg-white/5 text-white rounded-full px-6 py-3 text-center transition-all duration-300 hover:bg-white/10">
              联系我
            </a>
          </motion.div>
        </AnimatedElement>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.5 }}
          className="animate-bounce"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="32" 
            height="32" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="opacity-60"
          >
            <path d="M12 5v14" />
            <path d="m19 12-7 7-7-7" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
} 