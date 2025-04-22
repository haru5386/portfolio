import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedElement from '../ui/AnimatedElement';

// 更新技能数据，调整为用户的实际技能
const skills = [
  { id: 1, name: 'Vue.js', icon: '🟢', category: 'frontend' },
  { id: 2, name: 'Nuxt.js', icon: '💚', category: 'frontend' },
  { id: 3, name: 'React', icon: '⚛️', category: 'frontend' },
  { id: 4, name: 'Next.js', icon: '▲', category: 'frontend' },
  { id: 5, name: 'Tailwind CSS', icon: '🎨', category: 'styling' },
  { id: 6, name: 'TypeScript', icon: '𝐓𝐒', category: 'language' },
  { id: 7, name: 'JavaScript', icon: '𝐉𝐒', category: 'language' },
  { id: 8, name: 'HTML5', icon: '🏗️', category: 'frontend' },
  { id: 9, name: 'CSS3', icon: '🎭', category: 'styling' },
  { id: 10, name: 'Vuex/Pinia', icon: '📦', category: 'state' },
  { id: 11, name: 'Redux', icon: '🔄', category: 'state' },
  { id: 12, name: 'GraphQL', icon: '◼️', category: 'api' },
  { id: 13, name: 'REST API', icon: '🌊', category: 'api' },
  { id: 14, name: 'Git', icon: '📊', category: 'tools' },
  { id: 15, name: 'Webpack', icon: '📦', category: 'tools' },
  { id: 16, name: 'Vite', icon: '⚡', category: 'tools' },
];

// 更新分类映射
const categories = [
  { id: 'frontend', name: '前端框架' },
  { id: 'language', name: '编程语言' },
  { id: 'styling', name: '样式与排版' },
  { id: 'state', name: '状态管理' },
  { id: 'api', name: 'API与数据' },
  { id: 'tools', name: '开发工具' },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('frontend');
  
  return (
    <section id="skills" className="section relative overflow-hidden bg-[#f5f5f0]">
      {/* 模糊的颜色块 */}
      <div className="absolute right-1/3 bottom-1/4 w-[300px] h-[300px] md:w-[350px] md:h-[350px] bg-gradient-to-r from-yellow-200 via-orange-200 to-red-300 rounded-full blur-[100px] opacity-40 pointer-events-none" />
      
      <div className="container mx-auto max-w-7xl relative z-10 px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-16 items-start">
          <div>
            <AnimatedElement>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-black tracking-tight mb-12">
                技能
              </h2>
              
              <div className="relative border-l-2 border-black pl-8 py-2 mb-8">
                <p className="text-lg text-gray-700 max-w-xl leading-relaxed">
                  专注于Vue、Nuxt和React、Next.js等现代前端技术栈，擅长使用Tailwind CSS构建响应式界面。
                </p>
              </div>
              
              <div className="flex flex-wrap gap-3 mb-16">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    className={`px-5 py-2 border-2 border-black text-sm font-medium transition-all duration-300 ${
                      activeCategory === category.id 
                        ? 'bg-black text-white' 
                        : 'bg-transparent text-black hover:bg-black/5'
                    }`}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
              
              <div className="flex items-center gap-4 mt-12">
                <div className="w-16 h-[2px] bg-black"></div>
                <span className="text-sm font-medium">持续学习中</span>
              </div>
            </AnimatedElement>
          </div>
          
          <div className="border-2 border-black bg-white p-8">
            <h3 className="text-xl font-bold mb-6 border-b-2 border-black pb-3">
              {categories.find(cat => cat.id === activeCategory)?.name}
            </h3>
            
            <div className="flex flex-col gap-4">
              {skills
                .filter(skill => skill.category === activeCategory)
                .map((skill, index) => (
                  <AnimatedElement
                    key={skill.id}
                    delay={0.1 * index}
                    direction="right"
                  >
                    <motion.div 
                      className="flex items-center justify-between"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{skill.icon}</span>
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <div className="relative w-24 h-2 bg-[#f5f5f0]">
                        <motion.div
                          className="absolute top-0 left-0 h-full bg-black"
                          initial={{ width: 0 }}
                          animate={{ width: `${80 + Math.random() * 20}%` }}
                          transition={{ duration: 1, delay: 0.2 * index }}
                        />
                      </div>
                    </motion.div>
                  </AnimatedElement>
                ))}
            </div>
            
            <div className="mt-8 pt-6 border-t-2 border-black">
              <span className="text-sm text-gray-700">精通现代前端开发工作流和框架生态系统</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 