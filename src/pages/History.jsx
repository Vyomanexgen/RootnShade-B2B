// src/pages/History.jsx
import { CreditCard, ShoppingCart, Clock } from "lucide-react";

export default function History() {
  const transactions = [
    { id: 1, type: "Payment", date: "2024-01-10", amount: "+₹15,000", status: "Completed" },
    { id: 2, type: "Purchase", date: "2024-01-08", amount: "-₹8,500", status: "Debited" },
    { id: 3, type: "Payment", date: "2024-01-05", amount: "+₹22,000", status: "Completed" },
    { id: 4, type: "Purchase", date: "2024-01-03", amount: "-₹12,300", status: "Debited" },
    { id: 5, type: "Purchase", date: "2024-01-01", amount: "-₹18,700", status: "Debited" },
    { id: 6, type: "Payment", date: "2023-12-28", amount: "+₹10,000", status: "Completed" },
    { id: 7, type: "Purchase", date: "2023-12-20", amount: "-₹9,500", status: "Debited" },
  ];

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Clock size={24} className="text-[#1F4E79]" />
          Payment History
        </h2>
        <button className="px-4 py-2 bg-[#1F4E79] text-white rounded-lg hover:bg-[#163B5C] transition text-sm">
          Export CSV
        </button>
      </div>

      {/* Transactions List */}
      <div className="bg-white border rounded-xl shadow-sm p-6">
        <div className="space-y-5">
          {transactions.map((tx) => (
            <div
              key={tx.id}
              className="flex items-center justify-between border-b pb-4 last:border-none last:pb-0"
            >
              {/* Left Side */}
              <div className="flex items-center gap-4">
                {tx.type === "Payment" ? (
                  <CreditCard className="text-green-500" size={28} />
                ) : (
                  <ShoppingCart className="text-orange-500" size={28} />
                )}
                <div>
                  <p className="font-medium text-gray-900">{tx.type}</p>
                  <p className="text-sm text-gray-500">{tx.date}</p>
                </div>
              </div>

              {/* Right Side */}
              <div className="text-right">
                <p
                  className={`font-semibold text-lg ${
                    tx.amount.startsWith("+")
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {tx.amount}
                </p>
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    tx.status === "Completed"
                      ? "bg-green-100 text-green-700"
                      : "bg-blue-100 text-blue-700"
                  }`}
                >
                  {tx.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
