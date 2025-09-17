"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function CartPage() {
  const { data: session } = useSession();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Fetch all cart items
    fetch("/api/add-to-cart") // your API to get all cart items
      .then((res) => res.json())
      .then((data) => setCartItems(data));
  }, []);

  if (!session) {
    return <p>Please login to see your cart.</p>;
  }

  // Filter items for logged-in user
  const myCart = cartItems.filter(
    (item) => item.email === session.user.email
  );

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">My Cart</h1>
      <p className="mb-4">Logged in as: {session.user.email}</p>

      {myCart.length === 0 ? (
        <p>No items found in your cart.</p>
      ) : (
        <div className="grid gap-4">
          {myCart.map((item) => (
            <div key={item._id} className="p-4 border rounded-lg shadow">
              <h2 className="font-semibold">{item.name}</h2>
              <p>Price: ${item.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
