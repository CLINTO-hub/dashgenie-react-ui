import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "./components/layout/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Tickets from "./pages/Tickets";
import Messages from "./pages/Messages";
import Hierarchy from "./pages/Hierarchy";
import ActivityTimeline from "./pages/ActivityTimeline";
import Account from "./pages/Account";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardLayout><Dashboard /></DashboardLayout>} />
          <Route path="/tickets" element={<DashboardLayout><Tickets /></DashboardLayout>} />
          <Route path="/messages" element={<DashboardLayout><Messages /></DashboardLayout>} />
          <Route path="/hierarchy" element={<DashboardLayout><Hierarchy /></DashboardLayout>} />
          <Route path="/activity" element={<DashboardLayout><ActivityTimeline /></DashboardLayout>} />
          <Route path="/activity-general" element={<DashboardLayout><ActivityTimeline /></DashboardLayout>} />
          <Route path="/account" element={<DashboardLayout><Account /></DashboardLayout>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
