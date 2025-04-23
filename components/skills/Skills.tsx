import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedElement from '../ui-components/AnimatedElement';

const skills = [
  { id: 1, name: 'Vue.js', category: 'frontend', percentage: 100 },
  { id: 2, name: 'Nuxt.js', category: 'frontend', percentage: 100 },
  { id: 3, name: 'React', category: 'frontend', percentage: 80 },
  { id: 4, name: 'Next.js', category: 'frontend', percentage: 80 },
  { id: 5, name: 'Vuex/Pinia', category: 'frontend', percentage: 100 },
  { id: 6, name: 'Redux', category: 'frontend', percentage: 80 },
  { id: 7, name: 'HTML5', category: 'frontend', percentage: 100 },
  { id: 8, name: 'TypeScript', category: 'language', percentage: 90 },
  { id: 9, name: 'JavaScript', category: 'language', percentage: 100 },
  { id: 10, name: 'Tailwind CSS', category: 'styling', percentage: 100 },
  { id: 11, name: 'CSS3', category: 'styling', percentage: 100 },
  { id: 12, name: 'SCSS', category: 'styling', percentage: 100 },
  { id: 13, name: 'Git', category: 'tools', percentage: 100 },
  { id: 14, name: 'Vite', category: 'tools', percentage: 90 },
  { id: 15, name: 'Photoshop', category: 'design', percentage: 100 },
  { id: 16, name: 'Illustrator', category: 'design', percentage: 100 },
  { id: 17, name: 'Figma', category: 'design', percentage: 90 },
];

const categories = [
  { id: 'frontend', name: '前端框架' },
  { id: 'language', name: '程式語言' },
  { id: 'styling', name: '樣式與排版' },
  { id: 'tools', name: '開發工具' },
  { id: 'design', name: '設計工具' },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('frontend');
  
  return (
    <section id="skills" className="min-h-screen w-full flex flex-col justify-center pt-20 pb-8 relative scroll-snap-start relative overflow-hidden bg-[#f5f5f0]">
      <div className="absolute right-1/3 bottom-1/4 w-[300px] h-[300px] md:w-[350px] md:h-[350px] bg-gradient-to-r from-yellow-200 via-orange-200 to-red-300 rounded-full blur-[100px] opacity-40 pointer-events-none" />
      
      <div className="container mx-auto max-w-7xl relative z-10 px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-16 items-start">
          <div>
            <AnimatedElement>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-black tracking-tight mb-12">
                Skills
              </h2>
              
              <div className="relative border-l-2 border-black pl-8 py-2 mb-8">
                <p className="text-lg text-gray-700 max-w-xl leading-relaxed">
                熟悉 Vue、Nuxt、React 與 Next.js 等現代前端技術，具備使用 Tailwind CSS 開發響應式介面的實戰經驗，能快速構建兼具美感與效能的產品介面。
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
                <span className="text-sm font-medium">Keep Learning...</span>
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
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <div className="relative w-24 h-2 bg-[#f5f5f0]">
                        <motion.div
                          className="absolute top-0 left-0 h-full bg-black"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.percentage}%` }}
                          transition={{ duration: 1, delay: 0.2 * index }}
                        />
                      </div>
                    </motion.div>
                  </AnimatedElement>
                ))}
            </div>
            
            <div className="mt-8 pt-6 border-t-2 border-black">
              <span className="text-sm text-gray-700">熟悉現代前端開發流程，具備多框架實戰經驗</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 