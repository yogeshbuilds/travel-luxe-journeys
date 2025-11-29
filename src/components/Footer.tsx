import { Plane, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Plane className="h-6 w-6" />
              <span className="text-2xl font-serif font-bold">TravelLuxe</span>
            </div>
            <p className="text-primary-foreground/80 mb-4">
              Your gateway to luxury travel experiences around the world.
            </p>
            <div className="flex gap-3">
              <a href="#" className="hover:text-secondary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <Link to="/" className="hover:text-secondary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Destinations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Destinations</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <Link
                  to="/destination/dubai"
                  className="hover:text-secondary transition-colors"
                >
                  Dubai
                </Link>
              </li>
              <li>
                <Link to="/destination/usa" className="hover:text-secondary transition-colors">
                  USA
                </Link>
              </li>
              <li>
                <Link
                  to="/destination/thailand"
                  className="hover:text-secondary transition-colors"
                >
                  Thailand
                </Link>
              </li>
              <li>
                <Link
                  to="/destination/singapore"
                  className="hover:text-secondary transition-colors"
                >
                  Singapore
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>+1 (800) 123-4567</li>
              <li>support@travelluxe.com</li>
              <li>123 Luxury Avenue</li>
              <li>New York, NY 10001</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/80">
          <p>&copy; 2025 TravelLuxe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
