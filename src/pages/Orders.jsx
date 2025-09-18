import { useState } from "react";
import {
  Package,
  Truck,
  XCircle,
  Ban,
  Eye,
  User,
} from "lucide-react";

export default function Orders() {
  const [activeTab, setActiveTab] = useState("Pending");

  const tabs = [
    { name: "Pending", count: 2, icon: Package },
    { name: "Delivered", count: 2, icon: Truck },
    { name: "Cancelled", count: 1, icon: XCircle },
    { name: "Rejected", count: 1, icon: Ban },
  ];

  const orders = {
    Pending: [
      {
        id: "ORD-2024-005",
        date: "2024-01-18",
        items: 5,
        total: 8920,
        status: "Processing",
        statusColor: "bg-orange-500",
        statusText: "Processing",
        icon: Truck,
      },
      {
        id: "ORD-2024-006",
        date: "2024-01-19",
        items: 15,
        total: 45200,
        status: "Confirmed",
        statusColor: "bg-blue-600",
        statusText: "Confirmed",
        icon: Package,
        note: "Direct order via admin approval",
      },
    ],
    Delivered: [
      {
        id: "ORD-2024-001",
        date: "2024-01-15",
        items: 8,
        total: 15340,
        status: "Delivered",
        statusColor: "bg-green-600",
        statusText: "Delivered",
        icon: Truck,
      },
      {
        id: "ORD-2024-002",
        date: "2024-01-10",
        items: 12,
        total: 28560,
        status: "Delivered",
        statusColor: "bg-green-600",
        statusText: "Delivered",
        icon: User,
        note: "Placed by salesman on your behalf",
      },
    ],
    Cancelled: [
      {
        id: "ORD-2024-003",
        date: "2024-01-12",
        items: 3,
        total: 5670,
        status: "Cancelled",
        statusColor: "bg-gray-400",
        statusText: "Cancelled",
        icon: Truck,
      },
    ],
    Rejected: [
      {
        id: "ORD-2024-004",
        date: "2024-01-14",
        items: 7,
        total: 12450,
        status: "Rejected",
        statusColor: "bg-red-600",
        statusText: "Rejected",
        icon: Truck,
      },
    ],
  };

  return (
    <div className="p-6">
      {/* Page Heading */}
      <h2 className="text-2xl font-bold text-gray-800">Orders</h2>
      <p className="text-gray-500 mb-4">Track and manage all your orders</p>

      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.name;
          return (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition 
                ${
                  isActive
                    ? "bg-gray-100 border-gray-300 shadow-sm"
                    : "bg-gray-50 border-gray-200 hover:bg-gray-100"
                }`}
            >
              <Icon className="w-4 h-4 text-gray-600" />
              <span className="text-gray-700">{tab.name}</span>
              <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full">
                {tab.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Orders List */}
      <div className="space-y-4">
        {orders[activeTab].map((order) => {
          const StatusIcon = order.icon;
          return (
            <div
              key={order.id}
              className="bg-white p-4 rounded-lg shadow-sm border flex justify-between items-center"
            >
              {/* Left */}
              <div>
                <h3 className="font-semibold text-gray-800">{order.id}</h3>
                <p className="text-sm text-gray-500">{order.date}</p>
                <p className="text-sm text-gray-600 mt-2">{order.items} items</p>
                <p className="text-lg font-bold text-blue-800">
                  ₹{order.total.toLocaleString()}
                </p>
                {order.note && (
                  <p className="text-xs text-gray-400 mt-1">{order.note}</p>
                )}
              </div>

              {/* Right */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <StatusIcon className="w-4 h-4 text-gray-600" />
                  <span
                    className={`text-xs px-2 py-1 rounded-full text-white cursor-pointer transition 
                      ${order.statusColor} hover:brightness-110 hover:shadow`}
                  >
                    {order.statusText}
                  </span>
                </div>
                <button className="flex items-center gap-1 px-3 py-1.5 border rounded-lg text-gray-700 hover:bg-gray-100 text-sm">
                  <Eye className="w-4 h-4" />
                  View Details
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
