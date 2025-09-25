import React, { useState, useEffect } from 'react';
import style from './dream.module.css';
import { motion, AnimatePresence } from 'framer-motion';

const phrases = [
  {
    title: 'Crafting Trust',
    desc: 'From double-storey extensions in Maidenhead to refurbishments in Reading, every project is completed with warranty-backed work and consistent quality.',
  },
  {
    title: 'Building Dreams',
    desc: 'Whether it’s a new build in Gerrards Cross or a bungalow conversion in Gallowstree Common, we turn ideas into safe, functional, and modern spaces.',
  },
  {
    title: 'Shaping Homes',
    desc: 'For over 15 years, families across Slough, Windsor, and Uxbridge have relied on us to deliver projects that pass Building Control without delay.',
  },
  {
    title: 'Delivering Quality',
    desc: 'With vetted subcontractors, staged payments, and full compliance handled, we ensure every build is managed smoothly from start to finish.',
  },
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={style.heroSection}>
      <motion.div
        className={style.heroOverlay}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <motion.div
          className={style.heroText}
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.3,
              },
            },
          }}
        >
          <AnimatePresence mode="wait">
            <motion.h1
              key={phrases[index].title}
              style={{ color: '#feb900' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
            >
              {phrases[index].title}
            </motion.h1>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.p
              key={phrases[index].desc}
              className="mt-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6 }}
            >
              {phrases[index].desc}
            </motion.p>
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
