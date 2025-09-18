import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, ShoppingCart, User, LogOut } from "lucide-react";

export default function Navbar({ onToggleSidebar }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const handleToggle = () => {
    const newState = !sidebarOpen;
    setSidebarOpen(newState);
    if (onToggleSidebar) {
      onToggleSidebar(newState);
    }
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSignOut = () => {
    setDropdownOpen(false);
    navigate("/signin"); // redirect to sign in
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
      <div className="flex items-center gap-4 relative" ref={dropdownRef}>
        <Link
          to="/cart"
          className="p-2 rounded-lg hover:bg-gray-100 transition"
        >
          <ShoppingCart size={22} className="text-[#1F4E79]" />
        </Link>

        {/* Profile Dropdown */}
        <button
          onClick={() => setDropdownOpen((prev) => !prev)}
          className="p-2 rounded-lg hover:bg-gray-100 relative"
        >
          <User size={22} className="text-[#1F4E79]" />
        </button>

        {dropdownOpen && (
          <div className="absolute right-0 top-12 w-48 bg-white border rounded-xl shadow-lg py-2 z-50">
            <Link
              to="/profile"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => setDropdownOpen(false)}
            >
              Profile
            </Link>
            <button
              onClick={handleSignOut}
              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
            >
              <LogOut size={16} /> Sign Out
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
