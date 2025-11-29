import { Shield, Award, Headphones, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "Trusted & Secure",
    description: "100% secure bookings with trusted payment gateways and certified travel partners",
  },
  {
    icon: Award,
    title: "Award-Winning Service",
    description: "Recognized globally for excellence in luxury travel experiences and customer satisfaction",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock assistance from our dedicated travel experts whenever you need help",
  },
  {
    icon: Heart,
    title: "Personalized Experience",
    description: "Customized itineraries tailored to your preferences for unforgettable memories",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold text-center mb-12 text-foreground">
          Why Choose TravelLuxe?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title} className="text-center hover:shadow-medium transition-all">
                <CardContent className="pt-8 pb-6 px-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                    <Icon className="h-8 w-8 text-background" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
