import { Search, Bell } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function Header() {
  return (
    <header className="fixed top-0 left-[220px] right-0 h-16 bg-card border-b border-border flex items-center justify-between px-6 z-10">
      <div className="flex-1">
        <h1 className="text-xl font-semibold text-foreground">
          Qatar Project Management Tool <span className="text-muted-foreground font-normal">Admin View</span>
        </h1>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input 
            placeholder="Search..." 
            className="pl-9 w-[200px] bg-background"
          />
        </div>
        
        <button className="relative p-2 hover:bg-accent rounded-lg transition-colors">
          <Bell className="w-5 h-5 text-muted-foreground" />
        </button>
        
        <div className="flex items-center gap-3 pl-3 border-l border-border">
          <div className="text-right">
            <p className="text-sm font-medium text-foreground">Michael K.</p>
            <p className="text-xs text-muted-foreground">Manager</p>
          </div>
          <Avatar className="w-9 h-9">
            <AvatarFallback className="bg-primary text-primary-foreground">MK</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
