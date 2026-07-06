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
    <div className="bg-white rounded-2xl border shadow-sm hover:shadow-lg transition-all duration-300 p-6">

      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center ${color}`}
      >
        <Icon className="h-6 w-6 text-white" />
      </div>

      <p className="text-gray-500 text-sm mt-5">
        {title}
      </p>

      <h2 className="text-3xl font-bold mt-1">
        {value}
      </h2>

    </div>
  );
}