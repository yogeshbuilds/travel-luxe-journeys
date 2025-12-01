import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import heroDubai from "@/assets/hero-dubai.jpg";
import heroThailand from "@/assets/hero-thailand.jpg";
import heroSwitzerland from "@/assets/hero-switzerland.jpg";

const deals = [
  { country: "Dubai", duration: "4 Nights / 5 Days", image: heroDubai },
  { country: "Thailand", duration: "5 Nights / 6 Days", image: heroThailand },
  { country: "Switzerland", duration: "6 Nights / 7 Days", image: heroSwitzerland },
];

const SpecialDeals = () => {
  const navigate = useNavigate();

  return (
    <section className="py-6 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-center mb-8 md:mb-12 text-foreground">
          Special Deals
        </h2>

        {/* Mobile: Horizontal scroll, Desktop: Grid */}
        <div className="flex md:grid md:grid-cols-3 gap-4 md:gap-6 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 scrollbar-hide">
          {deals.map((deal) => (
            <Card
              key={deal.country}
              onClick={() => navigate(`/destination/${deal.country.toLowerCase()}`)}
              className="min-w-[280px] md:min-w-auto cursor-pointer overflow-hidden group hover:shadow-strong transition-all"
            >
              <CardContent className="p-0">
                <div className="relative h-[250px] md:h-[280px] lg:h-[350px]">
                  <img
                    src={deal.image}
                    alt={deal.country}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-3 md:bottom-6 left-3 md:left-6 text-background">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-serif font-bold mb-1 md:mb-2">{deal.country}</h3>
                    <p className="text-sm md:text-base font-medium">{deal.duration}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialDeals;
