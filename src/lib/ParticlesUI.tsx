'use client';

import { useEffect, useRef } from "react";

export function TeX({ latex }: { latex: string }) {
    const containerRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      // Trigger MathJax to process the content after rendering
      if (containerRef.current && window.MathJax) {
        // @ts-ignore - MathJax is loaded via script tag
        window.MathJax.typeset([containerRef.current]);
      }
    }, [latex]);
  
    return (
      <div ref={containerRef}>
        {latex ? `\\(${latex}\\)` : ''}
      </div>
    );
  }