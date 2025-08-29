// src/app/products/page.jsx
"use client";
import Link from "next/link";
import Image from "next/image";

const products = [
  {
    id: "h2d",
    name: "Bambu Lab H2D",
    image: "/images/LabH2D.jpg",
    description: "Rethink Personal Manufacturing",
  },
  {
    id: "a1",
    name: "Bambu Lab A1",
    image: "/images/LabA1.png",
    description: "A Colorful Gateway To 3D Printing",
  },
  {
    id: "a1mini",
    name: "Bambu Lab A1 Mini",
    image: "/images/LabA1Mini.jpg",
    description: "The G.O.A.T of Entry-Level 3D Printing",
  },
  {
    id: "p1s",
    name: "Bambu Lab P1S",
    image: "/images/LabP1S.png",
    description: "Versatile Workhorse 3D Printer",
  },
    {
    id: "x1c",
    name: "Bambu Lab X1C",
    image: "/images/X1 Series.png",
    description: "The Flagship CoreXY 3D Printer",
  },
    {
    id: "h2dpro",
    name: "Bambu Lab H2D Pro",
    image: "/images/H2D pro.png",
    description: "Professional Dual-Nozzle 3D Printing Solution",
  },
   {
    id: "x1e",
    name: "Bambu Lab X1E",
    image: "/images/X1E.png",
    description: "For Professionals and Enginneering Applications",
  },
  //  {
  //   id: "ams2pro",
  //   name: "Bambu Lab H2D Pro",
  //   image: "/images/LabP1S.png",
  //   description: "Drying, Storage, Feeding in One Box",
  // },
  //  {
  //   id: "amsht",
  //   name: "Bambu Lab H2D Pro",
  //   image: "/images/LabP1S.png",
  //   description: "Specialized for High-Performance Materials",
  // },
  // {
  //   id: "ams",
  //   name: "Bambu Lab H2D Pro",
  //   image: "/images/LabP1S.png",
  //   description: "The Original Automatic Material System",
  // },
  // {
  //   id: "amslite",
  //   name: "Bambu Lab AMS Lite",
  //   image: "/images/LabP1S.png",
  //   description: "Affordable Multi-Color Printing Solution",
  // },
];

export default function ProductsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Products</h1>
      <div className="flex flex-wrap justify-center gap-6 mt-10">
        {/* grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 */}
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center p-4 bg-white shadow rounded hover:shadow-lg transition cursor-pointer "
            // bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition
          >

            <div className=" ">
            <Image
              src={product.image}
              alt={product.name}
              width={400}
              height={300}
              className="rounded-md object-contain h-50"
            />
            </div>
            <div className=" ">
            <h2 className="text-xl font-bold mt-4 text-black">{product.name}</h2>
            <p className="text-gray-600 mt-2">{product.description}</p>
            <Link
              href={`/products/${product.id}`}
              className="mt-4 inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500 mb-4"
            >
              View Details
            </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
