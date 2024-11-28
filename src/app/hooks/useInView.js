// hooks/useInView.js
import { useState, useEffect } from 'react';

const useInView = (options) => {
  const [ref, setRef] = useState(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.disconnect(); // Stop observing once in view
      }
    }, options);

    observer.observe(ref);

    return () => {
      if (observer) observer.disconnect();
    };
  }, [ref, options]);

  return [setRef, isInView];
};

export default useInView;
