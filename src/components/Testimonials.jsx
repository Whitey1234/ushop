'use client'

import { FaStar } from 'react-icons/fa';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Regular Customer",
    image: "https://i.pravatar.cc/150?img=1",
    rating: 5,
    text: "Amazing products and excellent service! I've been a regular customer for months and never been disappointed."
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Verified Buyer",
    image: "https://i.pravatar.cc/150?img=2",
    rating: 5,
    text: "The quality is outstanding. Fast shipping and great customer support. Highly recommended!"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Fashion Enthusiast",
    image: "https://i.pravatar.cc/150?img=3",
    rating: 4,
    text: "Love the variety and style options. The prices are reasonable for the quality you get."
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div className="ml-4">
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}