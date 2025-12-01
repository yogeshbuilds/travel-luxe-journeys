import { Link, NavLink } from "react-router-dom";
import { Plane, Car, Sparkles, Star } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-background/95">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center">
          <div className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground h-8 w-8 md:h-9 md:w-9 shadow-sm">
            <span className="text-sm md:text-base font-semibold tracking-wide">TL</span>
          </div>
        </Link>

        {/* Icon menu - mobile first */}
        <div className="flex items-center gap-1.5 md:gap-3 rounded-full bg-muted/70 px-2.5 py-1.5 md:px-3 md:py-1.5 border border-border/60">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              [
                "inline-flex flex-col items-center justify-center px-3 md:px-3.5 py-1 rounded-full transition text-[10px] md:text-xs",
                isActive
                  ? "bg-background text-primary shadow-sm"
                  : "text-muted-foreground hover:text-foreground",
              ].join(" ")
            }
          >
            <Plane className="h-4 w-4 md:h-4.5 md:w-4.5 mb-0.5" />
            <span>Travel</span>
          </NavLink>

          <NavLink
            to="/luxury-ride"
            className={({ isActive }) =>
              [
                "inline-flex flex-col items-center justify-center px-3 md:px-3.5 py-1 rounded-full transition text-[10px] md:text-xs",
                isActive
                  ? "bg-background text-primary shadow-sm"
                  : "text-muted-foreground hover:text-foreground",
              ].join(" ")
            }
          >
            <Car className="h-4 w-4 md:h-4.5 md:w-4.5 mb-0.5" />
            <span>Luxury Ride</span>
          </NavLink>

          <NavLink
            to="/russian-spa"
            className={({ isActive }) =>
              [
                "inline-flex flex-col items-center justify-center px-3 md:px-3.5 py-1 rounded-full transition text-[10px] md:text-xs",
                isActive
                  ? "bg-background text-primary shadow-sm"
                  : "text-muted-foreground hover:text-foreground",
              ].join(" ")
            }
          >
            <Sparkles className="h-4 w-4 md:h-4.5 md:w-4.5 mb-0.5" />
            <span>Spa</span>
          </NavLink>

          <NavLink
            to="/celebrity-meetup"
            className={({ isActive }) =>
              [
                "inline-flex flex-col items-center justify-center px-3 md:px-3.5 py-1 rounded-full transition text-[10px] md:text-xs",
                isActive
                  ? "bg-background text-primary shadow-sm"
                  : "text-muted-foreground hover:text-foreground",
              ].join(" ")
            }
          >
            <Star className="h-4 w-4 md:h-4.5 md:w-4.5 mb-0.5" />
            <span>Meetup</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
