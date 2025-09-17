export default function CreditDetails() {
  const credits = [
    { id: 1, invoice: "INV-001", amount: 5000, status: "Paid" },
    { id: 2, invoice: "INV-002", amount: 20000, status: "Pending" },
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Credit Details</h2>
      <div className="bg-white shadow-sm rounded-lg p-4 border">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b text-gray-600">
              <th className="py-2 text-left">Invoice</th>
              <th className="py-2 text-left">Amount</th>
              <th className="py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {credits.map((c) => (
              <tr key={c.id} className="border-b">
                <td className="py-2">{c.invoice}</td>
                <td>₹{c.amount}</td>
                <td>
                  <span
                    className={`px-2 py-0.5 rounded text-xs ${
                      c.status === "Paid"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {c.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
