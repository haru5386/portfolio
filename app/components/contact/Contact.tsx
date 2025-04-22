import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedElement from '../ui/AnimatedElement';
import SocialIcons from './SocialIcons';
import { createClient } from '@supabase/supabase-js';
// process.env.NEXT_PUBLIC_SUPABASE_URL || 
// process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||

// 初始化 Supabase 客户端
const supabaseUrl = 'https://xzlquiertnagpwkicuag.supabase.co';
const supabaseAnonKey =  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh6bHF1aWVydG5hZ3B3a2ljdWFnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUyOTQ4MDAsImV4cCI6MjA2MDg3MDgwMH0.IdIVw5lycZEqFvxHomGp-m_edIifdJTW4hqOiecF390';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // 将表单数据插入到 Supabase 表中
      const { error } = await supabase
        .from('contact_messages')
        .insert([
          { 
            name: formData.name, 
            email: formData.email, 
            message: formData.message,
            created_at: new Date().toISOString()
          }
        ]);
      
      if (error) throw error;
      
      // 提交成功
      setSubmitStatus('success');
      // 清空表单
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section relative overflow-hidden bg-[#f5f5f0]">
      {/* 模糊的颜色块 */}
      <div className="absolute left-1/4 top-1/4 w-[300px] h-[300px] md:w-[350px] md:h-[350px] bg-gradient-to-r from-red-200 via-orange-300 to-red-300 rounded-full blur-[100px] opacity-30 pointer-events-none" />
      
      <div className="container mx-auto max-w-7xl relative z-10 px-6 md:px-12">
        <AnimatedElement>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-black tracking-tight mb-12">
            联系我
          </h2>
        </AnimatedElement>
        
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-16 items-start">
          <div>
            <AnimatedElement>
              <div className="relative border-l-2 border-black pl-8 py-2 mb-8">
                <p className="text-lg text-gray-700 max-w-xl leading-relaxed">
                  如果您对我的作品感兴趣或想讨论项目合作，请随时与我联系。
                </p>
              </div>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center">
                  <div className="w-12 h-12 border-2 border-black flex items-center justify-center mr-5">
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
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">邮箱</p>
                    <p className="text-gray-700">contact@yourname.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 border-2 border-black flex items-center justify-center mr-5">
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
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">位置</p>
                    <p className="text-gray-700">中国，上海</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 mt-12">
                <div className="w-16 h-[2px] bg-black"></div>
                <span className="text-sm font-medium">社交媒体</span>
              </div>
              
              <div className="mt-4">
                <SocialIcons />
              </div>
            </AnimatedElement>
          </div>
          
          <AnimatedElement direction="right">
            <form onSubmit={handleSubmit} className="border-2 border-black bg-white p-8">
              <h3 className="text-xl font-bold mb-6 border-b-2 border-black pb-3">
                发送消息
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                    姓名
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#f5f5f0] border-2 border-black px-4 py-3 text-gray-900 focus:outline-none focus:bg-white transition-colors duration-200"
                    placeholder="你的姓名"
                    disabled={isSubmitting}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                    邮箱
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#f5f5f0] border-2 border-black px-4 py-3 text-gray-900 focus:outline-none focus:bg-white transition-colors duration-200"
                    placeholder="你的邮箱"
                    disabled={isSubmitting}
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                    消息
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-[#f5f5f0] border-2 border-black px-4 py-3 text-gray-900 focus:outline-none focus:bg-white transition-colors duration-200 resize-none"
                    placeholder="你的消息..."
                    disabled={isSubmitting}
                  ></textarea>
                </div>
                
                <motion.button
                  type="submit"
                  className="w-full border-2 border-black bg-black text-white py-3 font-medium text-lg relative overflow-hidden group disabled:opacity-70 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                >
                  <span className="relative z-10 flex items-center justify-center">
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        处理中...
                      </>
                    ) : submitStatus === 'success' ? (
                      '发送成功！'
                    ) : submitStatus === 'error' ? (
                      '发送失败，请重试'
                    ) : (
                      '发送消息'
                    )}
                  </span>
                  <span className="absolute inset-0 bg-black group-hover:bg-black/80 transition-colors duration-300 ease-in-out"></span>
                </motion.button>
                
                {submitStatus === 'success' && (
                  <motion.p 
                    className="text-green-600 text-center mt-2"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    您的消息已成功发送，我会尽快回复您！
                  </motion.p>
                )}
                
                {submitStatus === 'error' && (
                  <motion.p 
                    className="text-red-600 text-center mt-2"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    发送失败，请稍后重试或通过其他方式联系我。
                  </motion.p>
                )}
              </div>
            </form>
          </AnimatedElement>
        </div>
        
        <div className="mt-20 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} 你的名字. 保留所有权利.
        </div>
      </div>
    </section>
  );
} 