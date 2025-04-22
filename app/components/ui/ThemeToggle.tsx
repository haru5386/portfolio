"use client"

import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // 一旦组件挂载，就可以安全地读取主题
  // 避免服务器渲染和客户端渲染之间的不匹配
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="outline"
        size="icon"
        className="w-10 h-10 border-2 border-black rounded-none flex items-center justify-center"
      >
        <span className="sr-only">加载中</span>
      </Button>
    );
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={cn(
        "w-10 h-10 border-2 border-black rounded-none",
        "flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-300",
        theme === "dark" && "bg-[#2a2a2a] text-white border-gray-700 hover:bg-[#333] hover:text-white"
      )}
    >
      {theme === "dark" ? (
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem]" />
      )}
      <span className="sr-only">切换主题</span>
    </Button>
  );
} 