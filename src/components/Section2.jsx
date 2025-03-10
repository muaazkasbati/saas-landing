import { ChevronDownIcon, ChevronRightIcon, ChevronUpIcon } from "lucide-react";
import { useState } from "react";
import TimelineComponent from "./animations/TimelineComponent";
import PremiereLikeComponent from "./animations/PremiereLikeComponent";

export default function Section2() {
  const [isSceneOpen, setIsSceneOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Design');
  const [activeAccordion, setActiveAccordion] = useState('Fill');


  return (
    <section className="py-12 px-6">
      <div className="container mx-auto w-full md:w-[80%]">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="p-2 w-full md:w-[210px] rounded-[12px] bg-gradient-to-b from-[#0A0A0A] via-[#10131D] to-[#010101] shadow-md">
            <div className="text-white flex flex-col">
              {/* Tabs: Items and Layers */}
              <div className="flex gap-2">
                <button className="flex-1 px-2 py-2 text-[12px] rounded-[6.7px] shadow-[inset_0_0_8px_rgba(73,73,73,0.4)]"
                  style={{
                    background: 'radial-gradient(93.48% 63.24% at 46.09% 51.52%, #262626 0%, #191919 100%)',
                  }}>
                  Layers
                </button>
                <button className="flex-1 px-2 py-2 text-[12px] text-gray-400 hover:bg-[#262626] rounded">
                  Items
                </button>
              </div>
              <div className="my-3 w-full"></div>

              {/* Scene Dropdown */}
              <div className="p-2">
                <button
                  onClick={() => setIsSceneOpen(!isSceneOpen)}
                  className="w-full flex items-center p-2 text-[12px] rounded-[6.7px] shadow-[inset_0_0_8px_rgba(73,73,73,0.4)] focus:outline-none"
                  style={{
                    background: 'radial-gradient(93.48% 63.24% at 46.09% 51.52%, #262626 0%, #191919 100%)',
                  }}
                >
                  <span className="flex justify-center items-center w-[13.4px] h-[13.4px] bg-[#0080FF] rounded-[1.6px] mr-2">
                    <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.469452 2.90961L5.49862 0.00602223L5.49862 5.8132L0.469452 2.90961Z" fill="white" />
                    </svg>
                  </span>
                  Scene
                  <span className="ml-auto">
                    {isSceneOpen ? (
                      <ChevronUpIcon className="w-3 h-3 text-gray-400" />
                    ) : (
                      <ChevronDownIcon className="w-3 h-3 text-gray-400" />
                    )}
                  </span>
                </button>
                {isSceneOpen && (
                  <div className="pl-8 text-[12px] text-gray-400">
                    <button className="w-full text-left p-2 rounded">
                      Sub-item
                    </button>
                  </div>
                )}
              </div>

              {/* Border with Space */}
              <div className="border-b border-[#303030] mx-2 mb-4"></div>

              {/* Box with List Items */}
              <div className="mx-2 p-2 space-y-2 rounded-[6.7px] shadow-[inset_0_0_8px_rgba(46,46,46,0.68)]"
                style={{
                  background: 'radial-gradient(59.99% 59.99% at 50% 50%, #262626 0%, #191919 100%)',
                }}>
                <button className="w-full flex items-center px-2 py-1 text-[12px] bg-gradient-to-r from-[#323232] to-[rgba(50,50,50,0.50)] rounded">
                  <span className="border-[0.8px] border-white w-[13.4px] h-[13.4px] bg-[#3B3B3B] rounded-[1.6px] mr-2"></span>
                  Rectangle
                </button>
                <button className="w-full flex items-center px-2 py-1 text-[12px] hover:bg-gradient-to-r from-[#323232] to-[rgba(50,50,50,0.50)] rounded">
                  <span className="flex justify-center items-center w-[13.4px] h-[13.4px] bg-[#3B3B3B] rounded-[1.6px] mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                      <path d="M2.17502 2.95706C2.17502 2.56651 2.17502 2.37124 2.23882 2.2172C2.32389 2.01182 2.48707 1.84864 2.69245 1.76357C2.84649 1.69977 3.04176 1.69977 3.43231 1.69977H7.62328C8.01383 1.69977 8.20911 1.69977 8.36314 1.76357C8.56852 1.84864 8.7317 2.01182 8.81677 2.2172C8.88057 2.37124 8.88057 2.56651 8.88057 2.95706M4.2705 8.40532H6.78509M5.5278 1.69977V8.40532" stroke="white" stroke-width="0.838194" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </span>
                  User Interface
                </button>
                <button className="w-full flex items-center px-2 py-1 text-[12px] hover:bg-gradient-to-r from-[#323232] to-[rgba(50,50,50,0.50)] rounded">
                  <span className="flex justify-center items-center w-[13.4px] h-[13.4px] bg-[#3B3B3B] rounded-[1.6px] mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                      <g clip-path="url(#clip0_1_621)">
                        <path d="M2.28905 9.20932L5.05364 6.44473C5.21961 6.27876 5.30259 6.19577 5.39829 6.16468C5.48246 6.13733 5.57313 6.13733 5.6573 6.16468C5.75299 6.19577 5.83598 6.27876 6.00195 6.44473L8.7481 9.19088M6.36599 6.80877L7.56822 5.60653C7.73419 5.44056 7.81718 5.35758 7.91287 5.32649C7.99704 5.29914 8.08771 5.29914 8.17189 5.32649C8.26758 5.35758 8.35056 5.44056 8.51653 5.60653L9.71877 6.80877M4.6896 4.29419C4.6896 4.75711 4.31433 5.13238 3.85141 5.13238C3.38848 5.13238 3.01321 4.75711 3.01321 4.29419C3.01321 3.83126 3.38848 3.45599 3.85141 3.45599C4.31433 3.45599 4.6896 3.83126 4.6896 4.29419ZM3.34849 9.32335H7.7071C8.41125 9.32335 8.76332 9.32335 9.03227 9.18632C9.26885 9.06577 9.46119 8.87343 9.58173 8.63686C9.71877 8.36791 9.71877 8.01583 9.71877 7.31169V3.79127C9.71877 3.08712 9.71877 2.73504 9.58173 2.4661C9.46119 2.22952 9.26885 2.03718 9.03227 1.91664C8.76332 1.7796 8.41125 1.7796 7.7071 1.7796H3.34849C2.64434 1.7796 2.29227 1.7796 2.02332 1.91664C1.78674 2.03718 1.5944 2.22952 1.47386 2.4661C1.33682 2.73504 1.33682 3.08712 1.33682 3.79127V7.31169C1.33682 8.01583 1.33682 8.36791 1.47386 8.63686C1.5944 8.87343 1.78674 9.06577 2.02332 9.18632C2.29227 9.32335 2.64434 9.32335 3.34849 9.32335Z" stroke="white" stroke-width="0.838194" stroke-linecap="round" stroke-linejoin="round" />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_621">
                          <rect width="10.0583" height="10.0583" fill="white" transform="translate(0.498627 0.522278)" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  Image
                </button>
              </div>
            </div>
          </div>
          <div className="p-2 flex-grow rounded-lg border-t-2 border-[#192235] bg-gradient-to-br from-[#0B194A] via-[#10131D] to-[#0C0D12] shadow-md">
          <PremiereLikeComponent />
          </div>
          <div className="p-2 w-full md:w-[210px] border border-[#192235] rounded-[12px] bg-gradient-to-b from-[#0A0A0A] via-[#10131D] to-[#010101] shadow-md">
            <div className="flex-1">
              {/* Tabs: Design and Animate */}
              <div className="flex gap-2 mb-4">
                <button className="flex-1 text-white px-2 py-2 text-[12px] rounded-[6.7px] shadow-[inset_0_0_8px_rgba(73,73,73,0.4)]"
                  style={{
                    background: 'radial-gradient(93.48% 63.24% at 46.09% 51.52%, #262626 0%, #191919 100%)',
                  }}>
                  Design
                </button>
                <button className="flex-1 px-2 py-2 text-[12px] text-gray-400 hover:bg-[#262626] rounded">
                  Animate
                </button>
              </div>

              {/* Alignment Buttons */}
              <div className="flex justify-between mb-4">
                <div className="flex">
                  <button
                    className="w-[26px] h-[26px] cursor-pointer flex justify-center items-center rounded-tl-[5.029px] rounded-bl-[5.029px] border-r-[0.671px] border-r-[#1D4D6D] shadow-[inset_0_0_6px_rgba(68,133,254,0.50)]"
                    style={{
                      background: 'radial-gradient(51.37% 51.37% at 50% 50%, rgba(29, 64, 131, 0.33) 0%, rgba(45, 82, 152, 0.33) 100%)',
                    }}
                  >
                    <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.391479" y="0.169006" width="0.670556" height="13.4111" rx="0.335278" fill="#98BCFF" />
                      <rect x="1.90027" y="5.61725" width="2.01167" height="13.4111" rx="0.670556" transform="rotate(-90 1.90027 5.61725)" fill="#98BCFF" />
                      <rect x="1.90027" y="10.1435" width="2.01167" height="6.70556" rx="0.670556" transform="rotate(-90 1.90027 10.1435)" fill="#98BCFF" />
                    </svg>
                  </button>
                  <button
                    className="w-[26px] h-[26px] cursor-pointer flex justify-center items-center border-r-[0.671px] border-r-[#1D4D6D] shadow-[inset_0_0_6px_rgba(68,133,254,0.50)]"
                    style={{
                      background: 'radial-gradient(51.37% 51.37% at 50% 50%, rgba(29, 64, 131, 0.33) 0%, rgba(45, 82, 152, 0.33) 100%)',
                    }}
                  >
                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="7.67371" y="0.169067" width="0.670556" height="13.4111" rx="0.335278" fill="#98BEFF" />
                      <rect x="0.96814" y="5.53357" width="2.01167" height="13.4111" rx="0.670556" transform="rotate(-90 0.96814 5.53357)" fill="#98BDFF" />
                      <rect x="4.32092" y="10.898" width="2.01167" height="6.70556" rx="0.670556" transform="rotate(-90 4.32092 10.898)" fill="#98BDFF" />
                    </svg>
                  </button>
                  <button
                    className="w-[26px] h-[26px] cursor-pointer flex justify-center items-center rounded-tr-[5.029px] rounded-br-[5.029px] border-r-[0.671px] border-r-[#1D4D6D] shadow-[inset_0_0_6px_rgba(68,133,254,0.50)]"
                    style={{
                      background: 'radial-gradient(51.37% 51.37% at 50% 50%, rgba(29, 64, 131, 0.33) 0%, rgba(45, 82, 152, 0.33) 100%)',
                    }}
                  >
                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="7.67371" y="0.169067" width="0.670556" height="13.4111" rx="0.335278" fill="#98BEFF" />
                      <rect x="0.96814" y="5.53357" width="2.01167" height="13.4111" rx="0.670556" transform="rotate(-90 0.96814 5.53357)" fill="#98BDFF" />
                      <rect x="4.32092" y="10.898" width="2.01167" height="6.70556" rx="0.670556" transform="rotate(-90 4.32092 10.898)" fill="#98BDFF" />
                    </svg>
                  </button>

                </div>
                <div className="flex">
                  <button
                    className="w-[26px] h-[26px] cursor-pointer flex justify-center items-center rounded-tl-[5.029px] rounded-bl-[5.029px] border-r-[0.671px] border-r-[#1D4D6D] shadow-[inset_0_0_6px_rgba(68,133,254,0.50)]"
                    style={{
                      background: 'radial-gradient(51.37% 51.37% at 50% 50%, rgba(29, 64, 131, 0.33) 0%, rgba(45, 82, 152, 0.33) 100%)',
                    }}
                  >
                    <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.391479" y="0.169006" width="0.670556" height="13.4111" rx="0.335278" fill="#98BCFF" />
                      <rect x="1.90027" y="5.61725" width="2.01167" height="13.4111" rx="0.670556" transform="rotate(-90 1.90027 5.61725)" fill="#98BCFF" />
                      <rect x="1.90027" y="10.1435" width="2.01167" height="6.70556" rx="0.670556" transform="rotate(-90 1.90027 10.1435)" fill="#98BCFF" />
                    </svg>
                  </button>
                  <button
                    className="w-[26px] h-[26px] cursor-pointer flex justify-center items-center border-r-[0.671px] border-r-[#1D4D6D] shadow-[inset_0_0_6px_rgba(68,133,254,0.50)]"
                    style={{
                      background: 'radial-gradient(51.37% 51.37% at 50% 50%, rgba(29, 64, 131, 0.33) 0%, rgba(45, 82, 152, 0.33) 100%)',
                    }}
                  >
                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="7.67371" y="0.169067" width="0.670556" height="13.4111" rx="0.335278" fill="#98BEFF" />
                      <rect x="0.96814" y="5.53357" width="2.01167" height="13.4111" rx="0.670556" transform="rotate(-90 0.96814 5.53357)" fill="#98BDFF" />
                      <rect x="4.32092" y="10.898" width="2.01167" height="6.70556" rx="0.670556" transform="rotate(-90 4.32092 10.898)" fill="#98BDFF" />
                    </svg>
                  </button>
                  <button
                    className="w-[26px] h-[26px] cursor-pointer flex justify-center items-center rounded-tr-[5.029px] rounded-br-[5.029px] border-r-[0.671px] border-r-[#1D4D6D] shadow-[inset_0_0_6px_rgba(68,133,254,0.50)]"
                    style={{
                      background: 'radial-gradient(51.37% 51.37% at 50% 50%, rgba(29, 64, 131, 0.33) 0%, rgba(45, 82, 152, 0.33) 100%)',
                    }}
                  >
                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="7.67371" y="0.169067" width="0.670556" height="13.4111" rx="0.335278" fill="#98BEFF" />
                      <rect x="0.96814" y="5.53357" width="2.01167" height="13.4111" rx="0.670556" transform="rotate(-90 0.96814 5.53357)" fill="#98BDFF" />
                      <rect x="4.32092" y="10.898" width="2.01167" height="6.70556" rx="0.670556" transform="rotate(-90 4.32092 10.898)" fill="#98BDFF" />
                    </svg>
                  </button>

                </div>
              </div>

              {/* Horizontal Border */}
              <hr className="border-b border-[#303030] mb-4" />

              {/* Layout Text and Values */}
              <div className="mb-4">
                <p className="text-[12px] font-bold text-white mb-2">Layout</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-x-1">
                    <p className="text-[#9A9A9A] text-[12px] w-[45px]">X</p>
                    <input
                      type="text"
                      value="197"
                      className="text-[11px] text-white bg-[#191919] rounded-[3.5px] p-1 w-[55px]"
                      readOnly
                    />
                  </div>
                  <div className="flex items-center gap-x-1">
                    <p className="text-[#9A9A9A] text-[12px] w-[45px]">Y</p>
                    <input
                      type="text"
                      value="806"
                      className="text-[11px] text-white bg-[#191919] rounded-[3.5px] p-1 w-[55px]"
                      readOnly
                    />
                  </div>
                  <div className="flex items-center gap-x-1">
                    <p className="text-[#9A9A9A] text-[12px] w-[45px]">Width</p>
                    <input
                      type="text"
                      value="480"
                      className="text-[11px] text-white bg-[#191919] rounded-[3.5px] p-1 w-[55px]"
                      readOnly
                    />
                  </div>
                  <div className="flex items-center gap-x-1">
                    <p className="text-[#9A9A9A] text-[12px] w-[45px]">Height</p>
                    <input
                      type="text"
                      value="320"
                      className="text-[11px] text-white bg-[#191919] rounded-[3.5px] p-1 w-[55px]"
                      readOnly
                    />
                  </div>
                  <div className="flex items-center gap-x-1">
                    <p className="text-[#9A9A9A] text-[12px] w-[45px]">Angle</p>
                    <input
                      type="text"
                      value="0°"
                      className="text-[11px] text-white bg-[#191919] rounded-[3.5px] p-1 w-[55px]"
                      readOnly
                    />
                  </div>
                  <div className="flex items-center gap-x-1">
                    <p className="text-[#9A9A9A] text-[12px] w-[45px]">Radius</p>
                    <input
                      type="text"
                      value="0"
                      className="text-[11px] text-white bg-[#191919] rounded-[3.5px] p-1 w-[55px]"
                      readOnly
                    />
                  </div>
                </div>
              </div>

              <div className="border-y border-[#303030] mb-4 flex justify-between items-center py-3">
              <p className="text-[12px] font-bold text-white mb-0">Opacity</p>
              <input
                      type="text"
                      value="100%"
                      className="text-[11px] text-white bg-[#191919] rounded-[3.5px] p-1 w-[55px]"
                      readOnly
                    />
              </div>

              {/* Accordions */}
              <div className="space-y-2">
                {['Fill', 'Stroke', 'Shadow', 'Blur'].map((item, index) => (
                  <div key={item} style={{
                    background: 'radial-gradient(93.48% 63.24% at 46.09% 51.52%, #262626 0%, #191919 100%)',
                  }} className={`rounded-[6.7px] shadow-[inset_0_0_8px_rgba(73,73,73,0.4)] ${index === 0 ? 'mt-4 mb-4 rotate-[6deg]' : ''}`}>
                    <button
                    className="w-full text-white flex items-center justify-between p-2 text-[12px] shadow-[inset_0_0_8px_rgba(73,73,73,0.4)]  focus:outline-none"
                    
                      // className="w-full flex items-center justify-between p-2 text-sm text-white hover:bg-gray-800 focus:outline-none"
                      onClick={() => setActiveAccordion(activeAccordion === item ? null : item)}
                    >
                      {item}
                      <span className="ml-2 shadow-[inset_0_0_8px_rgba(73,73,73,0.4)] rounded h-[15px] w-[15px] flex items-center justify-center">{activeAccordion === item ? "-" : "+"}</span>
                    </button>
                    {activeAccordion === item && (
                      <div className="p-2">
                        {item === 'Fill' && (
                          <div>
                            <div className="flex items-center mb-0">
                              <p className="text-[#9A9A9A] text-[12px] mr-2">Color</p>
                              <input
                                type="color"
                                value="#0099FF"
                                className="w-[24px] h-[24px] rounded-lg"
                                readOnly
                              />
                              <input
                                type="text"
                                value="#0099FF"
                                className="ml-2 text-[11px] text-white bg-[#191919] rounded-[3.5px] p-1 w-[55px]"
                                readOnly
                              />
                              <input
                                type="text"
                                value="100%"
                                className="ml-2 text-[11px] text-white bg-[#191919] rounded-[3.5px] p-1 w-[40px]"
                                readOnly
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
