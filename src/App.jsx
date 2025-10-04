// App.jsx
import { useState, useRef, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

// Pages
import Home from "./pages/Home";
import Orders from "./pages/Orders";
import Returns from "./pages/Returns";
import Cart from "./pages/Cart";
import Offers from "./pages/Offers";
import CreditDetails from "./pages/CreditDetails";
import Reorder from "./pages/Reorder";
import Profile from "./pages/Profile";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import History from "./pages/History";
import Products from "./pages/Products";

// Cart Context
import { CartProvider } from "./context/CartContext";

export default function App() {
  const [collapsed, setCollapsed] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  const sidebarRef = useRef(null);
  const navbarRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        navbarRef.current &&
        !navbarRef.current.contains(event.target)
      ) {
        if (mobileOpen) setMobileOpen(false);
        if (!collapsed) setCollapsed(true);
      }
    }

    function handleScroll() {
      if (mobileOpen) setMobileOpen(false);
    }

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll, true);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, [mobileOpen, collapsed]);

  return (
    <CartProvider>
      <div className="h-screen bg-gray-50 flex flex-col">
        {/* Navbar */}
        <div ref={navbarRef}>
          <Navbar
            onToggleSidebar={() => setCollapsed((prev) => !prev)}
            onToggleMobile={() => setMobileOpen((prev) => !prev)}
          />
        </div>

        {/* Sidebar + Main Content */}
        <div className="flex flex-1 pt-[64px] min-h-[calc(100vh-64px)]">
          {/* Sidebar */}
          <div ref={sidebarRef}>
            <Sidebar collapsed={collapsed} mobileOpen={mobileOpen} />
          </div>

          {/* Main content */}
          <main className="flex-1 p-6 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/returns" element={<Returns />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/offers" element={<Offers />} />
              <Route path="/credit-details" element={<CreditDetails />} />
              <Route path="/history" element={<History />} />
              <Route path="/reorder" element={<Reorder />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/products" element={<Products />} />
            </Routes>
          </main>
        </div>
      </div>
    </CartProvider>
  );
}
