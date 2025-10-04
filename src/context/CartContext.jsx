import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // ✅ Add or update cart item
  const addOrUpdateItem = (product, type, qty) => {
    if (!qty || qty <= 0) return;

    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? {
                ...item,
                qtyKg: type === "single" ? qty : item.qtyKg,
                qtyCase: type === "case" ? qty : item.qtyCase,
              }
            : item
        );
      }
      return [
        ...prev,
        {
          ...product,
          qtyKg: type === "single" ? qty : 0,
          qtyCase: type === "case" ? qty : 0,
        },
      ];
    });
  };

  // ✅ Remove cart item (type-aware)
  const removeItem = (productId, type) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id !== productId) return item;
          if (type === "single") return { ...item, qtyKg: 0 };
          if (type === "case") return { ...item, qtyCase: 0 };
          return item;
        })
        .filter((item) => (item.qtyKg || item.qtyCase) > 0) // Remove only if both 0
    );
  };

  // ✅ Clear entire cart
  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{ cart, addOrUpdateItem, removeItem, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
