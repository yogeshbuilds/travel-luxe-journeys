import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Travel from "./pages/Travel";
import Destination from "./pages/Destination";
import NotFound from "./pages/NotFound";
import LuxuryRide from "./pages/LuxuryRide";
import RussianSpa from "./pages/RussianSpa";
import CelebrityMeetup from "./pages/CelebrityMeetup";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/destination/:country" element={<Destination />} />
          <Route path="/luxury-ride" element={<LuxuryRide />} />
          <Route path="/russian-spa" element={<RussianSpa />} />
          <Route path="/celebrity-meetup" element={<CelebrityMeetup />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
