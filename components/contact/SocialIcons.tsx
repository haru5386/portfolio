"use client"

import { motion } from 'framer-motion';
import { TooltipProvider, TooltipRoot, TooltipTrigger, TooltipContent } from '../ui/tooltip';
import { socialLinks } from '@/data/data';
export default function SocialIcons() {
  return (
    <TooltipProvider>
      <div className="flex items-center space-x-4">
        {socialLinks.map((social) => (
          <TooltipRoot key={social.name}>
            <TooltipTrigger asChild>
              <motion.a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center border-2 border-black hover:bg-black hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {social.icon}
              </motion.a>
            </TooltipTrigger>
            <TooltipContent>
              {social.name}
            </TooltipContent>
          </TooltipRoot>
        ))}
      </div>
    </TooltipProvider>
  );
} 