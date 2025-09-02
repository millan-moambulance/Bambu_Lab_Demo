import Footer from "@/components/Footer";
import Image from "next/image";
export default function MakerPage() {
   const shops = [
    {
      name: "Amazon",
      logo: "/images/Amazon.png",
      link: "https://www.amazon.in/",
    },
    {
      name: "Robu.in",
      logo: "/images/Robu.in.png",
      link: "https://robu.in/",
    },
    {
      name: "WOL3D",
      logo: "/images/Wol3D.png",
      link: "https://www.wol3d.com/",
    },
    {
      name: "IDEAL3D",
      logo: "/images/IDEAL3D.png",
      link: "https://www.ideal3d.com/",
    },
      {
      name: "Hydrotech 3D Chennai",
      logo: "/images/Hydrotech_3D_Chennai.png",
      link: "https://www.hydrotech3dchennai.com/",
    },
    {
      name: "3idea",
      logo: "/images/ideaImagineCreatePrint.png",
      link: "https://www.3idea.in/",
    },
  ];
  return (
    <div>
      <section className="relative flex items-center h-[65vh] bg-cover bg-center"
      style={{
            backgroundImage: "url('/images/wheretobuy-bg.jpg')",
      }}
      >
          {/* Overlay content */}
          <div className="absolute max-w-xl text-white z-10 px-4 text-center ml-56">
            <h1 className="text-black text-6xl font-bold">Where to buy</h1>
            <p className="text-black text-2xl mt-4 ">
              Discover the best ways to purchase our products, whether online or
              at retail locations near you.
            </p>
          </div>
      </section>
      <section className="py-16 bg-white">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Online Shop</h2>
        <p className="text-gray-600 mt-2">
          Browse and purchase our full range of products anytime, anywhere at our / partner online shop.
        </p>
      </div>

      {/* Shops grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto px-4">
        {shops.map((shop, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-8 bg-gray-100 rounded-lg shadow-sm"
          >
            <div className="w-48 h-20 flex items-center justify-center">
              <Image
                src={shop.logo}
                alt={shop.name}
                width={180}
                height={80}
                className="object-contain"
              />
            </div>
            <h3 className="mt-4 text-lg font-semibold">{shop.name}</h3>
            <a
              href={shop.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition"
            >
              Buy now
            </a>
          </div>
        ))}
      </div>
    </section>
    <Footer/>
    </div>
  );
}
