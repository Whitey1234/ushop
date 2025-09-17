import Image from 'next/image';
import { FaUsers, FaShoppingBag, FaStar } from 'react-icons/fa';

export default function About() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Founded in 2023, U-Shope has been dedicated to providing high-quality products that enhance your lifestyle. 
              Our passion for excellence drives us to carefully curate every item in our collection.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              We believe in offering not just products, but experiences that bring joy and satisfaction to our customers. 
              Our team works tirelessly to ensure you get the best service and value for your money.
            </p>
            <div className="grid grid-cols-3 gap-6">
              <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                <FaUsers className="text-3xl text-blue-600 mb-2" />
                <h3 className="text-2xl font-bold text-blue-600">10K+</h3>
                <p className="text-gray-600 text-sm">Happy Customers</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                <FaShoppingBag className="text-3xl text-blue-600 mb-2" />
                <h3 className="text-2xl font-bold text-blue-600">5K+</h3>
                <p className="text-gray-600 text-sm">Products Sold</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                <FaStar className="text-3xl text-blue-600 mb-2" />
                <h3 className="text-2xl font-bold text-blue-600">4.9</h3>
                <p className="text-gray-600 text-sm">Average Rating</p>
              </div>
            </div>
          </div>
          <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
              alt="Our Story"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}