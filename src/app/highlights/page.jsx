'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaStar, FaFire, FaShippingFast } from 'react-icons/fa'

export default function Highlights() {
  // Demo product data
  const demoHighlights = [
    {
      _id: '1',
      name: 'Premium Wireless Headphones',
      description: 'Experience crystal-clear sound with our premium noise-canceling wireless headphones. Perfect for music lovers and professionals.',
      price: 299.99,
      originalPrice: 399.99,
      imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
      ratings: 456,
      discount: 25
    },
    {
      _id: '2',
      name: 'Smart Fitness Watch',
      description: 'Track your health and stay connected with this advanced fitness tracker. Features heart rate monitoring, GPS, and more.',
      price: 199.99,
      originalPrice: 249.99,
      imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
      discount: 20
    },
    {
      _id: '3',
      name: 'Professional Camera Kit',
      description: 'Capture life\'s moments in stunning detail with this professional-grade camera kit. Includes multiple lenses and accessories.',
      price: 1299.99,
      imageUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32'
    },
    {
      _id: '4',
      name: 'Ultra-Slim Laptop',
      description: 'Powerful performance meets elegant design. Perfect for work and entertainment on the go.',
      price: 899.99,
      originalPrice: 999.99,
      imageUrl: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853',
      discount: 10
    }
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Featured Products</h1>
      
      {/* Featured Product of the Day */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 flex items-center">
          <FaFire className="text-orange-500 mr-2" />
          Product of the Day
        </h2>
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-96">
              <img
                src={demoHighlights[0].imageUrl}
                alt={demoHighlights[0].name}
                fill
                className="object-contain"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-3xl font-bold">{demoHighlights[0].name}</h3>
              <p className="text-gray-600">{demoHighlights[0].description}</p>
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-blue-600">
                  ${demoHighlights[0].price}
                </span>
                <span className="text-lg text-gray-400 line-through">
                  ${demoHighlights[0].originalPrice}
                </span>
              </div>
              <div className="flex items-center space-x-2 text-yellow-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <span className="text-gray-600 ml-2">({demoHighlights[0].ratings} reviews)</span>
              </div>
              <div className="flex items-center text-green-600 space-x-2">
                <FaShippingFast />
                <span>Free Shipping</span>
              </div>
              <Link 
                href={`/products/${demoHighlights[0]._id}`}
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Other Highlighted Products */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {demoHighlights.slice(1).map((product) => (
          <div key={product._id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="relative h-64">
              <img
                src={product.imageUrl}
                alt={product.name}
                
                className="object-cover"
              />
              {product.discount && (
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full">
                  -{product.discount}%
                </div>
              )}
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-xl font-bold text-blue-600">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-400 line-through ml-2">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
                <Link 
                  href={`/products/${product._id}`}
                  className="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-200 transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}