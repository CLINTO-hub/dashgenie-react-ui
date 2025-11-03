import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Ticket, MessageSquare, Network, Activity, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/" },
  { icon: Ticket, label: "Tickets", path: "/tickets" },
  { icon: MessageSquare, label: "Message", path: "/messages", badge: "08" },
  { icon: Network, label: "Hierarchy & Departments", path: "/hierarchy" },
  { icon: Activity, label: "Activity Timeline", path: "/activity" },
];

const generalItems = [
  { icon: Activity, label: "Activity Timeling", path: "/activity-general" },
  { icon: User, label: "Account", path: "/account" },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="fixed left-0 top-0 h-screen w-[220px] bg-sidebar border-r border-sidebar-border flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-sidebar-border">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">D</span>
          </div>
          <span className="font-semibold text-foreground">Drivergo</span>
        </div>
      </div>

      {/* Main Menu */}
      <div className="flex-1 overflow-y-auto py-6 px-3">
        <div className="mb-6">
          <p className="text-xs font-semibold text-muted-foreground uppercase mb-3 px-3">Main Menu</p>
          <nav className="space-y-1">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors",
                    isActive
                      ? "bg-sidebar-accent text-sidebar-primary font-medium"
                      : "text-sidebar-foreground hover:bg-sidebar-accent/50"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <item.icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <Badge variant="destructive" className="rounded-full px-2 py-0.5 text-xs">
                      {item.badge}
                    </Badge>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* General Section */}
        <div>
          <p className="text-xs font-semibold text-muted-foreground uppercase mb-3 px-3">General</p>
          <Button className="w-full mb-3 bg-primary hover:bg-primary/90 text-primary-foreground">
            Quick Actions: Create Ticket
          </Button>
          <nav className="space-y-1">
            {generalItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors",
                    isActive
                      ? "bg-sidebar-accent text-sidebar-primary font-medium"
                      : "text-sidebar-foreground hover:bg-sidebar-accent/50"
                  )}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </aside>
  );
}
