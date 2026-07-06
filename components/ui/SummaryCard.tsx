import { LucideIcon } from "lucide-react";

interface Props {
  title: string;
  value: string | number;
  icon: LucideIcon;
  color: string;
}

export default function SummaryCard({
  title,
  value,
  icon: Icon,
  color,
}: Props) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/90 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="absolute inset-0 bg-linear-to-br from-white via-white to-slate-50 opacity-90" />
      <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-slate-900/5 blur-2xl transition-all duration-300 group-hover:bg-slate-900/10" />

      <div className="relative">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-xl ${color} shadow-lg shadow-black/10`}
        >
          <Icon className="h-6 w-6 text-white" />
        </div>

        <p className="mt-5 text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
          {title}
        </p>

        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">
          {value}
        </h2>
      </div>
    </div>
  );
}