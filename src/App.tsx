import { Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Create QueryClient instance outside the component (recommended best practice)
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Customize these defaults as needed for your app
      staleTime: 1000 * 60,       // 1 minute – data considered fresh
      gcTime: 1000 * 60 * 5,       // 5 minutes – garbage collection time
      retry: 1,                    // retry failed queries once
      refetchOnWindowFocus: false, // don't refetch when window regains focus
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {/* Sonner – modern, beautiful toast notifications (shadcn/ui recommended) */}
        <Sonner
          position="top-right"       // options: top-left, top-center, bottom-right, etc.
          richColors                 // enables nicer color variants for success/error/info
          closeButton                // shows clear X button on toasts
          duration={5000}            // auto-dismiss after 5 seconds
          // You can add more props later: theme="dark", toastOptions={{ style: {...} }}, etc.
        />

        <BrowserRouter>
          <Routes>
            {/* Main landing page – this is where your hero with PRATIYOG title lives */}
            <Route path="/" element={<Index />} />

            {/* Add your future pages/routes here (before the catch-all) */}
            {/* Example when you create them: */}
            {/* <Route path="/events" element={<EventsPage />} /> */}
            {/* <Route path="/coordinators" element={<CoordinatorsPage />} /> */}
            {/* <Route path="/contact" element={<ContactPage />} /> */}
            {/* <Route path="/register" element={<RegisterPage />} /> */}

            {/* Catch-all route for 404 pages */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
