
import { useRef } from "react";
import heroSwitzerland from "@/assets/hero-switzerland.jpg";
import luxuryCar from "@/assets/luxury-car.jpg";
import luxurySpa from "@/assets/luxury-spa.jpg";
import celebrityMeetup from "@/assets/celebrity-meetup.jpg";

const HomeHero = () => {
    // We can use a video background or a nice collage of images.
    // For now, let's use a high quality simple hero with a background slider or just a single impressive image.
    // Given the constraints/assets, let's use a slideshow of the 4 main assets.

    // Actually, let's just make it a static hero with a very premium feel using the Swiss image 
    // or a montage. Let's stick to a clean, impactful header.

    return (
        <section className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden flex items-center justify-center">
            {/* Background with overlay */}
            <div className="absolute inset-0">
                <img
                    src={heroSwitzerland}
                    alt="Luxury Lifestyle"
                    className="w-full h-full object-cover animate-ken-burns"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
            </div>

            <div className="relative z-10 container mx-auto px-4 text-center space-y-6">
                <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-xs md:text-sm font-medium tracking-wide">
                    WELCOME TO HAVENORAS
                </span>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight">
                    Beyond Premium <br />
                    <span className="text-secondary-foreground text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-400">
                        Lifestyle Experiences
                    </span>
                </h1>

                <p className="max-w-2xl mx-auto text-base md:text-xl text-white/80 font-light leading-relaxed">
                    Discover a world of curated luxury. From breathtaking travel destinations and exclusive celebrity meetups
                    to rejuvenating spa retreats and premium chauffeur services.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-white/90 transition shadow-lg hover:shadow-xl"
                    >
                        Explore Our Services
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HomeHero;
