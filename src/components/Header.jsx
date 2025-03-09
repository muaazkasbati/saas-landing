// export default function Header() {
//     return (
//         <div className="flex justify-center py-4">
//         <header className="w-[650px] max-w-[60%] p-4" style={{
//           borderRadius: '200px',
//           border: '0.8px solid rgba(255, 255, 255, 0.12)',
//           background: 'linear-gradient(180deg, rgba(23, 29, 45, 0.50) 0%, rgba(4, 11, 29, 0.50) 100%)'
//         }}>
//           <div className="flex justify-between items-center">
//             <a href="/"><img src="/images/logo.svg" alt="Saas Landing" /></a>

//             {/* Navigation Menu */}
//             <nav>
//               <ul className="flex space-x-6 text-white">
//                 <li><a href="#" className="hover:text-gray-300">Home</a></li>
//                 <li><a href="#" className="hover:text-gray-300">Template</a></li>
//                 <li><a href="#" className="hover:text-gray-300">Pricing</a></li>
//                 <li><a href="#" className="hover:text-gray-300">About</a></li>
//               </ul>
//             </nav>

//             {/* Button */}
//             <a className="px-4 py-2 text-white cursor-pointer rounded-[10px] bg-[#03263D]" style={{
//               border: '0.6px solid rgba(224, 242, 255, 0.40)',
//               boxShadow: '0px 0px 8px 0px #09F inset'
//             }}>
//               Try it now
//             </a>
//           </div>
//         </header>
//       </div>
//     );
//   }
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import gsap from "gsap";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // GSAP animation for page load
    gsap.fromTo(
      ".header-container",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    // GSAP animation for scroll
    const handleScroll = () => {
      const scrollY = window.scrollY;
      gsap.to(".header-container", {
        opacity: scrollY > 50 ? 0.8 : 1,
        y: scrollY > 50 ? -10 : 0,
        duration: 0.3,
        ease: "power3.out",
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex justify-center py-4 px-4">
      <header
        className="w-[650px] max-w-full p-4 header-container"
        style={{
          borderRadius: "200px",
          border: "0.8px solid rgba(255, 255, 255, 0.12)",
          background:
            "linear-gradient(180deg, rgba(23, 29, 45, 0.50) 0%, rgba(4, 11, 29, 0.50) 100%)",
        }}
      >
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="/">
            <img src="/images/logo.svg" alt="Saas Landing" className="w-[60px]" />
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Navigation Menu */}
          <nav
            className={`absolute md:static top-16 left-0 w-full md:w-auto bg-[#03263D] md:bg-transparent p-4 md:p-0 transition-all duration-300 z-50 ${
              isOpen ? "block" : "hidden"
            } md:flex`}
          >
            <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 text-white text-sm md:text-base">
              <li>
                <a href="#" className="hover:text-gray-300">Home</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">Template</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">Pricing</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">About</a>
              </li>
            </ul>
          </nav>

          {/* Button */}
          <a
            className="hidden md:block px-4 py-2 text-white cursor-pointer rounded-[10px] bg-[#03263D]"
            style={{
              border: "0.6px solid rgba(224, 242, 255, 0.40)",
              boxShadow: "0px 0px 8px 0px #09F inset",
            }}
          >
            Try it now
          </a>
        </div>
      </header>
    </div>
  );
}
