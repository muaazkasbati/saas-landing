import React, { useEffect } from 'react';

const pricingPlans = [
    {
        id: 'starter',
        name: 'Starter',
        price: '$0',
        frequency: 'monthly',
        description: 'Perfect for custom animation and motion graphics.',
        features: [
            'Unlimited files',
            'Unlimited editors',
            'Export video, GIF, Lottie',
            '720p, 30fps',
            'Import from Figma',
        ],
        buttonText: 'Sign Up with Enterprise',
        borderColor: 'border-t-[2.4px] border-[#192235]',
        bgGradient: 'bg-[radial-gradient(43.69%_75.71%_at_50%_44.52%,#10141A_0%,#0C121C_50%,#0A1017_100%)]',
        icon: 'paint0_linear_1_905',
    },
    {
        id: 'professional',
        name: 'Professional',
        price: '$20',
        frequency: 'monthly',
        description: 'Perfect for custom animation and motion graphics.',
        features: [
            'Everything in Free',
            'Unlimited folders',
            'No watermark',
            'HD export in 4K, 120fps',
            'Team libraries',
        ],
        buttonText: 'Sign Up with Professional',
        borderColor: 'border-t-[3.4px] border-[#0D0F15]',
        bgGradient: 'bg-[linear-gradient(180deg,#1B1430_0%,#0F0D16_50%,#1B1430_100%)]',
        icon: 'paint0_linear_1_984',
    },
    {
        id: 'enterprise',
        name: 'Enterprise',
        price: 'Custom',
        frequency: '',
        description: 'Perfect for custom animation and motion graphics.',
        features: [
            'Everything in Studio',
            'Single sign-on (SSO)',
            'Pre-release features',
            'Personalized demo',
            'Priority support',
        ],
        buttonText: "Let's Chat!",
        borderColor: 'border-t-[2.4px] border-[#192235]',
        bgGradient: 'bg-[radial-gradient(43.69%_75.71%_at_50%_44.52%,#10141A_0%,#0C121C_50%,#0A1017_100%)]',
        icon: 'paint0_linear_1_905',
    },
];

export default function Section6() {
    useEffect(() => {
        // Dynamically import GSAP and ScrollTrigger
        const loadGsap = async () => {
          const gsap = (await import("gsap")).default;
          const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
      
          gsap.registerPlugin(ScrollTrigger);
      
          // Scroll animation for pricing plans (only vertical slide-in without fading)
          gsap.fromTo(
            ".pricing-plan",
            { y: 50 },  // Start 50px below the original position
            {
              y: 0, // Move to its original position
              duration: 1,
              ease: "power3.out",
              stagger: 0.2,
              scrollTrigger: {
                trigger: ".pricing-plan",
                start: "top 80%", // Start when the element reaches 80% from the top of the viewport
                end: "bottom 20%", // End when the element's bottom reaches 20% of the viewport
                scrub: true, // Sync with scroll position
              },
            }
          );
        };
      
        loadGsap();
      }, []);
    return (
        <section className="py-12 relative">
            <div className="container mx-auto w-full max-w-[1160px] px-4">
                <h2 className="text-white text-center mb-10 text-2xl md:text-4xl">Explore all plans</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {pricingPlans.map((plan) => (
                        <div
                            key={plan.id}
                            className={`pricing-plan rounded-lg shadow-lg p-6 ${plan.borderColor} ${plan.bgGradient}`}
                        >
                            <h3 className="text-white text-[20px] font-medium mb-2">{plan.name}</h3>
                            <p className="text-white text-[36px] font-medium leading-none mt-2">
                                {plan.price}
                                {plan.frequency && (
                                    <span className="text-gray-400 text-[20px] font-normal">/{plan.frequency}</span>
                                )}
                            </p>
                            <p className="text-gray-400 text-[14px] font-normal mt-4">{plan.description}</p>
                            <button className="flex h-[40px] px-4 py-3 justify-center items-center gap-2 w-full mt-6 rounded-[10px] bg-white text-black font-semibold">
                                {plan.buttonText}
                            </button>
                            <ul className="mt-4 flex flex-col items-start gap-5">
                                {plan.features.map((feature, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center gap-2 text-white text-opacity-80 text-[14px] font-medium leading-none"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path
                                                d="M6.25008 10.0003L8.75008 12.5003L13.7501 7.50033M18.3334 10.0003C18.3334 14.6027 14.6025 18.3337 10.0001 18.3337C5.39771 18.3337 1.66675 14.6027 1.66675 10.0003C1.66675 5.39795 5.39771 1.66699 10.0001 1.66699C14.6025 1.66699 18.3334 5.39795 18.3334 10.0003Z"
                                                stroke={`url(#${plan.icon})`}
                                                strokeWidth="1.2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <defs>
                                                <linearGradient id={plan.icon} x1="10.0001" y1="1.66699" x2="10.0001" y2="18.3337" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor={plan.id === 'professional' ? '#6D56B8' : '#6584BE'} />
                                                    <stop offset="1" stopColor={plan.id === 'professional' ? '#3E3261' : '#2F3D58'} />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
