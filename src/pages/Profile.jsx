export default function Profile() {
  const user = {
    name: "Aditya Electronics",
    email: "contact@aditya-electronics.com",
    phone: "+91 98765 43210",
    address: "123 Market Street, Mumbai, India",
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Profile</h2>
      <div className="bg-white shadow-sm rounded-lg p-6 border space-y-3">
        <p>
          <span className="font-semibold">Name:</span> {user.name}
        </p>
        <p>
          <span className="font-semibold">Email:</span> {user.email}
        </p>
        <p>
          <span className="font-semibold">Phone:</span> {user.phone}
        </p>
        <p>
          <span className="font-semibold">Address:</span> {user.address}
        </p>
        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Edit Profile
        </button>
      </div>
    </div>
  );
}
