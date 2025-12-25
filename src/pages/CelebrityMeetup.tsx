import { useState, FormEvent } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import celebrityMeetup from "@/assets/celebrity-meetup.jpg";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ChevronDown } from "lucide-react";
import meetupData from "@/data/meetup.json";

const CelebrityMeetup = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        {/* Hero with image */}
        <section className="relative h-[260px] md:h-[380px] lg:h-[440px] overflow-hidden">
          <img
            src={celebrityMeetup}
            alt="Celebrity meetup experience"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-background/95" />

          <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4">
            <p className="inline-flex text-[11px] md:text-xs font-medium px-2.5 py-1 rounded-full bg-primary/20 text-primary mb-2 md:mb-3">
              Celebrity Experiences
            </p>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-serif font-bold text-background text-center">
              Celebrity Meetups
            </h1>
            <p className="mt-2 md:mt-3 text-xs md:text-sm lg:text-base text-background/90 max-w-2xl text-center">
              Curated fan and brand experiences with your favourite stars, tailored for premium
              journeys and celebrations.
            </p>
          </div>
        </section>

        <section className="pt-6 pb-8 md:pt-10 md:pb-12">
          <div className="container mx-auto px-4 space-y-6">
            <header className="space-y-2 text-left md:text-center">
              <p className="inline-flex text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                For Fans, Brands & Special Occasions
              </p>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-foreground">
                Celebrity Meetups & Brand Collaborations
              </h1>
              <p className="text-sm md:text-base text-muted-foreground max-w-2xl md:mx-auto">
                Create unforgettable moments with personalised celebrity shoutouts, appearances, and
                collaborations, designed to blend seamlessly into your luxury travel plans.
              </p>
            </header>

            <section className="grid gap-4 md:grid-cols-2">
              {meetupData.sections.slice(0, 2).map((item) => (
                <div key={item.id} className="rounded-2xl border bg-card p-4 md:p-6 space-y-3">
                  <h2 className="text-lg md:text-xl font-semibold">{item.title}</h2>
                  <p className="text-sm md:text-base text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </section>

            <section className="grid gap-4 md:grid-cols-2">
              {meetupData.sections.slice(2).map((item) => (
                <div key={item.id} className="rounded-2xl border bg-card p-4 md:p-6 space-y-3">
                  <h2 className="text-lg md:text-xl font-semibold">{item.title}</h2>
                  <p className="text-sm md:text-base text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </section>

            <section className="space-y-4 rounded-2xl border bg-card p-4 md:p-6">
              <h2 className="text-lg md:text-xl font-semibold">How It Works</h2>
              <ol className="list-decimal list-inside space-y-2 text-sm md:text-base text-muted-foreground">
                <li>Share your occasion or brand requirement, preferred celebrity type, and budget.</li>
                <li>
                  Our team shortlists suitable celebrities and formats (shoutout, appearance, meet &
                  greet, or endorsement).
                </li>
                <li>
                  We coordinate availability, logistics, and production to deliver a smooth,
                  on-schedule experience.
                </li>
                <li>Receive confirmation, scripts (if needed), and final deliverables on time.</li>
              </ol>
              <div className="flex flex-col gap-2 sm:flex-row">
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="inline-flex justify-center items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-medium shadow-sm hover:bg-primary/90 transition">
                      Raise a Celebrity Query
                    </button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Celebrity Meetup Request</DialogTitle>
                    </DialogHeader>
                    <CelebrityMeetupForm />
                  </DialogContent>
                </Dialog>
                <button className="inline-flex justify-center items-center gap-2 rounded-full border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent transition">
                  Talk to Brand Specialist
                </button>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="space-y-4">
              <div className="text-center space-y-2 mb-6">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                  Frequently Asked Questions
                </h2>
                <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
                  Learn more about our celebrity meetup and brand collaboration services
                </p>
              </div>
              <div className="space-y-3 max-w-3xl mx-auto">
                {[
                  {
                    question: "How much does a celebrity meetup cost?",
                    answer: "Pricing varies based on the celebrity's popularity, availability, and the type of experience (shoutout, appearance, meet & greet, endorsement). A personalized shoutout starts from ₹5,000-₹50,000, while appearances and endorsements are customized quotes. Contact our team for detailed pricing."
                  },
                  {
                    question: "How far in advance should I book?",
                    answer: "We recommend booking 2-4 weeks in advance for standard requests. For specific celebrities or complex arrangements, please book 4-8 weeks ahead. Rush bookings (7-10 days) are available at a premium surcharge based on celebrity availability."
                  },
                  {
                    question: "What types of celebrity experiences do you offer?",
                    answer: "We offer personalized video shoutouts, live appearances at events, meet & greet sessions, photo shoots, brand endorsements, and Instagram takeovers. Custom packages can be created based on your specific occasion and budget."
                  },
                  {
                    question: "Can I request a specific celebrity?",
                    answer: "Yes! You can request any celebrity. We'll work with our network to coordinate with their management and check availability. If the requested celebrity isn't available, we'll suggest similar alternatives within your budget and preferences."
                  },
                  {
                    question: "Is there a refund policy?",
                    answer: "We offer a 100% refund if the celebrity cancels or is unavailable. For client-initiated cancellations: full refund if cancelled 14+ days before, 50% refund if cancelled 7-14 days before, and no refund within 7 days of the scheduled date."
                  }
                ].map((faq, index) => (
                  <details key={index} className="group rounded-lg border bg-card p-4 hover:shadow-md transition">
                    <summary className="flex cursor-pointer items-center justify-between font-semibold text-foreground">
                      <span>{faq.question}</span>
                      <span className="text-muted-foreground transition group-open:rotate-180">
                        <ChevronDown className="h-5 w-5" />
                      </span>
                    </summary>
                    <p className="mt-3 text-sm text-muted-foreground">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CelebrityMeetup;
 
const CelebrityMeetupForm = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [celebrity, setCelebrity] = useState("");
  const [requirement, setRequirement] = useState(meetupData.requirements[0]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Celebrity meetup request", { name, mobile, celebrity, requirement });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-1">
        <label className="text-sm font-medium text-foreground">Name</label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
          placeholder="Enter your full name"
        />
      </div>
      <div className="space-y-1">
        <label className="text-sm font-medium text-foreground">Mobile</label>
        <input
          type="tel"
          required
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
          placeholder="Enter your mobile number"
        />
      </div>
      <div className="space-y-1">
        <label className="text-sm font-medium text-foreground">Celebrity Name</label>
        <input
          type="text"
          required
          value={celebrity}
          onChange={(e) => setCelebrity(e.target.value)}
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
          placeholder="Enter preferred celebrity name"
        />
      </div>
      <div className="space-y-1">
        <label className="text-sm font-medium text-foreground">Meetup Requirement</label>
        <select
          value={requirement}
          onChange={(e) => setRequirement(e.target.value)}
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
        >
          {meetupData.requirements.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        className="w-full inline-flex justify-center items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-medium shadow-sm hover:bg-primary/90 transition"
      >
        Submit Request
      </button>
    </form>
  );
};
