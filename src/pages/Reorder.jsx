export default function Reorder() {
  const pastOrders = [
    { id: 1, product: "Product A", lastOrdered: "2025-08-12" },
    { id: 2, product: "Product B", lastOrdered: "2025-09-01" },
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Reorder</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {pastOrders.map((order) => (
          <div
            key={order.id}
            className="p-4 bg-white shadow-sm rounded-lg border flex justify-between items-center"
          >
            <div>
              <h3 className="font-semibold">{order.product}</h3>
              <p className="text-sm text-gray-600">
                Last ordered: {order.lastOrdered}
              </p>
            </div>
            <button className="px-3 py-1 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700">
              Reorder
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
