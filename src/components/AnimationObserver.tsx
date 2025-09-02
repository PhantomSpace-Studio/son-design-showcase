import { useState, useEffect } from 'react';

interface AnimationObserverProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const AnimationObserver = ({ children, className = 'fade-in', delay = 0 }: AnimationObserverProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [elementRef, setElementRef] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!elementRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.unobserve(elementRef);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px 0px -50px 0px',
      }
    );

    observer.observe(elementRef);

    return () => {
      if (elementRef) {
        observer.unobserve(elementRef);
      }
    };
  }, [elementRef, delay]);

  return (
    <div
      ref={setElementRef}
      className={`${className} ${isVisible ? 'visible' : ''}`}
    >
      {children}
    </div>
  );
};

export default AnimationObserver;