import Card from "@/components/Card";
import Chart from "@/components/Chart";
import Table from "@/components/Table";
import { statsData } from "@/lib/dummyData";

export default function Home() {
  return (
    <div className="space-y-6">
      {/* Title */}
      <div>
        <h1 className="text-2xl font-bold text-slate-800">Dashboard Overview</h1>
        <p className="text-sm text-slate-500 mt-1">
          Welcome back! Here is what is happening today.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {statsData.map((stat) => (
          <Card key={stat.id} {...stat} />
        ))}
      </div>

      {/* Chart and Table Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Chart />
        <Table />
      </div>
    </div>
  );
}