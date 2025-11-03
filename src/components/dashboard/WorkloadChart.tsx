import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";

const data = [
  { date: "1 Nov", dept1: 15, dept2: 25, dept3: 20 },
  { date: "5 Nov", dept1: 20, dept2: 30, dept3: 25 },
  { date: "8 Nov", dept1: 25, dept2: 35, dept3: 22 },
  { date: "11 Nov", dept1: 18, dept2: 28, dept3: 30 },
  { date: "12 Nov", dept1: 22, dept2: 32, dept3: 28 },
];

export default function WorkloadChart() {
  return (
    <ResponsiveContainer width="100%" height={180}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
        <XAxis 
          dataKey="date" 
          tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
          axisLine={{ stroke: "hsl(var(--border))" }}
        />
        <YAxis 
          tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
          axisLine={{ stroke: "hsl(var(--border))" }}
        />
        <Bar dataKey="dept1" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
        <Bar dataKey="dept2" fill="hsl(var(--secondary))" radius={[4, 4, 0, 0]} />
        <Bar dataKey="dept3" fill="hsl(var(--muted))" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
