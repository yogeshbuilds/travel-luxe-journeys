import { useState, FormEvent } from "react";
import { toast } from "sonner";
import { submitQuery } from "@/lib/api";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileFloatingButtons from "@/components/MobileFloatingButtons";
import luxuryCar from "@/assets/luxury-car.jpg";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ChevronDown } from "lucide-react";
import rideData from "@/data/luxuryRide.json";

interface PremiumCar {
  name: string;
  image: string;
  category: string;
  color?: string;
  textColor?: string;
  price: string;
  description: string;
  features: string[];
  specifications: {
    engine: string;
    transmission: string;
    seats: string;
    acceleration: string;
    topSpeed: string;
    fuelEfficiency: string;
  };
  bestFor: string;
}

const LuxuryRide = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        {/* Hero with image, matching main theme */}
        <section className="relative h-[260px] md:h-[380px] lg:h-[440px] overflow-hidden">
          <img
            src={luxuryCar}
            alt="Luxury car ride"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-background/95" />

          <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4">
            <p className="inline-flex text-[11px] md:text-xs font-medium px-2.5 py-1 rounded-full bg-primary/20 text-primary mb-2 md:mb-3">
              Premium Experience
            </p>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-serif font-bold text-background text-center">
              Luxury Car Ride
            </h1>
            <p className="mt-2 md:mt-3 text-xs md:text-sm lg:text-base text-background/90 max-w-2xl text-center">
              Experience premium chauffeur-driven luxury vehicles across Delhi NCR.
              From romantic dates to grand celebrations, we have the perfect car for every occasion.
            </p>
          </div>
        </section>

        <section className="pt-6 pb-8 md:pt-10 md:pb-12">
          <div className="container mx-auto px-4 space-y-8">
            {/* About Section */}
            <section className="space-y-4">
              <header className="space-y-2">
                <p className="inline-flex text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                  Luxury Chauffeur Service
                </p>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-foreground">
                  Premium Luxury Car Rides for Every Occasion
                </h1>
                <p className="text-sm md:text-base text-muted-foreground max-w-3xl">
                  Discover the perfect way to travel in luxury. Our premium chauffeur-driven vehicles
                  are designed for those who appreciate finer things in life. Whether it's a romantic
                  getaway, a business meeting, or a grand celebration, we have the perfect car and
                  professional chauffeur to make your experience unforgettable.
                </p>
              </header>
            </section>

            {/* Service Features */}
            <section className="space-y-4">
              <h2 className="text-xl md:text-2xl font-serif font-bold text-foreground">
                Why Choose Our Luxury Car Service
              </h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {rideData.serviceFeatures.map((feature) => (
                  <div key={feature.title} className="rounded-2xl border bg-card p-4 md:p-6 space-y-3 hover:shadow-md transition">
                    <div className="text-3xl">{feature.icon}</div>
                    <h3 className="font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Quick Pricing */}
            <section className="rounded-2xl border bg-gradient-to-r from-primary/10 to-primary/5 p-6 md:p-8">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">
                    Starting at
                  </p>
                  <p className="text-3xl md:text-4xl font-semibold text-primary">
                    ₹{rideData.startingPrice.toLocaleString("en-IN")}
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">{rideData.startingLabel}</p>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="inline-flex justify-center items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium shadow-sm hover:bg-primary/90 transition w-full md:w-auto">
                      Book Your Luxury Ride
                    </button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Book Your Luxury Ride</DialogTitle>
                    </DialogHeader>
                    <LuxuryRideForm />
                  </DialogContent>
                </Dialog>
              </div>
            </section>

            {/* Vertical Cars Section with Zig-Zag Layout */}
            <section className="space-y-6">
              <header className="space-y-2">
                <p className="inline-flex text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                  Our Premium Fleet
                </p>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                  Explore Our Luxury Vehicle Collection
                </h2>
                <p className="text-sm md:text-base text-muted-foreground">
                  Each vehicle is meticulously maintained and staffed with professional chauffeurs
                </p>
              </header>

              <div className="space-y-6">
                {(rideData.premiumCars as PremiumCar[]).map((car, index) => {
                  const isEven = index % 2 === 0;
                  const colorMap: Record<string, { bg: string; text: string; button: string; accent: string }> = {
                    blue: {
                      bg: "bg-gradient-to-r from-slate-100 to-blue-100",
                      text: "text-slate-700",
                      button: "bg-slate-600 hover:bg-slate-700",
                      accent: "bg-slate-200",
                    },
                    indigo: {
                      bg: "bg-gradient-to-r from-slate-100 to-indigo-100",
                      text: "text-slate-700",
                      button: "bg-slate-600 hover:bg-slate-700",
                      accent: "bg-slate-200",
                    },
                    purple: {
                      bg: "bg-gradient-to-r from-stone-100 to-slate-100",
                      text: "text-stone-700",
                      button: "bg-stone-600 hover:bg-stone-700",
                      accent: "bg-stone-200",
                    },
                    amber: {
                      bg: "bg-gradient-to-r from-stone-100 to-amber-100",
                      text: "text-stone-700",
                      button: "bg-stone-600 hover:bg-stone-700",
                      accent: "bg-stone-200",
                    },
                    red: {
                      bg: "bg-gradient-to-r from-slate-100 to-rose-100",
                      text: "text-slate-700",
                      button: "bg-slate-600 hover:bg-slate-700",
                      accent: "bg-slate-200",
                    },
                    gray: {
                      bg: "bg-gradient-to-r from-gray-100 to-slate-100",
                      text: "text-slate-700",
                      button: "bg-slate-600 hover:bg-slate-700",
                      accent: "bg-slate-200",
                    },
                    green: {
                      bg: "bg-gradient-to-r from-stone-100 to-green-100",
                      text: "text-stone-700",
                      button: "bg-stone-600 hover:bg-stone-700",
                      accent: "bg-stone-200",
                    },
                    orange: {
                      bg: "bg-gradient-to-r from-stone-100 to-orange-100",
                      text: "text-stone-700",
                      button: "bg-stone-600 hover:bg-stone-700",
                      accent: "bg-stone-200",
                    },
                    cyan: {
                      bg: "bg-gradient-to-r from-slate-100 to-cyan-100",
                      text: "text-slate-700",
                      button: "bg-slate-600 hover:bg-slate-700",
                      accent: "bg-slate-200",
                    },
                    emerald: {
                      bg: "bg-gradient-to-r from-slate-100 to-emerald-100",
                      text: "text-slate-700",
                      button: "bg-slate-600 hover:bg-slate-700",
                      accent: "bg-slate-200",
                    },
                  };

                  const colorKey = (car.textColor || "blue") as keyof typeof colorMap;
                  const colors = colorMap[colorKey] || colorMap.blue;

                  return (
                    <div
                      key={car.name}
                      className={`rounded-2xl overflow-hidden border ${colors.bg} hover:shadow-xl transition`}
                    >
                      <div className={`grid lg:grid-cols-5 gap-0 items-stretch ${!isEven && "lg:[direction:rtl]"}`}>
                        {/* Car Image - Smaller */}
                        <div className={`h-40 lg:h-[300px] lg:col-span-2 flex items-stretch ${!isEven ? "lg:order-last" : ""}`}>
                          <img
                            src={car.image}
                            alt={car.name}
                            className="w-full h-full object-cover hover:scale-105 transition"
                          />
                        </div>

                        {/* Car Info - Compact */}
                        <div className="p-4 md:p-5 lg:col-span-3 space-y-3 flex flex-col justify-between">
                          <div>
                            <p className={`text-xs uppercase tracking-wide font-semibold mb-1.5 ${colors.text}`}>
                              {car.category}
                            </p>
                            <h3 className="text-lg md:text-xl lg:text-2xl font-serif font-bold text-foreground mb-2">
                              {car.name}
                            </h3>
                            <p className="text-xs md:text-sm text-muted-foreground mb-3 line-clamp-2">
                              {car.description}
                            </p>

                            {/* Quick Specs */}
                            <div className={`grid grid-cols-2 md:grid-cols-4 gap-2 mb-3 p-2 rounded-lg bg-white/60 backdrop-blur`}>
                              <div className="text-xs">
                                <p className="text-muted-foreground font-semibold text-[10px]">Acceleration</p>
                                <p className={`font-bold text-xs ${colors.text}`}>
                                  {car.specifications.acceleration}
                                </p>
                              </div>
                              <div className="text-xs">
                                <p className="text-muted-foreground font-semibold text-[10px]">Top Speed</p>
                                <p className={`font-bold text-xs ${colors.text}`}>
                                  {car.specifications.topSpeed}
                                </p>
                              </div>
                              <div className="text-xs">
                                <p className="text-muted-foreground font-semibold text-[10px]">Engine</p>
                                <p className={`font-bold text-xs ${colors.text}`}>
                                  {car.specifications.engine}
                                </p>
                              </div>
                              <div className="text-xs">
                                <p className="text-muted-foreground font-semibold text-[10px]">Seats</p>
                                <p className={`font-bold text-xs ${colors.text}`}>
                                  {car.specifications.seats}
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Price & CTA */}
                          <div className="flex items-center gap-2 md:gap-3">
                            <span className={`text-xl md:text-2xl font-bold ${colors.text}`}>
                              {car.price}
                            </span>
                            <Dialog>
                              <DialogTrigger asChild>
                                <button className={`flex-1 px-3 py-2 rounded-full text-sm md:text-base ${colors.button} text-white font-medium transition shadow-md`}>
                                  Book
                                </button>
                              </DialogTrigger>
                              <DialogContent>
                                <DialogHeader>
                                  <DialogTitle>Book {car.name}</DialogTitle>
                                </DialogHeader>
                                <LuxuryRideForm defaultCar={car.name} />
                              </DialogContent>
                            </Dialog>
                          </div>

                          {/* Best For Badge */}
                          <div className={`rounded-lg ${colors.accent} p-2 border-2 border-current border-opacity-20`}>
                            <p className={`text-xs font-semibold ${colors.text}`}>
                              🌟 {car.bestFor}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Expandable Details */}
                      <details className="group">
                        <summary className={`cursor-pointer px-4 md:px-6 py-3 ${colors.accent} border-t border-current border-opacity-20 hover:opacity-80 transition font-semibold text-sm text-foreground flex items-center justify-between`}>
                          <span>View All Features & Specifications</span>
                          <span className="group-open:rotate-180 transition">▼</span>
                        </summary>
                        <div className="p-4 md:p-6 space-y-4 bg-white/50">
                          <div>
                            <h4 className="font-semibold text-foreground mb-3 text-sm">Premium Features</h4>
                            <div className="grid md:grid-cols-2 gap-2">
                              {car.features.map((feature) => (
                                <div key={feature} className="flex gap-2 text-xs text-muted-foreground">
                                  <span className={`${colors.text} font-bold`}>✓</span>
                                  <span>{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="border-t pt-4">
                            <h4 className="font-semibold text-foreground mb-3 text-sm">Technical Specifications</h4>
                            <div className="grid md:grid-cols-3 gap-3">
                              <div className={`p-3 rounded-lg ${colors.accent}`}>
                                <p className="text-xs text-muted-foreground uppercase font-semibold">Transmission</p>
                                <p className="font-semibold text-foreground text-sm">
                                  {car.specifications.transmission}
                                </p>
                              </div>
                              <div className={`p-3 rounded-lg ${colors.accent}`}>
                                <p className="text-xs text-muted-foreground uppercase font-semibold">Fuel Efficiency</p>
                                <p className="font-semibold text-foreground text-sm">
                                  {car.specifications.fuelEfficiency}
                                </p>
                              </div>
                              <div className={`p-3 rounded-lg ${colors.accent}`}>
                                <p className="text-xs text-muted-foreground uppercase font-semibold">Seats</p>
                                <p className="font-semibold text-foreground text-sm">
                                  {car.specifications.seats}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </details>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* What's Included */}
            <section className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4 rounded-2xl border bg-card p-4 md:p-6">
                <h2 className="text-lg md:text-xl font-semibold text-foreground">What's Included</h2>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary">✓</span>
                    <span><strong>8 Hours or 80 KM:</strong> Generous time to explore at your own pace</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">✓</span>
                    <span><strong>Professional Chauffeur:</strong> Courteous, experienced, and trained drivers</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">✓</span>
                    <span><strong>Fuel & Toll:</strong> All fuel and tolls included in the package</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">✓</span>
                    <span><strong>Vehicle Condition:</strong> Meticulously maintained luxury vehicles</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">✓</span>
                    <span><strong>Complimentary Refreshments:</strong> Bottled water & light snacks</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">✓</span>
                    <span><strong>Flexible Routing:</strong> Customize your itinerary as you wish</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4 rounded-2xl border bg-card p-4 md:p-6">
                <h2 className="text-lg md:text-xl font-semibold text-foreground">Pricing & Extras</h2>
                <div className="space-y-3">
                  <div className="rounded-lg bg-muted p-3">
                    <p className="text-xs text-muted-foreground uppercase mb-1">Extra Distance</p>
                    <p className="font-semibold text-foreground">
                      ₹{rideData.extras.extraKmFrom} per additional km
                    </p>
                  </div>
                  <div className="rounded-lg bg-muted p-3">
                    <p className="text-xs text-muted-foreground uppercase mb-1">Extra Hours</p>
                    <p className="font-semibold text-foreground">
                      ₹{rideData.extras.extraHourFrom} per additional hour
                    </p>
                  </div>
                  <div className="rounded-lg bg-primary/10 p-3 border border-primary/20">
                    <p className="text-xs text-muted-foreground uppercase font-semibold mb-1">
                      Early Bird Offer
                    </p>
                    <p className="text-sm font-semibold text-primary">Book now & get 10% off on first ride</p>
                  </div>
                  <p className="text-xs text-muted-foreground italic">
                    *Prices are indicative and subject to change based on peak season, vehicle selection, and availability.
                  </p>
                </div>
              </div>
            </section>

            {/* Occasions Section */}
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground text-center">
                Perfect For Every Occasion
              </h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {rideData.occasions.map((occasion) => (
                  <div key={occasion.name} className="rounded-2xl border bg-card p-5 space-y-3 hover:shadow-md transition">
                    <h3 className="font-semibold text-foreground text-lg">{occasion.name}</h3>
                    <p className="text-sm text-muted-foreground">{occasion.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {occasion.cars.map((carName) => (
                        <span
                          key={carName}
                          className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                        >
                          {carName}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Why Choose */}
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                Why Guests Love Our Service
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-3 rounded-2xl border bg-card p-4 md:p-6">
                  <h3 className="text-lg font-semibold text-foreground">Professional & Reliable</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Courteous chauffeurs with impeccable service standards</li>
                    <li>• Well-maintained, spotlessly clean vehicles</li>
                    <li>• Prompt, professional communication and confirmations</li>
                    <li>• Defensive driving trained chauffeurs</li>
                    <li>• 24/7 customer support for any assistance</li>
                  </ul>
                </div>

                <div className="space-y-3 rounded-2xl border bg-card p-4 md:p-6">
                  <h3 className="text-lg font-semibold text-foreground">Memorable Experiences</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Perfect for proposals, anniversaries & special dates</li>
                    <li>• Romantic ambiance with premium comfort</li>
                    <li>• Focus on the moment while we handle logistics</li>
                    <li>• Flexible itineraries tailored to your preferences</li>
                    <li>• Completely private, discreet experience</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="space-y-4">
              <div className="text-center space-y-2 mb-6">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                  Frequently Asked Questions
                </h2>
                <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
                  Everything you need to know about our luxury car rental and chauffeur service
                </p>
              </div>
              <div className="space-y-3 max-w-3xl mx-auto">
                {[
                  {
                    question: "How do I book a luxury car ride?",
                    answer: "Booking is simple! Click on 'Book Your Ride Now' or select any car from our fleet and fill in the booking form with your preferred date, time, pickup location, and any special requests. Our team will confirm within 2 hours."
                  },
                  {
                    question: "What is included in the package?",
                    answer: "Our luxury ride package includes: professional chauffeur, well-maintained premium vehicle, basic refreshments, real-time GPS tracking, airport assistance, and 24/7 customer support. Fuel and tolls are included in the per-kilometer pricing."
                  },
                  {
                    question: "Are there any hidden charges?",
                    answer: "No hidden charges! We believe in transparent pricing. The quoted price includes vehicle rental, chauffeur service, and tolls. Only extra kilometers beyond the package limit and late cancellations (within 24 hours) may have additional charges."
                  },
                  {
                    question: "Can I hire a car for a multi-day trip?",
                    answer: "Absolutely! We offer flexible daily, weekly, and monthly packages. For day trips, you get hourly packages starting from 6 hours to full-day options. Contact our team for customized multi-day trip arrangements with attractive discounts."
                  },
                  {
                    question: "What happens if I need to cancel or reschedule?",
                    answer: "Cancellations made 48 hours before booking are completely free. For cancellations between 24-48 hours, 50% of the booking amount is charged. Same-day cancellations are charged 100%. Rescheduling is free if done 48 hours in advance."
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
            </section>

            {/* CTA Section */}
            <section className="space-y-4 rounded-2xl border bg-gradient-to-r from-primary/10 to-primary/5 p-6 md:p-8 text-center">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                Ready for Your Luxury Experience?
              </h2>
              <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
                Book your premium chauffeur-driven luxury car ride today.
                Fast confirmation, transparent pricing, and unforgettable service.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row justify-center">
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="inline-flex justify-center items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium shadow-sm hover:bg-primary/90 transition">
                      Book Your Ride Now
                    </button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Book Your Luxury Ride</DialogTitle>
                    </DialogHeader>
                    <LuxuryRideForm />
                  </DialogContent>
                </Dialog>
                <button className="inline-flex justify-center items-center gap-2 rounded-full border border-input bg-background px-6 py-3 text-sm font-medium hover:bg-accent transition">
                  Chat with Our Team
                </button>
              </div>
            </section>
          </div>
        </section>
      </main>
      <Footer pageType="ride" />
      <MobileFloatingButtons />
    </div>
  );
};

export default LuxuryRide;

const LuxuryRideForm = ({ defaultCar }: { defaultCar?: string }) => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [car, setCar] = useState(defaultCar || rideData.premiumCarsInIndia[0]);
  const [pickupLocation, setPickupLocation] = useState("");
  const [occasion, setOccasion] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await submitQuery('ride', {
        name,
        mobile,
        car,
        pickup_location: pickupLocation,
        occasion,
        message,
      });

      toast.success(
        "Thank you for your booking request! We'll confirm your reservation and contact you shortly with final details and pricing."
      );
      // Reset form or close dialog if needed
      setName("");
      setMobile("");
      setPickupLocation("");
      setMessage("");
    } catch (error) {
      toast.error("Failed to submit request. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-1">
        <label className="text-sm font-medium text-foreground">Full Name *</label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
          placeholder="Enter your full name"
        />
      </div>
      <div className="space-y-1">
        <label className="text-sm font-medium text-foreground">Mobile Number *</label>
        <input
          type="tel"
          required
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
          placeholder="Enter your mobile number"
        />
      </div>
      <div className="space-y-1">
        <label className="text-sm font-medium text-foreground">Choose Car *</label>
        <select
          value={car}
          onChange={(e) => setCar(e.target.value)}
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
        >
          {rideData.premiumCarsInIndia.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
      <div className="space-y-1">
        <label className="text-sm font-medium text-foreground">Pickup Location *</label>
        <input
          type="text"
          required
          value={pickupLocation}
          onChange={(e) => setPickupLocation(e.target.value)}
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
          placeholder="Enter pickup location (address or landmark)"
        />
      </div>
      <div className="space-y-1">
        <label className="text-sm font-medium text-foreground">Occasion</label>
        <select
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="">Select an occasion (optional)</option>
          <option value="Romantic Date">Romantic Date</option>
          <option value="Proposal">Proposal</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Birthday">Birthday</option>
          <option value="Wedding">Wedding</option>
          <option value="Business Meeting">Business Meeting</option>
          <option value="Airport Transfer">Airport Transfer</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="space-y-1">
        <label className="text-sm font-medium text-foreground">Message (Optional)</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
          placeholder="Any special requests or preferences..."
          rows={3}
        />
      </div>
      <button
        type="submit"
        className="w-full inline-flex justify-center items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-medium shadow-sm hover:bg-primary/90 transition"
      >
        Submit Booking Request
      </button>
      <p className="text-xs text-muted-foreground text-center">
        Confirmation will be sent to your phone within 30 minutes.
        We'll provide transparent pricing and final itinerary details.
      </p>
    </form>
  );
};


