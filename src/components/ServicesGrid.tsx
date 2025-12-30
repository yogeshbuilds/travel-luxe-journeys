
import { Link } from "react-router-dom";
import { ArrowRight, Plane, Car, Sparkles, Star } from "lucide-react";
import heroSwitzerland from "@/assets/hero-switzerland.jpg";
import luxuryCar from "@/assets/luxury-car.jpg";
import luxurySpa from "@/assets/luxury-spa.jpg";
import celebrityMeetup from "@/assets/celebrity-meetup.jpg";

const services = [
    {
        id: "travel",
        title: "Luxury Travel",
        description: "Curated packages to the world's most breathtaking destinations.",
        icon: Plane,
        image: heroSwitzerland,
        link: "/travel",
        color: "from-blue-500/80 to-indigo-600/80"
    },
    {
        id: "spa",
        title: "Russian Spa",
        description: "Rejuvenate with authentic therapies at our premium wellness centers.",
        icon: Sparkles,
        image: luxurySpa,
        link: "/russian-spa",
        color: "from-rose-500/80 to-purple-600/80"
    },
    {
        id: "ride",
        title: "Luxury Ride",
        description: "Arrive in style with our premium chauffeur-driven fleet.",
        icon: Car,
        image: luxuryCar,
        link: "/luxury-ride",
        color: "from-amber-500/80 to-orange-600/80"
    },
    {
        id: "meetup",
        title: "Celebrity Meetup",
        description: "Exclusive experiences and collaborations with your favorite stars.",
        icon: Star,
        image: celebrityMeetup,
        link: "/celebrity-meetup",
        color: "from-emerald-500/80 to-teal-600/80"
    }
];

const ServicesGrid = () => {
    return (
        <section className="py-12 md:py-16 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
                    <p className="inline-flex text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary uppercase tracking-wider">
                        Our Premium Services
                    </p>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                        Experience Excellence
                    </h2>
                    <p className="text-muted-foreground">
                        Explore our four pillars of luxury designed to create unforgettable moments.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service) => (
                        <Link
                            key={service.id}
                            to={service.link}
                            className="group relative h-[320px] rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-500"
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>

                            {/* Gradient Overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-60 group-hover:opacity-70 transition-opacity duration-300`} />

                            {/* Dark Gradient at bottom for text readability */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />

                            {/* Content */}
                            <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                                <div className="transform transition-transform duration-300 translate-y-2 group-hover:translate-y-0">
                                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl w-fit mb-4 text-white">
                                        <service.icon className="h-6 w-6" />
                                    </div>

                                    <h3 className="text-2xl font-bold mb-2 font-serif group-hover:text-white/90 transition-colors">
                                        {service.title}
                                    </h3>

                                    <p className="text-sm text-white/90 mb-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
                                        {service.description}
                                    </p>

                                    <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                                        <span>Explore</span>
                                        <ArrowRight className="h-4 w-4" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesGrid;
