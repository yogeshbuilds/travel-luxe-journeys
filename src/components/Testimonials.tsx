import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
    {
        name: "Sarah Jenkins",
        location: "London, UK",
        comment: "The Dubai desert safari was absolutely magical! Havenoras arranged everything perfectly. The sunset views and the private dinner were highlights of our trip.",
        rating: 5,
        initials: "SJ",
        category: "Luxury Travel"
    },
    {
        name: "Ankita Verma",
        location: "New Delhi, India",
        comment: "Booked the Diamond Spa package for my anniversary. Every moment was special—from the welcome tea to the body wrap. Worth every rupee!",
        rating: 5,
        initials: "AV",
        category: "Russian Spa"
    },
    {
        name: "Rohan Mehta",
        location: "Delhi, India",
        comment: "Arriving at my wedding in the Rolls Royce Regent was a dream come true. The chauffeur was incredibly professional and the car was spotless.",
        rating: 5,
        initials: "RM",
        category: "Luxury Ride"
    },
    {
        name: "Vikram Malhotra",
        location: "Mumbai, India",
        comment: "We hired a celebrity for our store launch through this platform. The coordination was seamless and the impact on our brand visibility was instant.",
        rating: 5,
        initials: "VM",
        category: "Celebrity Meetup"
    }
];

const Testimonials = () => {
    return (
        <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="text-center space-y-4 mb-12">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                        What Our Customers Say
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Real stories from clients who have experienced our premium services
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index} className="border-none shadow-md bg-card hover:shadow-lg transition-all duration-300">
                            <CardContent className="p-6 flex flex-col h-full">
                                <Quote className="h-8 w-8 text-primary/20 mb-4" />

                                <div className="flex-grow space-y-4">
                                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed italic">
                                        "{testimonial.comment}"
                                    </p>
                                </div>

                                <div className="mt-6 pt-4 border-t border-border flex items-center gap-4">
                                    <Avatar className="h-10 w-10 border border-primary/10">
                                        <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${testimonial.initials}`} />
                                        <AvatarFallback className="bg-primary/10 text-primary">{testimonial.initials}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <h4 className="font-semibold text-sm text-foreground">{testimonial.name}</h4>
                                        <div className="flex flex-col">
                                            <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                                            <span className="text-[10px] font-medium text-primary mt-0.5 uppercase tracking-wide">
                                                {testimonial.category}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-2 flex gap-0.5">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" />
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
