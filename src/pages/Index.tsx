import Navbar from "@/components/Navbar";
import HomeHero from "@/components/HomeHero";
import ServicesGrid from "@/components/ServicesGrid";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import MobileFloatingButtons from "@/components/MobileFloatingButtons";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HomeHero />

      <div id="services">
        <ServicesGrid />
      </div>

      <WhyChooseUs />

      <Testimonials />

      <Footer pageType="home" />
      <MobileFloatingButtons />
    </div>
  );
};

export default Index;
