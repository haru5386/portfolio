import { motion } from 'framer-motion';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetClose,
  SheetTitle
} from "@/components/ui/sheet";
import { NavItem } from '@/types/index.type';
import { socialLinks } from '@/data/data';
interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[]
}


export default function MobileMenu({ isOpen, onClose, navItems}: MobileMenuProps) {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent 
        side="right" 
        className="w-3/4 p-0 rounded-none bg-[#f5f5f0] border-l-2 border-black"
      >
        <SheetHeader className="flex justify-end p-4 border-b-2 border-black">
          <SheetClose className="w-10 h-10 border-2 border-black text-black flex items-center justify-center relative overflow-hidden group transition-colors duration-300 hover:text-white">
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
            <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></span>
          </SheetClose>
        </SheetHeader>
        <SheetTitle />
        <nav className="flex flex-col p-6 space-y-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="text-xl font-medium hover:translate-x-2 transition-transform relative inline-block text-black"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + 0.1 }}
              onClick={onClose}
              whileHover={{ x: 10 }}
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 bg-black"></span>
            </motion.a>
          ))}
        </nav>
        
        <div className="mt-auto p-6 border-t-2 border-black">
         
        <div className="flex gap-2 items-center">
          {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center  hover:bg-red-200/30 hover:text-grey-800 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {social.icon}
              </motion.a>

          ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
} 