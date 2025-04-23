import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedElement from '../ui-components/AnimatedElement';
import SocialIcons from './SocialIcons';
import { createClient } from '@supabase/supabase-js';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
// process.env.NEXT_PUBLIC_SUPABASE_URL || 
// process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||

// 初始化 Supabase 客戶端
const supabaseUrl = 'https://xzlquiertnagpwkicuag.supabase.co';
const supabaseAnonKey =  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh6bHF1aWVydG5hZ3B3a2ljdWFnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUyOTQ4MDAsImV4cCI6MjA2MDg3MDgwMH0.IdIVw5lycZEqFvxHomGp-m_edIifdJTW4hqOiecF390';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// 表單驗證模式
const formSchema = z.object({
  name: z.string().min(2, { message: '姓名至少需要2個字符' }),
  email: z.string().email({ message: '請輸入有效的郵箱地址' }),
  message: z.string().min(10, { message: '訊息至少需要10個字符' }),
});

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // 1. 使用 useForm 鉤子定義表單
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
    mode: 'onBlur',
  });

  // 2. 定義提交函數
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // 將表單數據插入到 Supabase 表中
      const { error } = await supabase
        .from('contact_messages')
        .insert([
          { 
            name: values.name, 
            email: values.email, 
            message: values.message,
            created_at: new Date().toISOString()
          }
        ]);
      
      if (error) throw error;
      
      // 提交成功
      setSubmitStatus('success');
      // 重置表單
      form.reset();
      
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
    <section id="contact" className="min-h-screen w-full flex flex-col justify-center pt-20 pb-8 relative scroll-snap-start relative overflow-hidden bg-[#f5f5f0]">
      <div className="absolute left-1/4 top-1/4 w-[300px] h-[300px] md:w-[350px] md:h-[350px] bg-gradient-to-r from-red-200 via-orange-300 to-red-300 rounded-full blur-[100px] opacity-30 pointer-events-none" />
      
      <div className="container mx-auto max-w-7xl relative z-10 px-6 md:px-12">
        <AnimatedElement>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-black tracking-tight mb-12">
            Contact
          </h2>
        </AnimatedElement>
        
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-16 items-start">
          <div>
            <AnimatedElement>
              <div className="relative border-l-2 border-black pl-8 py-2 mb-8">
                <p className="text-lg text-gray-700 max-w-xl leading-relaxed">
                  如果您對我的作品感興趣或想討論項目合作，請隨時與我聯繫。
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
                    <p className="text-sm font-medium text-gray-900">Email</p>
                    <p className="text-gray-700">snsn550@gmail.com</p>
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
                    <p className="text-gray-700">台灣, 新北</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 mt-12">
                <div className="w-16 h-[2px] bg-black"></div>
                <span className="text-sm font-medium">Social Media</span>
              </div>
              
              <div className="mt-4">
                <SocialIcons />
              </div>
            </AnimatedElement>
          </div>
          
          <AnimatedElement direction="right">
            <div className="border-2 border-black bg-white p-8">
              <h3 className="text-xl font-bold mb-6 border-b-2 border-black pb-3">
                發送訊息
              </h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="block text-sm font-medium text-gray-900 mb-2">姓名</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="你的姓名" 
                            disabled={isSubmitting}
                            className="w-full bg-[#f5f5f0] border-2 border-black px-4 py-3 h-auto text-gray-900 focus:outline-none focus:bg-white focus-visible:ring-0 focus-visible:ring-offset-0 transition-colors duration-200"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage className="text-red-500 text-sm mt-1" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="block text-sm font-medium text-gray-900 mb-2">郵箱</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="你的郵箱" 
                            disabled={isSubmitting}
                            className="w-full bg-[#f5f5f0] border-2 border-black px-4 py-3 h-auto text-gray-900 focus:outline-none focus:bg-white focus-visible:ring-0 focus-visible:ring-offset-0 transition-colors duration-200"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage className="text-red-500 text-sm mt-1" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="block text-sm font-medium text-gray-900 mb-2">訊息</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="你的訊息..." 
                            disabled={isSubmitting}
                            className="w-full bg-[#f5f5f0] border-2 border-black px-4 py-3 text-gray-900 focus:outline-none focus:bg-white focus-visible:ring-0 focus-visible:ring-offset-0 transition-colors duration-200 resize-none min-h-[120px]"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage className="text-red-500 text-sm mt-1" />
                      </FormItem>
                    )}
                  />
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className={cn(
                      "w-full border-2 border-black bg-black text-white py-3 h-auto font-medium text-lg relative overflow-hidden rounded-none",
                      "hover:bg-black/90 hover:scale-[1.02] active:scale-[0.98] transition-all",
                      "disabled:opacity-70 disabled:cursor-not-allowed"
                    )}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        處理中...
                      </>
                    ) : submitStatus === 'success' ? (
                      '發送成功！'
                    ) : submitStatus === 'error' ? (
                      '發送失敗，請重試'
                    ) : (
                      '發送訊息'
                    )}
                  </Button>
                </form>
              </Form>
              
              {submitStatus === 'success' && (
                <motion.p 
                  className="text-green-600 text-center mt-4"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  您的訊息已成功發送，我會儘快回覆您！
                </motion.p>
              )}
              
              {submitStatus === 'error' && (
                <motion.p 
                  className="text-red-600 text-center mt-4"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  發送失敗，請稍後重試或通過其他方式聯繫我。
                </motion.p>
              )}
            </div>
          </AnimatedElement>
        </div>
        
        <div className="mt-20 text-center text-sm text-gray-600">
        copyright © 2025 Chloe Lin
        </div>
      </div>
    </section>
  );
} 