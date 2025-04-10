import step1Img from './assets/step1.png';
import step2Img from './assets/step2.png';
import step3Img from './assets/step3.png';

const HowItWorksSection = () => {

  const steps = [
    {
      id: 1,
      img: step1Img,
      title: 'Explore & Choose a Mentor',
      subtitle: 'Filter by niche, expertise, or ratings',
    },
    {
      id: 2,
      img: step2Img,
      title: 'Connect via App or Web',
      subtitle: 'Chat or call your selected mentor',
    },
    {
      id: 3,
      img: step3Img,
      title: 'Track Your Progress',
      subtitle: 'Get feedback & improve continuously',
    },
    {
      id: 4,
      img: step2Img,
      title: 'Connect via App or Web',
      subtitle: 'Chat or call your selected mentor',
    },
  ];

  return (
    <section className="bg-white py-20 px-4">

      <h3 className="text-[26px] md:text-[48px] lg:text-[44px] font-bold leading-[120%] text-center mb-16 text-black font-['Raleway']">
        How It Works
      </h3>

      <div className="max-w-6xl mx-auto space-y-24">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className={`grid grid-cols-1 md:grid-cols-2 items-center gap-12 ${
              index % 2 !== 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
        
            <div className={`flex justify-center ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
              <img
                src={step.img}
                alt={`Step ${step.id}`}
                className="w-full max-w-sm transition-transform duration-500 ease-in-out hover:scale-105 animate-bounce-slow"
              />
            </div>

            <div className={`text-center md:text-left ${index % 2 !== 0 ? 'md:order-1' : ''}`}>
              <p className="text-xs uppercase text-gray-400 mb-2 font-['Roboto']">
                STEP {step.id}
              </p>
              <h3 className="text-2xl font-semibold text-[#1e1e2f] mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 text-base font-['Roboto']">
                {step.subtitle}
              </p>
            </div>

          </div>

        ))}
        
      </div>
    </section>
  );
}
export default HowItWorksSection;
