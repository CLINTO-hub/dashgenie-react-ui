import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";

const data = [
  { month: "Apr", value: 180 },
  { month: "May", value: 190 },
  { month: "Jun", value: 210 },
  { month: "Jul", value: 200 },
  { month: "Aug", value: 220 },
  { month: "Sept", value: 215 },
  { month: "Oct", value: 230 },
  { month: "Nov", value: 240 },
  { month: "Dec", value: 245 },
];

export default function TotalTicketsChart() {
  return (
    <div>
      <div className="mb-4">
        <p className="text-3xl font-bold text-foreground">245</p>
        <p className="text-sm text-muted-foreground">Strategic + Ad-hoc</p>
      </div>
      <ResponsiveContainer width="100%" height={150}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis 
            dataKey="month" 
            tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
            axisLine={{ stroke: "hsl(var(--border))" }}
          />
          <YAxis hide />
          <Line 
            type="monotone" 
            dataKey="value" 
            stroke="hsl(var(--primary))" 
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
