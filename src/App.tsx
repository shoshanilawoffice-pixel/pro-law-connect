import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import PracticeAreaPage from "./pages/PracticeAreaPage";
import AssociationPage from "./pages/AssociationPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import AccessibilityStatementPage from "./pages/AccessibilityStatementPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/practice-areas/:slug" element={<PracticeAreaPage />} />
            <Route path="/association" element={<AssociationPage />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/accessibility" element={<AccessibilityStatementPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
