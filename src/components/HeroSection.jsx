import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

const HeroSection = () => {
  return (
    <main className="w-full flex flex-col md:flex-row md:flex-1">
      <div className="w-full md:w-1/2">
        <LeftSection />
      </div>
      <div className="w-full md:w-1/2">
        <RightSection />
      </div>
    </main>
  );
};

export default HeroSection;
