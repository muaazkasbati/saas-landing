// components/AnimatedCircles.js
import { useEffect } from 'react';
import { gsap } from 'gsap';

const AnimatedCircles = () => {
  useEffect(() => {
    // Select the icons
    const icons = document.querySelectorAll('.hover-icon');

    // Animation timeline
    const tl = gsap.timeline({ repeat: -1 });

    icons.forEach((icon, index) => {
      const radius = index === 0 ? 60 : 80; // Inner and outer orbit radii
      const delay = index * 0.5; // Stagger the start of each icon's animation

      gsap.to(icon, {
        x: radius * Math.cos(gsap.utils.wrap(0, 2 * Math.PI, gsap.getProperty(icon, "rotation") / 180)),
        y: radius * Math.sin(gsap.utils.wrap(0, 2 * Math.PI, gsap.getProperty(icon, "rotation") / 180)),
        rotation: 360, // Full rotation
        duration: 6,
        ease: 'linear', // Smooth continuous orbit
        modifiers: {
          x: gsap.utils.unitize(x => radius * Math.cos(x * Math.PI / 180)),
          y: gsap.utils.unitize(y => radius * Math.sin(y * Math.PI / 180)),
        },
        onUpdate: () => {
          gsap.set(icon, {
            x: radius * Math.cos(gsap.getProperty(icon, "rotation") * Math.PI / 180),
            y: radius * Math.sin(gsap.getProperty(icon, "rotation") * Math.PI / 180),
          });
        },
      });
    });

    return () => gsap.killTweensOf(icons); // Cleanup on unmount
  }, []);

  return (
    <div className="relative w-[200px] h-[200px] flex items-center justify-center overflow-hidden">
      {/* Central Cloud Icon */}
      <div className="absolute w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
        <span className="text-white text-2xl">☁️</span>
      </div>

      {/* Gradient Lines (1px width concentric circles) */}
      <svg className="absolute" width="250" height="250">
  <circle
    cx="125"
    cy="125"
    r="60"
    stroke="url(#gradient1)"
    strokeWidth="1"
    fill="none"
  />
  <circle
    cx="125"
    cy="125"
    r="80"
    stroke="url(#gradient2)"
    strokeWidth="1"
    fill="none"
  />
  <defs>
    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="7.33%" style={{ stopColor: 'rgba(255, 255, 255, 0.08)' }} />
      <stop offset="27.78%" style={{ stopColor: 'rgba(255, 255, 255, 0.25)' }} />
      <stop offset="49.23%" style={{ stopColor: '#FFFFFF' }} />
      <stop offset="71.35%" style={{ stopColor: 'rgba(255, 255, 255, 0.25)' }} />
      <stop offset="91.12%" style={{ stopColor: 'rgba(255, 255, 255, 0.08)' }} />
    </linearGradient>
    <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="7.33%" style={{ stopColor: 'rgba(255, 255, 255, 0.08)' }} />
      <stop offset="27.78%" style={{ stopColor: 'rgba(255, 255, 255, 0.25)' }} />
      <stop offset="49.23%" style={{ stopColor: '#FFFFFF' }} />
      <stop offset="71.35%" style={{ stopColor: 'rgba(255, 255, 255, 0.25)' }} />
      <stop offset="91.12%" style={{ stopColor: 'rgba(255, 255, 255, 0.08)' }} />
    </linearGradient>
  </defs>
</svg>

      {/* Hovering Icons */}
      {/* <div className="hover-icon absolute w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        🔒
      </div> */}
      <div className="hover-icon absolute w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{ transform: 'translate(-60px, -60px)' }}>
        📄
      </div>
      <div className="hover-icon absolute w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{ transform: 'translate(60px, -60px)' }}>
        🛡️
      </div>
      {/* <div className="hover-icon absolute w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{ transform: 'translate(60px, 60px)' }}>
        ✅
      </div> */}
    </div>
  );
};

export default AnimatedCircles;