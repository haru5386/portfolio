import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Project } from "@/types/index.type";
import ProjectPageCard from "./ProjectPageCard";

export default function ProjectParallax({ projects }: { projects: Project[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [isFullyInView, setIsFullyInView] = useState(false);
  const length = projects.length;

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
  }, []);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize(); // 初始化執行一次
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({ target: containerRef });
  const x = useTransform(scrollYProgress, [0, 1], [0, -width * (length-1)]);

  return (
    <div
      className="image-group-container relative"
      style={{ height: `${width * length}px` }}
      ref={containerRef}
    >
      <div>
        <motion.div
          className={cn(
            "image-group flex top-0 left-0",
            isFullyInView ? "fixed" : "static"
          )}
          style={{ x }}
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
