// src/app/accessories/filament/page.jsx
import Image from "next/image";

export default function FilamentPage() {
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

  const Properties = [
    {
      image:"/images/budget-friendly.png",
      title:"Budget-friendly",
      desc:"Budget-friendly"
    },
      {
      image:"/images/impact resistant.png",
      title:"Impact Resistant",
      desc:"The material's ability to withstand sudden forces or shock without breaking, deforming, or failing."
    },
      {
      image:"/images/Water Resistant.png",
      title:"Water Resistant",
      desc:"The material's ability to resist the penetration or absorption of water prevents swelling, damage or deterioration from moisture exposure, providing an extended lifespan, maintaining structural integrity, and enabling broader usage scenarios."
    },
      {
      image:"/images/heat resistant.png",
      title:"Heat Resistant",
      desc:"The material's ability to withstand high temperatures without softening, deforming, losing strength, or degrading."
    },
      {
      image:"/images/UV resistant.png",
      title:"UV Resistant",
      desc:"The material's ability to resist degradation when exposed to ultraviolet light from the sun or other sources."
    },
      {
      image:"/images/flexible.png",
      title:"Flexible",
      desc:"Flexible"
    },
      {
      image:"/images/Transparent & Translucent.png",
      title:"Transparent & Translucent",
      desc:"Transparent & Translucent"
    },
      {
      image:"/images/wear resistant.png",
      title:"Wear Resistant",
      desc:"The material's ability to withstand damage from friction and prolonged use without deteriorating."
    },
      {
      image:"/images/Oil & Grease Resistant.png",
      title:"Oil & Grease Resistant",
      desc:"The material's ability to withstand exposure to oily and greasy substances without softening, deforming, swelling, dissloving or losing mechanical properties."
    },
      {
      image:"/images/Dimensionally Stable.png",
      title:"Dimensionally Stable",
      desc:"The material's ability to retain its shape and size under different environmental conditions, including temperature, humidity, and mechanical stresses."
    },
      {
      image:"/images/Exceptional in Strength & Stiffness.png",
      title:"Exceptional in Strength & Stiffness",
      desc:"Exceptional in Strength & Stiffness"
    },
      {
      image:"/images/flame-retardant.png",
      title:"Flame Retardant",
      desc:"The material's ability to resist ignition and slow the spread of flames."
    }
  ]

  return (
    <div className="bg-white">
    <div className="max-w-7xl mx-auto px-6 py-12 ">
      <h1 className="text-3xl font-bold mt-20">Applications</h1>
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
      {/* ===================Properties================ */}
       <h1 className="text-3xl font-bold mt-24">Properties</h1>
      <p className="text-gray-800 mb-8 mt-6 text-lg">
        Select the filament properties most essential to your project to receive relevant recommendations and comparisons.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Properties.map((property) => (
          <div
            key={property.title}
            className="relative group rounded-lg overflow-hidden shadow-md cursor-pointer h-72"
          >
            {/* Background Image */}
            <Image
              src={property.image}
              alt={property.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

            {/* Text Content */}
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <h2 className="text-lg font-bold">{property.title}</h2>
              {/* <p className="text-sm mt-2 hidden group-hover:block transition-all duration-300">
                {application.desc}
              </p> */}
              <div
                className="overflow-hidden transition-all duration-1000 ease-in-out max-h-0 group-hover:max-h-40"
              >
                <p className="text-sm mt-2">
                  {property.desc}
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
