import undraw_road_img from "./undraw_road.svg";

const GuidanceSection = () => {
  return (
    <section className="bg-[#E0EBFF] py-12 px-4 md:px-8 text-center">
      <div className="flex justify-center  -mt-40 ">
        <img
          src={undraw_road_img} 
          alt="Guidance Illustration"
          className="w-full max-w-3xl animate-float"
        />
      </div>

      <p className="mt-6 text-lg md:text-xl font-semibold text-gray-900">
        “The Right Guidance at the Right Time Can Change Everything”
      </p>
    </section>
  );
}
export default GuidanceSection;
