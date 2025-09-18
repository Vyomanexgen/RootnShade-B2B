import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Package,
  Gift,
  CreditCard,
  RotateCcw,
} from "lucide-react";

const links = [
  { name: "Home", path: "/", icon: <Home size={18} /> },
  { name: "Orders", path: "/orders", icon: <Package size={18} /> },
  { name: "Offers", path: "/offers", icon: <Gift size={18} /> },
  { name: "Credit Details", path: "/credit-details", icon: <CreditCard size={18} /> },
  { name: "Reorder", path: "/reorder", icon: <RotateCcw size={18} /> },
];

export default function Sidebar() {
  const { pathname } = useLocation();

  return (
    <aside className="w-64 bg-white border-r shadow-sm flex flex-col">
      <nav className="flex-1 p-4 space-y-2">
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg transition font-inter text-sm ${
              pathname === link.path
                ? "bg-[#1F4E79] text-white font-semibold border border-[#163B5C]"
                : "text-gray-700 hover:bg-[#F4F6F8]"
            }`}
          >
            {link.icon}
            <span>{link.name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
