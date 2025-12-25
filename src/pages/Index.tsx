import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import CategoryNav from "@/components/CategoryNav";
import TrendingDestinations from "@/components/TrendingDestinations";
import OffersBanner from "@/components/OffersBanner";
import SpecialDeals from "@/components/SpecialDeals";
import AssistanceBanner from "@/components/AssistanceBanner";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import { ChevronDown } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroCarousel />
      <CategoryNav />
      <TrendingDestinations />
      <OffersBanner />
      <SpecialDeals />
      <AssistanceBanner />
      <WhyChooseUs />

      <Testimonials />

      {/* FAQ Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-2 mb-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our luxury travel experiences
            </p>
          </div>
          <div className="space-y-3 max-w-3xl mx-auto">
            {[
              {
                question: "How do I book a travel experience?",
                answer: "Booking is simple! Browse our destinations and packages, select your preferred option, and click 'Book Now' or 'Request Quote'. Our team will guide you through the booking process and answer any questions you have."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept credit cards, debit cards, bank transfers, and digital payment methods. A 25% advance payment is required to confirm your booking, with the remaining balance due 14 days before your travel date."
              },
              {
                question: "Can I make changes to my booking after confirmation?",
                answer: "Yes, we offer flexible modifications up to 30 days before your travel date at no additional cost. Changes within 30 days may incur modification fees depending on the nature of changes. Contact our team for assistance."
              },
              {
                question: "Do you offer travel insurance?",
                answer: "We strongly recommend travel insurance for all bookings. While we don't provide insurance, we can guide you through available options. Insurance covers cancellations, medical emergencies, and unexpected situations during your journey."
              },
              {
                question: "How can I contact customer support?",
                answer: "Our 24/7 customer support team is available via phone, email, WhatsApp, and live chat. For urgent issues during travel, call our emergency helpline. We're here to assist you before, during, and after your journey."
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
    </div>
  );
};

export default Index;
