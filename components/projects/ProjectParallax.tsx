import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Project } from "@/types/index.type";
import ProjectPageCard from "./ProjectPageCard";

export default function ProjectParallax({ projects }: Readonly<{ projects: Project[] }>) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [isFullyInView, setIsFullyInView] = useState(false);
  const length = projects.length;
  const [offset, setOffset] = useState(0);


  // 兩種主要背景顏色
  const bgColors = {
    color1: {
      className: "bg-orange-300/15 "
    },
    color2: {
      className: "bg-red-200/10"
    }
  };

  useEffect(() => {
    const checkInView = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        // 檢查容器是否完全在視窗內
        if (rect.top <= 0 && rect.bottom >= 0) {
          setIsFullyInView(true);
        } else {
          setIsFullyInView(false);
        }

        if(rect.top <= 0 && rect.top >= -width * length + height ){
          const x = Math.round(rect.top / width) * width
          setOffset(-x)
        }
      }
    };

    window.addEventListener("scroll", checkInView);
    window.addEventListener("resize", checkInView);

    // 初始檢查
    checkInView();

    return () => {
      window.removeEventListener("scroll", checkInView);
      window.removeEventListener("resize", checkInView);
    };
  }, [width, height, length]);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }
    handleResize(); // 初始化執行一次
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);



  return (
    <div
      className="image-group-container relative"
      style={{ height: `${width * length}px` }}
      ref={containerRef}
    >
      <div>
        <motion.div
          className={cn(
            "image-group flex top-0 left-0 pt-18 md:pt-0",
            isFullyInView ? "fixed" : "static"
          )}
          initial={{ x: 0 }}
          animate={{ x: -offset }}
          transition={{  type: 'easeInOut' }}
          viewport={{amount: 'all'}}
        >
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={index % 2 === 0 ? bgColors.color1.className : bgColors.color2.className}
            >
              <ProjectPageCard project={project} />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
