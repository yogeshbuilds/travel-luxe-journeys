import { Plane, Car, Sparkles, Users, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export type PageType = "home" | "travel" | "ride" | "spa" | "meetup";

interface FooterProps {
  pageType?: PageType;
}

// Page-specific content configurations
const pageContent: Record<PageType, {
  title: string;
  description: string;
  icon: React.ReactNode;
  quickLinks: Array<{ label: string; href: string; isExternal?: boolean }>;
  services: Array<{ label: string; href: string }>;
}> = {
  home: {
    title: "Havenoras",
    description: "Your gateway to luxury experiences - travel, rides, spa, and exclusive celebrity meetups.",
    icon: <Plane className="h-5 w-5 md:h-6 md:w-6" />,
    quickLinks: [
      { label: "Home", href: "/" },
      { label: "Luxury Travel", href: "/travel" },
      { label: "Luxury Rides", href: "/luxury-ride" },
      { label: "Russian Spa", href: "/russian-spa" },
      { label: "Celebrity Meetup", href: "/celebrity-meetup" },
    ],
    services: [
      { label: "International Tours", href: "/travel" },
      { label: "Chauffeur Services", href: "/luxury-ride" },
      { label: "Wellness & Spa", href: "/russian-spa" },
      { label: "VIP Experiences", href: "/celebrity-meetup" },
    ],
  },
  travel: {
    title: "Luxury Travel",
    description: "Explore the world's most exotic destinations with our curated luxury travel packages.",
    icon: <Plane className="h-5 w-5 md:h-6 md:w-6" />,
    quickLinks: [
      { label: "Home", href: "/" },
      { label: "All Destinations", href: "/travel" },
      { label: "Dubai Tours", href: "/destination/dubai" },
      { label: "Thailand Packages", href: "/destination/thailand" },
      { label: "Singapore Getaways", href: "/destination/singapore" },
    ],
    services: [
      { label: "Dubai", href: "/destination/dubai" },
      { label: "USA", href: "/destination/usa" },
      { label: "Thailand", href: "/destination/thailand" },
      { label: "Singapore", href: "/destination/singapore" },
      { label: "Switzerland", href: "/destination/switzerland" },
    ],
  },
  ride: {
    title: "Luxury Rides",
    description: "Experience premium chauffeur services with our fleet of luxury vehicles for any occasion.",
    icon: <Car className="h-5 w-5 md:h-6 md:w-6" />,
    quickLinks: [
      { label: "Home", href: "/" },
      { label: "Book a Ride", href: "/luxury-ride" },
      { label: "Wedding Cars", href: "/luxury-ride#wedding" },
      { label: "Corporate Travel", href: "/luxury-ride#corporate" },
      { label: "Airport Transfers", href: "/luxury-ride#airport" },
    ],
    services: [
      { label: "Mercedes S-Class", href: "/luxury-ride" },
      { label: "BMW 7 Series", href: "/luxury-ride" },
      { label: "Rolls Royce", href: "/luxury-ride" },
      { label: "Bentley", href: "/luxury-ride" },
    ],
  },
  spa: {
    title: "Russian Spa",
    description: "Indulge in authentic Russian spa treatments with our professional therapists for ultimate relaxation.",
    icon: <Sparkles className="h-5 w-5 md:h-6 md:w-6" />,
    quickLinks: [
      { label: "Home", href: "/" },
      { label: "Spa Services", href: "/russian-spa" },
      { label: "Book Appointment", href: "/russian-spa#booking" },
      { label: "Massage Therapy", href: "/russian-spa#massage" },
      { label: "Wellness Packages", href: "/russian-spa#packages" },
    ],
    services: [
      { label: "Full Body Massage", href: "/russian-spa" },
      { label: "Couples Spa", href: "/russian-spa" },
      { label: "Aromatherapy", href: "/russian-spa" },
      { label: "Deep Tissue", href: "/russian-spa" },
    ],
  },
  meetup: {
    title: "Celebrity Meetup",
    description: "Get exclusive access to meet your favorite celebrities and influencers through our VIP experiences.",
    icon: <Users className="h-5 w-5 md:h-6 md:w-6" />,
    quickLinks: [
      { label: "Home", href: "/" },
      { label: "Upcoming Events", href: "/celebrity-meetup" },
      { label: "Book Experience", href: "/celebrity-meetup#booking" },
      { label: "VIP Packages", href: "/celebrity-meetup#vip" },
      { label: "Past Events", href: "/celebrity-meetup#gallery" },
    ],
    services: [
      { label: "Meet & Greet", href: "/celebrity-meetup" },
      { label: "Private Dinner", href: "/celebrity-meetup" },
      { label: "Photo Sessions", href: "/celebrity-meetup" },
      { label: "Event Access", href: "/celebrity-meetup" },
    ],
  },
};

const Footer = ({ pageType = "home" }: FooterProps) => {
  const content = pageContent[pageType];

  return (
    <footer className="bg-primary text-primary-foreground py-6">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-6 md:gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              {content.icon}
              <span className="text-xl md:text-2xl font-serif font-bold">{content.title}</span>
            </div>
            <p className="text-sm md:text-base text-primary-foreground/80 mb-4">
              {content.description}
            </p>
            <div className="flex gap-3">
              <a href="#" className="hover:text-secondary transition-colors">
                <Facebook className="h-4 w-4 md:h-5 md:w-5" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Twitter className="h-4 w-4 md:h-5 md:w-5" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Instagram className="h-4 w-4 md:h-5 md:w-5" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Linkedin className="h-4 w-4 md:h-5 md:w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-base md:text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm md:text-base text-primary-foreground/80">
              {content.quickLinks.map((link, index) => (
                <li key={index}>
                  {link.isExternal ? (
                    <a href={link.href} className="hover:text-secondary transition-colors">
                      {link.label}
                    </a>
                  ) : (
                    <Link to={link.href} className="hover:text-secondary transition-colors">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-base md:text-lg mb-4">
              {pageType === "travel" ? "Destinations" : "Our Services"}
            </h4>
            <ul className="space-y-2 text-sm md:text-base text-primary-foreground/80">
              {content.services.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.href}
                    className="hover:text-secondary transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-base md:text-lg mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm md:text-base text-primary-foreground/80">
              <li>+91 8708522231</li>
              <li>havenoras@gmail.com</li>
              <li>Tower B, Flat - 908</li>
              <li>Discovery Park, Sector 80</li>
              <li>Faridabad, 121004</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm md:text-base text-primary-foreground/80 space-y-3">
          <p>&copy; 2025 Havenoras. All rights reserved.</p>
          <p className="text-xs md:text-sm text-primary-foreground/60">
            Powered by <span className="font-semibold">Amit Enterprises</span> | Office Address: Near Indian Oil Petrol Pump, Nandgaon, Mathura 281403
          </p>
          <p className="text-xs md:text-sm text-primary-foreground/60">
            Designed & Developed by{" "}
            <a
              href="https://www.linkedin.com/in/yogeshbuilds/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:text-secondary transition-colors underline underline-offset-2"
            >
              Yogesh Chaudhary
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
