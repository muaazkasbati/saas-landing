// components/PremiereLikeComponent.js
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useDrag } from "react-use-gesture";

const PremiereLikeComponent = () => {
  const timelineRef = useRef(null);
  const playheadRef = useRef(null);
  const controls = useAnimation();
  const [time, setTime] = useState(0);
  const duration = 5; // 5 seconds duration

  // Image Animation Variants (using scale and skew)
  const imageVariants = {
    initial: { scale: 1, skewY: 0 }, // Start with normal size and no skew
    animate: (custom) => ({
      scale: custom, // Shrink from 1 to 0 as time progresses
      skewY: custom * -10, // Apply skew effect (e.g., -10deg to 0deg)
      transition: { duration: 0.3, ease: "easeInOut" },
    }),
  };

  // Handle Drag for Playhead
  const bindDrag = useDrag(({ active, movement: [mx], event }) => {
    if (active) {
      const timeline = timelineRef.current;
      const rect = timeline.getBoundingClientRect();
      const maxX = rect.width - 5; // 5px for playhead width
      const newX = Math.max(0, Math.min(mx, maxX));

      const playhead = playheadRef.current;
      playhead.style.left = `${newX}px`;

      // Calculate time based on position
      const percentage = newX / maxX;
      const newTime = percentage * duration;
      setTime(newTime.toFixed(2));

      // Animate image based on time
      const scaleValue = 1 - (newTime / duration); // Reverse for inward scaling
      controls.start({ scale: scaleValue, skewY: scaleValue * -10 });
    }
  });

  useEffect(() => {
    const handleResize = () => {
      if (playheadRef.current) playheadRef.current.style.left = "0px";
      setTime(0);
      controls.start({ scale: 1, skewY: 0 });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [controls]);

  return (
    <div className="w-full  text-white flex flex-col items-center relative">
      {/* Preview Screen */}
      <div className="w-full max-w-4xl h-96 mb-4 flex items-center justify-center overflow-hidden">
      <motion.div
          className="w-full h-full"
          variants={imageVariants}
          initial="initial"
          animate={controls}
          custom={1}
        >
          <img
            src="/images/saas-svg.png" // Replace with the correct path to your PNG
            alt="Animated Preview"
            className="absolute z-6 top-[25%] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
        </motion.div>
      </div>

      {/* Timestamp */}
      <div
        className="w-full max-w-4xl h-8 bg-[#171A26] text-[10px] flex items-center px-4 shadow-[inset_0px_0px_12px_0px_rgba(0,149,255,0.4)]"
      >
        {Array.from({ length: 6 }, (_, i) => (
          <div key={i} className="w-1/5 text-center">
            {i}s
          </div>
        ))}
        <div className="absolute w-full h-px bg-gray-600 top-[62%] transform -translate-y-1/2">
          {Array.from({ length: 20 }, (_, i) => (
            <span
              key={i}
              className="absolute h-2 bg-gray-400"
              style={{ left: `${(i * 5)}%`, width: "1px" }}
            ></span>
          ))}
        </div>
      </div>

      {/* Timeline with Scrollbar */}
      <div
        ref={timelineRef}
        className="w-full max-w-4xl h-20  overflow-hidden relative mt-2"
      >
        <div className="w-full h-full rounded-[4px] shadow-[inset_0px_0px_4px_0px_rgba(156,192,255,0.2)] bg-[linear-gradient(90deg,rgba(13,15,21,0)_0%,rgba(25,30,45,0.5)_28.9%,rgba(39,49,80,0.5)_50%,rgba(25,30,45,0.5)_71.9%,rgba(13,15,21,0.5)_100%)] flex items-center justify-between px-4">
          {/* Empty div to enable scrolling */}
        </div>

        {/* Playhead */}
        <motion.div
          ref={playheadRef}
          {...bindDrag()}
          className="absolute w-[5px] h-20 bg-gray-700 transform -translate-x-1/2 cursor-grab active:cursor-grabbing"
          style={{ left: "0px", top: "0" }}
          drag="x"
          dragConstraints={{ left: 0, right: timelineRef.current?.clientWidth - 10 }}
          dragElastic={0} // No elasticity
        />
      </div>
    </div>
  );
};

export default PremiereLikeComponent;