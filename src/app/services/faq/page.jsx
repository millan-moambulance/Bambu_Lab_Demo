"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Footer from "@/components/Footer";

const faqs = [
  {
    question: "What is your return policy?",
    answer:
      "We accept returns within 30 days of purchase. Items must be in original condition and packaging.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Shipping usually takes 5-7 business days depending on your location.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, we ship worldwide. Shipping rates are calculated at checkout.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "You can reach us via email at support@gmail.com or call us at +1 234 567 890.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Frequently Asked Questions</h1>
      <div className="w-full max-w-2xl space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-4 cursor-pointer transition"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-medium text-gray-800">{faq.question}</h2>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-gray-600" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-600" />
              )}
            </div>
            {openIndex === index && (
              <p className="mt-3 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
}
