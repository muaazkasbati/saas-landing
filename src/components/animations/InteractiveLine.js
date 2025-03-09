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
                    width: "30px",
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
        <div ref={containerRef} className="flex items-center justify-center py-20 overflow-x-auto">
            <div className="flex items-center justify-start gap-4 whitespace-nowrap">
                {/* Start Circle */}
                {/* <div className="w-6 h-6 bg-blue-500 rounded-full flex-shrink-0"></div> */}

                {/* Box 1 */}
                <div
                    ref={box1Ref}
                    className="w-[80px] h-[80px] rounded-lg flex-shrink-0 flex justify-center items-center"
                    style={{
                        borderRadius: '17.422px',
                        border: '0.544px solid rgba(255, 255, 255, 0.12)',
                        background: 'linear-gradient(180deg, #2D88FF -4.29%, #005CD4 56.14%, #0056CF 106.59%)',
                        boxShadow: '0px 4.356px 8.711px 0px rgba(255, 255, 255, 0.12) inset, 0px 2.178px 26.133px 0px rgba(255, 255, 255, 0.08), 0px 0px 8.711px 0px rgba(204, 191, 255, 0.90) inset, 0px 4.356px 26.133px 0px rgba(80, 73, 206, 0.12)',
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" height="40px" width="40px" viewBox="0 0 26 26">
                        <polygon fill="#ffffff" points="18.139,20.061 13,16.195 7.967,20.058 5.042,18.343 5.042,20.214 13,25.475 20.977,20.25 20.977,18.374" />
                        <polygon fill="#ffffff" points="26,5.38 18.326,0.525 13,4.905 20.965,9.535" />
                        <polygon fill="#ffffff" points="0,13.81 7.896,18.44 13,14.522 5.438,9.712" />
                        <polygon fill="#ffffff" points="7.896,0.525 0,5.618 5.438,9.712 13,4.905" />
                        <polygon fill="#ffffff" points="13,14.522 18.207,18.44 26,13.81 20.965,9.535" />
                    </svg>

                </div>


                {/* Line 1 */}
                <div
                    ref={line1Ref}
                    className="h-[1.2px] bg-[#D8C2FF] w-[30px] flex-shrink-0"
                ></div>

                {/* Box 2 */}
                <div
                    ref={box2Ref}
                    className="flex-shrink-0"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="101" height="101" viewBox="0 0 101 101" fill="none">
                        <g filter="url(#filter0_iiii_1_1026)">
                            <circle cx="50.5" cy="50.5" r="50.5" fill="url(#paint0_radial_1_1026)" />
                        </g>
                        <path d="M35 64.2593L50.5152 37L67 64.2593" stroke="white" stroke-width="8" stroke-linecap="round" />
                        <defs>
                            <filter id="filter0_iiii_1_1026" x="0" y="-20" width="101" height="137.885" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="23.1298" />
                                <feGaussianBlur stdDeviation="8.44237" />
                                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0.0909332 0 0 0 0 0.409751 0 0 0 0 0.826667 0 0 0 1 0" />
                                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1_1026" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="9.25191" />
                                <feGaussianBlur stdDeviation="9.3" />
                                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0.5 0 0 0 0 0.714286 0 0 0 0 1 0 0 0 1 0" />
                                <feBlend mode="normal" in2="effect1_innerShadow_1_1026" result="effect2_innerShadow_1_1026" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="-40" />
                                <feGaussianBlur stdDeviation="10" />
                                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0.1037 0 0 0 0 0.264028 0 0 0 0 0.61 0 0 0 1 0" />
                                <feBlend mode="normal" in2="effect2_innerShadow_1_1026" result="effect3_innerShadow_1_1026" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="2" />
                                <feGaussianBlur stdDeviation="8" />
                                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0.623333 0 0 0 0 0.742611 0 0 0 0 1 0 0 0 1 0" />
                                <feBlend mode="normal" in2="effect3_innerShadow_1_1026" result="effect4_innerShadow_1_1026" />
                            </filter>
                            <radialGradient id="paint0_radial_1_1026" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(50.5 50.5) rotate(90) scale(53.5 56.3159)">
                                <stop stop-color="#124184" />
                                <stop offset="1" stop-color="#334187" />
                            </radialGradient>
                        </defs>
                    </svg>
                </div>

                {/* Line 2 */}
                <div
                    ref={line2Ref}
                    className="h-[1.2px] bg-[#D8C2FF] w-[30px] flex-shrink-0"
                >

                </div>

                {/* Box 3 */}
                <div
                    ref={box3Ref}
                    className="w-[80px] h-[80px] rounded-lg flex-shrink-0 flex justify-center items-center"
                    style={{
                        borderRadius: '17.422px',
                        border: '0.871px solid rgba(255, 255, 255, 0.12)',
                        background: 'linear-gradient(180deg, #CCC9FF -4.29%, #DEDEEE 47.86%, #CCC9FF 100%)',
                        boxShadow: '0px 0px 10.889px 0px rgba(45, 45, 45, 0.24) inset, 0px 2.178px 26.133px 0px rgba(255, 255, 255, 0.08), 0px 0px 8.711px 0px rgba(174, 174, 174, 0.90) inset, 0px 4.356px 26.133px 0px rgba(80, 73, 206, 0.12)',
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 32 32">
                        <path d="M26.5002 14.9996C27.8808 14.9996 29 13.8804 29 12.4998C29 11.1192 27.8807 10 26.5001 10C25.1194 10 24 11.1193 24 12.5V14.9996H26.5002ZM19.5 14.9996C20.8807 14.9996 22 13.8803 22 12.4996V5.5C22 4.11929 20.8807 3 19.5 3C18.1193 3 17 4.11929 17 5.5V12.4996C17 13.8803 18.1193 14.9996 19.5 14.9996Z" fill="#2EB67D" />
                        <path d="M5.49979 17.0004C4.11919 17.0004 3 18.1196 3 19.5002C3 20.8808 4.1193 22 5.49989 22C6.8806 22 8 20.8807 8 19.5V17.0004H5.49979ZM12.5 17.0004C11.1193 17.0004 10 18.1197 10 19.5004V26.5C10 27.8807 11.1193 29 12.5 29C13.8807 29 15 27.8807 15 26.5V19.5004C15 18.1197 13.8807 17.0004 12.5 17.0004Z" fill="#E01E5A" />
                        <path d="M17.0004 26.5002C17.0004 27.8808 18.1196 29 19.5002 29C20.8808 29 22 27.8807 22 26.5001C22 25.1194 20.8807 24 19.5 24L17.0004 24L17.0004 26.5002ZM17.0004 19.5C17.0004 20.8807 18.1197 22 19.5004 22L26.5 22C27.8807 22 29 20.8807 29 19.5C29 18.1193 27.8807 17 26.5 17L19.5004 17C18.1197 17 17.0004 18.1193 17.0004 19.5Z" fill="#ECB22E" />
                        <path d="M14.9996 5.49979C14.9996 4.11919 13.8804 3 12.4998 3C11.1192 3 10 4.1193 10 5.49989C10 6.88061 11.1193 8 12.5 8L14.9996 8L14.9996 5.49979ZM14.9996 12.5C14.9996 11.1193 13.8803 10 12.4996 10L5.5 10C4.11929 10 3 11.1193 3 12.5C3 13.8807 4.11929 15 5.5 15L12.4996 15C13.8803 15 14.9996 13.8807 14.9996 12.5Z" fill="#36C5F0" />
                    </svg>
                </div>


                {/* End Circle */}
                {/* <div className="w-6 h-6 bg-blue-500 rounded-full flex-shrink-0"></div> */}
            </div>
        </div>
    );
}