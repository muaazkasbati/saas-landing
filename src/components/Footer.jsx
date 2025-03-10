import React from 'react';

const footerData = {
  quickLinks: [
    { label: "About", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Contact", href: "#" },
    { label: "404", href: "#" },
  ],
  services: [
    { label: "Log In", href: "#" },
    { label: "Forgot Password", href: "#" },
    { label: "Terms & Services", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ],
  contact: [
    { label: "Upwork", href: "#" },
    { label: "Dribbble", href: "#" },
    { label: "Awwwwards", href: "#" },
    { label: "X", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-black py-18 px-10 "
      style={{
        borderTop: "1px solid transparent",
        borderImage: "linear-gradient(90deg, #192235 0%, #0059FF 40%, #6FADFF 50%, #0059FF 60%, #192235 100%) 1",
        background: "linear-gradient(180deg, #0B0E15 0%, #010101 100%)",
      }}
    >
      <div className="container mx-auto  flex flex-wrap gap-8 w-full max-w-[1160px]">
        {/* First Column (Large) */}
        <div className="flex flex-col items-start gap-y-4 w-full md:w-1/3 min-w-[250px]">
          <div className="flex gap-2 items-center mb-2">
            <img src="/images/logo.svg" alt="Saas Landing" className="w-8 h-8" />
            <p className="text-white text-lg sm:text-xl font-bold mb-0">Animify</p>
          </div>
          <p className="text-white text-sm sm:text-base max-w-[250px]">
            1234 Innovation Blvd, Suite 567 Tech City, TC 98765, United States.
          </p>
          <p className="text-white text-sm sm:text-base">
            (555) 123-4567
          </p>
          <p className="text-white text-sm sm:text-base">
            contact@animify.com
          </p>
        </div>

        {/* Second Column (Small) */}
        <div className="flex flex-col items-start w-full sm:w-1/2 md:w-1/6 min-w-[150px]">
          <h3 className="text-white text-lg sm:text-xl font-bold mb-4">
            Home
          </h3>
          <ul className="text-white space-y-3">
            {footerData.quickLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href}
                  className="text-sm sm:text-base font-normal hover:text-gray-300 transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Third Column (Small) */}
        <div className="flex flex-col items-start w-full sm:w-1/2 md:w-1/6 min-w-[150px]">
          <h3 className="text-white text-lg sm:text-xl font-bold mb-4">
            Other Pages
          </h3>
          <ul className="text-white space-y-3">
            {footerData.services.map((link, index) => (
              <li key={index}>
                <a href={link.href}
                  className="text-sm sm:text-base font-normal hover:text-gray-300 transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Fourth Column (Small) */}
        <div className="flex flex-col items-start w-full sm:w-1/2 md:w-1/6 min-w-[150px]">
          <h3 className="text-white text-lg sm:text-xl font-bold mb-4">
            My Work
          </h3>
          <ul className="text-white space-y-3">
            {footerData.contact.map((link, index) => (
              <li key={index}>
                <a href={link.href}
                  className="text-sm sm:text-base font-normal hover:text-gray-300 transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
