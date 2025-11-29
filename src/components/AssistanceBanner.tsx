import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const AssistanceBanner = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary to-primary/90 text-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-serif font-bold mb-6">
          Hassle-Free 24×7 On-Trip Assistance
        </h2>
        <p className="text-xl mb-8 opacity-90">
          We're here to help you every step of your journey
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="lg" className="gap-2">
            <Phone className="h-5 w-5" />
            +1 (800) 123-4567
          </Button>
          <Button variant="hero" size="lg" className="gap-2">
            <Mail className="h-5 w-5" />
            support@travelluxe.com
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AssistanceBanner;
