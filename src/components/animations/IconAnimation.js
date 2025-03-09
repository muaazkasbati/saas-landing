// components/InteractiveLine.js
'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function InteractiveLine() {
  const containerRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const box1Ref = useRef(null);
  const box2Ref = useRef(null);
  const box3Ref = useRef(null);

  useEffect(() => {
    const boxes = [box1Ref.current, box2Ref.current, box3Ref.current];
    const lines = [line1Ref.current, line2Ref.current];

    // Animate boxes
    boxes.forEach((box) => {
      gsap.fromTo(
        box,
        {
          opacity: 0,
          scale: 0.5,
          x: -50,
        },
        {
          opacity: 1,
          scale: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: box,
            start: 'left 80%',
            end: 'right 20%',
            toggleActions: 'play reverse play reverse',
          },
        }
      );
    });

    // Animate lines
    lines.forEach((line) => {
      gsap.fromTo(
        line,
        {
          width: 0,
          opacity: 0,
        },
        {
          width: '100%',
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: line,
            start: 'left 80%',
            end: 'right 20%',
            toggleActions: 'play reverse play reverse',
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen flex items-center justify-center py-20">
      <div className="relative w-full max-w-4xl">
        <div className="flex items-center justify-center gap-8">
          {/* Start Circle */}
          <div className="w-6 h-6 bg-blue-500 rounded-full flex-shrink-0"></div>

          {/* Box 1 */}
          <div
            ref={box1Ref}
            className="w-32 h-32 bg-red-500 rounded-lg flex-shrink-0"
          ></div>

          {/* Line 1 */}
          <div
            ref={line1Ref}
            className="h-1 bg-gray-300 flex-grow"
          ></div>

          {/* Box 2 */}
          <div
            ref={box2Ref}
            className="w-32 h-32 bg-green-500 rounded-lg flex-shrink-0"
          ></div>

          {/* Line 2 */}
          <div
            ref={line2Ref}
            className="h-1 bg-gray-300 flex-grow"
          ></div>

          {/* Box 3 */}
          <div
            ref={box3Ref}
            className="w-32 h-32 bg-yellow-500 rounded-lg flex-shrink-0"
          ></div>

          {/* End Circle */}
          <div className="w-6 h-6 bg-blue-500 rounded-full flex-shrink-0"></div>
        </div>
      </div>
    </div>
  );
}