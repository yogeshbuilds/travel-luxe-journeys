import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
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
    <section className="relative h-[600px] overflow-hidden">
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

      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4">
        <h2 className="text-5xl md:text-6xl font-serif font-bold text-background mb-4 text-center animate-fade-in">
          Experience Luxury Travel
          <br />
          <span className="text-4xl md:text-5xl">Like Never Before</span>
        </h2>

        <div className="w-full max-w-2xl mt-8 flex gap-2">
          <Input
            type="text"
            placeholder="Enter your Dream Destination"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            className="h-14 text-lg bg-background/90 backdrop-blur-sm"
            list="destinations"
          />
          <datalist id="destinations">
            {destinations.map((dest) => (
              <option key={dest.name} value={dest.name} />
            ))}
          </datalist>
          <Button variant="hero" size="lg" onClick={handleSearch} className="h-14 px-8">
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-background/20 hover:bg-background/40 backdrop-blur-sm text-background p-3 rounded-full transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-background/20 hover:bg-background/40 backdrop-blur-sm text-background p-3 rounded-full transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {destinations.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-background w-8"
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
