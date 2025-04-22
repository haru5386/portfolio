import { motion } from 'framer-motion';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetClose,
} from "@/components/ui/sheet";
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navItems = [
  { name: '首页', href: '#hero' },
  { name: '作品集', href: '#projects' },
  { name: '技能', href: '#skills' },
  { name: '联系', href: '#contact' },
];

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent 
        side="right" 
        className={cn(
          "w-3/4 p-0 rounded-none",
          isDark 
            ? "bg-[#121212] border-l-2 border-gray-800" 
            : "bg-[#f5f5f0] border-l-2 border-black",
        )}
      >
        <SheetHeader className={cn(
          "flex justify-end p-4", 
          isDark ? "border-b-2 border-gray-800" : "border-b-2 border-black"
        )}>
          <SheetClose className={cn(
            "w-10 h-10 border-2 flex items-center justify-center relative overflow-hidden group transition-colors duration-300",
            isDark 
              ? "border-white text-white hover:text-black" 
              : "border-black text-black hover:text-white"
          )}>
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
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </span>
            <span className={`absolute inset-0 ${
              isDark ? 'bg-white' : 'bg-black'
            } translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out`}></span>
          </SheetClose>
        </SheetHeader>
        
        <nav className="flex flex-col p-6 space-y-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              className={cn(
                "text-xl font-medium hover:translate-x-2 transition-transform relative inline-block",
                isDark ? "text-white" : "text-black"
              )}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + 0.1 }}
              onClick={onClose}
              whileHover={{ x: 10 }}
            >
              {item.name}
              <span className={cn(
                "absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300",
                isDark ? "bg-white" : "bg-black"
              )}></span>
            </motion.a>
          ))}
        </nav>
        
        <div className={cn(
          "mt-auto p-6",
          isDark ? "border-t-2 border-gray-800" : "border-t-2 border-black"
        )}>
          <a 
            href="#contact" 
            className={cn(
              "block border-2 py-3 font-medium transition-all duration-300 text-center relative overflow-hidden group",
              isDark 
                ? "border-white bg-white text-black hover:bg-transparent hover:text-white" 
                : "border-black bg-black text-white hover:bg-transparent hover:text-black"
            )}
            onClick={onClose}
          >
            <span className="relative z-10">联系我</span>
            <span className={`absolute inset-0 ${
              isDark ? 'bg-white' : 'bg-black'
            } translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out`}></span>
          </a>
        </div>
      </SheetContent>
    </Sheet>
  );
} 