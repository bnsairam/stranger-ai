// src/App.tsx
import { Toaster } from "@/components/ui/sonner";           // Correct import: shadcn/ui sonner exports Toaster
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// QueryClient instance outside the component (recommended for performance)
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60,          // 1 minute – data considered fresh
      gcTime: 1000 * 60 * 5,         // 5 minutes – garbage collection
      retry: 1,                      // retry failed queries once
      refetchOnWindowFocus: false,   // don't refetch automatically on focus
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {/* Sonner toast system – root-level placement for global toasts */}
        <Toaster
          position="top-right"          // can be: top-left, top-center, bottom-right, etc.
          richColors                    // enables prettier success/error/info colors
          closeButton                   // shows X button on each toast
          duration={5000}               // auto-dismiss after 5 seconds
          // Optional future customizations:
          // theme="dark"
          // toastOptions={{
          //   classNames: {
          //     toast: "border-purple-500 bg-black/90 text-white",
          //     title: "text-yellow-300",
          //   },
          // }}
        />

        <BrowserRouter>
          <Routes>
            {/* Homepage – your main hero/landing with PRATIYOG title, logos, buttons */}
            <Route path="/" element={<Index />} />

            {/* Add new pages/routes here when you create them */}
            {/* Example: */}
            {/* <Route path="/events" element={<EventsPage />} /> */}
            {/* <Route path="/coordinators" element={<CoordinatorsPage />} /> */}
            {/* <Route path="/contact" element={<ContactPage />} /> */}
            {/* <Route path="/register" element={<RegisterPage />} /> */}

            {/* Catch-all for any unmatched route → 404 page */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
