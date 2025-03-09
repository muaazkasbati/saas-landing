import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import ProfileArc from './animations/ProfileArc';
import AnimatedCircles from './animations/AnimatedCircles';

const InteractiveLine = dynamic(() => import('../components/animations/InteractiveLine'), { ssr: false });

export default function Section4() {
    useEffect(() => {
        const loadGsap = async () => {
            const gsap = (await import("gsap")).default;
            const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
    
            gsap.registerPlugin(ScrollTrigger);
    
            // Animation for text elements
            gsap.from('.animate-text', {
                scrollTrigger: {
                    trigger: '.animate-text',
                    start: 'top 80%', // when the top of the section hits 80% of the viewport
                    end: 'bottom 20%', // when the bottom of the section hits 20% of the viewport
                    scrub: true,
                },
                opacity: 0,
                y: 50, // slide from the bottom
                x: 50, // slide from the right
                duration: 1,
                ease: 'power2.out',
            });
    
            // Animation for image elements
            gsap.from('.animate-image', {
                scrollTrigger: {
                    trigger: '.animate-image',
                    start: 'top 80%', // when the top of the section hits 80% of the viewport
                    end: 'bottom 20%', // when the bottom of the section hits 20% of the viewport
                    scrub: true,
                },
                opacity: 0,
                scale: 0.8, // initial scale
                x: 50, // slide from the right
                y: 50, // slide from the bottom
                duration: 1,
                ease: 'power2.out',
            });
        };
    
        loadGsap();
    }, []);
    

    return (
        <section className="py-12">
            <div className="container mx-auto text-center w-full max-w-[600px]">
                <div
                    className="inline-block mb-6 rounded-full px-4 py-2 text-white text-center text-[14px] animate-text"
                    style={{
                        border: '0.8px solid rgba(107, 73, 255, 0.20)',
                        background:
                            'radial-gradient(77.66% 77.66% at 50% 50%, #181620 15.9%, #1E1930 50.9%, #332C4F 100%)',
                        boxShadow:
                            '0px 16px 32px 0px rgba(0, 0, 0, 0.20), 0px -4px 12px 0px rgba(107, 73, 255, 0.60) inset',
                    }}
                >
                    Amazing
                </div>

                <h2 className="text-white text-center mb-4 animate-text">Features and Benefits</h2>
                <p className="text-[#BEBEBE] text-center text-[18px] font-medium mb-12 animate-text">
                    Create, customize, and collaborate effortlessly with our intuitive platform. From simple edits to complex designs, bring your vision to life in no time.
                </p>
            </div>
            <div className="container mx-auto w-full max-w-[1160px]">
                <div className="flex flex-wrap gap-4 justify-center">
                    <div className="relative w-full md:w-[600px] h-[440px] rounded-[12px] overflow-hidden p-[2px] bg-gradient-to-br from-[#08152B] via-[#10141A] to-[#0D1014] border border-[#132B57] animate-image">
                        <div className="p-4 w-full md:w-[280px]">
                            <p className="text-white text-[20px] font-bold mb-2">Easy-to-Use Interface</p>
                            <p className="text-[#BEBEBE] text-[14px] mb-4">
                                Users can quickly start using the platform without needing a steep learning curve.
                            </p>
                            <a
                                href="#"
                                className="flex items-center gap-2 text-[#5EBCFF] text-[14px] font-bold font-manrope transition-all duration-300 hover:text-[#5D8AE5]"
                            >
                                Try it now
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="9" viewBox="0 0 14 9" fill="none">
                                    <path
                                        d="M1 4C0.723858 4 0.5 4.22386 0.5 4.5C0.5 4.77614 0.723858 5 1 5L1 4ZM13.3536 4.85355C13.5488 4.65829 13.5488 4.34171 13.3536 4.14645L10.1716 0.964467C9.97631 0.769205 9.65973 0.769205 9.46447 0.964467C9.2692 1.15973 9.2692 1.47631 9.46447 1.67157L12.2929 4.5L9.46447 7.32843C9.2692 7.52369 9.2692 7.84027 9.46447 8.03553C9.65973 8.2308 9.97631 8.2308 10.1716 8.03553L13.3536 4.85355ZM1 5L13 5L13 4L1 4L1 5Z"
                                        fill="#5EBCFF"
                                    />
                                </svg>
                            </a>
                        </div>
                        <img className="absolute top-2 right-6 animate-image" src="/images/filled-component.png" alt="" />
                        <img className="absolute bottom-0 right-[40%] animate-image" src="/images/component-12.png" alt="" />
                        <img className="absolute bottom-0 right-0 animate-image" src="/images/component-14.png" alt="" />
                    </div>

                    <div className="relative w-full md:w-[480px] h-[440px] rounded-[12px] overflow-hidden p-[2px] bg-gradient-to-br from-[#08152B] via-[#10141A] to-[#0D1014] border border-[#132B57] animate-image">
                        <div className="p-4 w-full">
                            <p className="text-white text-[20px] font-bold mb-2">Collaboration Tools</p>
                            <p className="text-[#BEBEBE] text-[14px] mb-4">
                                Explanation: If your product enables collaboration, emphasize the ability for teams to work together in real time.
                            </p>
                            <a
                                href="#"
                                className="flex items-center gap-2 text-[#5EBCFF] text-[14px] font-bold font-manrope transition-all duration-300 hover:text-[#5D8AE5]"
                            >
                                Try it now
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="9" viewBox="0 0 14 9" fill="none">
                                    <path
                                        d="M1 4C0.723858 4 0.5 4.22386 0.5 4.5C0.5 4.77614 0.723858 5 1 5L1 4ZM13.3536 4.85355C13.5488 4.65829 13.5488 4.34171 13.3536 4.14645L10.1716 0.964467C9.97631 0.769205 9.65973 0.769205 9.46447 0.964467C9.2692 1.15973 9.2692 1.47631 9.46447 1.67157L12.2929 4.5L9.46447 7.32843C9.2692 7.52369 9.2692 7.84027 9.46447 8.03553C9.65973 8.2308 9.97631 8.2308 10.1716 8.03553L13.3536 4.85355ZM1 5L13 5L13 4L1 4L1 5Z"
                                        fill="#5EBCFF"
                                    />
                                </svg>
                            </a>
                        </div>
                        {/* <img className="block mx-auto" src="/images/group-28.png" alt="" /> */}
                        <ProfileArc />
                    </div>

                    <div className="relative w-full md:w-[480px] h-[480px] rounded-[12px] overflow-hidden p-[2px] bg-gradient-to-br from-[#08152B] via-[#10141A] to-[#0D1014] border border-[#132B57] animate-image">
                        <img className="block mx-auto -mb-2 animate-image" src="/images/group-29.png" alt="" />
                        {/* <AnimatedCircles /> */}
                        <div className="p-4 w-full">
                            <p className="text-white text-[20px] font-bold mb-2">Secure Cloud Storage</p>
                            <p className="text-[#BEBEBE] text-[14px] mb-4">
                                With cloud storage, users’ projects are automatically saved, ensuring their data is never lost.
                            </p>
                            <a
                                href="#"
                                className="flex items-center gap-2 text-[#5EBCFF] text-[14px] font-bold font-manrope transition-all duration-300 hover:text-[#5D8AE5]"
                            >
                                Try it now
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="9" viewBox="0 0 14 9" fill="none">
                                    <path
                                        d="M1 4C0.723858 4 0.5 4.22386 0.5 4.5C0.5 4.77614 0.723858 5 1 5L1 4ZM13.3536 4.85355C13.5488 4.65829 13.5488 4.34171 13.3536 4.14645L10.1716 0.964467C9.97631 0.769205 9.65973 0.769205 9.46447 0.964467C9.2692 1.15973 9.2692 1.47631 9.46447 1.67157L12.2929 4.5L9.46447 7.32843C9.2692 7.52369 9.2692 7.84027 9.46447 8.03553C9.65973 8.2308 9.97631 8.2308 10.1716 8.03553L13.3536 4.85355ZM1 5L13 5L13 4L1 4L1 5Z"
                                        fill="#5EBCFF"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="relative w-full md:w-[600px] h-[480px] rounded-[12px] overflow-hidden p-[2px] bg-gradient-to-br from-[#08152B] via-[#10141A] to-[#0D1014] border border-[#132B57] animate-image">
                        {/* <img className="block mx-auto mt-10" src="/images/group-30.png" alt="" /> */}
                        <InteractiveLine />
                        <div className="p-4 w-full">
                            <p className="text-white text-[20px] font-bold mb-2">Wide Integration Support</p>
                            <p className="text-[#BEBEBE] text-[14px] mb-4">
                                The ability to integrate with third-party apps (e.g., Google Drive, Dropbox, Slack) is essential for users who rely on a suite of tools.
                            </p>
                            <a
                                href="#"
                                className="flex items-center gap-2 text-[#5EBCFF] text-[14px] font-bold font-manrope transition-all duration-300 hover:text-[#5D8AE5]"
                            >
                                Try it now
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="9" viewBox="0 0 14 9" fill="none">
                                    <path
                                        d="M1 4C0.723858 4 0.5 4.22386 0.5 4.5C0.5 4.77614 0.723858 5 1 5L1 4ZM13.3536 4.85355C13.5488 4.65829 13.5488 4.34171 13.3536 4.14645L10.1716 0.964467C9.97631 0.769205 9.65973 0.769205 9.46447 0.964467C9.2692 1.15973 9.2692 1.47631 9.46447 1.67157L12.2929 4.5L9.46447 7.32843C9.2692 7.52369 9.2692 7.84027 9.46447 8.03553C9.65973 8.2308 9.97631 8.2308 10.1716 8.03553L13.3536 4.85355ZM1 5L13 5L13 4L1 4L1 5Z"
                                        fill="#5EBCFF"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

