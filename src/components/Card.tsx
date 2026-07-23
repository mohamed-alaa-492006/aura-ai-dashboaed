import { ArrowUpRight, ArrowDownRight } from "lucide-react";

interface CardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: React.ElementType;
  color: string;
}

export default function Card({
  title,
  value,
  change,
  isPositive,
  icon: Icon,
  color,
}: CardProps) {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow w-full min-w-0">
      <div className="flex items-center justify-between gap-2">
        <span className="text-xs sm:text-sm font-medium text-slate-500 truncate">{title}</span>
        <div className={`p-2 sm:p-2.5 rounded-xl shrink-0 ${color}`}>
          <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
        </div>
      </div>

      <div className="mt-3 sm:mt-4 flex items-baseline justify-between gap-2 flex-wrap sm:flex-nowrap">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-800 tracking-tight">{value}</h3>
        
        <div
          className={`flex items-center text-[11px] sm:text-xs font-semibold px-2 py-0.5 sm:py-1 rounded-full shrink-0 ${
            isPositive
              ? "bg-emerald-50 text-emerald-600"
              : "bg-rose-50 text-rose-600"
          }`}
        >
          {isPositive ? (
            <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-0.5" />
          ) : (
            <ArrowDownRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-0.5" />
          )}
          {change}
        </div>
      </div>
    </div>
  );
}