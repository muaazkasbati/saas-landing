import { useEffect } from "react";

const boxData = [
    {
        "id": 1,
        "svg": <svg xmlns="http://www.w3.org/2000/svg" width="21" height="29" viewBox="0 0 21 29" fill="none">
            <path d="M10.6666 5.16675V1.16675M10.6666 11.8334V9.16675M10.6666 27.8334C5.51199 27.8334 1.33331 23.6547 1.33331 18.5001V10.5001C1.33331 7.55456 3.72113 5.16675 6.66665 5.16675H14.6666C17.6122 5.16675 20 7.55456 20 10.5001V18.5001C20 23.6547 15.8213 27.8334 10.6666 27.8334Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>,
        "title": "Intuitive User Experience",
        "text": "Start a quick with a user-friendly interface designed for maximum easy and efficiency."
    },
    {
        "id": 2,
        "svg": <svg xmlns="http://www.w3.org/2000/svg" width="22" height="29" viewBox="0 0 22 29" fill="none">
            <path d="M3.12205 16.2067H7.24205V25.8067C7.24205 28.0467 8.45538 28.5 9.93538 26.82L20.0287 15.3534C21.2687 13.9534 20.7487 12.7934 18.8687 12.7934H14.7487V3.19336C14.7487 0.953359 13.5354 0.500026 12.0554 2.18003L1.96205 13.6467C0.735382 15.06 1.25538 16.2067 3.12205 16.2067Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>,
        "title": "Boost Productivity",
        "text": "Use pre-default transitions to save time and productivity."
    },
    {
        "id": 3,
        "svg": <svg xmlns="http://www.w3.org/2000/svg" width="25" height="27" viewBox="0 0 25 27" fill="none">
            <path d="M17.1773 19.1913H7.55066" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M17.1773 13.6093H7.55066" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M11.2241 8.0402H7.55078" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.4338 1.22656C17.4338 1.22656 7.19781 1.2319 7.18181 1.2319C3.50181 1.25456 1.22314 3.6759 1.22314 7.36923V19.6306C1.22314 23.3426 3.51914 25.7732 7.23114 25.7732C7.23114 25.7732 17.4658 25.7692 17.4831 25.7692C21.1631 25.7466 23.4431 23.3239 23.4431 19.6306V7.36923C23.4431 3.65723 21.1458 1.22656 17.4338 1.22656Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>,
        "title": "Customizable Templates",
        "text": "Get ready made customizable templates for your projects."
    },
    {
        "id": 4,
        "svg": <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
            <path d="M18 2.66675H9.33334C5.00001 2.66675 2.83334 4.83341 2.83334 9.16675V23.2501C2.83334 23.8459 3.32084 24.3334 3.91668 24.3334H18C22.3333 24.3334 24.5 22.1667 24.5 17.8334V9.16675C24.5 4.83341 22.3333 2.66675 18 2.66675Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M8.25003 10.7917H19.0834" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M8.25003 16.2085H15.8334" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>,
        "title": "24/7 Support",
        "text": "Get instant assistance anytime with our intelligent, always available assistant."
    },
    {
        "id": 5,
        "svg": <svg xmlns="http://www.w3.org/2000/svg" width="24" height="27" viewBox="0 0 24 27" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9999 26.0708C11.9999 26.0708 22.2293 22.9734 22.2293 14.4348C22.2293 5.89478 22.5999 5.22811 21.7799 4.40678C20.9586 3.58544 13.3413 0.929443 11.9999 0.929443C10.6586 0.929443 3.04128 3.58544 2.22128 4.40678C1.39995 5.22811 1.77062 5.89478 1.77062 14.4348C1.77062 22.9734 11.9999 26.0708 11.9999 26.0708Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M8.53516 13.0957L11.0578 15.6224L16.2552 10.4224" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>,
        "title": "Data Security & Compliance",
        "text": "Safeguard your operations with industry-leading standards."
    },
    {
        "id": 6,
        "svg": <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
            <path d="M7.15733 9.86632H5.91333C3.2 9.86632 1 12.0663 1 14.7797L1 21.2797C1 23.9917 3.2 26.1917 5.91333 26.1917H20.7533C23.4667 26.1917 25.6667 23.9917 25.6667 21.2797V14.7663C25.6667 12.061 23.4733 9.86632 20.768 9.86632H19.5107" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M13.3332 0.808371L13.3332 16.863" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M9.44641 4.71265L13.3331 0.808646L17.2211 4.71265" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>,
        "title": "High-Quality Export",
        "text": "High-quality export options allow users to download their content in formats"
    },

]

