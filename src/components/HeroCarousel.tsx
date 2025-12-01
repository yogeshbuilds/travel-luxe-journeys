import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroDubai from "@/assets/hero-dubai.jpg";
import heroUsa from "@/assets/hero-usa.jpg";
import heroThailand from "@/assets/hero-thailand.jpg";
import heroSingapore from "@/assets/hero-singapore.jpg";
import heroSwitzerland from "@/assets/hero-switzerland.jpg";

const destinations = [
  { name: "Dubai", image: heroDubai },
  { name: "USA", image: heroUsa },
  { name: "Thailand", image: heroThailand },
  { name: "Singapore", image: heroSingapore },
  { name: "Switzerland", image: heroSwitzerland },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % destinations.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % destinations.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + destinations.length) % destinations.length);
  };

  const handleSearch = () => {
    const destination = destinations.find(
      (d) => d.name.toLowerCase() === searchQuery.toLowerCase()
    );
    if (destination) {
      navigate(`/destination/${destination.name.toLowerCase()}`);
    }
  };

  return (
    <section className="relative h-[300px] md:h-[500px] lg:h-[600px] overflow-hidden">
      {destinations.map((dest, index) => (
        <div
          key={dest.name}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={dest.image}
            alt={dest.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />
        </div>
      ))}

      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-3 md:px-4">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif font-bold text-background mb-2 md:mb-4 text-center animate-fade-in">
          Experience Luxury Travel
          <br />
          <span className="text-xl md:text-3xl lg:text-4xl">Like Never Before</span>
        </h2>

        <div className="w-full max-w-2xl mt-4 md:mt-8 flex">
          <Input
            type="text"
            placeholder="Enter your Dream Destination"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            className="h-10 md:h-12 lg:h-14 text-sm md:text-base bg-background/90 backdrop-blur-sm rounded-r-none"
            list="destinations"
          />
          <datalist id="destinations">
            {destinations.map((dest) => (
              <option key={dest.name} value={dest.name} />
            ))}
          </datalist>
          <button
            onClick={handleSearch}
            className="px-4 md:px-6 lg:px-8 bg-secondary hover:bg-secondary/90 text-secondary-foreground h-10 md:h-12 lg:h-14 rounded-r-md transition-colors text-sm md:text-base font-medium"
          >
            Search
          </button>
        </div>
      </div>



      <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {destinations.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-background w-6 md:w-8"
                : "bg-background/50 hover:bg-background/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
