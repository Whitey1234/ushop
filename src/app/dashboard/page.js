'use client'

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Protect the route
  // if (status === "unauthenticated") {
  //   router.push("/login");
  //   return null; // Render nothing while redirecting
  // }
  
  // Show a loading state while session is being checked
  if (status === "loading") {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to your Dashboard, {session.user.name}!
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          This is your central hub. From here, you can manage your products, view analytics, and more.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Add Product Card */}
          <Link href="/dashboard/add-product" className="block p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">Add a New Product</h2>
            <p className="text-gray-700">Click here to go to the form and add new items to your store.</p>
          </Link>

          {/* Placeholder for another feature */}
          <div className="block p-6 bg-white rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold text-gray-500 mb-2">View Analytics (Coming Soon)</h2>
            <p className="text-gray-500">Analytics and reporting features will be available here.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
