import { Link, NavLink } from "react-router-dom";
import { Plane, Car, Sparkles, Star } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-neutral-900 border-b border-white/10 sticky top-0 z-50 backdrop-blur-sm bg-neutral-900/95 text-white">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center">
          <img
            src="/assets/logo/LOGO.png"
            alt="Havenoras"
            className="h-16 md:h-16 w-auto object-contain"
          />
        </Link>

        {/* Icon menu - mobile first */}
        <div className="flex items-center gap-1.5 md:gap-3 rounded-full bg-white/10 px-2.5 py-1.5 md:px-3 md:py-1.5 border border-white/10">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              [
                "inline-flex flex-col items-center justify-center px-3 md:px-3.5 py-1 rounded-full transition text-[10px] md:text-xs",
                isActive
                  ? "bg-white text-black shadow-sm"
                  : "text-gray-400 hover:text-white",
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
                  ? "bg-white text-black shadow-sm"
                  : "text-gray-400 hover:text-white",
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
                  ? "bg-white text-black shadow-sm"
                  : "text-gray-400 hover:text-white",
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
                  ? "bg-white text-black shadow-sm"
                  : "text-gray-400 hover:text-white",
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
