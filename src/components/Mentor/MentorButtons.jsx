import React, { useState } from "react";

const MentorButtons = () => {

  const [activeButton, setActiveButton] = useState("signup");

  const baseClasses = `
    font-['Nunito'] text-[16px] font-semibold px-4 py-3
    transition-all duration-300 ease-in-out
    rounded-none w-full md:max-w-[220px]
  `;

  const activeStyles = `bg-[#A805FF] text-white shadow-sm scale-[1.01]`;
  const inactiveStyles = `
    bg-white text-[#A805FF] border-2 border-[#A805FF]
    hover:bg-[#F3E8FF] hover:scale-[1.01]
  `;

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-4 mb-10 w-full max-w-3xl mx-auto px-4">

      <button
        onClick={() => setActiveButton("signup")}
        className={`${baseClasses} ${
          activeButton === "signup" ? activeStyles : inactiveStyles
        }`}
      >
        <div className="flex items-center justify-center gap-2 group transition-all">
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          <span>Sign Up for Free</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </div>
      </button>

      <button
        onClick={() => setActiveButton("mentor")}
        className={`${baseClasses} ${
          activeButton === "mentor" ? activeStyles : inactiveStyles
        }`}
      >
        <div className="flex items-center justify-center gap-2 group transition-all">
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          <span>Become a Mentor</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </div>
      </button>
      
    </div>
  );
};

export default MentorButtons;
