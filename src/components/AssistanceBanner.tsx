import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const AssistanceBanner = () => {
  return (
    <section className="py-6">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-primary to-primary/90 text-background rounded-xl py-6 md:py-8 px-4 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold mb-4 md:mb-6">
            Hassle-Free 24×7 On-Trip Assistance
          </h2>
          <p className="text-base md:text-lg mb-6 md:mb-8 opacity-90">
            We're here to help you every step of your journey
          </p>

          <div className="flex flex-col md:flex-row gap-3 md:gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="gap-2 text-sm md:text-base w-full md:w-auto">
              <Phone className="h-4 w-4 md:h-5 md:w-5" />
              +1 (800) 123-4567
            </Button>
            <Button variant="hero" size="lg" className="gap-2 text-sm md:text-base w-full md:w-auto">
              <Mail className="h-4 w-4 md:h-5 md:w-5" />
              support@travelluxe.com
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssistanceBanner;
