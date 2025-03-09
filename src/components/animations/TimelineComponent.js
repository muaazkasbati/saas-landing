// components/TimelineComponent.js
import { useEffect, useRef } from "react";

const TimelineComponent = () => {
  const timelineRef = useRef(null);
  const svgRef = useRef(null);
  const playheadRef = useRef(null);

  useEffect(() => {
    const timeline = timelineRef.current;
    const svg = svgRef.current;
    const playhead = playheadRef.current;

    const handleScroll = () => {
      const scrollLeft = timeline.scrollLeft;
      const maxScroll = timeline.scrollWidth - timeline.clientWidth;
      const scrollPercentage = scrollLeft / maxScroll;

      // Calculate shadow intensity based on scroll position (0 to 1)
      const shadowIntensity = Math.min(scrollPercentage * 10, 1); // Scale to 0-1
      const shadowOffset = scrollPercentage * 20; // Dynamic offset

      // Apply dynamic shadow to SVG
      svg.style.filter = `drop-shadow(${shadowOffset}px ${shadowOffset}px ${shadowOffset * 5}px rgba(0, 191, 255, ${shadowIntensity}))`;

      // Move playhead
      const playheadPosition = scrollPercentage * (timeline.clientWidth - 20); // 20px for playhead width
      playhead.style.left = `${playheadPosition}px`;
    };

    timeline.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => timeline.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full h-screen bg-gray-900 flex flex-col items-center justify-center overflow-hidden">
      {/* SVG Container */}
      <div className="relative w-[400px] h-[400px] mb-8">
        <svg
          ref={svgRef}
          width="400"
          height="400"
          viewBox="0 0 100 100"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <path
            d="M 50 10 Q 70 30 90 50 Q 70 70 50 90 Q 30 70 10 50 Q 30 30 50 10"
            fill="none"
            stroke="rgba(0, 191, 255, 0.8)"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* Timeline Container */}
      <div
        ref={timelineRef}
        className="w-[90%] h-20 bg-gray-800 rounded-lg overflow-x-auto relative"
      >
        {/* Timeline Markers */}
        <div className="flex items-center h-full px-4">
          {Array.from({ length: 6 }, (_, i) => (
            <div key={i} className="w-20 text-center text-white text-sm">
              {i}s
            </div>
          ))}
        </div>

        {/* Playhead */}
        <div
          ref={playheadRef}
          className="absolute w-5 h-20 bg-blue-500 transform -translate-y-full"
          style={{ left: "0" }}
        ></div>
      </div>
    </div>
  );
};

export default TimelineComponent;