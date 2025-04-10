import React from "react";

const StarRating = ({ rating }) => {

  return (
    <div className="mt-2">
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className={i <= rating ? "text-yellow-400" : "text-gray-300"}>
          ★
        </span>
      ))}
    </div>
  );
};

const MentorCard = ({ mentor, onClick }) => {

  return (
    <div
      className="w-60 h-80 bg-white rounded-xl shadow-md cursor-pointer transition-transform hover:scale-105 text-center p-4 flex flex-col items-center justify-center"
      onClick={() => onClick(mentor)}
    >
      <img
        src={mentor.image}
        alt={mentor.name}
        className="w-40 h-40 rounded-full object-cover"
      />
      <h3 className="mt-4 font-semibold text-lg">{mentor.name}</h3>
      <p className="text-sm text-gray-600">{mentor.role}</p>
      <StarRating rating={mentor.rating} />
    </div>
    
  );
};

export default MentorCard;
