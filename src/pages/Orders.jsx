export default function Orders() {
  const orders = [
    {
      id: 1,
      orderNo: "ORD-1001",
      customer: "ABC Traders",
      date: "2025-09-10",
      total: 15340,
      status: "Delivered",
    },
    {
      id: 2,
      orderNo: "ORD-1002",
      customer: "XYZ Retail",
      date: "2025-09-14",
      total: 89520,
      status: "Pending",
    },
    {
      id: 3,
      orderNo: "ORD-1003",
      customer: "MNO Distributors",
      date: "2025-09-16",
      total: 25000,
      status: "Shipped",
    },
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Orders</h2>
      <div className="bg-white shadow-sm rounded-lg p-4 border">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b text-gray-600">
              <th className="py-2 text-left">Order #</th>
              <th className="py-2 text-left">Customer</th>
              <th className="py-2 text-left">Date</th>
              <th className="py-2 text-left">Total</th>
              <th className="py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b">
                <td className="py-2">{order.orderNo}</td>
                <td>{order.customer}</td>
                <td>{order.date}</td>
                <td>₹{order.total.toLocaleString()}</td>
                <td>
                  <span
                    className={`px-2 py-0.5 rounded text-xs ${
                      order.status === "Delivered"
                        ? "bg-green-100 text-green-700"
                        : order.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {order.status}
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
