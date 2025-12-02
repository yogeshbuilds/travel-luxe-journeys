import { useState, FormEvent } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import luxurySpa from "@/assets/luxury-spa.jpg";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import spaData from "@/data/spa.json";

const RussianSpa = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        {/* Hero with image */}
        <section className="relative h-[260px] md:h-[380px] lg:h-[440px] overflow-hidden">
          <img
            src={luxurySpa}
            alt="Russian spa experience"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-background/95" />

          <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4">
            <p className="inline-flex text-[11px] md:text-xs font-medium px-2.5 py-1 rounded-full bg-primary/20 text-primary mb-2 md:mb-3">
              Wellness &amp; Self-care
            </p>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-serif font-bold text-background text-center">
              Russian Spa Retreat
            </h1>
            <p className="mt-2 md:mt-3 text-xs md:text-sm lg:text-base text-background/90 max-w-2xl text-center">
              Rejuvenate with curated full-body massage packages in Mahipalpur &amp; Aerocity,
              designed for deep relaxation and complete body wellness.
            </p>
          </div>
        </section>

        <section className="pt-6 pb-8 md:pt-10 md:pb-12">
          <div className="container mx-auto px-4 space-y-6">
            <header className="space-y-2 text-left md:text-center">
              <p className="inline-flex text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                Tailored Therapies for Complete Relaxation
              </p>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-foreground">
                Russian Spa Experience in Mahipalpur &amp; Aerocity
              </h1>
              <p className="text-sm md:text-base text-muted-foreground max-w-2xl md:mx-auto">
                Enjoy luxurious massages by trained therapists designed to ease tension, improve
                flexibility, and restore balance to both body and mind, with thoughtfully curated
                spa journeys in the Aerocity and Mahipalpur area.
              </p>
            </header>

            <section className="grid gap-4 md:grid-cols-3">
              {spaData.packages.map((pkg) => (
                <div
                  key={pkg.id}
                  className="rounded-2xl border bg-card overflow-hidden flex flex-col"
                >
                  <div className="relative h-32 md:h-40">
                    <img
                      src={pkg.image}
                      alt={`${pkg.name}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                  <div className="flex-1 px-4 py-4 md:px-5 md:py-4 space-y-2">
                    <h2 className="text-base md:text-lg font-semibold">{pkg.name}</h2>
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">
                      {pkg.tagline}
                    </p>
                    <p className="text-sm md:text-base text-muted-foreground">
                      {pkg.id === "silver" &&
                        "Ideal for a quick reset – a focused full-body or area-specific massage that works on muscle flexibility and deep relaxation."}
                      {pkg.id === "golden" &&
                        "Extended spa time with options like hot oil or hot stone massage to revitalise your skin, ease tension, and calm your mind."}
                      {pkg.id === "diamond" &&
                        "A complete spa journey with essential oils, steam, multiple massage techniques, and body wrap for a glowing, relaxed you."}
                    </p>
                  </div>
                  <div className="px-4 pb-4 md:px-5 md:pb-5 mt-auto flex items-center justify-between">
                    <div>
                      <p className="text-xs text-muted-foreground">Indicative Pricing</p>
                      <p className="text-base font-semibold">{pkg.priceRange}</p>
                    </div>
                  </div>
                </div>
              ))}
            </section>

            <section className="grid gap-6 md:grid-cols-2">
              <div className="space-y-3 rounded-2xl border bg-card p-4 md:p-6">
                <h2 className="text-lg md:text-xl font-semibold">Benefits You Can Expect</h2>
                <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
                  <li>• Relieve stress, anxiety, and mental fatigue after long work days.</li>
                  <li>• Improve blood circulation and support deep tissue repair.</li>
                  <li>• Ease joint pain and stiffness for better flexibility and posture.</li>
                  <li>• Support detoxification and healthier, more radiant skin.</li>
                  <li>• Treat massage as a part of your fitness and self-care routine.</li>
                </ul>
              </div>

              <div className="space-y-3 rounded-2xl border bg-card p-4 md:p-6">
                <h2 className="text-lg md:text-xl font-semibold">Popular Therapies</h2>
                <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
                  <li>• Full body massage by trained therapists</li>
                  <li>• Body-to-body style relaxation massages**</li>
                  <li>• Hot oil and hot stone therapies for deep muscle relief</li>
                  <li>• Swedish and deep tissue massages</li>
                </ul>
                <p className="text-xs text-muted-foreground">
                  **Service styles and inclusions may vary by partner spa and local regulations.
                </p>
              </div>
            </section>

            <section className="space-y-4 rounded-2xl border bg-card p-4 md:p-6">
              <h2 className="text-lg md:text-xl font-semibold">Plan Your Spa Experience</h2>
              <p className="text-sm md:text-base text-muted-foreground">
                Share your preferred date, time, and therapy type, and our concierge team will match
                you with a suitable partner spa near Aerocity or Mahipalpur. We coordinate the
                appointment, help you choose the right package, and keep your schedule and privacy
                in mind.
              </p>
              <div className="flex flex-col gap-2 sm:flex-row">
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="inline-flex justify-center items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-medium shadow-sm hover:bg-primary/90 transition">
                      Enquire for Spa Booking
                    </button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Spa Enquiry</DialogTitle>
                    </DialogHeader>
                    <SpaEnquiryForm />
                  </DialogContent>
                </Dialog>
                <button className="inline-flex justify-center items-center gap-2 rounded-full border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent transition">
                  Talk to Concierge
                </button>
              </div>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default RussianSpa;
 
const SpaEnquiryForm = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [preferredPackage, setPreferredPackage] = useState("Silver");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Spa enquiry", { name, mobile, preferredPackage });
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
        <label className="text-sm font-medium text-foreground">Preferred Package</label>
        <select
          value={preferredPackage}
          onChange={(e) => setPreferredPackage(e.target.value)}
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="Silver">Silver Full Body Massage Spa</option>
          <option value="Golden">Golden Full Body Massage Spa</option>
          <option value="Diamond">Diamond Full Body Massage Spa</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full inline-flex justify-center items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-medium shadow-sm hover:bg-primary/90 transition"
      >
        Submit Enquiry
      </button>
    </form>
  );
};
