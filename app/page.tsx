'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from '../components/ui-components/Header';
import Hero from '../components/hero/Hero';
import Projects from '../components/projects/Projects';
import Skills from '../components/skills/Skills';
import Contact from '../components/contact/Contact';
import GlassSphere from '../components/loader/GlassSphere';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 模擬loading過程
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <GlassSphere />}
      </AnimatePresence>

      {!loading && <Header />}

      <main>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
