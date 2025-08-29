"use client";
import Image from "next/image";
import Slider from "react-slick";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react"; // icon arrows
import Img1 from "../assets/LabH2D.jpg";
import Img2 from "../assets/LabA1.png";
import Img3 from "../assets/LabP1S.png";
import Img4 from "../assets/LabA1Mini.jpg";

export default function Hero() {
  const router = useRouter();

  const slides = [
    {
      id: 1,
      image: Img1,
      title: "Bambu Lab H2D",
      description: "Rethink Personal Manufacturing",
      buyLink: "/shop/x1",
      learnLink: "/products/x1",
    },
    {
      id: 2,
      image: Img2,
      title: "Bambu Lab A1",
      description: "A Colorful Gateway To 3D Printing.",
      buyLink: "/shop/p1p",
      learnLink: "/products/p1p",
    },
    {
      id: 3,
      image: Img3,
      title: "Bambu Lab A1 Mini",
      description: "The G.O.A.T of Entry-Level 3D Printing",
      buyLink: "/shop/ams",
      learnLink: "/products/ams",
    },
    {
      id: 4,
      image: Img4,
      title: "Bambu Lab P1S",
      description: "Versatile Workhorse 3D Printer",
      buyLink: "/shop/p1s",
      learnLink: "/products/p1s",
    },
  ];

  const settings = {
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const handleBuy = (item) => {
    alert(`${item.title} added to cart ✅`);
    router.push("/cart");
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="relative w-screen h-screen">
            {/* Background Image */}
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={slide.id === 1}
            />

            {/* Overlay Content */}
            <div className="absolute bottom-24 left-8 md:left-36 max-w-xl text-white z-10 px-4">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                {slide.title}
              </h2>
              <p className="text-base md:text-xl mb-6 drop-shadow-lg">
                {slide.description}
              </p>

              <div className="flex flex-wrap gap-4 mb-28">
                <button
                  onClick={() => handleBuy(slide)}
                  className="bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-md font-semibold shadow-lg whitespace-nowrap"
                >
                  Buy Now
                </button>
                <button
                  onClick={() => router.push(slide.learnLink)}
                  className="border border-white hover:bg-white hover:text-black text-white px-6 py-3 rounded-md font-semibold transition whitespace-nowrap"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

/* Custom Arrows */
function SampleNextArrow(props) {
  const { style, onClick } = props;
  return (
    <button
      className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 text-black p-2 rounded-full shadow-lg"
      style={{ ...style }}
      onClick={onClick}
    >
      <ChevronRight className="h-6 w-6" />
    </button>
  );
}

function SamplePrevArrow(props) {
  const { style, onClick } = props;
  return (
    <button
      className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 text-black p-2 rounded-full shadow-lg"
      style={{ ...style }}
      onClick={onClick}
    >
      <ChevronLeft className="h-6 w-6" />
    </button>
  );
}
