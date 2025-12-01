import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
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

const TrendingDestinations = () => {
  const navigate = useNavigate();

  return (
    <section className="py-6 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-center mb-8 md:mb-12 text-foreground">
          Top Trending Destinations
        </h2>

        <div className="flex gap-4 md:gap-6 overflow-x-auto pb-4 scrollbar-hide">
          {destinations.map((destination) => (
            <Card
              key={destination.name}
              onClick={() => navigate(`/destination/${destination.name.toLowerCase()}`)}
              className="min-w-[280px] md:min-w-[300px] cursor-pointer overflow-hidden group hover:shadow-strong transition-all"
            >
              <div className="relative h-[300px] md:h-[350px] lg:h-[400px]">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <h3 className="absolute bottom-3 md:bottom-4 left-3 md:left-4 text-xl md:text-2xl lg:text-3xl font-serif font-bold text-background">
                  {destination.name}
                </h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingDestinations;
