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
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold text-center mb-12 text-foreground">
          Luxury Add-Ons
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {addons.map((addon) => (
            <Card
              key={addon.name}
              className="overflow-hidden group hover:shadow-strong transition-all"
            >
              <CardContent className="p-0">
                <div className="relative h-[300px] overflow-hidden">
                  <img
                    src={addon.image}
                    alt={addon.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-serif font-bold mb-2 text-foreground">
                    {addon.name}
                  </h3>
                  <p className="text-muted-foreground">{addon.description}</p>
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
