
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SoftwareTrack from "./pages/SoftwareTrack";
import HardwareTrack from "./pages/HardwareTrack";
import NotFound from "./pages/NotFound";
import { Analytics } from "@vercel/analytics/react"
import FinalistsList from "./pages/FinalistsList";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/software-track" element={<SoftwareTrack />} />
          <Route path="/hardware-track" element={<HardwareTrack />} />
          <Route path="/finalists" element={<FinalistsList />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Analytics /> {/* Vercel Analytics added here */}

    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
