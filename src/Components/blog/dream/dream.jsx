import React, { useState, useEffect } from 'react';
import style from './dream.module.css';
import { motion } from 'framer-motion';

const phrases = [
  'Building Dreams',
  'Crafting Trust',
  'Creating Spaces'
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
          <motion.h1
            key={phrases[index]}
            style={{ color: '#feb900' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
          >
            {phrases[index]}
          </motion.h1>

          <p className='mt-3'>
            Discover why clients trust us for top-notch construction services.
            From concept to completion, we turn visions into reality with
            precision and care.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
