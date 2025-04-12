// hooks/useInViewPercentage.js
import { useEffect, useState } from "react";

export default function useInViewPercentage(ref) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref?.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.intersectionRatio > 0.5); // adjust threshold here
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
