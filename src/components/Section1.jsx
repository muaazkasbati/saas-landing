import gsap from "gsap";
import { useEffect } from "react";

export default function Section1() {
  useEffect(() => {
    // Dynamically import GSAP and ScrollTrigger
    // const loadGsap = async () => {
    //   const gsap = (await import("gsap")).default;
    //   const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;

    //   gsap.registerPlugin(ScrollTrigger);
      gsap.fromTo(
        ".section-title",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          // scrollTrigger: {
          //   trigger: ".section-title", // The element that triggers the animation
          //   start: "top 80%", // Start when 80% of the element is in view
          //   end: "bottom 20%",
          //   scrub: true, // Smooth scroll animation
          // },
        }
      );

      // GSAP animation for description with scroll trigger
      gsap.fromTo(
        ".section-description",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          delay: 0.3,
          // scrollTrigger: {
          //   trigger: ".section-description",
          //   start: "top 80%",
          //   end: "bottom 20%",
          //   scrub: true,
          // },
        }
      );

      // GSAP animation for buttons with scroll trigger
      gsap.fromTo(
        ".section-button",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          delay: 0.5,
          stagger: 0.2,
          // scrollTrigger: {
          //   trigger: ".section-button",
          //   start: "top 80%",
          //   end: "bottom 20%",
          //   scrub: true,
          // },
        }
      );
    // };

    // loadGsap();
  }, []);

  return (
    <section className="pt-20 pb-12 px-6">
      <div className="container mx-auto max-w-[820px] text-center">
        <h1
          className="text-white text-3xl md:text-4xl font-bold leading-tight section-title"
        >
          Transform Concepts into, {" "}
          <span className="bg-gradient-to-r from-[#00AEFF] to-[#1778FF] bg-clip-text text-transparent">
            Dynamic
          </span>{" "}
          Animations
        </h1>
        <p
          className="text-[#BEBEBE] mt-4 mx-auto text-center text-base md:text-lg font-medium max-w-[90%] md:max-w-[574px] section-description"
        >
          Unleash your creativity with our intuitive animation tool. Create stunning videos and bring your vision to life in just a few clicks!
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6 section-button">
          <button className="cursor-pointer text-white px-5 py-3 rounded-lg border border-[rgba(224,242,255,0.40)] bg-[#03263D] shadow-md hover:bg-[#045d73] hover:scale-105 transition-all duration-300 ease-in-out">
            Try it now
          </button>
          <button className="cursor-pointer text-white px-5 py-3 rounded-lg border border-[rgba(255,255,255,0.32)] bg-gradient-to-br from-[#1F1F1F] via-[#191919] to-[#0F0F0F] hover:bg-[#2A2A2A] hover:scale-105 transition-all duration-300 ease-in-out">
            Book your demo
          </button>
        </div>
      </div>
    </section>
  );
}
