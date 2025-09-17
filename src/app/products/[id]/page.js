
'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { notFound, useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import axios from 'axios';

export default function ProductPage({ params }) {
  const router = useRouter()
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
// const { data: session, status } = useSession()
const {data:session}=useSession()
// console.log(session?.user?.email)
const email = session?.user?.email


  useEffect(() => {
    if (params.id) {
      fetch(`/api/products/${params.id}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error('Product not found');
          }
          return res.json();
        })
        .then((data) => {
          setProduct(data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    }
  }, [params.id]);
 const handleAddToCart = () => {
  if (!email) {
    alert("You must log in to add to cart");
    return;
  }

  axios.post("/api/add-to-cart", {
    email,
    productId: product._id,
    name: product.name,
    description: product.description,
    price: product.price,
    imageUrl: product.imageUrl,
  })
  .then((res) => {
    alert(" Product added to cart!");
    console.log("Cart Response:", res.data);
    router.push('/add-to-card')
  })
  .catch((err) => {
    console.error(" Error adding to cart:", err);
    alert("Failed to add product to cart.");
  });
};


  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        {error}
      </div>
    );
  }

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8 my-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative h-96">
         <img
  src={product.imageUrl}
  alt={product.name}
  className="object-contain rounded-lg"
/>
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <div className="flex items-center mb-4">
            <span className="text-2xl font-bold text-blue-600">${product.price}</span>
          </div>
          <button onClick={handleAddToCart} className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
