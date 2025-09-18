import Card from "../components/Card";
import { Search, Package, ShoppingCart, User, CreditCard, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div className="flex items-center justify-between bg-[#F4F6F8] px-6 py-6 rounded-lg">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Welcome back, Sai
          </h1>
          <p className="text-gray-600 text-sm mt-1">
            Here’s what’s happening with your business today
          </p>
        </div>
        <button className="bg-[#1F4E79] text-white px-4 py-2 rounded-lg flex items-center gap-2 shadow-sm">
          <CreditCard size={16} />
          Pay Credit Balance
        </button>
      </div>

      {/* Search Bar */}
      <div className="bg-white border rounded-lg shadow-sm p-4 flex items-center gap-2">
        <Search className="text-gray-400" size={18} />
        <input
          type="text"
          placeholder="Search products..."
          className="w-full outline-none text-sm text-gray-700"
        />
      </div>

      {/* Quick Links */}
      <section>
        <h2 className="font-semibold text-lg mb-3">Quick Links</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card
            title="Orders"
            value="12"
            valueType="pill"
            icon={<Package size={20} />}
            action={<ArrowRight size={18} className="text-gray-400" />}
          />
          <Card
            title="Cart"
            value="5"
            valueType="pill"
            icon={<ShoppingCart size={20} />}
            action={<ArrowRight size={18} className="text-gray-400" />}
          />
          <Card
            title="Profile"
            icon={<User size={20} />}
            action={<ArrowRight size={18} className="text-gray-400" />}
          />
          <Card
            title="Credit Details"
            value="2"
            valueType="pill"
            icon={<CreditCard size={20} />}
            action={<ArrowRight size={18} className="text-gray-400" />}
          />
        </div>
      </section>

      {/* Sales Overview */}
      <section>
        <h2 className="font-semibold text-lg mb-3">Sales Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card title="Today" value="₹15,340" badge="+12%" badgeColor="green" subtitle="vs previous period" />
          <Card title="This Week" value="₹89,520" badge="+8%" badgeColor="green" subtitle="vs previous period" />
          <Card title="This Month" value="₹3,45,680" badge="+15%" badgeColor="green" subtitle="vs previous period" />
        </div>
      </section>

      {/* Credit Balance */}
      <section>
        <Card
            title="Credit Balance"
            value="₹25,000"
            subtitle="Outstanding balance • Credit limit: ₹1,00,000"
            highlight
            icon={<CreditCard size={20} />}
            button={
                <button className="border border-[#1F4E79] text-[#1F4E79] px-5 py-2 rounded-lg flex items-center gap-2 shadow-sm hover:bg-[#2E7D32] hover:text-white hover:border-[#2E7D32] transition">
                <CreditCard size={16} />
                Pay Now
                </button>
            }
        />
      </section>
    </div>
  );
}
