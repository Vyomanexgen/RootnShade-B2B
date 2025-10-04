// src/pages/Returns.jsx
import { useState } from "react";
import { Eye, X } from "lucide-react";

// ✅ Export dummy returns for other components
export const returns = {
  "Return Pending": [
    {
      id: "RET-2025-001",
      date: "2025-10-01",
      items: [
        { name: "Apple (1kg)", quantity: 1, price: 120 },
        { name: "Milk (1L)", quantity: 2, price: 50 },
      ],
      status: "Return Pending",
    },
    {
      id: "RET-2025-002",
      date: "2025-09-30",
      items: [{ name: "Bread", quantity: 1, price: 40 }],
      status: "Return Pending",
    },
  ],
  "Return Successful": [
    {
      id: "RET-2025-003",
      date: "2025-09-28",
      items: [{ name: "Cheese", quantity: 2, price: 90 }],
      status: "Return Successful",
    },
  ],
  "Refund Initiated": [
    {
      id: "RET-2025-004",
      date: "2025-09-26",
      items: [{ name: "Butter", quantity: 1, price: 55 }],
      status: "Refund Initiated",
    },
  ],
  "Refund Completed": [
    {
      id: "RET-2025-005",
      date: "2025-09-25",
      items: [{ name: "Eggs", quantity: 12, price: 20 }],
      status: "Refund Completed",
    },
  ],
};

export default function Returns() {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedReturn, setSelectedReturn] = useState(null);

  const allReturns = [
    ...returns["Return Pending"],
    ...returns["Return Successful"],
    ...returns["Refund Initiated"],
    ...returns["Refund Completed"],
  ];

  const tabs = [
    { key: "All", label: "All", count: allReturns.length },
    {
      key: "Return Pending",
      label: "Return Pending",
      count: returns["Return Pending"].length,
    },
    {
      key: "Return Successful",
      label: "Return Successful",
      count: returns["Return Successful"].length,
    },
    {
      key: "Refund Initiated",
      label: "Refund Initiated",
      count: returns["Refund Initiated"].length,
    },
    {
      key: "Refund Completed",
      label: "Refund Completed",
      count: returns["Refund Completed"].length,
    },
  ];

  const getReturnsForTab = (tab) => (tab === "All" ? allReturns : returns[tab]);

  const getStatusColor = (status) => {
    switch (status) {
      case "Return Pending":
        return "bg-orange-500";
      case "Return Successful":
        return "bg-green-600";
      case "Refund Initiated":
        return "bg-blue-600";
      case "Refund Completed":
        return "bg-teal-600";
      default:
        return "bg-gray-300";
    }
  };

  const getGrandTotal = (items) =>
    items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Returns</h2>
      <p className="text-gray-500 mb-4">Track and manage all your returns</p>

      {/* Tabs */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {tabs.map(({ key, label, count }) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition ${
              activeTab === key
                ? "bg-gray-100 border-gray-300 shadow-sm text-gray-700"
                : "bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100"
            }`}
          >
            <span>{label}</span>
            <span
              className={`text-white text-xs px-2 py-0.5 rounded-full ${
                key === "All"
                  ? "bg-blue-600"
                  : key === "Return Pending"
                  ? "bg-orange-500"
                  : key === "Return Successful"
                  ? "bg-green-600"
                  : key === "Refund Initiated"
                  ? "bg-blue-600"
                  : key === "Refund Completed"
                  ? "bg-teal-600"
                  : "bg-gray-300"
              }`}
            >
              {count}
            </span>
          </button>
        ))}
      </div>

      {/* Returns List */}
      <div className="space-y-4">
        {getReturnsForTab(activeTab).map((ret) => (
          <div
            key={ret.id}
            className="bg-white p-4 rounded-lg shadow-sm border flex justify-between items-center"
          >
            <div>
              <h3 className="font-semibold text-gray-800">{ret.id}</h3>
              <p className="text-sm text-gray-600 mt-1">
                <strong>Return Date:</strong> {ret.date}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Items:</strong> {ret.items.length}
              </p>
              <p
                className={`text-sm mt-1 font-medium ${getStatusColor(
                  ret.status
                ).replace("bg-", "text-")}`}
              >
                <strong>Grand Total:</strong> ₹{getGrandTotal(ret.items)}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span
                className={`text-xs px-2 py-1 rounded-full text-white ${getStatusColor(
                  ret.status
                )}`}
              >
                {ret.status}
              </span>
              <button
                onClick={() => setSelectedReturn(ret)}
                className="flex items-center gap-1 px-3 py-1.5 border rounded-lg text-gray-700 hover:bg-gray-100 text-sm"
              >
                <Eye className="w-4 h-4" /> View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedReturn && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
            <button
              onClick={() => setSelectedReturn(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              <X size={20} />
            </button>
            <h2 className="text-xl font-semibold mb-4">Return Details</h2>
            <p className="text-gray-800 mb-2">
              <strong>Return Number:</strong> {selectedReturn.id}
            </p>
            <p className="text-gray-800 mb-2">
              <strong>Status:</strong>{" "}
              <span
                className={`text-white px-2 py-1 rounded-full ${getStatusColor(
                  selectedReturn.status
                )}`}
              >
                {selectedReturn.status}
              </span>
            </p>
            <p className="text-gray-800 mb-2">
              <strong>Return Date:</strong> {selectedReturn.date}
            </p>

            <div className="mt-3">
              <strong className="text-gray-800">Items:</strong>
              <ul className="list-disc list-inside text-gray-700 mt-1">
                {selectedReturn.items.map((item, idx) => (
                  <li key={idx}>
                    {item.name} - {item.quantity} pcs × ₹{item.price} = ₹
                    {item.quantity * item.price}
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-gray-800 mt-3 font-semibold">
              Grand Total: ₹{getGrandTotal(selectedReturn.items)}
            </p>

            <button
              onClick={() => setSelectedReturn(null)}
              className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
