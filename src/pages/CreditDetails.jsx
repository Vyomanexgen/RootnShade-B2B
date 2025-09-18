import { AlertCircle, CheckCircle2, Clock, CreditCard, QrCode, ShoppingCart } from "lucide-react";

export default function CreditDetails() {
  const transactions = [
    { id: 1, type: "Payment", date: "2024-01-10", amount: "+₹15,000", status: "Completed" },
    { id: 2, type: "Purchase", date: "2024-01-08", amount: "-₹8,500", status: "Debited" },
    { id: 3, type: "Payment", date: "2024-01-05", amount: "+₹22,000", status: "Completed" },
    { id: 4, type: "Purchase", date: "2024-01-03", amount: "-₹12,300", status: "Debited" },
    { id: 5, type: "Purchase", date: "2024-01-01", amount: "-₹18,700", status: "Debited" },
  ];

  return (
    <div className="p-6">
      {/* Header */}
      <h2 className="text-2xl font-bold mb-1">Credit Details</h2>
      <p className="text-gray-500 mb-6">
        Manage your credit balance and payment history
      </p>

      {/* Summary Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-6">
        {/* Outstanding Balance */}
        <div className="bg-white p-6 rounded-xl border shadow-sm">
          <p className="text-gray-600">Outstanding Balance</p>
          <h3 className="text-2xl font-bold text-orange-500">₹25,000</h3>
          <div className="flex items-center text-sm text-gray-500 mt-2">
            <AlertCircle size={16} className="mr-1 text-orange-500" />
            Due: 2024-01-25
          </div>
        </div>

        {/* Credit Limit */}
        <div className="bg-white p-6 rounded-xl border shadow-sm">
          <p className="text-gray-600">Credit Limit</p>
          <h3 className="text-2xl font-bold">₹100,000</h3>
          <div className="w-full bg-gray-100 h-2 rounded mt-2">
            <div className="bg-orange-500 h-2 rounded w-1/4"></div>
          </div>
          <p className="text-sm text-gray-500 mt-1">25.0% used</p>
        </div>

        {/* Available Credit */}
        <div className="bg-white p-6 rounded-xl border shadow-sm">
          <p className="text-gray-600">Available Credit</p>
          <h3 className="text-2xl font-bold text-green-600">₹75,000</h3>
          <div className="flex items-center text-sm text-gray-500 mt-2">
            <CheckCircle2 size={16} className="mr-1 text-green-600" />
            Ready to use
          </div>
        </div>
      </div>

      {/* Make Payment + History */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Make Payment */}
        <div className="bg-white p-6 rounded-xl border shadow-sm">
          <h3 className="text-lg font-bold flex items-center gap-2 mb-4">
            <QrCode size={20} /> Make Payment
          </h3>
          <p className="text-gray-500 text-sm mb-4">
            Enter amount to generate payment QR code
          </p>

          <input
            type="number"
            placeholder="Enter amount"
            className="w-full border rounded-lg p-2 mb-4"
          />

          <div className="flex gap-2">
            <button className="flex-1 bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition">
              Generate QR Code
            </button>
            <button className="border px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition">
              Pay Full
            </button>
          </div>
        </div>

        {/* Payment History */}
        <div className="bg-white p-6 rounded-xl border shadow-sm">
          <h3 className="text-lg font-bold flex items-center gap-2 mb-4">
            <Clock size={20} /> Payment History
          </h3>
          <p className="text-gray-500 text-sm mb-4">
            Recent transactions and payments
          </p>

          <div className="space-y-4">
            {transactions.map((tx) => (
              <div key={tx.id} className="flex items-center justify-between">
                {/* Left */}
                <div className="flex items-center gap-3">
                  {tx.type === "Payment" ? (
                    <CreditCard className="text-green-500" size={20} />
                  ) : (
                    <ShoppingCart className="text-orange-500" size={20} />
                  )}
                  <div>
                    <p className="font-medium">{tx.type}</p>
                    <p className="text-sm text-gray-500">{tx.date}</p>
                  </div>
                </div>

                {/* Right */}
                <div className="text-right">
                  <p
                    className={`font-semibold ${
                      tx.amount.startsWith("+")
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {tx.amount}
                  </p>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${
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
    </div>
  );
}
