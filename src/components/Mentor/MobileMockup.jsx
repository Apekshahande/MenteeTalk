import React from "react";

const MobileMockup = ({ mentor }) => {
  return (
    <div className="w-[375px] h-[667px] rounded-[40px] bg-white shadow-xl overflow-hidden p-4 flex flex-col gap-4 border border-gray-300">
     
      <div className="flex justify-between items-center">
        <h1 className="text-md font-semibold">Hello Naman!</h1>
        <div className="flex items-center gap-2">
          <button className="text-black bg-gray-100 px-2 rounded-lg">₹25</button>
          <button className="text-xl">🔔</button>
        </div>
      </div>

      <div className="relative">
        <input
          type="text"
          placeholder="I want to learn soft skills"
          className="w-full py-2 px-4 bg-gray-100 rounded-full text-sm outline-none"
        />
        <span className="absolute right-4 top-2.5 text-gray-400">🔍</span>
      </div>

      <div className="flex flex-wrap gap-2">
        {["Fitness", "UPSC", "Startup", "More"].map((tag) => (
          <span
            key={tag}
            className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex justify-between items-center mt-2">
        <h2 className="text-sm font-semibold">
          Top Mentors <span className="text-green-500">Live</span> Now
        </h2>
        <span className="text-xs text-gray-400">26</span>
      </div>

      <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center text-center">

        <div className="relative">
          <img
            src={mentor.image}
            alt={mentor.name}
            className="w-45 h-45 rounded-full object-cover border-4 border-white shadow-md"
          />
          <span className="absolute bottom-1 right-1 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">
            Active
          </span>
        </div>
        <h3 className="mt-3 font-semibold text-md">{mentor.name}</h3>
        <p className="text-xs text-gray-500">{mentor.role}</p>
        <p className="text-xs text-gray-400">{mentor.description}</p>
        <div className="mt-2 text-yellow-400 text-lg">
          {"★".repeat(mentor.rating)}
          <span className="text-gray-300">
            {"★".repeat(5 - mentor.rating)}
          </span>
        </div>

      </div>
    </div>
  );
};

export default MobileMockup;
