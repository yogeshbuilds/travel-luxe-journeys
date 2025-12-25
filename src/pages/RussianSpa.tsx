import { useState, FormEvent } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import luxurySpa from "@/assets/luxury-spa.jpg";
// Spa Assets Images
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ChevronDown, MessageCircle } from "lucide-react";
import spaData from "@/data/spa.json";

// Package images mapping
const packageImages: Record<string, string> = {
  silver: "/assets/spa-assets/spa1.jpg",
  golden: "/assets/spa-assets/spa2.jpg",
  diamond: "/assets/spa-assets/spa3.png",
};

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
              Premium Wellness &amp; Relaxation
            </p>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-serif font-bold text-background text-center">
              Luxury Russian Spa Experience
            </h1>
            <p className="mt-2 md:mt-3 text-xs md:text-sm lg:text-base text-background/90 max-w-2xl text-center">
              Authentic Russian, Thai, and International massage therapies at 12+ premium outlets across Delhi NCR
            </p>
          </div>
        </section>

        <section className="pt-6 pb-8 md:pt-10 md:pb-12">
          <div className="container mx-auto px-4 space-y-8">
            {/* About Section */}
            <section className="space-y-4">
              <header className="space-y-2">
                <p className="inline-flex text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                  About Our Russian Spa
                </p>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-foreground">
                  Experience Authentic Russian Spa Therapy
                </h1>
                <p className="text-sm md:text-base text-muted-foreground max-w-3xl">
                  Welcome to Delhi's premier Russian Spa experience with 12+ premium outlets across Mahipalpur, Aerocity, Dwarka, and South Delhi.
                  Our expert therapists combine authentic Russian massage techniques with international wellness practices to deliver transformative
                  spa experiences.
                </p>
              </header>
            </section>

            {/* Premium Packages */}
            <section className="space-y-4">
              <header className="space-y-2">
                <p className="inline-flex text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                  Tailored Spa Packages
                </p>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                  Choose Your Perfect Spa Experience
                </h2>
                <p className="text-sm md:text-base text-muted-foreground">
                  From quick rejuvenation sessions to complete spa retreats—all designed for ultimate relaxation
                </p>
              </header>

              <div className="grid gap-4 md:grid-cols-3">
                {spaData.packages.map((pkg) => (
                  <div
                    key={pkg.id}
                    className="rounded-2xl border bg-card overflow-hidden flex flex-col hover:shadow-lg transition"
                  >
                    <div className="relative h-40 md:h-48">
                      <img
                        src={packageImages[pkg.id] || luxurySpa}
                        alt={`${pkg.name}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <p className="text-background text-xs md:text-sm font-semibold">{pkg.duration} Session</p>
                      </div>
                    </div>
                    <div className="flex-1 px-4 py-4 md:px-5 md:py-5 space-y-3 flex flex-col">
                      <div>
                        <h2 className="text-lg md:text-xl font-semibold text-foreground">{pkg.name}</h2>
                        <p className="text-xs uppercase tracking-wide text-primary mt-1">{pkg.tagline}</p>
                      </div>
                      <p className="text-sm text-muted-foreground flex-grow">{pkg.description}</p>
                      <div className="space-y-2 border-t pt-3">
                        <p className="text-xs text-muted-foreground"><span className="font-semibold">Therapist:</span> {pkg.therapists}</p>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          {pkg.amenities.slice(0, 3).map((amenity) => (
                            <li key={amenity}>✓ {amenity}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="px-4 pb-4 md:px-5 md:pb-5 border-t space-y-3">
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Indicative Pricing</p>
                        <p className="text-lg font-semibold text-primary">{pkg.priceRange}</p>
                      </div>
                      <a
                        href="https://wa.me/918813887813?text=Hi, I'm interested in the ${pkg.name} package. Please provide more details."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-full justify-center items-center gap-2 rounded-full bg-green-500 hover:bg-green-600 text-white px-4 py-2 text-sm font-medium shadow-sm transition"
                      >
                        <MessageCircle className="h-4 w-4" />
                        Chat on WhatsApp
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="space-y-4">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-serif font-bold text-foreground">
                Why Choose Our Russian Spa
              </h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {spaData.whyChooseUs.map((item) => (
                  <div key={item.title} className="rounded-2xl border bg-card p-4 md:p-6 space-y-3 hover:shadow-md transition">
                    <div className="text-3xl">{item.icon}</div>
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </section>


            {/* Treatments Section */}
            <section className="space-y-4 rounded-3xl bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-8 md:p-12 border border-purple-100">
              <header className="space-y-2">
                <p className="inline-flex text-xs font-medium px-2.5 py-1 rounded-full bg-purple-600/10 text-purple-600">
                  Specialized Therapies
                </p>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                  Our Premium Massage & Treatment Options
                </h2>
              </header>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {spaData.treatments.map((treatment, idx) => {
                  const bgGradients = [
                    "bg-gradient-to-br from-blue-100 to-blue-50",
                    "bg-gradient-to-br from-rose-100 to-rose-50",
                    "bg-gradient-to-br from-amber-100 to-amber-50",
                    "bg-gradient-to-br from-green-100 to-green-50",
                    "bg-gradient-to-br from-purple-100 to-purple-50",
                    "bg-gradient-to-br from-orange-100 to-orange-50",
                  ];
                  const borderColors = [
                    "border-blue-200",
                    "border-rose-200",
                    "border-amber-200",
                    "border-green-200",
                    "border-purple-200",
                    "border-orange-200",
                  ];
                  return (
                    <div
                      key={treatment.id}
                      className={`rounded-2xl border ${bgGradients[idx % 6]} ${borderColors[idx % 6]} p-6 space-y-3 hover:shadow-lg hover:scale-105 transition-all duration-300`}
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-4xl">{treatment.icon}</span>
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground text-lg">{treatment.name}</h3>
                          <p className="text-xs font-medium text-purple-600 mt-1">⏱️ {treatment.duration}</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-700 font-medium">{treatment.description}</p>
                      <div className="text-xs space-y-2 bg-white/60 rounded-lg p-3 border border-white/80">
                        <p className="font-bold text-gray-800">Key Benefits:</p>
                        <ul className="space-y-1">
                          {treatment.benefits.map((benefit) => (
                            <li key={benefit} className="text-gray-700 flex gap-2">
                              <span>✨</span>
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Our Services Offerings */}
            <section className="space-y-4">
              <header className="space-y-2">
                <p className="inline-flex text-xs font-medium px-2.5 py-1 rounded-full bg-purple-600/10 text-purple-600">
                  What We Provide
                </p>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                  Diverse Spa Services & Specialties
                </h2>
              </header>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {spaData.services.map((service) => (
                  <div
                    key={service.id}
                    className="rounded-2xl overflow-hidden border bg-white hover:shadow-lg transition group"
                  >
                    {/* Image */}
                    <div className="relative h-48 bg-gradient-to-br from-purple-100 to-pink-100 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>
                    {/* Content */}
                    <div className="p-5 space-y-3">
                      <h3 className="font-semibold text-lg text-foreground">{service.name}</h3>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                      <div className="rounded-lg bg-purple-50 p-3 border border-purple-100">
                        <p className="text-xs font-semibold text-purple-700">✨ {service.highlight}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Therapist Types */}
            <section className="space-y-4">
              <header className="space-y-2">
                <p className="inline-flex text-xs font-medium px-2.5 py-1 rounded-full bg-rose-600/10 text-rose-600">
                  Our Expert Team
                </p>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                  Certified International Therapists
                </h2>
                <p className="text-sm text-muted-foreground">
                  Choose from Russian, Indian, or International therapists—all certified, trained, and dedicated to your relaxation
                </p>
              </header>

              <div className="grid gap-4 md:grid-cols-3">
                {spaData.therapists.map((therapist) => (
                  <div
                    key={therapist.type}
                    className="rounded-2xl border overflow-hidden bg-white hover:shadow-lg transition flex flex-col"
                  >
                    <div className="relative w-full aspect-square bg-gray-200 overflow-hidden">
                      <img
                        src={therapist.image}
                        alt={therapist.type}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="p-6 space-y-4 flex-1 flex flex-col">
                      <div className="text-5xl">{therapist.icon}</div>
                      <h3 className="text-xl font-semibold text-foreground">{therapist.type}</h3>
                      <p className="text-sm text-muted-foreground flex-1">{therapist.description}</p>
                      <div className="space-y-2 border-t pt-4">
                        <p className="text-xs font-semibold text-foreground uppercase">Expertise:</p>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          {therapist.expertise.map((exp) => (
                            <li key={exp}>✓ {exp}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Statistics Section */}
            <section className="rounded-2xl bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 border border-purple-200 p-8 md:p-12">
              <div className="grid gap-8 md:grid-cols-4 text-center">
                <div className="space-y-2">
                  <p className="text-4xl md:text-5xl font-bold text-purple-600">
                    {spaData.statistics.yearsExperience}+
                  </p>
                  <p className="text-sm md:text-base text-muted-foreground">Years Experience</p>
                </div>
                <div className="space-y-2">
                  <p className="text-4xl md:text-5xl font-bold text-rose-600">
                    {spaData.statistics.branches}+
                  </p>
                  <p className="text-sm md:text-base text-muted-foreground">Spa Outlets</p>
                </div>
                <div className="space-y-2">
                  <p className="text-4xl md:text-5xl font-bold text-pink-600">
                    {spaData.statistics.treatmentTypes}+
                  </p>
                  <p className="text-sm md:text-base text-muted-foreground">Treatment Types</p>
                </div>
                <div className="space-y-2">
                  <p className="text-4xl md:text-5xl font-bold text-indigo-600">
                    {spaData.statistics.happyClients.toLocaleString()}+
                  </p>
                  <p className="text-sm md:text-base text-muted-foreground">Happy Clients</p>
                </div>
              </div>
            </section>

            {/* Benefits Section */}
            <section className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4 rounded-2xl border bg-card p-4 md:p-6">
                <h2 className="text-lg md:text-xl font-semibold text-foreground">Health & Wellness Benefits</h2>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary">✓</span>
                    <span><strong>Stress Relief:</strong> Regular massage reduces cortisol levels and promotes mental clarity</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">✓</span>
                    <span><strong>Improved Circulation:</strong> Therapy techniques enhance blood flow and oxygen delivery</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">✓</span>
                    <span><strong>Pain Management:</strong> Deep tissue work relieves chronic pain and muscle tension</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">✓</span>
                    <span><strong>Better Sleep:</strong> Spa therapies promote relaxation and improved sleep quality</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">✓</span>
                    <span><strong>Skin Health:</strong> Detoxification and aromatherapy improve skin tone and texture</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">✓</span>
                    <span><strong>Immune Boost:</strong> Regular massage strengthens immune system function</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4 rounded-2xl border bg-card p-4 md:p-6">
                <h2 className="text-lg md:text-xl font-semibold text-foreground">Our Service Standards</h2>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary">✓</span>
                    <span><strong>Professional Therapists:</strong> Certified Russian, Thai, Indian, Uzbek & international therapists</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">✓</span>
                    <span><strong>Hygiene Excellence:</strong> Highest cleanliness standards with daily sanitization</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">✓</span>
                    <span><strong>Complete Privacy:</strong> Individual treatment rooms with personal space and comfort</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">✓</span>
                    <span><strong>Premium Amenities:</strong> Steam, Sauna, Jacuzzi bath, and relaxation lounges</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">✓</span>
                    <span><strong>24/7 Support:</strong> Round-the-clock customer care for bookings and assistance</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">✓</span>
                    <span><strong>Home & Hotel Spa:</strong> Services available at your location across Delhi NCR</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Testimonials */}
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground text-center">
                What Our Guests Say
              </h2>
              <div className="grid gap-4 md:grid-cols-3">
                {spaData.testimonials.map((testimonial) => (
                  <div key={testimonial.name} className="rounded-2xl border bg-card p-5 space-y-3 hover:shadow-md transition">
                    <div className="flex items-center gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-500">★</span>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground italic">"{testimonial.feedback}"</p>
                    <div className="border-t pt-3">
                      <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.title} • {testimonial.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ Section */}
            <section className="space-y-4">
              <div className="text-center space-y-2 mb-6">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                  Frequently Asked Questions
                </h2>
                <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
                  Find answers to common questions about our spa services, treatments, and bookings
                </p>
              </div>
              <div className="space-y-3 max-w-3xl mx-auto">
                {[
                  {
                    question: "What types of massages do you offer?",
                    answer: "We offer Russian, Indian, Thai, and International massage therapies. Our therapists are trained in various techniques including relaxation massage, deep tissue, Swedish massage, Ayurvedic massage, Thai stretching, and hot stone therapy."
                  },
                  {
                    question: "Are your therapists certified and experienced?",
                    answer: "Yes, all our therapists are professionally trained, certified, and have years of experience. We employ Russian specialists, Indian Ayurvedic therapists, and international wellness experts. All staff undergo regular training updates."
                  },
                  {
                    question: "What is your cancellation policy?",
                    answer: "Cancellations made 24 hours before your appointment are free. Cancellations within 24 hours will be charged 50% of the booking amount. No-shows will be charged the full amount. Rescheduling is available without penalty with 24-hour notice."
                  },
                  {
                    question: "Do you offer services for first-time visitors?",
                    answer: "Absolutely! First-time visitors receive a special introductory discount of 20% on their first booking. We also offer a free consultation to understand your preferences and any health concerns before treatment."
                  },
                  {
                    question: "Can I book services for groups or corporate events?",
                    answer: "Yes, we offer special group packages and corporate wellness programs. Contact our team for customized pricing and arrangements for team-building spa sessions at any of our 12+ premium outlets across Delhi NCR."
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
            <section className="space-y-4 rounded-2xl border bg-gradient-to-r from-green-50 to-emerald-50 p-6 md:p-8 text-center border-green-200">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                Ready to Rejuvenate?
              </h2>
              <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
                Chat with us on WhatsApp to book your spa session today and experience the ultimate relaxation.
                New customers get special discounts on first-time bookings!
              </p>
              <div className="flex justify-center">
                <a
                  href="https://wa.me/918813887813?text=Hi, I'm interested in booking a spa session. Please provide details about available packages and timings."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center gap-2 rounded-full bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-sm font-medium shadow-sm transition"
                >
                  <MessageCircle className="h-5 w-5" />
                  Chat on WhatsApp
                </a>
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

const SpaEnquiryForm = ({ defaultLocation }: { defaultLocation?: string }) => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [preferredPackage, setPreferredPackage] = useState("Silver");
  const [preferredLocation, setPreferredLocation] = useState(defaultLocation || "Mahipalpur");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Spa enquiry", { name, mobile, preferredPackage, preferredLocation, message });
    alert("Thank you! We'll contact you shortly with available slots and special offers.");
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
        <label className="text-sm font-medium text-foreground">Preferred Package *</label>
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
      <div className="space-y-1">
        <label className="text-sm font-medium text-foreground">Preferred Location</label>
        <select
          value={preferredLocation}
          onChange={(e) => setPreferredLocation(e.target.value)}
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="Mahipalpur">Mahipalpur</option>
          <option value="Aerocity">Aerocity</option>
          <option value="Dwarka">Dwarka</option>
          <option value="Lajpat Nagar">Lajpat Nagar</option>
          <option value="Karol Bagh">Karol Bagh</option>
          <option value="Home Service">Home Service</option>
        </select>
      </div>
      <div className="space-y-1">
        <label className="text-sm font-medium text-foreground">Message (Optional)</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
          placeholder="Tell us about your preferences..."
          rows={3}
        />
      </div>
      <button
        type="submit"
        className="w-full inline-flex justify-center items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-medium shadow-sm hover:bg-primary/90 transition"
      >
        Submit Enquiry
      </button>
      <p className="text-xs text-muted-foreground text-center">
        First-time visitors get special discounts! We'll contact you within 24 hours.
      </p>
    </form>
  );
};
