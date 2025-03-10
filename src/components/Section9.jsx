import { useEffect } from "react";


export default function Section9() {
    useEffect(() => {
        const loadGsap = async () => {
            const gsap = (await import("gsap")).default;
            const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
    
            gsap.registerPlugin(ScrollTrigger);
    
            gsap.fromTo(
                ".section-title",
                { y: 30, x: 0 }, // Initial state (Y translation)
                {
                    y: 0, // End state (Y translation)
                    x: 0, // Optional, if you want to add horizontal movement
                    duration: 1,
                    ease: "power3.inOut", // ease-in-out
                    scrollTrigger: {
                        trigger: ".section-title",
                        // start: "top 80%",
                        // end: "bottom 20%",
                        scrub: true,
                    },
                }
            );
    
            gsap.fromTo(
                ".section-description",
                { y: 30, x: 0 }, // Initial state (Y translation)
                {
                    y: 0, // End state (Y translation)
                    x: 0, // Optional, if you want to add horizontal movement
                    duration: 1,
                    ease: "power3.inOut", // ease-in-out
                    scrollTrigger: {
                        trigger: ".section-description",
                        // start: "top 0%",
                        // end: "bottom 0%",
                        scrub: true,
                    },
                }
            );
    
            gsap.fromTo(
                ".section-button",
                { y: 30, x: 0 }, // Initial state (Y translation)
                {
                    y: 0, // End state (Y translation)
                    x: 0, // Optional, if you want to add horizontal movement
                    duration: 1,
                    ease: "power3.inOut", // ease-in-out
                    scrollTrigger: {
                        trigger: ".section-button",
                        // start: "top 0%",
                        // end: "bottom 0%",
                        scrub: true,
                    },
                }
            );
        };
    
        loadGsap();
    }, []);
    

    return (
        <section className="py-16 relative">
            <div className="container mx-auto text-center w-full md:w-[520px] z-4">
                <h2 className="section-title text-white text-center mb-4 text-2xl md:text-3xl">
                    Get Started
                </h2>

                <p className="section-description text-[#BEBEBE] text-center text-[16px] md:text-[18px] font-medium mb-4">
                    Holds no opinions on what’s and how’s. Build whatever makes sense to you.
                </p>

                <div className="flex justify-center gap-4 mt-6">
                    <button
                        className="cursor-pointer section-button text-white rounded-[12px] border border-[#E0F2FF66] bg-[#03263D] shadow-[0px_0px_10px_0px_#09F_inset] px-5 py-3 flex justify-center items-center gap-2"
                    >
                        Try it now
                    </button>
                    <button
                        className="cursor-pointer section-button text-white rounded-[12px] border border-[#FFFFFF52] bg-gradient-to-r from-[#1F1F1F] via-[#191919] to-[#0F0F0F] px-5 py-3 flex justify-center items-center gap-2"
                    >
                        Book your demo
                    </button>
                </div>
            </div>
            <div
                className="background-gradient absolute top-0 -z-1 w-full md:w-[1403px] h-[472px] flex-shrink-0 rounded-[1403px] opacity-90 bg-[radial-gradient(46.67%_52.09%_at_50%_50%,_rgba(0,_89,_255,_0.37)_0%,_rgba(1,_1,_1,_0.32)_100%)]"
            />
        </section>
    );
}
