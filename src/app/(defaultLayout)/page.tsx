import AboutVeloura from "@/components/home/AboutVeloura";
import HeroSection from "@/components/home/HeroSection";
import TopSellingProduct from "@/components/home/TopSellingProduct";
import VelouraFashion from "@/components/home/VelouraFashion";
import Vision from "@/components/home/Vision";
import VisionOfVeloura from "@/components/home/VisionOfVeloura";


const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <AboutVeloura />
      <TopSellingProduct />
      <VelouraFashion />
      <VisionOfVeloura />
      <Vision />
    </div>
  );
};

export default HomePage;
