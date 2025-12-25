import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
    {
        name: "Sarah Jenkins",
        location: "London, UK",
        comment: "The Dubai desert safari was absolutely magical! Havenoras arranged everything perfectly. The sunset views and the private dinner were highlights of our trip.",
        rating: 5,
        initials: "SJ"
    },
    {
        name: "Rajesh Kumar",
        location: "Mumbai, India",
        comment: "Our family trip to Singapore was seamless thanks to the team. The itinerary was well-balanced for both kids and adults. Highly featured and recommended!",
        rating: 5,
        initials: "RK"
    },
    {
        name: "Emily Chen",
        location: "New York, USA",
        comment: "Thailand's beaches are stunning, but the service from Havenoras made it exceptional. From airport transfers to the best local guides, everything was top-notch.",
        rating: 5,
        initials: "EC"
    },
    {
        name: "Michael Brown",
        location: "Sydney, Australia",
        comment: "A truly premium experience in Switzerland. The hotels were exquisite and the logistics were flawless. I've never felt more relaxed on a holiday.",
        rating: 5,
        initials: "MB"
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
                        Real stories from travelers who have experienced the world with Havenoras
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
                                        <p className="text-xs text-muted-foreground">{testimonial.location}</p>
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
