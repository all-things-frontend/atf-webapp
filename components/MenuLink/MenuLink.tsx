import { motion, useAnimate } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import Link from 'next/link';
import styles from './MenuLink.module.scss';
import { mountAnim, rotateX } from '../Menu/anim';

export default function MenuLink({ data, index }) {
  const { title, description, images } = data;
  const [scope, animate] = useAnimate();
  const outer = useRef(null);
  const inner = useRef(null);

  const animateIn = async (e) => {
    const bounds = e.target.getBoundingClientRect();
    const direction = e.clientY < bounds.top + bounds.height / 2 ? -1 : 1;

    await animate(
      outer.current,
      { top: `${direction * 100}%` },
      { duration: 0 }
    );
    await animate(
      inner.current,
      { top: `${-1 * direction * 100}%` },
      { duration: 0 }
    );

    animate([outer.current, inner.current], { top: '0%' }, { duration: 0.3 });
  };

  const animateOut = (e) => {
    const bounds = e.target.getBoundingClientRect();
    const direction = e.clientY < bounds.top + bounds.height / 2 ? -1 : 1;

    animate(outer.current, { top: `${direction * 100}%` }, { duration: 0.3 });
    animate(
      inner.current,
      { top: `${-1 * direction * 100}%` },
      { duration: 0.3 }
    );
  };

  return (
    <motion.div
      variants={rotateX}
      {...mountAnim}
      custom={index}
      onMouseEnter={(e) => {
        animateIn(e);
      }}
      onMouseLeave={(e) => {
        animateOut(e);
      }}
      ref={scope}
      className={styles.el}
    >
      <Link href="/">{title}</Link>
      <div ref={outer} className={styles.outer}>
        <div ref={inner} className={styles.inner}>
          {[...Array(2)].map((_, index) => {
            return <SliderContent key={index} description={description} />;
          })}
        </div>
      </div>
    </motion.div>
  );
}

const SliderContent = ({ description }: { description: string }) => {
  return (
    <div className={styles.container}>
      <p>{description}</p>
    </div>
  );
};
