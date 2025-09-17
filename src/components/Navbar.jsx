import { useState } from "react";
import { Menu, ShoppingCart, User } from "lucide-react";

export default function Navbar({ onToggleSidebar }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleToggle = () => {
    const newState = !sidebarOpen;
    setSidebarOpen(newState);
    if (onToggleSidebar) {
      onToggleSidebar(newState);
    }
  };

  return (
    <header className="flex justify-between items-center px-6 py-3 bg-white shadow-sm border-b">
      {/* Left: Brand + Hamburger */}
      <div className="flex items-center gap-3">
        <button
          onClick={handleToggle}
          className="p-2 rounded-lg hover:bg-gray-100"
        >
          <Menu size={22} className="text-[#1F4E79]" />
        </button>
        <h1 className="text-lg font-bold text-[#1F4E79]">RootnShade</h1>
      </div>

      {/* Right: Cart + Profile */}
      <div className="flex items-center gap-4">
        <button className="p-2 rounded-lg hover:bg-gray-100">
          <ShoppingCart size={22} className="text-[#1F4E79]" />
        </button>
        <button className="p-2 rounded-lg hover:bg-gray-100">
          <User size={22} className="text-[#1F4E79]" />
        </button>
      </div>
    </header>
  );
}
