import React from "react";

const Card = ({ title, description, image, link_text, link }) => {

  return (

    <div className="w-80 bg-white overflow-hidden inline-block align-top mr-4 border border-[#B7C3FF] font-['Roboto']">
      
      <img
        className="h-40 w-full object-cover object-top"
        src={image}
        alt="Card"
      />

      <div className="p-4 text-left space-y-3">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
        {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[#1C42C8]"
            >
              {link_text}
              <span className="text-[#1C42C8]">➔</span>
            </a>
          ) : (
            <div className="inline-flex items-center gap-2 text-sm text-[#1C42C8]">
              {link_text}
              <span>➔</span>
            </div>
        )}
      </div>

    </div>
    
  );
};

export default Card;
