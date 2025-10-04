import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { User, Mail, Phone, MapPin, Lock, Store, Hash } from "lucide-react";

export default function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    shopName: "",
    gst: "",
    pincode: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save user to localStorage
    localStorage.setItem("user", JSON.stringify(formData));

    // Redirect to Signin
    navigate("/signin");
  };

  return (
    <div className="flex items-center justify-center min-h-full bg-gray-100">
      <div className="bg-white w-full max-w-2xl rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-[#1F4E79]">
          Create Your Account
        </h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Name */}
          <div className="flex items-center gap-2 border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-[#1F4E79]">
            <User size={18} className="text-gray-400" />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="flex-1 outline-none"
              required
            />
          </div>

          {/* Email */}
          <div className="flex items-center gap-2 border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-[#1F4E79]">
            <Mail size={18} className="text-gray-400" />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="flex-1 outline-none"
              required
            />
          </div>

          {/* Phone */}
          <div className="flex items-center gap-2 border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-[#1F4E79]">
            <Phone size={18} className="text-gray-400" />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="flex-1 outline-none"
              required
            />
          </div>

          {/* Pincode */}
          <div className="flex items-center gap-2 border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-[#1F4E79]">
            <Hash size={18} className="text-gray-400" />
            <input
              type="text"
              name="pincode"
              placeholder="Pincode"
              value={formData.pincode}
              onChange={handleChange}
              className="flex-1 outline-none"
              required
            />
          </div>

          {/* Shop Name */}
          <div className="flex items-center gap-2 border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-[#1F4E79] md:col-span-2">
            <Store size={18} className="text-gray-400" />
            <input
              type="text"
              name="shopName"
              placeholder="Shop Name"
              value={formData.shopName}
              onChange={handleChange}
              className="flex-1 outline-none"
              required
            />
          </div>

          {/* GST */}
          <div className="flex items-center gap-2 border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-[#1F4E79] md:col-span-2">
            <Hash size={18} className="text-gray-400" />
            <input
              type="text"
              name="gst"
              placeholder="GST Number"
              value={formData.gst}
              onChange={handleChange}
              className="flex-1 outline-none"
              required
            />
          </div>

          {/* Address */}
          <div className="flex items-center gap-2 border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-[#1F4E79] md:col-span-2">
            <MapPin size={18} className="text-gray-400" />
            <input
              type="text"
              name="address"
              placeholder="Business Address"
              value={formData.address}
              onChange={handleChange}
              className="flex-1 outline-none"
              required
            />
          </div>

          {/* Password */}
          <div className="flex items-center gap-2 border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-[#1F4E79] md:col-span-2">
            <Lock size={18} className="text-gray-400" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="flex-1 outline-none"
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="md:col-span-2 mt-4 w-full bg-[#1F4E79] text-white py-2 rounded-lg font-medium hover:bg-[#163B5C] transition"
          >
            Sign Up
          </button>
        </form>

        {/* Already have account */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <Link to="/signin" className="text-[#1F4E79] hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
