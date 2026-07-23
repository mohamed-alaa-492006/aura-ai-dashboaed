import { recentTransactions } from "@/lib/dummyData";

export default function Table() {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden w-full">
      <div className="p-4 sm:p-6 border-b border-slate-100">
        <h2 className="text-base sm:text-lg font-bold text-slate-800">Recent Transactions</h2>
        <p className="text-xs text-slate-500 mt-0.5">Latest payments from customer store</p>
      </div>

      <div className="overflow-x-auto w-full">
        {/* أضفنا min-w-[500px] للحفاظ على تنسيق الجدول مع إتاحة سكرول سلس على الموبايل */}
        <table className="w-full min-w-[500px] text-left text-sm text-slate-600">
          <thead className="bg-slate-50 text-xs text-slate-400 uppercase font-semibold border-b border-slate-100">
            <tr>
              <th className="px-4 sm:px-6 py-3 sm:py-4">Customer</th>
              <th className="px-4 sm:px-6 py-3 sm:py-4">Status</th>
              <th className="px-4 sm:px-6 py-3 sm:py-4">Date</th>
              <th className="px-4 sm:px-6 py-3 sm:py-4 text-right">Amount</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {recentTransactions.map((item) => (
              <tr key={item.id} className="hover:bg-slate-50/50 transition-colors">
                <td className="px-4 sm:px-6 py-3.5 sm:py-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.avatar}
                      alt={item.user}
                      className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-slate-800 leading-none text-xs sm:text-sm">{item.user}</p>
                      <p className="text-[11px] sm:text-xs text-slate-400 mt-1">{item.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 sm:px-6 py-3.5 sm:py-4">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      item.status === "Completed"
                        ? "bg-emerald-50 text-emerald-600"
                        : item.status === "Pending"
                        ? "bg-amber-50 text-amber-600"
                        : "bg-rose-50 text-rose-600"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="px-4 sm:px-6 py-3.5 sm:py-4 text-xs text-slate-500 whitespace-nowrap">{item.date}</td>
                <td className="px-4 sm:px-6 py-3.5 sm:py-4 text-right font-bold text-slate-800 text-xs sm:text-sm">{item.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}