import MetricsCard from "@/components/dashboard/MetricsCard";
import TotalTicketsChart from "@/components/dashboard/TotalTicketsChart";
import CompletionRate from "@/components/dashboard/CompletionRate";
import WorkloadChart from "@/components/dashboard/WorkloadChart";
import TicketsDonutChart from "@/components/dashboard/TicketsDonutChart";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Package, Ruler, Maximize } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Top Metrics Row */}
      <div className="grid grid-cols-3 gap-6">
        <MetricsCard title="Total Tickets Created (YTD)">
          <TotalTicketsChart />
        </MetricsCard>
        
        <MetricsCard title="Ticket Completion Rate:">
          <CompletionRate />
        </MetricsCard>
        
        <MetricsCard title="Workload by Role/Department">
          <WorkloadChart />
        </MetricsCard>
      </div>

      {/* Middle Row */}
      <div className="grid grid-cols-3 gap-6">
        {/* Top 5 Overdue Tickets */}
        <MetricsCard title="Top 5 Overdue Strategic Tickets">
          <div className="flex items-start gap-4">
            <Avatar className="w-12 h-12">
              <AvatarFallback className="bg-primary text-primary-foreground">JD</AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-muted-foreground">Aonsing ID:</span>
              </div>
              <div className="text-muted-foreground">Priority</div>
              <div className="text-muted-foreground">Assigned To</div>
              <div className="text-muted-foreground">In Proclue Days</div>
            </div>
          </div>
        </MetricsCard>

        {/* Tracking History */}
        <MetricsCard title="Tracking History">
          <div className="space-y-4">
            <div>
              <p className="text-xs text-muted-foreground mb-1">Tracking ID</p>
              <div className="flex items-center gap-2">
                <p className="font-mono text-sm">#19929-123-1330b</p>
                <Badge variant="secondary" className="bg-info text-white">
                  IM 5-20204
                </Badge>
              </div>
            </div>
            
            <div>
              <p className="text-xs text-muted-foreground mb-1">Current Location</p>
              <p className="font-medium">Los angeles Gateway</p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                <div>
                  <p className="text-xs text-muted-foreground">Departure Waypoint</p>
                  <p className="text-sm font-medium">Las Vegas, Nv- Usa</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2" />
                <div>
                  <p className="text-xs text-muted-foreground">Arrival Waypoint</p>
                  <p className="text-sm font-medium">San diego, Usa</p>
                </div>
              </div>
            </div>
          </div>
        </MetricsCard>

        {/* White Bengala Box */}
        <MetricsCard title="White Bengala Box">
          <div className="space-y-4">
            <div className="flex justify-end">
              <span className="text-sm text-muted-foreground">WYC-2224</span>
            </div>
            
            <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg p-4 flex items-center justify-center">
              <div className="text-6xl">🚚</div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-accent/20 flex items-center justify-center">
                  <Package className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <p className="text-lg font-bold">46.3 m</p>
                  <p className="text-xs text-muted-foreground">Load Volume</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-accent/20 flex items-center justify-center">
                  <Ruler className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <p className="text-lg font-bold">36 m</p>
                  <p className="text-xs text-muted-foreground">Load Length</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-accent/20 flex items-center justify-center">
                  <Maximize className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <p className="text-lg font-bold">18 m</p>
                  <p className="text-xs text-muted-foreground">Load Width</p>
                </div>
              </div>
            </div>
          </div>
        </MetricsCard>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-3 gap-6">
        {/* Activity Timeline */}
        <MetricsCard title="Activity Timeline/Live Feed" className="col-span-2">
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground italic">Value: To d redugts cn 13808</p>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                <div className="w-8 h-8 rounded bg-muted flex items-center justify-center mt-1">
                  <Package className="w-4 h-4 text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <p className="text-sm">
                    <span className="font-medium">John D.</span> updated T-401 to 'Resolved 'Marketing
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">56 S 31 crty</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                <div className="w-8 h-8 rounded bg-muted flex items-center justify-center mt-1">
                  <Package className="w-4 h-4 text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <p className="text-sm">
                    <span className="font-medium">John D.</span> updated Ticket T-401 to 'Resolved
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">Retiq is rut to ep to Aptes 16 Marketing</p>
                  <p className="text-xs text-muted-foreground">11: 8 81 crty</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                <div className="w-8 h-8 rounded bg-muted flex items-center justify-center mt-1">
                  <Package className="w-4 h-4 text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <p className="text-sm">
                    <span className="font-medium">New Strategic Ticket T-405</span> assigned to Marketing
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">Rohn D. updated Ticket T-401 to Resolved to Marketing</p>
                  <p className="text-xs text-muted-foreground">668 Dy</p>
                </div>
              </div>
            </div>
          </div>
        </MetricsCard>

        {/* Tickets by Type */}
        <MetricsCard title="Tickets by Type & Urgency">
          <TicketsDonutChart />
        </MetricsCard>
      </div>
    </div>
  );
}
