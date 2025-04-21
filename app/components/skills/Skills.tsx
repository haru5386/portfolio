import { motion } from 'framer-motion';
import AnimatedElement from '../ui/AnimatedElement';
import SkillCard from './SkillCard';

// 技能数据
const skills = [
  { id: 1, name: 'React', icon: '⚛️', category: 'frontend' },
  { id: 2, name: 'TypeScript', icon: '𝐓𝐒', category: 'language' },
  { id: 3, name: 'Next.js', icon: '▲', category: 'frontend' },
  { id: 4, name: 'Three.js', icon: '🌐', category: 'animation' },
  { id: 5, name: 'Framer Motion', icon: '🔄', category: 'animation' },
  { id: 6, name: 'TailwindCSS', icon: '🎨', category: 'styling' },
  { id: 7, name: 'HTML5', icon: '🏗️', category: 'frontend' },
  { id: 8, name: 'CSS3', icon: '🎭', category: 'styling' },
  { id: 9, name: 'JavaScript', icon: '𝐉𝐒', category: 'language' },
  { id: 10, name: 'GSAP', icon: '🎬', category: 'animation' },
  { id: 11, name: 'Redux', icon: '🔄', category: 'state' },
  { id: 12, name: 'GraphQL', icon: '◼️', category: 'api' },
  { id: 13, name: 'REST API', icon: '🌊', category: 'api' },
  { id: 14, name: 'Jest', icon: '✓', category: 'testing' },
  { id: 15, name: 'Figma', icon: '🖌️', category: 'design' },
  { id: 16, name: 'Git', icon: '🔄', category: 'tools' },
];

// 创建分类映射
const categories = [
  { id: 'frontend', name: '前端技术' },
  { id: 'language', name: '编程语言' },
  { id: 'animation', name: '动画与交互' },
  { id: 'styling', name: '样式与设计' },
  { id: 'api', name: 'API与数据' },
  { id: 'testing', name: '测试' },
  { id: 'design', name: '设计工具' },
  { id: 'tools', name: '开发工具' },
];

export default function Skills() {
  return (
    <section id="skills" className="section relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-purple-800/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <AnimatedElement className="mb-16 text-center">
          <h2 className="text-gradient text-4xl sm:text-5xl font-bold mb-4">技能</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            我的专业技能和工具集，打造未来主义的网站体验
          </p>
        </AnimatedElement>
        
        <AnimatedElement className="mb-16">
          <div className="glass p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-teal-500/5 z-0" />
            <div className="relative z-10">
              {categories.map((category, categoryIndex) => (
                <div key={category.id} className="mb-10 last:mb-0">
                  <h3 className="text-xl font-semibold mb-4 text-gray-700">{category.name}</h3>
                  <div className="skills-grid">
                    {skills
                      .filter(skill => skill.category === category.id)
                      .map((skill, skillIndex) => (
                        <AnimatedElement 
                          key={skill.id} 
                          delay={0.1 * skillIndex + 0.2 * categoryIndex}
                          duration={0.4}
                        >
                          <SkillCard skill={skill} />
                        </AnimatedElement>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedElement>
        
        <AnimatedElement className="text-center">
          <p className="text-gray-600 max-w-xl mx-auto">
            我持续学习新技术并关注行业发展趋势，不断完善我的技能组合。
          </p>
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <a href="#about" className="text-teal-600 flex items-center justify-center group">
              <span className="mr-2">了解更多关于我</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </motion.div>
        </AnimatedElement>
      </div>
    </section>
  );
} 