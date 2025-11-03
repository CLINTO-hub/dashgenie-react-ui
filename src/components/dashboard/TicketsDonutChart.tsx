import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Electronics", value: 80, color: "hsl(var(--primary))" },
  { name: "Urgency", value: 23, color: "hsl(var(--accent))" },
];

export default function TicketsDonutChart() {
  return (
    <div className="flex flex-col items-center">
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="grid grid-cols-2 gap-8 w-full mt-4">
        {data.map((item) => (
          <div key={item.name} className="text-center">
            <p className="text-muted-foreground text-sm mb-1">{item.name}</p>
            <p className="text-2xl font-bold text-foreground">{item.value}%</p>
          </div>
        ))}
      </div>
    </div>
  );
}
