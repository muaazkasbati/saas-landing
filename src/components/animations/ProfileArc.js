// components/ProfileArc.js
'use client';

import { useEffect, useRef } from 'react';

const profiles = [
    { id: 1, name: 'John', image: 'https://images.unsplash.com/photo-1704726135027-9c6f034cfa41?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 2, name: 'Emma', image: 'https://images.unsplash.com/photo-1704726135027-9c6f034cfa41?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 3, name: 'Mike', image: 'https://images.unsplash.com/photo-1704726135027-9c6f034cfa41?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 4, name: 'Sarah', image: 'https://images.unsplash.com/photo-1704726135027-9c6f034cfa41?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 5, name: 'Alex', image: 'https://images.unsplash.com/photo-1704726135027-9c6f034cfa41?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
];

const ProfileArc = () => {
    const profilesRef = useRef([]);
    const buttonRef = useRef(null);
    const linesRef = useRef([]);
    const containerRef = useRef(null);

    useEffect(() => {
        const loadGsap = async () => {
            const gsap = (await import("gsap")).default;
            const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;

            gsap.registerPlugin(ScrollTrigger);
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse',
                },
                defaults: { duration: 0.8, ease: 'power3.out' },
            });

            // Animate profiles
            profilesRef.current.forEach((profile, index) => {
                const angle = 0 + (index * 45);
                const radius = 150; // Adjusted radius for smaller height
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = -Math.sin((angle * Math.PI) / 180) * radius;

                tl.fromTo(
                    profile,
                    {
                        x: -300,
                        y: 0,
                        opacity: 0,
                        scale: 0.5,
                    },
                    {
                        x,
                        y,
                        opacity: 1,
                        scale: 1,
                    },
                    index * 0.2
                );
            });

            // Animate button
            tl.fromTo(
                buttonRef.current,
                {
                    y: 50,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                },
                '-=0.5'
            );

            // Update and animate lines
            tl.add(() => {
                profilesRef.current.forEach((profile, index) => {
                    const line = linesRef.current[index];
                    if (line && buttonRef.current) {
                        const profileRect = profile.getBoundingClientRect();
                        const buttonRect = buttonRef.current.getBoundingClientRect();
                        const containerRect = containerRef.current.getBoundingClientRect();

                        // Calculate relative coordinates within container
                        const x1 = profileRect.left + profileRect.width / 2 - containerRect.left;
                        const y1 = profileRect.bottom - containerRect.top;
                        const x2 = buttonRect.left + buttonRect.width / 2 - containerRect.left;
                        const y2 = buttonRect.top + buttonRect.height / 2 - containerRect.top;

                        // Set initial line position
                        gsap.set(line, {
                            attr: {
                                x1: x1,
                                y1: y1,
                                x2: x1,
                                y2: y1,
                            },
                        });

                        // Animate line to button
                        gsap.to(line, {
                            attr: {
                                x2: x2,
                                y2: y2,
                            },
                            duration: 0.5,
                        });
                    }
                });
            });

            return () => {
                ScrollTrigger.getAll().forEach(t => t.kill());
            };
        };

        loadGsap();
    }, []);

    return (
        <div ref={containerRef} className="relative h-[270px] w-full flex items-center justify-center">
            {/* Profiles Container */}
            <div className="absolute w-[400px] h-[160px] flex items-center justify-center">
                {profiles.map((profile, index) => (
                    <div
                        key={profile.id}
                        ref={el => profilesRef.current[index] = el}
                        className="absolute w-14 h-14 rounded-full overflow-hidden border-2 border-[#DFDEF4] shadow-lg z-20 hover:scale-110 transition-transform"
                    >
                        <img
                            src={profile.image}
                            alt={profile.name}
                            className="w-full h-full object-cover"
                        />
                        {/* <div className="absolute bottom-0 w-full bg-black/50 text-white text-center py-1 text-xs">
                            {profile.name}
                        </div> */}
                    </div>
                ))}
            </div>

            {/* SVG for lines */}
            <svg className="absolute w-full h-full z-10 pointer-events-none">
                {profiles.map((_, index) => (
                    <line
                        key={index}
                        ref={el => linesRef.current[index] = el}
                        className="stroke-[#7050FF] stroke-[1.2px]"
                    />
                ))}
            </svg>

            {/* Bottom Button */}
            <button
                ref={buttonRef}
                className="absolute bottom-0 z-810 text-white px-5 py-3 rounded-lg  transition-all duration-300 ease-in-out"
                style={{
                    borderRadius: "200px",
                    border: "1px solid #0D0F15",
                    background: "radial-gradient(77.66% 77.66% at 50% 50%, #12131A 15.9%, #191D32 50.9%, #272E4D 100%)",
                    boxShadow: "0px 16px 32px 0px rgba(0, 0, 0, 0.20), 0px 2px 16px 0px rgba(148, 160, 216, 0.40) inset",
                }}
            >
            Collaboration
        </button>
        </div >
    );
};

export default ProfileArc;