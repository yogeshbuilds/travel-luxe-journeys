import { useState, useEffect } from "react";
import { Tag, Calendar, Sparkles } from "lucide-react";

const offers = [
  {
    icon: Tag,
    text: "₹1500 OFF on First Booking",
    color: "from-primary to-primary/80",
  },
  {
    icon: Calendar,
    text: "Black Friday Sale - Up to 40% OFF",
    color: "from-secondary to-secondary/80",
  },
  {
    icon: Sparkles,
    text: "Early Bird Special - Book 3 Months Advance & Save 25%",
    color: "from-accent to-accent/80",
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
    <section className="py-8 bg-muted">
      <div className="container mx-auto px-4">
        <div
          className={`bg-gradient-to-r ${offers[currentOffer].color} text-background py-6 px-8 rounded-lg shadow-medium flex items-center justify-center gap-4 transition-all duration-500`}
        >
          <CurrentIcon className="h-8 w-8 animate-pulse" />
          <p className="text-xl md:text-2xl font-bold text-center">
            {offers[currentOffer].text}
          </p>
        </div>
      </div>
    </section>
  );
};

export default OffersBanner;
