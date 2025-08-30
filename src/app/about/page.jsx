import Footer from "@/components/Footer";
import Image from "next/image";
export default function AboutPage(){
  
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

  return (
    <div className="bg-white">
  <div
  className="relative h-[40vh] flex items-center justify-center bg-cover bg-center text-white"
  style={{ backgroundImage: "url('/images/aboutUs-head.png')" }} // replace with your image path
>
  </div>
  <section className="flex-row justify-items-center ">
    <p className="text-4xl font-bold mt-12 mb-8">About Bambu Lab</p>
    <p className="text-xl mr-60 ml-60 mb-12">Bambu Lab is a consumer tech company focusing on desktop 3D printers. Starting with the X1 series, Bambu Lab builds state-of-the-art 3D printers that break the barriers between the digital and physical worlds, bringing creativity to a whole new level. Right now we have three sites located at Shenzhen and Shanghai in China and Austin, Texas of U.S.</p>
    <p className="text-4xl font-bold mt-12 mb-8">Our Team</p>
    <p className="text-xl mr-60 ml-60 mb-12">Our story started with the gathering of a team of 3D printing fans, who are also expert engineers in robotics, artificial intelligence, materials science, and internet industries. Our team is experienced in building high-tech products that bring positive impacts to the world. From the start, we have been dedicated to making cutting-edge technology affordable with advanced know-how and high production quality. We see ourselves as part of the ecosystem and are delighted to learn from and share knowledge with the 3D printing community. Our team's passion lies also in the commitment to creating the next generation of eco-friendly 3D printers - pushing the industry toward a future with a much lower carbon-footprint.</p>

  </section>
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
        <Footer/>
</div>
  );
}