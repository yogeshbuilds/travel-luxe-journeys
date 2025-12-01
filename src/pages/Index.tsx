import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import CategoryNav from "@/components/CategoryNav";
import TrendingDestinations from "@/components/TrendingDestinations";
import OffersBanner from "@/components/OffersBanner";
import SpecialDeals from "@/components/SpecialDeals";
import AssistanceBanner from "@/components/AssistanceBanner";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroCarousel />
      <CategoryNav />
      <TrendingDestinations />
      <OffersBanner />
      <SpecialDeals />
      <AssistanceBanner />
      <WhyChooseUs />
      <Footer />
    </div>
  );
};

export default Index;
