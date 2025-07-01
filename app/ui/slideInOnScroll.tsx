"use client"

import { useEffect, useRef, useState } from 'react';
import styles from './slideInOnScroll.module.css';

type SlideInProps = {
  children: React.ReactNode;
  direction?: 'up' | 'right';
};


export default function SlideInOnScroll({ children, direction = 'up' }: SlideInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles.base} ${isVisible ? styles[`slideIn${capitalize(direction)}`] : ''}`}
    >
      {children}
    </div>
  );
}

// helper
function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
