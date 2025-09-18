import { useState } from "react";
import { Trash2 } from "lucide-react";

export default function Cart() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Dabur Red Paste 200g",
      category: "Oral Care",
      price: 85,
      qty: 6,
      discount: "10% OFF",
      discountPercent: 0.1,
    },
    {
      id: 2,
      name: "Colgate Total 150g",
      category: "Oral Care",
      price: 120,
      qty: 4,
      discount: "5% OFF",
      discountPercent: 0.05,
    },
    {
      id: 3,
      name: "Head & Shoulders 340ml",
      category: "Hair Care",
      price: 285,
      qty: 2,
      discount: "15% OFF",
      discountPercent: 0.15,
    },
  ]);

  // --- Handlers ---
  const incrementQty = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decrementQty = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  // --- Totals ---
  const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0);
  const discount = items.reduce(
    (sum, i) => sum + i.price * i.qty * i.discountPercent,
    0
  );
  const total = subtotal - discount;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white border rounded-xl shadow-sm p-4 flex items-center justify-between hover:shadow-md transition"
            >
              {/* Product info */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 flex items-center justify-center bg-gray-100 rounded-lg">
                  <svg
                    className="w-8 h-8 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7a1 1 0 00.9 1.45H19m-12 0a1 1 0 001 1h9a1 1 0 001-1"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.category}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-gray-700 font-medium">
                      ₹{item.price}
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded bg-green-100 text-green-700 font-medium">
                      {item.discount}
                    </span>
                  </div>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-4">
                <div className="flex items-center border rounded-lg">
                  <button
                    onClick={() => decrementQty(item.id)}
                    className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                  >
                    –
                  </button>
                  <span className="px-3">{item.qty}</span>
                  <button
                    onClick={() => incrementQty(item.id)}
                    className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
                <div className="font-semibold text-gray-800">
                  ₹{(item.price * item.qty).toFixed(1)}
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 hover:bg-red-50 p-2 rounded-lg transition"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Summary */}
        <div className="space-y-4">
          {/* Order Summary */}
          <div className="bg-white border rounded-xl shadow-sm p-4">
            <h3 className="font-semibold mb-4">Order Summary</h3>
            <div className="flex justify-between text-sm mb-2">
              <span>Subtotal</span>
              <span>₹{subtotal.toFixed(1)}</span>
            </div>
            <div className="flex justify-between text-sm text-green-600 mb-2">
              <span>Discount</span>
              <span>-₹{discount.toFixed(1)}</span>
            </div>
            <div className="flex justify-between font-semibold text-lg border-t pt-3 mb-4">
              <span>Total</span>
              <span>₹{total.toFixed(1)}</span>
            </div>
            <button className="w-full bg-[#1F4E79] text-white py-2 rounded-lg font-medium hover:bg-[#163B5C] transition">
              Place Order
            </button>
            <button className="w-full mt-3 bg-gray-100 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-200 transition">
              Continue Shopping
            </button>
          </div>

          {/* Credit Info */}
          <div className="bg-white border rounded-xl shadow-sm p-4">
            <h3 className="font-semibold mb-4">Available Credit</h3>
            <div className="flex justify-between text-sm mb-2">
              <span>Credit Limit</span>
              <span>₹1,00,000</span>
            </div>
            <div className="flex justify-between text-sm text-orange-600 mb-2">
              <span>Outstanding</span>
              <span>₹25,000</span>
            </div>
            <div className="flex justify-between text-sm text-green-600 font-semibold">
              <span>Available</span>
              <span>₹75,000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
