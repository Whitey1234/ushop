"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function DashboardLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col md:flex-row  bg-blue-400">
      {/* Mobile Navbar */}
      <header className="md:hidden bg-gray-900 text-white flex items-center justify-between p-4">
        <h2 className="text-xl font-bold">Dashboard</h2>
        <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Sidebar */}
      <aside
        className={`fixed md:static top-0 left-0 h-full w-64  text-white p-4 transform transition-transform duration-300 z-50 
        ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        <h2 className="hidden md:block text-xl font-bold mb-4">Dashboard</h2>
        <nav className="flex flex-col gap-2">
          <a href="/dashboard" className="hover:bg-gray-700 p-2 rounded">
            Home
          </a>
          <a href="/dashboard/profile" className="hover:bg-gray-700 p-2 rounded">
            Profile
          </a>
          <a href="/dashboard/settings" className="hover:bg-gray-700 p-2 rounded">
            Settings
          </a>
          <Link href={"/dashboard/add-product"} className="hover:bg-gray-700 p-2 rounded"> Add Product </Link>

           <Link href={"/dashboard/Product-control"} className="hover:bg-gray-700 p-2 rounded"> Product control </Link>
        </nav>
      </aside> 

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100 mt-16 md:mt-0 md:ml-0">
        {children}
      </main>
    </div>
  );
}
