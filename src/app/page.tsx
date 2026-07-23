import Card from "@/components/Card";
import Chart from "@/components/Chart";
import Table from "@/components/Table";
import { statsData } from "@/lib/dummyData";

export default function Home() {
  return (
    <div className="space-y-6 w-full max-w-full overflow-hidden">
      {/* Title */}
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-slate-800">
          Dashboard Overview
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Welcome back! Here is what is happening today.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {statsData.map((stat) => (
          <Card key={stat.id} {...stat} />
        ))}
      </div>

      {/* Chart and Table Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full min-w-0">
        <div className="w-full min-w-0 overflow-hidden">
          <Chart />
        </div>
        <div className="w-full min-w-0 overflow-hidden">
          <Table />
        </div>
      </div>
    </div>
  );
}