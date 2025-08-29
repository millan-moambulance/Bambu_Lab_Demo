"use client";
import { useState } from "react";
import Image from "next/image";

export default function ReviewsAndBlog() {
  const [active, setActive] = useState(0);

  const reviews = [
    {
      id: 1,
      logo: "ALL3DP",
      title: "Bambu Lab X1 Carbon Review: Fresh Thinking, No Tinkerin’",
      text: "This is a highly refined, technologically advanced 3D printer that provides one of the very best foundations to build a printing experience upon...",
    },
    {
      id: 2,
      logo: "tom’sHARDWARE",
      title: "Bambu Lab P1S Review: A New Standard for 3D Printing",
      text: "Its simple set up and ease of use makes it an excellent first printer for people with a bigger budget. It’s also a no-brainer for creative makers...",
    },
    {
      id: 3,
      logo: "Android Police",
      title: "Best filament 3D printer in 2024",
      text: "The Bambu Lab A1 offers the same 256mm cubed print area as its higher-end models, packed into a bed-slinger design. Reviewers praise its high performance...",
    },
    {
      id: 4,
      logo: "techradar",
      title: "Insane speed and quality make the P1P a firm favorite",
      text: "Nothing about the Bambu Lab P1P can prepare you for the impact it will have on the 3D print market. This compact machine disrupts with quality and speed...",
    },
  ];

  const blogs = [
    {
      id: 1,
      title: "Exclusive Model Program: Cash Rewards and Copyright Support",
      text: "When we communicated with creators on MakerWorld about features they want, one of the most frequent requests are Cash...",
    },
    {
      id: 2,
      title: "From Vision to Reality: Creating without Limits with Maker’s Supply",
      text: "Our supply chain has been redesigned to make creators more independent...",
    },
    {
      id: 3,
      title: "New Launch of MakerLab Experiments",
      text: "Introducing fresh experiments with groundbreaking 3D printing models...",
    },
    {
      id: 4,
      title: "Introducing Our CPO: Spaghetti, the Cat!",
      text: "Yes, our CPO is actually a cat, leading innovation with curiosity...",
    },
  ];

  return (
    <>
      {/* ====== Awards & Reviews Section ====== */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Awards & Reviews</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left: Magazine Cover */}
            <div className="col-span-1 flex justify-center">
              <Image
                src="/images/time-magazine.webp"
                alt="Time Magazine"
                className="rounded-lg shadow-lg object-cover"
                width={300}
                height={600}
              />
            </div>

            {/* Right: Reviews */}
            <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="bg-white p-6 rounded-lg shadow hover:shadow-md transition"
                >
                  <h4 className="font-bold text-green-600 text-sm mb-1">{review.logo}</h4>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">{review.title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {review.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
         
        </div>
      </section>

      {/* ====== Blog Section ====== */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Bambu Lab Blog</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Left: Image */}
            <div className="flex justify-center">
              <Image
                src="/images/blog-image.webp"
                alt="Blog"
                className="rounded-lg shadow-lg object-container"
                width={400}
                height={300}
              />
            </div>

            {/* Right: Blog List */}
            <div className="space-y-4">
              {blogs.map((blog) => (
                <div
                  key={blog.id}
                  className="border-b pb-3 cursor-pointer"
                  onClick={() => setActive(active === blog.id ? 0 : blog.id)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-gray-900">{blog.title}</h3>
                    <span className="text-gray-500">{active === blog.id ? "▲" : "▼"}</span>
                  </div>
                  {active === blog.id && (
                    <p className="text-gray-700 mt-2 text-sm leading-relaxed">
                      {blog.text}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
