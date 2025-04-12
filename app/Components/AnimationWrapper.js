// components/AnimatedSectionWrapper.jsx
"use client";

import { createContext, useRef } from "react";
import useInViewPercentage from "../Hooks/InViewPercentage";

export const ViewContext = createContext(false);

export default function AnimatedSectionWrapper({ children }) {
  const sectionRef = useRef(null);
  const inView = useInViewPercentage(sectionRef);

  return (
    <ViewContext.Provider value={inView}>
      <section ref={sectionRef} className="your-section-styles" style={{ display: "inherit", overflow: "hidden" }}>
        {children}
      </section>
    </ViewContext.Provider>
  );
}
