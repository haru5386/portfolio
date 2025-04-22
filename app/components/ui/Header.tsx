import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import MobileMenu from './MobileMenu';

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: '首页', href: '#hero' },
  { name: '作品集', href: '#projects' },
  { name: '技能', href: '#skills' },
  { name: '联系', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // 立即初始化scrolled状态，避免闪烁
  useEffect(() => {
    setScrolled(window.scrollY > 10);
  }, []);

  // 处理滚动事件
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 10);
  
      const sections = navItems.map(item => item.href.substring(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop - 100;
          if (currentScrollY >= sectionTop) {
            setActiveSection(`#${sections[i]}`);
            break;
          }
        }
      }
    };
  
    window.addEventListener('scroll', handleScroll, { passive: true });
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#f5f5f0] shadow-md' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
          <a href="#hero" className="font-black text-2xl text-black tracking-tight">
            PORTFOLIO
          </a>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`relative px-2 py-1 transition-colors duration-300 font-medium ${
                  activeSection === item.href 
                    ? 'text-black' 
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                {item.name}
                {activeSection === item.href && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 w-full bg-black"
                    layoutId="navIndicator"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </a>
            ))}
          </nav>
          
          <a 
            href="#contact" 
            className="hidden md:block border-2 border-black bg-black text-white hover:bg-transparent hover:text-black px-5 py-2 font-medium transition-all duration-300 text-sm relative overflow-hidden group"
          >
            <span className="relative z-10">联系我</span>
            <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></span>
          </a>
          
          {/* 移动端菜单按钮 */}
          <div className="md:hidden">
            <button 
              className="w-10 h-10 border-2 border-black flex items-center justify-center relative overflow-hidden group hover:text-white transition-colors duration-300" 
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="relative z-10">
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
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              </span>
              <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></span>
            </button>
          </div>
        </div>
      </motion.header>
      
      <MobileMenu 
        isOpen={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)} 
      />
    </>
  );
} 