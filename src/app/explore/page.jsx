
import Image from "next/image";
export default function ExplorePage(){
   const Application = [
    {
      image: "/images/bidrhouse.avif",
      title: "Outdoor Use",
      desc: "Garden tools, flowerpots, birdhouses, landscaping, outdoor sports, exterior parts..."
    },
    {
      image: "/images/RC plane.png",
      title: "RC Plane",
      desc: "Airframe components, propellers..."
    },
    {
      image: "/images/Architectural.webp",
      title: "Architecture Models",
      desc: "Detailed building facades, scale models of iconic structures, urban planning layouts, interior and landscape elements..."
    },
    {
      image: "/images/black gear.webp",
      title: "Mechanical Parts",
      desc: "Gears, robotic components, engine parts, mechanical linkages, pulleys and belt drives..."
    },
    {
      image: "/images/automotive.jpg",
      title: "Automotive Parts",
      desc: "Car dashboard components, engine bay parts, custom car emblems and trim, replacement clips and fasteners..."
    },
    {
      image: "/images/3DToy.webp",
      title: "Decorative Parts, Toys, Fandom",
      desc: "Figurines, cosplay accessories, vases, jewelry, holiday decorations..."
    },
    {
      image: "/images/Structural.webp",
      title: "Structural Parts",
      desc: "Load - bearing parts, frames, arches, shells..."
    },
    {
      image: "/images/mechnical.webp",
      title: "Functional Parts",
      desc: "Mounts and brackets, enclosures for electronics, tools and fixtures, custom adapters and connectors..."
    }
  ];

     return (
    <div className="p-6 bg-white">
    <div className="max-w-7xl mx-auto px-6 py-12 ">
          <h1 className="text-3xl font-bold mt-5">Applications</h1>
          <p className="text-gray-800 mb-8 mt-6 text-lg">
            Choose the scenario that best fits your project needs to receive relevant
            recommendations and comparisons.
          </p>
    
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Application.map((application) => (
              <div
                key={application.title}
                className="relative group rounded-lg overflow-hidden shadow-md cursor-pointer h-72"
              >
                {/* Background Image */}
                <Image
                  src={application.image}
                  alt={application.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
    
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
    
                {/* Text Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h2 className="text-lg font-bold">{application.title}</h2>
                  {/* <p className="text-sm mt-2 hidden group-hover:block transition-all duration-300">
                    {application.desc}
                  </p> */}
                  <div
                    className="overflow-hidden transition-all duration-1000 ease-in-out max-h-0 group-hover:max-h-40"
                  >
                    <p className="text-sm mt-2">
                      {application.desc}
                    </p>
                  </div>
    
                </div>
              </div>
            ))}
          </div>
          </div>
          </div>
  );
}