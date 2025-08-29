"use client";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const products = [
  {
    id: "h2d",
    name: "Bambu Lab H2D",
    description: "Rethink Personal Manufacturing with advanced precision 3D printing.",
    features: [
      "High-speed core XY motion system",
      "Automatic bed leveling",
      "Multi-material compatibility",
      "Smart AI monitoring"
    ],
    price: "$1299",
    image: "/images/LabH2D.jpg"
  },
  {
    id: "a1",
    name: "Bambu Lab A1",
    description: "A colorful gateway to 3D printing with seamless usability.",
    features: [
      "Compact design",
      "Color printing capability",
      "Quiet operation",
      "Beginner friendly"
    ],
    price: "$699",
    image: "/images/LabA1.png"
  },
  {
    id: "a1mini",
    name: "Bambu Lab A1",
    description: "The G.O.A.T of Entry-Level 3D Printing",
    features: [
      "Compact design",
      "Color printing capability",
      "Quiet operation",
      "Beginner friendly"
    ],
    price: "$699",
    image: "/images/LabA1Mini.jpg"
  },
  {
    id: "p1s",
    name: "Bambu Lab P1S",
    description: "Versatile workhorse 3D printer built for reliability.",
    features: [
      "Enclosed chamber for stability",
      "Fast printing speed",
      "High-temp material support",
      "Wi-Fi connectivity"
    ],
    price: "$899",
    image: "/images/LabP1S.png"
  },
  {
    id: "software",
    name: "Bambu Lab Softwares",
    description: "Versatile workhorse 3D printer built for reliability.",
    features: [
      "Enclosed chamber for stability",
      "Fast printing speed",
      "High-temp material support",
      "Wi-Fi connectivity"
    ],
    price: "$999",
    image: "/images/Bambu Stdio.png"
  },
  
{
    id: "h2dpro",
    name: "Bambu Lab H2D Pro",
    description: "Professional Dual-Nozzle 3D Printing Solution",
    features: [
      "Tailor Solution For Printer Management",
      "Dual-Nozzle, Enhanced Productivity",
      "Professional High-Temperature Printing Solution",
      "HRA 90 Tougher nozzle, lower maintainance"
    ],
    price: "$4999",
    image: "/images/H2D Pro.png"
  },
{
    id: "x1e",
    name: "Bambu Lab X1E",
    description: "For Professionals and Enginneering Applications",
    features: [
      "Enhanced And More Connection Options",
      "Fully Functional With LAN Only Mode",
      "Reduce Warping, Improve Layer Bonding",
      "Wi-Fi connectivity"
    ],
    price: "$1999",
    image: "/images/X1E.png"
  },
  {
    id: "x1c",
    name: "Bambu Lab X1C",
    description: "The Flagship CoreXY 3D Printer",
    features: [
      "Enhanced And More Connection Options",
      "Fully Functional With LAN Only Mode",
      "Reduce Warping, Improve Layer Bonding",
      "Wi-Fi connectivity"
    ],
    price: "$1999",
    image: "/images/X1 Series.png"
  },

];

export default function ProductDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const found = products.find((p) => p.id === id);
    setProduct(found || null);
  }, [id]);

  const handleBuy = () => {
    if (!product) return;

    // Get cart from localStorage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if product already exists
    const exists = cart.find((item) => item.id === product.id);
    if (exists) {
      exists.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    // Save back to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Redirect to cart page
    router.push("/cart");
  };

  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen text-xl">
        Product not found 
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-8 grid md:grid-cols-2 gap-10">
      {/* Product Image */}
      <div className="relative w-full h-[500px] ">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain rounded-lg shadow-lg items-center outline-amber-100"
        />
      </div>

      {/* Product Info */}
      <div>
        <h1 className="text-4xl text-white font-bold mb-4">{product.name}</h1>
        <p className="text-gray-200 mb-6 text-lg">{product.description}</p>

        <h3 className="text-xl font-semibold mb-2 text-white">Features:</h3>
        <ul className="list-disc text-lg pl-6 mb-6 text-gray-200">
          {product.features.map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
        </ul>

        <p className="text-2xl font-bold text-green-600 mb-6">
          {product.price}
        </p>

        <button
          onClick={handleBuy}
          className="bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-md font-semibold"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}
