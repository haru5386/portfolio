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
  { name: '关于我', href: '#about' },
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
          scrolled ? 'bg-white/70 backdrop-blur-md shadow-md' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#hero" className="text-gradient font-bold text-2xl">
            前端工程师
          </a>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`relative px-2 py-1 transition-colors duration-300 ${
                  activeSection === item.href 
                    ? 'text-purple-primary' 
                    : 'text-gray-600 hover:text-purple-primary'
                }`}
              >
                {item.name}
                {activeSection === item.href && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-purple-primary to-teal-primary"
                    layoutId="navIndicator"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </a>
            ))}
          </nav>
          
          <a href="#contact" className="hidden md:block glow-button text-sm">
            联系我
          </a>
          
          {/* 移动端菜单按钮 */}
          <div className="md:hidden">
            <button className="p-2" onClick={() => setMobileMenuOpen(true)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
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