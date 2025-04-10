import Card from './components/Cards/Cards';
import cardData from "./components/Cards/cardData";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MentorSection from './components/Mentor/MentorSection';
import MentorButtons from './components/Mentor/MentorButtons';
import MentorshipSection from './components/Mentor/MentorShipSection';
import GuidanceSection from './components/GuidanceSection/GuidanceSection';
import HowItWorksSection from './components/HowItWorks/HowItWorksSection';

function App() {

  return (
    <>
      <div className="w-full ">

        <Header />

        <section className="py-16 px-4 md:px-8 text-center">
          <h1 className="text-[30px] md:text-[72px] lg:text-[60px] font-bold leading-[120%] text-[#151515] font-['Raleway']">
            Talk to Anytime, Anywhere
          </h1>

          <p className="mt-6 text-base md:text-lg lg:text-xl font-normal font-['Roboto'] text-[#595959]">
            Transform your life with guidance from{" "}
            <span className="text-[#2844D4] font-semibold underline cursor-pointer font-['SF Pro']">
              top educators
            </span>
            ,<br className="hidden md:block" />
            and more—all at your fingertips
          </p>
        </section>
        <MentorSection />
        <MentorButtons />
        <MentorshipSection />
        <GuidanceSection />
        <HowItWorksSection />
 
        <h3 className="text-[26px] md:text-[48px] lg:text-[44px] font-bold leading-[120%] text-center text-black font-['Raleway']">
          Unlock Expertise in every domain
        </h3>

        <div className="max-w-[1496px] mx-auto px-4 py-10">
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
            {cardData.map((card, index) => (
              <Card key={index} {...card} />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App;
