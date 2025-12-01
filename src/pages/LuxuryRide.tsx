import { useState, FormEvent } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import luxuryCar from "@/assets/luxury-car.jpg";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import rideData from "@/data/luxuryRide.json";

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
              Surprise your partner or elevate any special day with a private, chauffeur-driven
              luxury car experience in Delhi NCR, with premium sedans and SUVs for unforgettable
              drives.
            </p>
          </div>
        </section>

        <section className="pt-6 pb-8 md:pt-10 md:pb-12">
          <div className="container mx-auto px-4 space-y-6">
            <header className="space-y-2 text-left md:text-center">
              <p className="inline-flex text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                Curated for Romantic Drives & Special Days
              </p>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-foreground">
                Luxury Car Ride in Premium Cars
              </h1>
              <p className="text-sm md:text-base text-muted-foreground max-w-2xl md:mx-auto">
                Surprise your partner or elevate any special day with a private luxury car
                experience in Delhi NCR. Enjoy a chauffeur-driven ride in premium sedans or SUVs
                with complete comfort, safety, and style.
              </p>
            </header>
            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg md:text-xl lg:text-2xl font-serif font-bold text-foreground">
                    Our Premium Range
                  </h2>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    A curated line-up of luxury sedans and SUVs available for your experience.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 overflow-x-auto pb-3 md:pb-4 scrollbar-hide">
                {rideData.premiumCars.map((car) => (
                  <div
                    key={car.name}
                    className="min-w-[180px] max-w-[200px] rounded-xl border bg-card overflow-hidden shadow-sm flex-shrink-0"
                  >
                    <div className="h-28 md:h-32 overflow-hidden">
                      <img
                        src={car.image || luxuryCar}
                        alt={car.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="px-3 py-2 md:px-4 md:py-3">
                      <p className="text-sm md:text-base font-medium text-foreground">{car.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            <section className="space-y-4">
              <div className="flex flex-wrap items-baseline justify-between gap-3 rounded-2xl border bg-card px-4 py-4 md:px-6">
                <div>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">
                    Starting at
                  </p>
                  <p className="text-2xl font-semibold text-primary">
                    ₹{rideData.startingPrice.toLocaleString("en-IN")}
                  </p>
                  <p className="text-xs text-muted-foreground">{rideData.startingLabel}</p>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="inline-flex justify-center items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-medium shadow-sm hover:bg-primary/90 transition">
                      Book Luxury Ride
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

            <section className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4 rounded-2xl border bg-card p-4 md:p-6">
                <h2 className="text-lg md:text-xl font-semibold">What&apos;s Included</h2>
                <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
                  <li>• Audi A6 / BMW 5 Series / Mercedes E-Class rental for 8 hours or 80 km*</li>
                  <li>• Option to upgrade to premium SUVs and Jaguar at additional cost</li>
                  <li>• Pick-up and drop-off from your home or any Delhi NCR location</li>
                  <li>• Neat, well-maintained luxury vehicle with professional chauffeur</li>
                  <li>• Comfortable, private experience tailored for dates, anniversaries, or special days</li>
                </ul>
                <p className="text-xs text-muted-foreground">
                  *Garage to garage. Extra km and extra hours are charged additionally as per final
                  confirmation.
                </p>
              </div>

              <div className="space-y-4 rounded-2xl border bg-card p-4 md:p-6">
                <h2 className="text-lg md:text-xl font-semibold">Car Categories & Indicative Pricing</h2>
                <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
                  {rideData.carCategories.map((cat) => (
                    <li key={cat.label}>
                      • {cat.label} – {cat.note}*
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-muted-foreground">
                  *Indicative pricing only and may vary based on date, car selection, and availability.
                </p>
              </div>
            </section>

            <section className="grid gap-6 md:grid-cols-2">
              <div className="space-y-3 rounded-2xl border bg-card p-4 md:p-6">
                <h2 className="text-lg md:text-xl font-semibold">Why Guests Love This</h2>
                <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
                  <li>• Trusted, organised service with trained chauffeurs and sanitised cars</li>
                  <li>• Perfect for proposals, anniversaries, birthdays, and surprise date nights</li>
                  <li>• Secure online payment with clear communication on timing and route</li>
                  <li>• Focus on the moment while we handle the logistics, timing, and coordination</li>
                </ul>
              </div>

              <div className="space-y-3 rounded-2xl border bg-card p-4 md:p-6">
                <h2 className="text-lg md:text-xl font-semibold">Good to Know</h2>
                <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
                  <li>• All chauffeurs are trained in defensive driving and follow safety protocols.</li>
                  <li>• Pricing is for local Delhi NCR usage only; outstation and wedding bookings differ.</li>
                  <li>
                    • Extra km may be charged from approx. ₹{rideData.extras.extraKmFrom}/km and
                    extra hours from approx. ₹{rideData.extras.extraHourFrom}/hour.
                  </li>
                  <li>• Peak dates like Valentine&apos;s or special events may have special packages and policies.</li>
                </ul>
              </div>
            </section>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LuxuryRide;

const LuxuryRideForm = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [car, setCar] = useState(rideData.premiumCarsInIndia[0]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Luxury ride booking request", { name, mobile, car });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-1">
        <label className="text-sm font-medium text-foreground">Name</label>
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
        <label className="text-sm font-medium text-foreground">Mobile</label>
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
        <label className="text-sm font-medium text-foreground">Choose Car</label>
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
      <button
        type="submit"
        className="w-full inline-flex justify-center items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-medium shadow-sm hover:bg-primary/90 transition"
      >
        Submit Request
      </button>
    </form>
  );
};


