'use client'

import { useState } from "react";
import { signIn } from "next-auth/react";
import { FaEnvelope, FaGoogle, FaHornbill, FaLock } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      email,
      password,
      callbackUrl: "/",
    });

    if (result.error) {
      setError(result.error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Welcome Back
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Please sign in to your account
          </p>
        </div>
         <button
                onClick={() => signIn("google",{callbackUrl:"/"})}
                className="flex items-center gap-2 border-2 border-blue-500 p-2 rounded-2xl w-full hover:bg-blue-600 hover:text-white transition-colors duration-100"
              >
                <FaGoogle className="text-blue-400" size={20} />
                Sign in with Google
              </button>
      <p className="text-center text-blue-700 flex justify-center items-center gap-0.5 text-2xl"><FaHornbill /> or</p>
        
        <form className="mt-8 space-y-6" onSubmit={submit}>
          <div className="rounded-md shadow-sm space-y-4">
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                required
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none relative block w-full px-12 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                required
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none relative block w-full px-12 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <Link href="/forgot-password" className="font-medium text-blue-600 hover:text-blue-500">
                Forgot your password?
              </Link>
            </div>
          </div>

          <button
            type="submit"
            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
          >
            Sign in
          </button>

          <p className="text-center text-sm text-gray-600">
            Dont have an account?{' '}
            <Link href="/signup" className="font-medium text-blue-600 hover:text-blue-500">
              Sign up
            </Link>
          </p>
        </form>
        {error && <p className="text-center text-sm text-red-600 mt-4">{error}</p>}
      </div>
    </div>
  );
}
