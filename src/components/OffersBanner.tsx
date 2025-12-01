import { useState, useEffect } from "react";
import { Tag, Calendar, Sparkles } from "lucide-react";


const offers = [
  {
    icon: Tag,
    text: "₹1500 OFF on First Booking",
  },
  {
    icon: Calendar,
    text: "Black Friday Sale - Up to 40% OFF",
  },
  {
    icon: Sparkles,
    text: "Early Bird Special - Book 3 Months Advance & Save 25%",
  },
];

const OffersBanner = () => {
  const [currentOffer, setCurrentOffer] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentOffer((prev) => (prev + 1) % offers.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const CurrentIcon = offers[currentOffer].icon;

  return (
    <section className="py-6">
      <div className="container mx-auto px-4">
        <div
          className="relative overflow-hidden rounded-lg shadow-strong min-h-[200px] md:min-h-[250px] flex items-center justify-center transition-all duration-500 bg-primary"
        >
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/20" />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center gap-3 md:gap-4 px-4 text-center">
            <CurrentIcon className="h-8 w-8 md:h-10 md:w-10 text-secondary animate-pulse" />
            <p className="text-lg md:text-xl lg:text-2xl font-bold text-background max-w-2xl">
              {offers[currentOffer].text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OffersBanner;
