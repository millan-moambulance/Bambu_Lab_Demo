"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

import PrinterImg from "../assets/LabH2D.jpg";
import FilamentImg from "../assets/LabA1.png";
import MakerWorldImg from "../assets/LabP1S.png";
import SupplyImg from "../assets/LabA1Mini.jpg";

export default function ProductSection() {
  const router = useRouter();

  const products = [
    {
      id: 1,
      category: "3D Printers",
      title: "Powerful Tools for Makers",
      image: PrinterImg,
      links: [
        { label: "Buy now", href: "/products" },
        { label: "Compare all", href: "/products" },
      ],
    },
    {
      id: 2,
      category: "Filaments",
      title: "High-Quality 3D Printing Materials",
      image: FilamentImg,
      links: [
        { label: "Buy now", href: "/accessories/filament" },
        { label: "Explore", href: "/accessories/filament" },
      ],
    },
    {
      id: 3,
      category: "MakerWorld",
      title: "Download Premium Models",
      image: MakerWorldImg,
      links: [{ label: "Learn more", href: "/makerworld" }],
    },
    {
      id: 4,
      category: "Maker’s Supply",
      title: "Non-Printed Parts to Enrich Your Models",
      image: SupplyImg,
      links: [{ label: "Buy now", href: "/makerworld" }],
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-gray-50 rounded-lg shadow-sm p-6 flex flex-col items-center text-center hover:shadow-md transition"
          >
            <h4 className="text-sm text-gray-500 font-medium mb-2">
              {product.category}
            </h4>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              {product.title}
            </h2>

            {/* Image */}
            <div className="relative w-full h-56 md:h-64 mb-4">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-contain"
              />
            </div>

            {/* Links */}
            <div className="flex flex-wrap justify-center gap-6 text-green-600 font-medium">
              {product.links.map((link, index) => (
                <button
                  key={index}
                  onClick={() => router.push(link.href)}
                  className="hover:underline"
                >
                  {link.label} →
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
