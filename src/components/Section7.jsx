import { useState } from 'react';

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative rounded-[12px] bg-gradient-to-b from-[#10141A] via-[#0C1018] to-[#0A1017] overflow-hidden transition-all duration-300 p-[2px]">
      {/* Radial Gradient Border Effect */}
      <div
        className="absolute inset-0 rounded-[12px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(104,114,131,0.5) 0%, rgba(104,114,131,0) 100%)",
          maskImage: "linear-gradient(white, white), linear-gradient(white, white)",
          maskComposite: "exclude",
        }}
      ></div>

      {/* Inner Content */}
      <div className="relative rounded-[10px] bg-gradient-to-b from-[#10141A] via-[#0C1018] to-[#0A1017]">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="flex justify-between items-center p-5 cursor-pointer h-[78px] hover:bg-gray-800"
        >
          <h3 className="text-white text-[16px] sm:text-[20px] font-medium">{question}</h3>
          <span className="text-white text-[24px] sm:text-[32px]">{isOpen ? '-' : '+'}</span>
        </div>
        <div className={`transition-all duration-300 ${isOpen ? 'p-5' : 'h-0 overflow-hidden'}`}>
          <p className="text-gray-300 text-[14px] sm:text-[16px]">{answer}</p>
        </div>
        <div className="absolute right-0 z-1 w-[101px] h-[101px] flex-shrink-0 bg-blue-500 opacity-30 blur-[60px]"></div>
      </div>
    </div>
  );
};

export default function Section7() {
  const faqs = [
    { question: "Can I use Animify for free?", answer: "Yes, you can use Animify for free with limited features during the trial period." },
    { question: "Why should I upgrade to the Starter plan?", answer: "The Starter plan offers additional features and functionalities that can enhance your experience." },
    { question: "How does workspace billing work?", answer: "Workspace billing is charged according to the number of users and selected features." },
    { question: "How do I cancel my subscription?", answer: "You can cancel your subscription through the account settings in the dashboard." },
    { question: "What is your refund policy?", answer: "We offer a 30-day money-back guarantee on all subscriptions." },
  ];

  return (
    <section className="py-12 relative">
      <div className="container mx-auto w-full sm:w-[748px] px-4">
        <h2 className="text-white text-center mb-10 text-[18px] sm:text-[20px] font-medium">Frequently Asked Questions</h2>
        <div className="space-y-4 relative z-2">
          {faqs.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        {/* Background Gradient */}
        <div
          className="container mx-auto absolute top-12 left-0 right-0 z-0 w-[100%] sm:w-[834px] h-[548px] rounded-full opacity-20 blur-[40px]"
          style={{
            background: "radial-gradient(67.82% 67.82% at 50% 50%, #A793FF 0%, rgba(167, 147, 255, 0.00) 100%)",
          }}
        ></div>
      </div>
    </section>
  );
}
