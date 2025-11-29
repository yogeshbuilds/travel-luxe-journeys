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
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold text-center mb-12 text-foreground">
          Special Deals
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {deals.map((deal) => (
            <Card
              key={deal.country}
              onClick={() => navigate(`/destination/${deal.country.toLowerCase()}`)}
              className="cursor-pointer overflow-hidden group hover:shadow-strong transition-all"
            >
              <CardContent className="p-0">
                <div className="relative h-[350px]">
                  <img
                    src={deal.image}
                    alt={deal.country}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-background">
                    <h3 className="text-3xl font-serif font-bold mb-2">{deal.country}</h3>
                    <p className="text-lg font-medium">{deal.duration}</p>
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
