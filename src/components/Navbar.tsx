import { Link } from "react-router-dom";
import { Plane } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-background/95">
      <div className="container mx-auto px-4 py-4">
        <Link to="/" className="flex items-center gap-2">
          <Plane className="h-8 w-8 text-primary" />
          <h1 className="text-3xl font-serif font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            TravelLuxe
          </h1>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
