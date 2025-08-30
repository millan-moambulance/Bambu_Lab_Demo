
"use client";
import { useState } from "react";
import Image from "next/image";
import { ShoppingBag, RefreshCw, Search, MessageCircle, ClipboardList, ClipboardCheck} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRef } from "react";
import Footer from "@/components/Footer";


export default function ProductSupport() {
  const swiperRef = useRef(null);
  const contacts = [
    {
      icon: <MessageCircle className="w-10 h-10 text-green-600" />,
      title: "Live Chat",
      description:
        "For product and general inquiries, such as specifications, promotions, payment methods, invoices, tax policies, and order modification requests, ",
      linkText: "please contact us via Live Chat.",
      link: "#",
      extra: "Online time: 24/7",
    },
    {
      icon: <ClipboardList className="w-10 h-10 text-green-600" />,
      title: "General Ticket",
      description:
        "For accessories/filament issues, shipping/delivery issues, such as missing or incorrect items, undelivered/damaged packages, and account issues, ",
      linkText: "please submit a General Ticket.",
      link: "#",
    },
    {
      icon: <ClipboardCheck className="w-10 h-10 text-green-600" />,
      title: "Technical Ticket",
      description:
        "For any printer/AMS technical issues, such as hardware/firmware/software/network issues, print quality, ",
      linkText: "please submit a Technical Ticket.",
      link: "#",
    },
  ];
    const videos = [
    {
      title: "How-to Guides",
      url: "https://www.youtube.com/embed/VIDEO_ID_1",
    },
    {
      title: "X1 Series",
      url: "https://www.youtube.com/embed/VIDEO_ID_2",
    },
    {
      title: "P1 Series",
      url: "https://www.youtube.com/embed/VIDEO_ID_3",
    },
    {
      title: "A1 Series",
      url: "https://www.youtube.com/embed/VIDEO_ID_4",
    },
    {
      title: "A0 Series",
      url: "https://www.youtube.com/embed/VIDEO_ID_4",
    },
    {
      title: "A2 Series",
      url: "https://www.youtube.com/embed/VIDEO_ID_4",
    },
    {
      title: "A3 Series",
      url: "https://www.youtube.com/embed/VIDEO_ID_4",
    },
    {
      title: "A4 Series",
      url: "https://www.youtube.com/embed/VIDEO_ID_4",
    },
    
  ];
    const services = [
    {
      icon: <ShoppingBag className="w-12 h-12 text-green-600" />,
      title: "Buy Spare Parts",
      linkText: "Learn More",
    },
    {
      icon: <RefreshCw className="w-12 h-12 text-green-600" />,
      title: "Activate New Serial Number",
      linkText: "Request Now",
    },
    {
      icon: <Search className="w-12 h-12 text-green-600" />,
      title: "My Service Portal",
      linkText: "Check Now",
    },
  ];

  const tabs = [
    "Printers",
    "AMS",
    "Filaments & Accessories",
    "Software",
    "Print Quality",
    "Tutorials & Manuals",
    "Firmware Download",
  ];

  const products = {
    Printers: [
      { name: "X1 Series", image: "/images/X1 Series.png" },
      { name: "P1 Series", image: "/images/P1 Series.png" },
      { name: "H2S", image: "/images/H2S.png" },
      { name: "H2D", image: "/images/H2D Pro.png" },
      { name: "A1", image: "/images/A1.png" },
      { name: "A1 mini", image: "/images/A1 mini.png" },
      { name: "X1E", image: "/images/X1E.png" },
      { name: "H2D Pro", image: "/images/H2D pro.png" },
    ],
    AMS: [
      { name: "AMS", image: "/images/AMS.jpg" },
      { name: "AMS HT", image: "/images/AMS HT.png" },
      { name: "AMS Lite", image: "/images/AMS Lite.png" },
      { name: "AMS 2 Pro", image: "/images/AMS 2 pro.png" },

    ],
    "Filaments & Accessories": [
      { name: "Filament", image: "/images/Filament.jpg" },
      { name: "Hotend", image: "/images/Hotend.png" },
      { name: "Build Plates", image: "/images/Build Plates.jpg" },
      { name: "Supplement", image: "/images/Supplement.png" },
    ],
    Software: [
      { name: "Bambu Studio", image: "/images/Bambu Studio.png" },
      { name: "Bambu Handy", image: "/images/Bambu Handy.png" },
    ],
  };

  const [activeTab, setActiveTab] = useState("Printers");

  return (
    <div className="bg-white">
      {/* ==================Support banner============= */}
      <div
  className="relative h-[55vh] flex items-center justify-center bg-cover bg-center text-white"
  style={{ backgroundImage: "url('/images/HeroImg.jpg')" }} // replace with your image path
>
  {/* Overlay for readability */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Content */}
  <div className="relative z-10 text-center px-6">
    <p className="text-6xl font-bold">Bambu Lab Support</p>
    <p className="text-2xl mt-4">
      Solve a problem, read expert tips & guides, and get faster & better support.
    </p>
  </div>
</div>


      {/* ==================Product Support================ */}
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-2xl text-black font-bold text-center">Product Support</h1>

      {/* Tabs */}
      <div className="flex justify-center space-x-8 border-b mt-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 text-lg ${
              activeTab === tab
                ? "border-b-2 border-black font-semibold"
                : "text-gray-500 hover:text-black"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className={"flex flex-wrap justify-center gap-6 mt-10"} >
        {products[activeTab]?.map((product, index) => (
    <div
      key={product.name}
      className={"flex flex-col items-center p-4 bg-white shadow rounded hover:shadow-lg transition cursor-pointer "} 
    >
      <div className="relative w-40 h-40">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain"
              />
            </div>
            <p className="mt-4 font-medium text-gray-800">{product.name}</p>
          </div>
        ))}
      </div>
    </div>
    {/* ===============New Section=========== */}
     <section className="py-16 bg-white">
      <h2 className="text-2xl text-black font-bold text-center mb-10">
        Convenient Service
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center w-64 h-56 bg-gray-50 rounded-xl shadow hover:shadow-lg transition"
          >
            {service.icon}
            <h3 className="mt-4 font-medium text-lg text-gray-800">
              {service.title}
            </h3>
            <a
              href="#"
              className="mt-2 text-green-600 text-sm font-medium hover:underline"
            >
              {service.linkText} &gt;
            </a>
          </div>
        ))}
      </div>
    </section>
    {/* ==============Video Section=============== */}
     <section className="py-16 bg-white">
      <h2 className="text-2xl text-black font-bold text-center mb-10">Video Collection</h2>

      <div className="relative max-w-6xl mx-auto">
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          breakpoints={{
            640:  { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {videos.map((v, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <iframe
                  src={v.url}
                  className="w-full h-48"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                <div className="p-3 text-center font-medium text-gray-800">
                  {v.title}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Arrows OUTSIDE the slides */}
        <button
          type="button"
          aria-label="Previous"
          onClick={() => swiperRef.current?.slidePrev()}
          className="custom-prev absolute left-[-50px] top-1/2 -translate-y-1/2 z-10 bg-gray-200 p-2 rounded-full shadow hover:bg-gray-300"
        >
          ◀
        </button>
        <button
          type="button"
          aria-label="Next"
          onClick={() => swiperRef.current?.slideNext()}
          className="custom-next absolute right-[-50px] top-1/2 -translate-y-1/2 z-10 bg-gray-200 p-2 rounded-full shadow hover:bg-gray-300"
        >
          ▶
        </button>
      </div>
    </section>
    {/* ============contact us============== */}
    <section className="py-16 bg-white">
      <h2 className="text-2xl text-black font-bold text-center mb-10">Contact Us</h2>

      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        {contacts.map((c, i) => (
          <div
            key={i}
            className="flex items-start gap-6 bg-gray-50 p-6 rounded-lg shadow-sm"
          >
            <div className="flex-shrink-0">{c.icon}</div>
            <div>
              <h3 className="text-lg font-semibold mb-2">{c.title}</h3>
              <p className="text-gray-700">
                {c.description}
                <a href={c.link} className="text-green-600 font-medium">
                  {c.linkText}
                </a>
              </p>
              {c.extra && (
                <p className="mt-2 text-sm font-medium text-gray-800">
                  {c.extra}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
    <Footer/>
    </div>
  );
}


