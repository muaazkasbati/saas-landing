"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { useEffect, useRef } from "react";

const testimonials = [
  {
    name: "John M.",
    role: "Operations Lead",
    message:
      "This tool has completely transformed the way we work! It's intuitive, fast, and so easy to integrate with our current processes. Highly recommended!",
    image: "https://images.unsplash.com/photo-1704726135027-9c6f034cfa41?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Mike T.",
    role: "Product Designer",
    message:
      "I've tried a lot of similar tools, but this one stands out. The features are top-notch, and the customer support is fantastic.",
    image: "https://images.unsplash.com/photo-1704726135027-9c6f034cfa41?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "David R.",
    role: "Product Manager",
    message:
      "I've tried a lot of similar tools, and the customer support is fantastic.",
    image: "https://images.unsplash.com/photo-1704726135027-9c6f034cfa41?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Kevin B.",
    role: "Freelancer",
    message:
      "I can't imagine going back to the old way of doing things. This product has made everything smoother and more efficient. It's a game changer!",
    image: "https://images.unsplash.com/photo-1704726135027-9c6f034cfa41?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Robert S.",
    role: "Project Manager",
    message:
      "Incredible tool! I was able to automate so many tasks that used to take hours. It's a real time-saver!",
    image: "https://images.unsplash.com/photo-1704726135027-9c6f034cfa41?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

// export default function Section8() {
//   return (
//     <section className="py-12 relative">
//       <div className="container mx-auto w-full md:w-[90%]">
//         <div className="relative z-1">
//           <h2 className="text-white text-center mb-4 text-2xl md:text-3xl">
//             Our Customers
//           </h2>
//           <p className="text-[#BEBEBE] text-center text-[16px] md:text-[18px] font-medium mb-12">
//             What people say about us
//           </p>
//         </div>

//         {/* First Swiper */}
//         <div className="mb-5">
//           <Swiper
//             slidesPerView={2.5} // For smaller screens, show one full slide and part of the next
//             spaceBetween={16}
//             centeredSlides={true}
//             autoplay={{ delay: 3000, disableOnInteraction: false }}
//             fadeEffect={{ crossFade: true }}
//             breakpoints={{
//               640: {
//                 slidesPerView: 2.5, // Shows 2 full and part of the 3rd on medium screens
//                 spaceBetween: 24,
//               },
//             }}
//           >
//             {testimonials.map((testimonial, index) => (
//               <SwiperSlide key={index}>
//                 <div className="h-[183px] p-6 rounded-[14px] border-[0.8px] border-[#3F325F] bg-gradient-to-b from-[#0F0C18] via-[#0D0A17] to-[#110828] backdrop-blur-md">
//                   <div className="flex items-center gap-4 mb-5">
//                     <img
//                       src={testimonial.image}
//                       alt={testimonial.name}
//                       className="w-[45px] h-[45px] rounded-full object-cover object-[center_top]"
//                     />
//                     <div>
//                       <h4 className="text-white font-[Satoshi] text-[16px] font-medium">
//                         {testimonial.name}
//                       </h4>
//                       <p className="text-[#868392] font-[Satoshi] text-[14px] font-medium">
//                         {testimonial.role}
//                       </p>
//                     </div>
//                   </div>
//                   <p className="text-[#CCC8DC] font-[Satoshi] text-[16px] font-medium">
//                     {testimonial.message}
//                   </p>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>

//         {/* Second Swiper */}
//         <div>
//           <Swiper
//             slidesPerView={2.5} // For smaller screens, show one full slide and part of the next
//             spaceBetween={16}
//             freeMode={true}
//             autoplay={{ delay: 3000, disableOnInteraction: false }}
//             breakpoints={{
//               640: {
//                 slidesPerView: 2.5, // Shows 2 full and part of the 3rd on medium screens
//                 spaceBetween: 24,
//               },
//             }}
//           >
//             {testimonials.map((testimonial, index) => (
//               <SwiperSlide key={index}>
//                 <div className="h-[183px] p-6 rounded-[14px] border-[0.8px] border-[#3F325F] bg-gradient-to-b from-[#0F0C18] via-[#0D0A17] to-[#110828] backdrop-blur-md">
//                   <div className="flex items-center gap-4 mb-5">
//                     <img
//                       src={testimonial.image}
//                       alt={testimonial.name}
//                       className="w-[45px] h-[45px] rounded-full object-cover object-[center_top]"
//                     />
//                     <div>
//                       <h4 className="text-white font-[Satoshi] text-[16px] font-medium">
//                         {testimonial.name}
//                       </h4>
//                       <p className="text-[#868392] font-[Satoshi] text-[14px] font-medium">
//                         {testimonial.role}
//                       </p>
//                     </div>
//                   </div>
//                   <p className="text-[#CCC8DC] font-[Satoshi] text-[16px] font-medium">
//                     {testimonial.message}
//                   </p>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>

//         {/* Background Gradient */}
//         <div
//           className="container mx-auto absolute top-12 left-0 right-0 w-full md:w-[371px] h-[84px] rounded-[371px] blur-[40px] z-0"
//           style={{
//             background:
//               "radial-gradient(32.8% 141.01% at 50% 50%, rgba(144, 119, 255, 0.64) 0%, rgba(107, 73, 255, 0.56) 12.28%, rgba(107, 73, 255, 0.48) 100%)",
//           }}
//         ></div>
//       </div>
//     </section>
//   );
// }

export default function Section8() {
  const swiperRef1 = useRef(null);
  const swiperRef2 = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (swiperRef1.current && swiperRef2.current) {
        const rect1 = swiperRef1.current.getBoundingClientRect();
        const rect2 = swiperRef2.current.getBoundingClientRect();
        if (rect1.top <= window.innerHeight && rect1.bottom >= 0) {
          if (swiperRef1.current.swiper) {
            swiperRef1.current.swiper.autoplay.start();
          }
        }
        if (rect2.top <= window.innerHeight && rect2.bottom >= 0) {
          if (swiperRef2.current.swiper) {
            swiperRef2.current.swiper.autoplay.start();
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="py-12 relative">
      <div className="container mx-auto w-full md:w-[90%]">
        <div className="relative z-1">
          <h2 className="section-title text-white text-center mb-4 text-2xl md:text-3xl">
            Our Customers
          </h2>
          <p className="section-description text-[#BEBEBE] text-center text-[16px] md:text-[18px] font-medium mb-12">
            What people say about us
          </p>
        </div>

        {/* First Swiper */}
        <div ref={swiperRef1} className="swiper-container-1 mb-5">
          <Swiper
            slidesPerView={2.5}
            spaceBetween={16}
            centeredSlides={true}
            autoplay={{ delay: 3000, disableOnInteraction: false, stopOnLastSlide: false }}
            fadeEffect={{ crossFade: true }}
            breakpoints={{
              640: {
                slidesPerView: 2.5,
                spaceBetween: 24,
              },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="h-[183px] p-6 rounded-[14px] border-[0.8px] border-[#3F325F] bg-gradient-to-b from-[#0F0C18] via-[#0D0A17] to-[#110828] backdrop-blur-md">
                  <div className="flex items-center gap-4 mb-5">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-[45px] h-[45px] rounded-full object-cover object-[center_top]"
                    />
                    <div>
                      <h4 className="text-white font-[Satoshi] text-[16px] font-medium">
                        {testimonial.name}
                      </h4>
                      <p className="text-[#868392] font-[Satoshi] text-[14px] font-medium">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-[#CCC8DC] font-[Satoshi] text-[16px] font-medium">
                    {testimonial.message}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Second Swiper */}
        <div ref={swiperRef2} className="swiper-container-2">
          <Swiper
            slidesPerView={2.5}
            spaceBetween={16}
            freeMode={true}
            autoplay={{ delay: 3000, disableOnInteraction: false, stopOnLastSlide: false }}
            breakpoints={{
              640: {
                slidesPerView: 2.5,
                spaceBetween: 24,
              },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="h-[183px] p-6 rounded-[14px] border-[0.8px] border-[#3F325F] bg-gradient-to-b from-[#0F0C18] via-[#0D0A17] to-[#110828] backdrop-blur-md">
                  <div className="flex items-center gap-4 mb-5">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-[45px] h-[45px] rounded-full object-cover object-[center_top]"
                    />
                    <div>
                      <h4 className="text-white font-[Satoshi] text-[16px] font-medium">
                        {testimonial.name}
                      </h4>
                      <p className="text-[#868392] font-[Satoshi] text-[14px] font-medium">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-[#CCC8DC] font-[Satoshi] text-[16px] font-medium">
                    {testimonial.message}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Background Gradient */}
        <div
          className="container mx-auto absolute top-12 left-0 right-0 w-full md:w-[371px] h-[84px] rounded-[371px] blur-[40px] z-0"
          style={{
            background:
              "radial-gradient(32.8% 141.01% at 50% 50%, rgba(144, 119, 255, 0.64) 0%, rgba(107, 73, 255, 0.56) 12.28%, rgba(107, 73, 255, 0.48) 100%)",
          }}
        ></div>
      </div>
    </section>
  );
}