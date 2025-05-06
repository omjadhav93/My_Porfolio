// hooks/useInViewPercentage.js
"use client"
import { useEffect, useState } from "react";

export default function useInViewPercentage(ref) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref?.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if(entry.target.offsetHeight > window.innerWidth){
          setInView(entry.isIntersecting)
        }else{
          setInView(entry.intersectionRatio > 0.5); // adjust threshold here
        }
      },
      {
        threshold: Array.from({ length: 101 }, (_, i) => i / 100),
      }
    );

    observer.observe(node);
    return () => observer.unobserve(node);
  }, [ref]);

  return inView;
}
