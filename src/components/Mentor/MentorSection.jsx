import React, { useState } from "react";
import MentorCard from "./MentorCard";
import MobileMockup from "./MobileMockup";
import Dr1 from "./assets/dr1.png";
import Dr2 from "./assets/dr2.png";
import Dr3 from "./assets/dr3.jpg";
import Dr4 from "./assets/dr4.png";
import Dr5 from "./assets/dr5.png";

const mentors = [
  {
    name: "Dr. Apoorva Ranjan Sharma",
    role: "Co-founder, Venture Catalysts",
    image: Dr1,
    rating: 5,
  },
  {
    name: "Piyush Verma",
    role: "Co-founder, Venture Catalysts",
    image: Dr2,
    rating: 4,
  },
  {
    name: "Ritesh Agarwal",
    role: "Founder, OYO Rooms",
    image:Dr3,
    rating: 5,
  },
  {
    name: "Sonam Wangchuk",
    role: "Innovator & Educationist",
    image: Dr4,
    rating: 5,
  },
  {
    name: "Naman Sharma",
    role: "Tech Mentor",
    image:Dr5,
    rating: 4,
  },
];

const MentorSection = () => {

  const [selectedMentor, setSelectedMentor] = useState(mentors[2]); 

  return (

    <div className="flex justify-center items-center gap-6 py-10 px-4 flex-wrap md:flex-nowrap">

      <MentorCard mentor={mentors[0]} onClick={setSelectedMentor} />
      <MentorCard mentor={mentors[1]} onClick={setSelectedMentor} />
      <MobileMockup mentor={selectedMentor} />
      <MentorCard mentor={mentors[3]} onClick={setSelectedMentor} />
      <MentorCard mentor={mentors[4]} onClick={setSelectedMentor} />
      
    </div>
  );
};

export default MentorSection;
