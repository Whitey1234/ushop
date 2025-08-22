'use client'

import React from 'react'
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { FaShoppingCart, FaUserCircle, FaSignOutAlt, FaSignInAlt } from 'react-icons/fa'

export default function Navbar() {
  const { data: session, status } = useSession()

  return (
    <nav className="bg-white shadow-md py-4 px-6">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <Link href="/" className="text-2xl font-bold text-blue-600">
            U-Shope
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/products" className="text-gray-700 hover:text-blue-600 transition-colors">
              Products
            </Link>
            {session && (
              <Link href="/dashboard" className="text-gray-700 hover:text-blue-600 transition-colors">
                Dashboard
              </Link>
            )}
          </div>

          {/* Right Side Items */}
          <div className="flex items-center space-x-6">
            <Link href="/cart" className="text-gray-700 hover:text-blue-600">
              <FaShoppingCart className="text-xl" />
            </Link>

            {status === 'loading' ? (
              <div className="animate-pulse bg-gray-300 w-24 h-10 rounded-md"></div>
            ) : session ? (
              <>
                <Link href="/profile" className="text-gray-700 hover:text-blue-600">
                  <FaUserCircle className="text-xl" />
                </Link>
                <button
                  onClick={() => signOut()}
                  className="flex items-center space-x-2 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
                >
                  <FaSignOutAlt />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <Link
                href={'/login'}
                className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                <FaSignInAlt />
                <span>Login</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