export default function Section5() {
    useEffect(() => {
      // Dynamically import GSAP and ScrollTrigger
      const loadGsap = async () => {
        const gsap = (await import("gsap")).default;
        const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
  
        gsap.registerPlugin(ScrollTrigger);
  
        // Section title fade-in animation
        gsap.fromTo(
          ".section-title",
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".section-title",
              start: "top 80%",
              end: "bottom 20%",
              scrub: true,
            },
          }
        );
  
        // Section description fade-in animation
        gsap.fromTo(
          ".section-description",
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".section-description",
              start: "top 80%",
              end: "bottom 20%",
              scrub: true,
            },
          }
        );
  
        // Feature box pop-up animations on scroll
        gsap.fromTo(
          ".feature-box",
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            stagger: 0.2,
            scrollTrigger: {
              trigger: ".feature-box",
              start: "top 75%",
              end: "bottom 20%",
              scrub: true,
            },
          }
        );
  
        // Hover interaction on feature boxes (interactive pop-up)
        gsap.utils.toArray(".feature-box").forEach((box) => {
          box.addEventListener("mouseenter", () => {
            gsap.to(box, { scale: 1.1, duration: 0.3 });
          });
  
          box.addEventListener("mouseleave", () => {
            gsap.to(box, { scale: 1, duration: 0.3 });
          });
        });
      };
  
      loadGsap();
    }, []);
  
    return (
      <section className="py-12 relative">
        <div className="container mx-auto text-center w-full max-w-[600px] z-4">
          <h2 className="text-white text-center mb-4 section-title">Why Choose Us</h2>
          <p className="text-[#BEBEBE] text-center text-[18px] font-medium mb-12 section-description">
            Unlock the full potential of your business with exceptional features and unmatched performance.
          </p>
        </div>
  
        <div className="container mx-auto w-full max-w-[1160px] z-4">
          <div
            className="p-10 rounded-[14px] bg-gradient-to-r from-[#0D0B14] to-[#0B1014] rounded-[14px] border border-white border-opacity-20 backdrop-blur-md"
            style={{
              border: "1px solid rgba(255, 255, 255, 0.20)",
              background: "linear-gradient(90deg, rgba(13, 11, 20, 0.90) 0%, rgba(11, 16, 20, 0.90) 100%)",
              backdropFilter: "blur(8px)",
            }}
          >
            <div className="flex flex-wrap gap-x-4 gap-y-12 w-full justify-between">
              {boxData.map((feature) => (
                <div key={feature.id} className="feature-box flex flex-col items-center gap-4 w-[259px] flex-shrink-0">
                  <div className="block mb-4 mx-auto">{feature.svg}</div>
                  <h3 className="text-white text-center text-[20px]">{feature.title}</h3>
                  <p className="text-center text-[#BEBEBE] text-[12px]">{feature.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
  
        <div
          className="container absolute w-full max-w-[667px] h-[400px] top-50 left-0 right-0 mx-auto flex justify-center items-center -z-1"
          style={{
            borderRadius: "667px",
            background: "radial-gradient(50% 50% at 50% 50%, #6B49FF 0%, #6B49FF 100%)",
            filter: "blur(60px)",
          }}
        />
      </section>
    );
  }