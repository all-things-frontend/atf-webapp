'use client';

import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import React, { useEffect, useMemo, useState } from 'react';

type SentencePropType = { sentence: string };

export const TextReveal: React.FC<SentencePropType> = ({ sentence }) => {
  const words = useMemo(() => sentence.split(' '), [sentence]);
  const { scrollY } = useScroll();

  const [scrollVal, setScrollVal] = useState(0);
  const [totalHeight, setTotalHeight] = useState(0);

  useEffect(() => {
    setTotalHeight(document.body.offsetHeight - window.innerHeight);
  }, []);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrollVal(latest);
  });

  const wordLengthWithOpacity = useMemo(
    () => Math.floor(words.length * (scrollVal / totalHeight)),
    [scrollVal, words.length, totalHeight]
  );

  return (
    <div className="flex gap-2 flex-wrap">
      {words.map((word, index) => (
        <motion.span
          className={`text-6xl font-semibold leading-[80px] tracking-wide ${
            index > wordLengthWithOpacity ? 'text-primary/20' : 'text-primary'
          }
          ${
            word.includes('reactChad') && index <= wordLengthWithOpacity
              ? 'bg-primary text-black italic'
              : ''
          }
          `}
          key={`${word}-${index}`}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};
