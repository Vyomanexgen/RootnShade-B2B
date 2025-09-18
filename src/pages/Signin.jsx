import { useNavigate, Link } from "react-router-dom";

export default function Signin() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: auth logic
    navigate("/"); // redirect to home after login
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <div className="bg-white border rounded-xl shadow-sm p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            required
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1F4E79]"
          />
          <input
            type="password"
            placeholder="Password"
            required
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1F4E79]"
          />

          <button
            type="submit"
            className="w-full py-2 bg-[#1F4E79] text-white rounded-lg hover:bg-[#163B5C] transition"
          >
            Sign In
          </button>
        </form>

        <p className="mt-4 text-sm text-center text-gray-600">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-[#1F4E79] font-medium hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
