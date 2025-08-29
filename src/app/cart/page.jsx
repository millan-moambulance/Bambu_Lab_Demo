"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function CartPage() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const updateQuantity = (id, delta) => {
    const updatedCart = cart.map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity + delta) }
        : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const total = cart.reduce((sum, item) => {
    const price = parseFloat(item.price.replace("$", "")) || 0;
    return sum + price * item.quantity;
  }, 0);

  if (cart.length === 0) {
    return <div className="p-8 text-center text-2xl text-white"> Your cart is empty.</div>;
  }

  return (
    <div className="bg-white text-black">
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6 ">Your Cart</h1>
      <div className="space-y-6">
        {cart.map((item) => (
          <div key={item.id} className="flex items-center gap-6 border-b pb-4">
            <div className="relative w-32 h-32">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-contain rounded-md"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold ">{item.name}</h2>
              <p className="text-green-600 font-bold ">{item.price}</p>
              <div className="flex items-center gap-2 mt-2">
                <button
                  onClick={() => updateQuantity(item.id, -1)}
                  className="px-3 py-1 bg-gray-200 rounded-md  text-green-500 font-bold"
                >
                  -
                </button>
                <span className="">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, 1)}
                  className="px-3 py-1 bg-gray-200 rounded-md text-green-500 font-bold "
                >
                  +
                </button>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                className="text-red-500 mt-2"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="text-right mt-8">
        <h2 className="text-2xl font-bold">Total: ${total.toFixed(2)}</h2>
        <button className="mt-4 bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-md font-semibold">
          Checkout
        </button>
      </div>
    </div>
    </div>
  );
}
