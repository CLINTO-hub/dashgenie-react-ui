export default function CompletionRate() {
  const successData = Array(20).fill(0);
  const failData = Array(10).fill(0);
  
  return (
    <div>
      <div className="mb-4">
        <p className="text-3xl font-bold text-foreground">65%</p>
        <p className="text-sm text-success">↑ 1.7%</p>
      </div>
      <div className="flex gap-1 h-24 items-end">
        {successData.map((_, i) => (
          <div key={`s-${i}`} className="flex-1 bg-accent rounded-sm" style={{ height: `${60 + Math.random() * 40}%` }} />
        ))}
        {failData.map((_, i) => (
          <div key={`f-${i}`} className="flex-1 bg-muted rounded-sm" style={{ height: `${40 + Math.random() * 30}%` }} />
        ))}
      </div>
      <div className="flex gap-4 mt-3 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-accent" />
          <span className="text-muted-foreground">Success</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-secondary" />
          <span className="text-muted-foreground">Subpar</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-muted" />
          <span className="text-muted-foreground">In Progress/Owing</span>
        </div>
      </div>
    </div>
  );
}
