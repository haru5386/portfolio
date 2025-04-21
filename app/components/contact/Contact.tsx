import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedElement from '../ui/AnimatedElement';
import SocialIcons from './SocialIcons';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 这里添加表单提交逻辑
    console.log('Form submitted:', formData);
    alert('消息已发送！（演示功能）');
    // 清空表单
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-36 bg-gradient-to-b from-[#0a0118] to-transparent z-10 pointer-events-none" />
      
      <div className="absolute bottom-0 right-0 w-3/4 h-3/4 bg-gradient-to-tl from-purple-500/5 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 w-2/3 h-1/2 bg-gradient-to-br from-teal-500/5 to-transparent blur-3xl pointer-events-none" />
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <AnimatedElement className="mb-16 text-center">
          <h2 className="text-gradient text-4xl sm:text-5xl font-bold mb-4">联系我</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            想讨论项目合作或有任何问题？请随时联系我
          </p>
        </AnimatedElement>
        
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-8 items-center">
          <AnimatedElement direction="left" className="order-2 md:order-1">
            <div className="glass p-8 relative h-full">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-teal-500/10 rounded-2xl z-0" />
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-6 text-gradient">联系方式</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center mr-4">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="20" 
                        height="20" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        className="text-purple-300"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">邮箱</p>
                      <p className="text-white">contact@yourname.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-teal-500/10 flex items-center justify-center mr-4">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="20" 
                        height="20" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        className="text-teal-300"
                      >
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">位置</p>
                      <p className="text-white">中国，上海</p>
                    </div>
                  </div>
                </div>
                
                <SocialIcons />
              </div>
            </div>
          </AnimatedElement>
          
          <AnimatedElement direction="right" className="order-1 md:order-2">
            <form onSubmit={handleSubmit} className="glass p-8 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-purple-500/10 rounded-2xl z-0" />
              <div className="relative z-10">
                <div className="mb-6">
                  <label htmlFor="name" className="block text-sm text-gray-300 mb-2">
                    姓名
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/30 transition-all duration-300"
                    placeholder="你的姓名"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm text-gray-300 mb-2">
                    邮箱
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/30 transition-all duration-300"
                    placeholder="你的邮箱"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm text-gray-300 mb-2">
                    消息
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/30 transition-all duration-300 resize-none"
                    placeholder="你的消息..."
                  ></textarea>
                </div>
                
                <motion.button
                  type="submit"
                  className="glow-button w-full"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  发送消息
                </motion.button>
              </div>
            </form>
          </AnimatedElement>
        </div>
        
        <AnimatedElement className="mt-20 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} 你的名字. 保留所有权利.
          </p>
        </AnimatedElement>
      </div>
    </section>
  );
} 