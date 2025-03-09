import { useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const clientImages = [
  { id: 1, src: '/images/client-1.png' },
  { id: 2, src: '/images/client-2.png' },
  { id: 3, src: '/images/client-3.png' },
  { id: 4, src: '/images/client-4.png' },
  { id: 5, src: '/images/client-5.png' },
  { id: 6, src: '/images/client-5.png' },
];

export default function Section3() {
  useEffect(() => {
    // Dynamically import GSAP and ScrollTrigger
    const loadGsap = async () => {
      const gsap = (await import("gsap")).default;
      const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;

      gsap.registerPlugin(ScrollTrigger);
      gsap.fromTo(
        ".section3-container",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".section3-container", // Trigger based on the section
            start: "top 80%", // When the top of the section is 80% from the viewport top
            end: "bottom 20%",
            scrub: true, // Smooth scroll effect
          },
        }
      );

      // GSAP hover effect on images (optional)
      gsap.fromTo(
        ".client-logo",
        { scale: 1 },
        {
          scale: 1.1,
          duration: 0.3,
          ease: "power1.out",
          paused: true,
          yoyo: true,
          scrollTrigger: {
            trigger: ".client-logo",
            start: "top 80%",
            end: "bottom 20%",
            scrub: true,
          },
        }
      );
    };

    loadGsap();
  }, []);

  return (
    <section className="py-12 px-6">
      <div className="container mx-auto max-w-[1100px] section3-container">
        {/* Heading Section */}
        <div className="text-center mb-8">
          <h5 className="text-[#BEBEBE] text-lg md:text-xl font-medium">
            Our Clients
          </h5>
        </div>

        {/* Client Image Slider */}
        <Swiper
          spaceBetween={30}
          slidesPerView={2}
          centeredSlides={true}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="swiper-container"
        >
          {clientImages.map((client) => (
            <SwiperSlide key={client.id}>
              <div className="flex justify-center items-center">
                <img
                  src={client.src}
                  alt={`Client ${client.id}`}
                  className="client-logo h-[40px] object-contain transition-all duration-300 ease-in-out hover:scale-110"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
