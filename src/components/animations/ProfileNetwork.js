// components/ProfileNetwork.js
import { useEffect, useRef } from "react";
import gsap from "gsap";

const ProfileNetwork = () => {
  const profileRefs = useRef([]);
  const lineRefs = useRef([]);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Animation on load
    gsap.fromTo(
      profileRefs.current,
      { opacity: 0, scale: 0.5, y: 50 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "back.out(1.7)",
      }
    );

    gsap.fromTo(
      lineRefs.current,
      { scaleY: 0, opacity: 0 },
      {
        scaleY: 1,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        delay: 0.5,
      }
    );

    gsap.fromTo(
      buttonRef.current,
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "elastic.out(1, 0.3)",
        delay: 1,
      }
    );
  }, []);

  // Interactivity: Hover effect for profiles
  const handleProfileHover = (index) => {
    gsap.to(profileRefs.current[index], {
      scale: 1.1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleProfileLeave = (index) => {
    gsap.to(profileRefs.current[index], {
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  // Interactivity: Click effect for button
  const handleButtonClick = () => {
    gsap.to(buttonRef.current, {
      scale: 1.2,
      rotation: 360,
      duration: 0.5,
      ease: "elastic.out(1, 0.3)",
      yoyo: true,
      repeat: 1,
    });
  };

  return (
    <div className="flex items-center justify-center">
      <div className="relative w-full max-w-4xl p-6">
        {/* Center Button */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <a
            ref={buttonRef}
            className="block px-8 py-3 text-white cursor-pointer rounded-full bg-[#1E293B] hover:bg-[#1E293B]/90 transition-colors"
            style={{
              borderRadius: "50px", // Oval shape
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
            }}
            onClick={handleButtonClick}
          >
            Collaboration
          </a>
        </div>

        {/* Profiles and Lines */}
        <div className="flex justify-between items-start">
          {/* Top Left Profile */}
          <div
            ref={(el) => (profileRefs.current[0] = el)}
            className="relative"
            onMouseEnter={() => handleProfileHover(0)}
            onMouseLeave={() => handleProfileLeave(0)}
          >
            <div className="w-24 h-24 rounded-full bg-green-300 flex items-center justify-center overflow-hidden">
              <img
                src="https://via.placeholder.com/100?text=Profile+1"
                alt="Profile 1"
                className="w-full h-full object-cover"
              />
            </div>
            <svg
              ref={(el) => (lineRefs.current[0] = el)}
              className="absolute w-64 h-64"
              style={{ transformOrigin: "bottom right" }}
            >
              <line
                x1="100%"
                y1="100%"
                x2="0"
                y2="0"
                stroke="#A855F7"
                strokeWidth="2"
                strokeDasharray="5 5" // Dashed line to match design
              />
            </svg>
          </div>

          {/* Top Center Profile */}
          <div
            ref={(el) => (profileRefs.current[1] = el)}
            className="relative"
            onMouseEnter={() => handleProfileHover(1)}
            onMouseLeave={() => handleProfileLeave(1)}
          >
            <div className="w-24 h-24 rounded-full bg-pink-300 flex items-center justify-center overflow-hidden">
              <img
                src="https://via.placeholder.com/100?text=Profile+2"
                alt="Profile 2"
                className="w-full h-full object-cover"
              />
            </div>
            <svg
              ref={(el) => (lineRefs.current[1] = el)}
              className="absolute w-48 h-48"
              style={{ transformOrigin: "bottom" }}
            >
              <line
                x1="50%"
                y1="100%"
                x2="50%"
                y2="0"
                stroke="#A855F7"
                strokeWidth="2"
                strokeDasharray="5 5" // Dashed line to match design
              />
            </svg>
          </div>

          {/* Top Right Profile */}
          <div
            ref={(el) => (profileRefs.current[2] = el)}
            className="relative"
            onMouseEnter={() => handleProfileHover(2)}
            onMouseLeave={() => handleProfileLeave(2)}
          >
            <div className="w-24 h-24 rounded-full bg-blue-300 flex items-center justify-center overflow-hidden">
              <img
                src="https://via.placeholder.com/100?text=Profile+3"
                alt="Profile 3"
                className="w-full h-full object-cover"
              />
            </div>
            <svg
              ref={(el) => (lineRefs.current[2] = el)}
              className="absolute w-64 h-64"
              style={{ transformOrigin: "bottom left" }}
            >
              <line
                x1="0"
                y1="100%"
                x2="100%"
                y2="0"
                stroke="#A855F7"
                strokeWidth="2"
                strokeDasharray="5 5" // Dashed line to match design
              />
            </svg>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex justify-between mt-16">
          {/* Bottom Left Profile */}
          <div
            ref={(el) => (profileRefs.current[3] = el)}
            className="relative"
            onMouseEnter={() => handleProfileHover(3)}
            onMouseLeave={() => handleProfileLeave(3)}
          >
            <div className="w-24 h-24 rounded-full bg-orange-300 flex items-center justify-center overflow-hidden">
              <img
                src="https://via.placeholder.com/100?text=Profile+4"
                alt="Profile 4"
                className="w-full h-full object-cover"
              />
            </div>
            <svg
              ref={(el) => (lineRefs.current[3] = el)}
              className="absolute w-64 h-64"
              style={{ transformOrigin: "top right" }}
            >
              <line
                x1="100%"
                y1="0"
                x2="0"
                y2="100%"
                stroke="#A855F7"
                strokeWidth="2"
                strokeDasharray="5 5" // Dashed line to match design
              />
            </svg>
          </div>

          {/* Bottom Right Profile */}
          <div
            ref={(el) => (profileRefs.current[4] = el)}
            className="relative"
            onMouseEnter={() => handleProfileHover(4)}
            onMouseLeave={() => handleProfileLeave(4)}
          >
            <div className="w-24 h-24 rounded-full bg-yellow-300 flex items-center justify-center overflow-hidden">
              <img
                src="https://via.placeholder.com/100?text=Profile+5"
                alt="Profile 5"
                className="w-full h-full object-cover"
              />
            </div>
            <svg
              ref={(el) => (lineRefs.current[4] = el)}
              className="absolute w-64 h-64"
              style={{ transformOrigin: "top left" }}
            >
              <line
                x1="0"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="#A855F7"
                strokeWidth="2"
                strokeDasharray="5 5" // Dashed line to match design
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileNetwork;