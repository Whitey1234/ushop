'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { FaShoppingCart, FaUserCircle, FaSignOutAlt, FaSignInAlt, FaBars, FaTimes } from 'react-icons/fa'
import axios from 'axios'

export default function Navbar() {
  const { data: session, status } = useSession()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const[userRole,setUserRole] = useState(null)
  console.log(session?.user?.email)
  const user = session?.user?.email;

    useEffect(() => {
    const fetchUserRole = async () => {
      if (session?.user?.email) {
        try {
          const res = await axios.get(`/api/user/email`, {
            params: { email: session.user.email },
          })
          setUserRole(res.data.role)
          console.log("Fetched role:", res.data.role)
        } catch (error) {
          console.error("Error fetching user role:", error)
        }
      }
    }
    fetchUserRole()
  }, [session?.user?.email])

 const  admin = userRole === 'admin'

  return (
    <nav className="bg-white shadow-md py-4 px-6 fixed top-0 left-0 right-0 z-50 w-full">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <Link href="/" className="text-2xl font-bold text-blue-600">
            U-Shope
          </Link>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 hover:text-blue-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/products" className="text-gray-700 hover:text-blue-600 transition-colors">
              Products
            </Link>
            {session && admin && (
              
              <Link href="/dashboard" className="text-gray-700 hover:text-blue-600 transition-colors">
                Dashboard
              </Link>
            )}
          </div>

          {/* Right Side Items - Desktop */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/add-to-card" className="text-gray-700 hover:text-blue-600">
              <FaShoppingCart className="text-xl" />
            </Link>

            {status === 'loading' ? (
              <div className="animate-pulse bg-gray-300 w-24 h-10 rounded-md"></div>
            ) : session ? (
              <>
                <div className="tooltip tooltip-bottom" data-tip={session?.user?.name}>
                  <Link href="/profile" className="text-gray-700 hover:text-blue-600">
                    <FaUserCircle className="text-xl" />
                  </Link>
                </div>
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

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} pt-4`}>
          <div className="flex flex-col space-y-4">
            <Link 
              href="/products" 
              className="text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>

            {/* <Link 
              href="/add-to-cart" 
              className="text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Add to Cart
            </Link> */}

            {session && (
              <Link 
                href="/dashboard" 
                className="text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Dashboard
              </Link>
            )}
            <Link 
              href="/add-to-card" 
              className="text-gray-700 hover:text-blue-600 flex items-center space-x-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <FaShoppingCart />
              <span>Cart</span>
            </Link>
            {session ? (
              <>
                <Link 
                  href="/profile" 
                  className="text-gray-700 hover:text-blue-600 flex items-center space-x-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <FaUserCircle />
                  <span>{session.user.name}</span>
                </Link>
                <button
                  onClick={() => {
                    signOut();
                    setIsMenuOpen(false);
                  }}
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
                onClick={() => setIsMenuOpen(false)}
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