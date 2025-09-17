import Link from 'next/link';

export default function CTA() {
  return (
    <section className="py-20 bg-blue-600">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Start Shopping Today</h2>
        <p className="text-xl text-white mb-8">Join thousands of satisfied customers and discover our amazing products.</p>
        <Link 
          href="/products" 
          className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
        >
          Shop Now
        </Link>
      </div>
    </section>
  );
}