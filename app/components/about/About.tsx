import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimatedElement from '../ui/AnimatedElement';

export default function About() {
  return (
    <section id="about" className="section relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-36 bg-gradient-to-b from-[#0a0118] to-transparent z-10 pointer-events-none" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <AnimatedElement className="mb-16 text-center">
          <h2 className="text-gradient text-4xl sm:text-5xl font-bold mb-4">关于我</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            我的背景、经历和专业理念
          </p>
        </AnimatedElement>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <AnimatedElement direction="left">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-teal-500/20 blur-md rounded-2xl transform -rotate-2" />
              <div className="glass p-2 rounded-2xl relative z-10 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <Image
                  src="/profile.jpg"
                  alt="Profile"
                  width={600}
                  height={600}
                  className="rounded-xl w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 purple-glow w-24 h-24 rounded-full bg-purple-500/10 backdrop-blur-sm z-0" />
              <div className="absolute -top-4 -left-4 teal-glow w-16 h-16 rounded-full bg-teal-500/10 backdrop-blur-sm z-0" />
            </div>
          </AnimatedElement>
          
          <AnimatedElement direction="right" className="flex flex-col gap-6">
            <div className="glass p-8 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-teal-500/5 rounded-2xl z-0" />
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-4 text-gradient">前端工程师与设计师</h3>
                <p className="text-gray-200 mb-4">
                  我是一名充满创造力的前端工程师，专注于创建具有未来感和沉浸式体验的现代网站和应用程序。我结合技术与设计，打造令人惊叹的数字体验。
                </p>
                <p className="text-gray-200">
                  我的专长在于将复杂的交互和动画融入到用户界面中，创造流畅、直观且引人入胜的用户体验。我热衷于探索新技术并将其应用到实际项目中。
                </p>
              </div>
            </div>
            
            <AnimatedElement delay={0.3} duration={0.5}>
              <div className="glass p-6 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-purple-500/5 rounded-2xl z-0" />
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold mb-3 text-white">我的价值观</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-teal-400 rounded-full mr-3" />
                      追求卓越的代码质量和优雅架构
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3" />
                      将设计与用户体验放在首位
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-teal-400 rounded-full mr-3" />
                      持续学习与拥抱新技术
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3" />
                      关注性能与可访问性
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedElement>
          </AnimatedElement>
        </div>
        
        <AnimatedElement className="mt-16 text-center">
          <motion.a
            href="#contact"
            className="glow-button inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            联系我
          </motion.a>
        </AnimatedElement>
      </div>
    </section>
  );
} 