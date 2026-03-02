import { Toaster } from "@/components/ui/sonner";      // ← Correct: exports Toaster, not Sonner
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// QueryClient instance (outside component = better perf)
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60,       // 1 min
      gcTime: 1000 * 60 * 5,      // 5 min
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {/* Sonner Toaster – placed at root level */}
        <Toaster
          position="top-right"
          richColors
          closeButton
          duration={5000}           // auto-dismiss in ms
          // Optional extras you can add later:
          // theme="dark"
          // toastOptions={{ classNames: { toast: "bg-black border-gold text-white" } }}
        />

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />

            {/* Future routes go here */}
            {/* <Route path="/events" element={<Events />} /> */}
            {/* <Route path="/coordinators" element={<Coordinators />} /> */}
            {/* <Route path="/contact" element={<Contact />} /> */}
            {/* <Route path="/register" element={<Register />} /> */}

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
