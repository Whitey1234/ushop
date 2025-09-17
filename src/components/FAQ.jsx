'use client'

import { useState } from 'react';

const faqs = [
  {
    question: "How do I place an order?",
    answer: "Simply browse our products, add items to your cart, and proceed to checkout. You can pay using various payment methods including credit cards and PayPal."
  },
  {
    question: "Do you offer free shipping?",
    answer: "Yes! We offer free shipping on all orders over $50 within the continental US."
  },
  {
    question: "What is your return policy?",
    answer: "We accept returns within 30 days of purchase. Items must be unused and in original packaging."
  },
  {
    question: "How can I track my order?",
    answer: "Once your order ships, you'll receive a tracking number via email to monitor your delivery."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex justify-between items-center w-full p-4 bg-gray-50 hover:bg-gray-100 rounded-lg"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold">{faq.question}</span>
                <span className="text-xl">{openIndex === index ? '−' : '+'}</span>
              </button>
              {openIndex === index && (
                <div className="p-4 bg-white border border-gray-200 rounded-b-lg">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}