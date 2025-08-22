import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center">
       
        <div className="md:w-1/2 mb-12 md:mb-0 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
            Discover Amazing 
            <span className="text-blue-600"> Products</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-md">
            Find the best deals on premium products. Shop with confidence and enjoy exclusive offers.
          </p>
          <div className="flex gap-4">
            <Link 
              href="/products" 
              className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors font-semibold"
            >
              Shop Now
            </Link>
            <Link 
              href="/categories" 
              className="bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors font-semibold border-2 border-blue-600"
            >
              Browse Categories
            </Link>
          </div>
         
          <div className="flex gap-8 pt-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-800">10k+</h3>
              <p className="text-gray-600">Products</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-800">8k+</h3>
              <p className="text-gray-600">Users</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-800">99%</h3>
              <p className="text-gray-600">Satisfaction</p>
            </div>
          </div>
        </div>

        
        <div className="md:w-1/2 relative">
          <div className="w-full h-[400px] relative">
            <Image
              src="/hero-image.jpg" 
              alt="Shopping Experience"
              fill
              className="object-cover rounded-2xl shadow-xl"
              priority
            />
          </div>
          {/* Floating Card */}
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
            <div className="flex items-center gap-3">
              <div className="bg-green-100 p-2 rounded-full">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-gray-800">Trusted by 10k+</p>
                <p className="text-sm text-gray-500">Satisfied customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
