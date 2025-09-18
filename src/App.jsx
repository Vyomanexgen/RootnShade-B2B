import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Orders from "./pages/Orders";
import Cart from "./pages/Cart";
import Offers from "./pages/Offers";
import CreditDetails from "./pages/CreditDetails";
import Reorder from "./pages/Reorder";
import Profile from "./pages/Profile";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import History from "./pages/History";

export default function App() {
  const [collapsed, setCollapsed] = useState(false);   // desktop collapse
  const [mobileOpen, setMobileOpen] = useState(false); // mobile open/close

  return (
    <div className="h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar
        onToggleSidebar={() => setCollapsed((prev) => !prev)}
        onToggleMobile={() => setMobileOpen((prev) => !prev)}
      />

      {/* Sidebar + Main Content */}
      <div className="flex h-full pt-[64px]">
        <Sidebar collapsed={collapsed} mobileOpen={mobileOpen} />

        <main className="flex-1 p-6 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/credit-details" element={<CreditDetails />} />
            <Route path="/history" element={<History />} />
            <Route path="/reorder" element={<Reorder />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>
      </div>
    </div>
  );
} 