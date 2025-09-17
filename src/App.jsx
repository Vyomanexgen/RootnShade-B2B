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

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-50">
      {sidebarOpen && <Sidebar />}
      <div className="flex flex-col flex-1">
        <Navbar onToggleSidebar={setSidebarOpen} />
        <main className="p-6 overflow-y-auto flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/credit-details" element={<CreditDetails />} />
            <Route path="/reorder" element={<Reorder />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
