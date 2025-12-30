import Navbar from "@/components/Navbar";
import HomeHero from "@/components/HomeHero";
import ServicesGrid from "@/components/ServicesGrid";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";

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

      <Footer />
    </div>
  );
};

export default Index;
