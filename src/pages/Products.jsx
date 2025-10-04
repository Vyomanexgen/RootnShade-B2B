import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import appleImg from "../assets/apple.jpeg";
import breadImg from "../assets/bread.jpeg";
import milkImg from "../assets/milk.jpeg";

const sampleProducts = [
  { id: 1, name: "Apple", pricePerKg: 120, pricePerCase: 120 * 25, img: appleImg },
  { id: 2, name: "Milk", pricePerKg: 50, pricePerCase: 50 * 25, img: milkImg },
  { id: 3, name: "Bread", pricePerKg: 40, pricePerCase: 40 * 25, img: breadImg },
];

export default function Products() {
  const { cart, addOrUpdateItem, removeItem } = useCart();

  // Separate states for single and case
  const [showSingleInput, setShowSingleInput] = useState({});
  const [showCaseInput, setShowCaseInput] = useState({});
  const [quantitiesSingle, setQuantitiesSingle] = useState({});
  const [quantitiesCase, setQuantitiesCase] = useState({});

  const getUnits = (name) => {
    if (name.toLowerCase() === "bread") return { single: "Pkt", case: "Case (25Pkt)" };
    if (name.toLowerCase() === "milk") return { single: "Liter", case: "Case (25L)" };
    return { single: "Kg", case: "Case (25Kg)" };
  };

  // Sync UI with cart
  useEffect(() => {
    const newSingle = {};
    const newCase = {};
    const showSingle = {};
    const showCase = {};

    cart.forEach((item) => {
      if (item.qtyKg > 0) {
        newSingle[item.id] = item.qtyKg;
        showSingle[item.id] = true;
      }
      if (item.qtyCase > 0) {
        newCase[item.id] = item.qtyCase;
        showCase[item.id] = true;
      }
    });

    setQuantitiesSingle(newSingle);
    setQuantitiesCase(newCase);
    setShowSingleInput(showSingle);
    setShowCaseInput(showCase);
  }, [cart]);

  // Add click handlers
  const handleAddSingle = (product) => {
    setShowSingleInput((p) => ({ ...p, [product.id]: true }));
    setQuantitiesSingle((p) => ({ ...p, [product.id]: 1 }));
    addOrUpdateItem(product, "single", 1);
  };

  const handleAddCase = (product) => {
    setShowCaseInput((p) => ({ ...p, [product.id]: true }));
    setQuantitiesCase((p) => ({ ...p, [product.id]: 1 }));
    addOrUpdateItem(product, "case", 1);
  };

  // Quantity change handlers
  const handleQtyChangeSingle = (product, value) => {
    const qty = parseInt(value) || 0;
    setQuantitiesSingle((p) => ({ ...p, [product.id]: qty }));
    if (qty > 0) addOrUpdateItem(product, "single", qty);
  };

  const handleQtyChangeCase = (product, value) => {
    const qty = parseInt(value) || 0;
    setQuantitiesCase((p) => ({ ...p, [product.id]: qty }));
    if (qty > 0) addOrUpdateItem(product, "case", qty);
  };

  // Blur handlers
  const handleBlurSingle = (product) => {
    const qty = quantitiesSingle[product.id] || 0;
    if (qty <= 0) {
      removeItem(product.id, "single");
      setShowSingleInput((p) => ({ ...p, [product.id]: false }));
      setQuantitiesSingle((p) => {
        const updated = { ...p };
        delete updated[product.id];
        return updated;
      });
    }
  };

  const handleBlurCase = (product) => {
    const qty = quantitiesCase[product.id] || 0;
    if (qty <= 0) {
      removeItem(product.id, "case");
      setShowCaseInput((p) => ({ ...p, [product.id]: false }));
      setQuantitiesCase((p) => {
        const updated = { ...p };
        delete updated[product.id];
        return updated;
      });
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sampleProducts.map((product) => {
          const units = getUnits(product.name);
          const inCart = cart.find((item) => item.id === product.id);

          return (
            <div
              key={product.id}
              className="border rounded-xl shadow-sm bg-white hover:shadow-md transition flex flex-col"
            >
              <div className="w-full h-40 flex items-center justify-center bg-gray-50 rounded-t-xl">
                <img
                  src={product.img}
                  alt={product.name}
                  className="h-full object-cover rounded-t-xl"
                />
              </div>

              <div className="p-4 flex-1 flex flex-col">
                <h2 className="font-semibold text-gray-800 text-base">{product.name}</h2>

                {/* Single Unit */}
                <div className="mt-3 flex items-center justify-between">
                  <label className="text-sm font-medium text-gray-700">{units.single}:</label>
                  {showSingleInput[product.id] ? (
                    <input
                      type="number"
                      min="0"
                      value={quantitiesSingle[product.id] || ""}
                      onChange={(e) => handleQtyChangeSingle(product, e.target.value)}
                      onBlur={() => handleBlurSingle(product)}
                      className="w-20 border rounded-lg px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 text-center"
                    />
                  ) : (
                    <button
                      onClick={() => handleAddSingle(product)}
                      className="w-20 bg-blue-500 hover:bg-blue-600 text-white text-sm px-2 py-1 rounded-lg"
                    >
                      Add
                    </button>
                  )}
                </div>

                {/* Case Unit */}
                <div className="mt-3 flex items-center justify-between">
                  <label className="text-sm font-medium text-gray-700">{units.case}:</label>
                  {showCaseInput[product.id] ? (
                    <input
                      type="number"
                      min="0"
                      value={quantitiesCase[product.id] || ""}
                      onChange={(e) => handleQtyChangeCase(product, e.target.value)}
                      onBlur={() => handleBlurCase(product)}
                      className="w-20 border rounded-lg px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 text-center"
                    />
                  ) : (
                    <button
                      onClick={() => handleAddCase(product)}
                      className="w-20 bg-blue-500 hover:bg-blue-600 text-white text-sm px-2 py-1 rounded-lg"
                    >
                      Add
                    </button>
                  )}
                </div>

                {/* Quantity Summary */}
                {inCart && (
                  <div className="mt-4 text-sm text-gray-700 bg-gray-50 p-2 rounded-lg">
                    <p>
                      {inCart.qtyKg > 0 && (
                        <span>{inCart.qtyKg} {units.single}</span>
                      )}
                      {inCart.qtyCase > 0 && (
                        <span className="block">{inCart.qtyCase} {units.case}</span>
                      )}
                    </p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
