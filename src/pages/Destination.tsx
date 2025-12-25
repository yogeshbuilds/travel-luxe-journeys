import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Check, Clock, MapPin, ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import offersData from "@/data/offers.json";
import heroDubai from "@/assets/hero-dubai.jpg";
import heroUsa from "@/assets/hero-usa.jpg";
import heroThailand from "@/assets/hero-thailand.jpg";
import heroSingapore from "@/assets/hero-singapore.jpg";
import heroSwitzerland from "@/assets/hero-switzerland.jpg";

const destinationImages: { [key: string]: string } = {
  dubai: heroDubai,
  usa: heroUsa,
  thailand: heroThailand,
  singapore: heroSingapore,
  switzerland: heroSwitzerland,
};

const Destination = () => {
  const { country } = useParams<{ country: string }>();
  const navigate = useNavigate();
  const [selectedPackage, setSelectedPackage] = useState<string>("");

  const countryName =
    country?.charAt(0).toUpperCase() + country?.slice(1).toLowerCase();

  const packages = offersData.filter(
    (pkg) => pkg.country.toLowerCase() === country?.toLowerCase()
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!country || !countryName || packages.length === 0) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-background">
          <div className="text-center p-8">
            <h1 className="text-4xl font-serif font-bold mb-4 text-foreground">Destination Not Found</h1>
            <p className="text-muted-foreground mb-8">We couldn't find any packages for this destination.</p>
            <Button onClick={() => navigate("/")} className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const heroImage = destinationImages[country.toLowerCase()] || heroDubai;

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img
          src={heroImage}
          alt={countryName}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4 animate-fade-in tracking-tight">
            {countryName}
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto opacity-90">
            Discover our curated collection of luxury experiences in {countryName}
          </p>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-2">
                Available Packages
              </h2>
              <p className="text-muted-foreground">
                Choose from our exclusive selection of travel packages
              </p>
            </div>
            <Button variant="outline" onClick={() => navigate("/")} className="hidden md:flex gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Destinations
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <Card
                key={pkg.id}
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 group border-border/50 bg-card flex flex-col h-full"
              >
                <div className="relative h-[240px] overflow-hidden">
                  <img
                    src={heroImage}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="backdrop-blur-md bg-white/20 text-white border-none">
                      {pkg.package_type}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-serif font-bold leading-tight mb-1 line-clamp-2">
                      {pkg.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm opacity-90">
                      <MapPin className="h-3 w-3" />
                      {pkg.destination_city}
                    </div>
                  </div>
                </div>

                <CardContent className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1.5">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>{pkg.duration_days} Days / {pkg.duration_nights} Nights</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm mb-6 line-clamp-3 flex-grow">
                    {pkg.short_overview}
                  </p>

                  <div className="space-y-3 mb-6">
                    <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">Highlights</h4>
                    <ul className="space-y-2">
                      {pkg.key_highlights.slice(0, 3).map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                          <span className="line-clamp-1">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto pt-6 border-t border-border/50">
                    <div className="flex items-end justify-between mb-4">
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Starting from</p>
                        <p className="text-2xl font-bold text-primary">
                          ₹{pkg.starting_price_in_inr?.toLocaleString()}
                        </p>
                      </div>
                    </div>

                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          className="w-full font-semibold"
                          size="lg"
                          onClick={() => setSelectedPackage(pkg.title)}
                        >
                          Request Quote
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>Request a Call Back</DialogTitle>
                        </DialogHeader>
                        <form className="grid gap-4 py-4" onSubmit={(e) => {
                          e.preventDefault();
                          // Handle form submission here
                          alert("Thank you! We will call you back shortly.");
                        }}>
                          <div className="grid gap-2">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" placeholder="Enter your name" required />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="mobile">Mobile Number</Label>
                            <Input id="mobile" placeholder="Enter your mobile number" type="tel" required />
                          </div>
                          <div className="grid gap-2">
                            <Label>Selected Package</Label>
                            <Input value={selectedPackage} disabled className="bg-muted" />
                          </div>
                          <Button type="submit" className="w-full">Submit Request</Button>
                        </form>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-2 mb-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about traveling to {countryName}
            </p>
          </div>
          <div className="space-y-3 max-w-3xl mx-auto">
            {[
              {
                question: `What is the best time to visit ${countryName}?`,
                answer: `The best time depends on your preferences. Generally, the pleasant weather months are ideal for sightseeing. We recommend checking weather patterns and local events for the best experience. Our travel experts can suggest the perfect season for your preferences.`
              },
              {
                question: "What documents do I need for travel?",
                answer: "You'll typically need a valid passport and visa (if applicable for your destination). We recommend checking your country's embassy website for specific requirements. Our team can assist with visa guidance and travel documentation."
              },
              {
                question: "Are vaccinations required?",
                answer: "Vaccination requirements vary by destination and your home country. We strongly recommend consulting your doctor and checking health advisory websites for current requirements before booking your trip."
              },
              {
                question: "What is included in the package?",
                answer: "Our packages typically include accommodation, guided tours, meals, transportation, and premium experiences. Specific inclusions are listed in each package details. You can also customize packages based on your preferences and budget."
              },
              {
                question: "Can I customize my travel package?",
                answer: "Absolutely! All our packages are customizable. You can adjust duration, accommodation type, activities, and experiences. Contact our travel experts to create your perfect luxury travel itinerary."
              }
            ].map((faq, index) => (
              <details key={index} className="group rounded-lg border bg-card p-4 hover:shadow-md transition">
                <summary className="flex cursor-pointer items-center justify-between font-semibold text-foreground">
                  <span>{faq.question}</span>
                  <span className="text-muted-foreground transition group-open:rotate-180">
                    <ChevronDown className="h-5 w-5" />
                  </span>
                </summary>
                <p className="mt-3 text-sm text-muted-foreground">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Destination;
