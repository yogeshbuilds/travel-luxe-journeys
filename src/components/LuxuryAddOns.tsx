import { Card, CardContent } from "@/components/ui/card";
import luxuryCar from "@/assets/luxury-car.jpg";
import luxurySpa from "@/assets/luxury-spa.jpg";
import celebrityMeetup from "@/assets/celebrity-meetup.jpg";

const addons = [
  {
    name: "Luxury Car Riding",
    image: luxuryCar,
    description: "Experience premium comfort with luxury car services",
  },
  {
    name: "Russian Spa",
    image: luxurySpa,
    description: "Indulge in world-class spa treatments",
  },
  {
    name: "Celebrity Meetup",
    image: celebrityMeetup,
    description: "Exclusive opportunities to meet celebrities",
  },
];

const LuxuryAddOns = () => {
  return (
    <section className="py-6 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-center mb-8 md:mb-12 text-foreground">
          Luxury Add-Ons
        </h2>

        {/* Mobile: Horizontal scroll, Desktop: Grid */}
        <div className="flex md:grid md:grid-cols-3 gap-4 md:gap-8 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 scrollbar-hide">
          {addons.map((addon) => (
            <Card
              key={addon.name}
              className="min-w-[280px] md:min-w-auto overflow-hidden group hover:shadow-strong transition-all"
            >
              <CardContent className="p-0">
                <div className="relative h-[250px] md:h-[280px] lg:h-[300px] overflow-hidden">
                  <img
                    src={addon.image}
                    alt={addon.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl lg:text-2xl font-serif font-bold mb-2 text-foreground">
                    {addon.name}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground">{addon.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LuxuryAddOns;
