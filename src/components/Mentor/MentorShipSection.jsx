

const MentorshipSection = () => {

  const points = [
    "Personalized mentorship helps overcome doubt and hesitation.",
    "Mentors offer real-world insights to fast-track your journey.",
    "Supportive guidance builds confidence and decision-making skills.",
  ];

  return (
    <section className="py-16 px-6 text-center mb-32 bg-white">
     
      <h3 className="text-[26px] md:text-[48px] lg:text-[44px] font-bold leading-[120%] text-black font-['Raleway'] mb-10">
        Why Mentorship Matters
      </h3>

      <p className="text-lg md:text-xl font-medium text-gray-700 mb-14 font-['Roboto'] max-w-3xl mx-auto">
        <span className="text-black font-semibold">“80% of people delay </span>
        <span className="text-gray-400">
          pursuing their dream job because they lack the right guidance at the
          right time”
        </span>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {points.map((text, index) => (
          <div
            key={index}
            className="flex items-start gap-4 text-left font-['Roboto']"
          >
  
            <div className="flex items-center justify-center min-w-[40px] min-h-[40px] bg-[#7F56D9] rounded-md shadow-md">
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414L8.414 15l-4.121-4.121a1 1 0 111.414-1.414L8.414 12.586l7.879-7.879a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            <p className="text-base text-gray-800">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default MentorshipSection;

