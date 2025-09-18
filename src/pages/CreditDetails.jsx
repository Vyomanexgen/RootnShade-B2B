import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import {
  AlertCircle,
  CheckCircle2,
  Clock,
  CreditCard,
  QrCode,
  ShoppingCart,
} from "lucide-react";

function Keypad({ onInput, onClear }) {
  const keys = ["1","2","3","4","5","6","7","8","9","0","C"];
  return (
    <div className="grid grid-cols-3 gap-2 mt-4">
      {keys.map((key) => (
        <button
          key={key}
          className="bg-gray-100 py-3 rounded-lg text-lg font-medium hover:bg-gray-200 active:scale-95 transition"
          onClick={() => (key === "C" ? onClear() : onInput(key))}
        >
          {key}
        </button>
      ))}
    </div>
  );
}

export default function CreditDetails() {
  const [amount, setAmount] = useState("");
  const [showQR, setShowQR] = useState(false);
  const [showKeypad, setShowKeypad] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const location = useLocation();
  const outstanding = 25000;

  // Detect mobile (<=768px width)
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Handle query param `?paynow=true`
  useEffect(() => {
    const query = new URLSearchParams(location.search);
    if (query.get("paynow") === "true") {
      setAmount(outstanding.toString());
      if (isMobile) setShowKeypad(true);
    }
  }, [location.search, isMobile]);

  const transactions = [
    { id: 1, type: "Payment", date: "2024-01-10", amount: "+₹15,000", status: "Completed" },
    { id: 2, type: "Purchase", date: "2024-01-08", amount: "-₹8,500", status: "Debited" },
    { id: 3, type: "Payment", date: "2024-01-05", amount: "+₹22,000", status: "Completed" },
  ];

  const handleInput = (val) => setAmount((prev) => prev + val);
  const handleClear = () => setAmount("");
  const handlePayFull = () => {
    setAmount(outstanding.toString());
    setShowKeypad(false); // ✅ close keypad
  };

  return (
    <div className="p-6">
      {/* Header */}
      <h2 className="text-2xl font-bold mb-1">Credit Details</h2>
      <p className="text-gray-500 mb-6">
        Manage your credit balance and payment history
      </p>

      {/* Summary Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-6">
        {/* Outstanding Balance */}
        <div className="bg-white p-6 rounded-xl border shadow-sm hover:shadow-md transition">
          <p className="text-gray-600">Outstanding Balance</p>
          <h3 className="text-2xl font-bold text-orange-500">₹{outstanding}</h3>
          <div className="flex items-center text-sm text-gray-500 mt-2">
            <AlertCircle size={16} className="mr-1 text-orange-500" />
            Due: 2024-01-25
          </div>
        </div>

        {/* Credit Limit */}
        <div className="bg-white p-6 rounded-xl border shadow-sm hover:shadow-md transition">
          <p className="text-gray-600">Credit Limit</p>
          <h3 className="text-2xl font-bold">₹100,000</h3>
          <div className="w-full bg-gray-100 h-2 rounded mt-2">
            <div className="bg-orange-500 h-2 rounded w-1/4"></div>
          </div>
          <p className="text-sm text-gray-500 mt-1">25.0% used</p>
        </div>

        {/* Available Credit */}
        <div className="bg-white p-6 rounded-xl border shadow-sm hover:shadow-md transition">
          <p className="text-gray-600">Available Credit</p>
          <h3 className="text-2xl font-bold text-green-600">₹75,000</h3>
          <div className="flex items-center text-sm text-gray-500 mt-2">
            <CheckCircle2 size={16} className="mr-1 text-green-600" />
            Ready to use
          </div>
        </div>
      </div>

      {/* Make Payment + History */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Make Payment */}
        <div className="bg-white p-6 rounded-xl border shadow-sm hover:shadow-md transition">
          <h3 className="text-lg font-bold flex items-center gap-2 mb-4">
            <QrCode size={20} /> Make Payment
          </h3>

          <input
            type="text"
            value={amount}
            readOnly={isMobile}   // editable only on desktop
            placeholder="Enter amount"
            className="w-full border rounded-lg p-2 mb-4"
            onClick={() => isMobile && setShowKeypad(true)}
          />

          {/* Keypad only for mobile */}
          {isMobile && showKeypad && (
            <Keypad onInput={handleInput} onClear={handleClear} />
          )}

          <div className="flex gap-2 mt-4">
            <button
              onClick={() => setShowQR(true)}
              className="flex-1 bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-800 active:scale-95 transition"
            >
              Generate QR Code
            </button>
            <button
              onClick={handlePayFull}
              className="border px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 active:scale-95 transition"
            >
              Pay Full
            </button>
          </div>

          {showQR && (
            <div className="mt-4">
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=DummyPayment"
                alt="QR Code"
                className="mx-auto border rounded-lg shadow-sm"
              />
            </div>
          )}
        </div>

        {/* Payment History */}
        <div className="bg-white p-6 rounded-xl border shadow-sm hover:shadow-md transition">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold flex items-center gap-2">
              <Clock size={20} /> Payment History
            </h3>
            <Link
              to="/history"
              className="text-sm text-blue-600 hover:underline"
            >
              See All
            </Link>
          </div>

          <div className="space-y-4">
            {transactions.map((tx) => (
              <div
                key={tx.id}
                className="flex items-center justify-between hover:bg-gray-50 p-2 rounded-lg transition"
              >
                {/* Left */}
                <div className="flex items-center gap-3">
                  {tx.type === "Payment" ? (
                    <CreditCard className="text-green-500" size={20} />
                  ) : (
                    <ShoppingCart className="text-orange-500" size={20} />
                  )}
                  <div>
                    <p className="font-medium">{tx.type}</p>
                    <p className="text-sm text-gray-500">{tx.date}</p>
                  </div>
                </div>

                {/* Right */}
                <div className="text-right">
                  <p
                    className={`font-semibold ${
                      tx.amount.startsWith("+")
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {tx.amount}
                  </p>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${
                      tx.status === "Completed"
                        ? "bg-green-100 text-green-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {tx.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
