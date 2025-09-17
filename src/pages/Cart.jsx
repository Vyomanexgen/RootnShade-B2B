export default function Cart() {
  const items = [
    { id: 1, name: "Product A", qty: 2, price: 1200 },
    { id: 2, name: "Product B", qty: 1, price: 850 },
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Cart</h2>
      <div className="bg-white shadow-sm rounded-lg p-4 border">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b text-gray-600">
              <th className="py-2 text-left">Product</th>
              <th className="py-2 text-left">Qty</th>
              <th className="py-2 text-left">Price</th>
              <th className="py-2 text-left">Total</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="py-2">{item.name}</td>
                <td>{item.qty}</td>
                <td>₹{item.price}</td>
                <td>₹{item.qty * item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-4 text-right font-semibold">
          Total: ₹
          {items.reduce((sum, i) => sum + i.price * i.qty, 0)}
        </div>
      </div>
    </div>
  );
}
