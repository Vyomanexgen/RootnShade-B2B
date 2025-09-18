import { Mail, Phone, MapPin, User, Edit } from "lucide-react";

export default function Profile() {
  const user = {
    name: "Aditya Electronics",
    email: "contact@aditya-electronics.com",
    phone: "+91 98765 43210",
    address: "123 Market Street, Mumbai, India",
  };

  return (
    <div className="p-6">
      {/* Page Title */}
      <h2 className="text-2xl font-bold mb-6">Profile</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Side: User Info */}
        <div className="lg:col-span-2">
          <div className="bg-white border rounded-xl shadow-sm p-6 hover:shadow-md transition">
            {/* Avatar + Name */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold text-xl">
                {user.name.charAt(0)}
              </div>
              <div>
                <h3 className="text-xl font-semibold">{user.name}</h3>
                <p className="text-sm text-gray-500">Registered Business</p>
              </div>
            </div>

            {/* User Details */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-700">
                <Mail className="w-5 h-5 text-gray-500" />
                <span>{user.email}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <Phone className="w-5 h-5 text-gray-500" />
                <span>{user.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <MapPin className="w-5 h-5 text-gray-500" />
                <span>{user.address}</span>
              </div>
            </div>

            {/* Edit Button */}
            <div className="mt-6">
              <button className="flex items-center gap-2 px-4 py-2 bg-[#1F4E79] text-white rounded-lg font-medium hover:bg-[#163B5C] transition">
                <Edit size={18} /> Edit Profile
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: Account Summary */}
        <div>
          <div className="bg-white border rounded-xl shadow-sm p-6 hover:shadow-md transition">
            <h3 className="font-semibold mb-4">Account Summary</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Business Name</span>
                <span className="font-medium">{user.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Account Type</span>
                <span className="font-medium">Retailer</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Status</span>
                <span className="text-green-600 font-medium">Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
