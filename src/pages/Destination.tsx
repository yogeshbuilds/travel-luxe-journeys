import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import packagesData from "@/data/packages.json";
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

  const countryName =
    country?.charAt(0).toUpperCase() + country?.slice(1).toLowerCase();
  const packages = packagesData.packages.filter(
    (pkg) => pkg.country.toLowerCase() === country?.toLowerCase()
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!country || !countryName || packages.length === 0) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-serif font-bold mb-4">Destination Not Found</h1>
            <Button onClick={() => navigate("/")}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const heroImage = destinationImages[country.toLowerCase()];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <img
          src={heroImage}
          alt={countryName}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-background">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 animate-fade-in">
            {countryName}
          </h1>
          <p className="text-xl md:text-2xl mb-8">Discover Amazing Packages</p>
          <Button variant="hero" onClick={() => navigate("/")} className="gap-2">
            <ArrowLeft className="h-5 w-5" />
            Back to Home
          </Button>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-center mb-12 text-foreground">
            Available Packages
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <Card
                key={pkg.id}
                className="overflow-hidden hover:shadow-strong transition-all group"
              >
                <CardContent className="p-0">
                  <div className="relative h-[250px] overflow-hidden">
                    <img
                      src={heroImage}
                      alt={pkg.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-serif font-bold mb-2 text-foreground">
                      {pkg.name}
                    </h3>
                    <p className="text-muted-foreground mb-4">{pkg.description}</p>
                    
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-lg font-semibold text-primary">
                        {pkg.days} Days / {pkg.nights} Nights
                      </span>
                    </div>

                    <div className="flex items-center gap-3 mb-4">
                      {pkg.offeredPrice ? (
                        <>
                          <span className="text-3xl font-bold text-secondary">
                            ${pkg.offeredPrice}
                          </span>
                          <span className="text-xl text-muted-foreground line-through">
                            ${pkg.price}
                          </span>
                        </>
                      ) : (
                        <span className="text-3xl font-bold text-primary">
                          ${pkg.price}
                        </span>
                      )}
                    </div>

                    <Button variant="luxury" className="w-full">
                      Book Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Destination;
