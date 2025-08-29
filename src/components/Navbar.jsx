"use client";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  ShoppingCart,
  Printer,
  Package,
  Headset,
  Code,
  Info,
  Globe,
  Layers,
} from "lucide-react";
import { useState } from "react";
import Img1 from "../assets/LabH2D.jpg";
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/X1 Series.png"
                alt="logo"
                width={32}
                height={32}
              />

              <span className="font-bold">Bambu Lab</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {/* Products */}
            <div className="relative group">
              <button className="flex items-center hover:text-green-400">
                
                <Printer className="mr-1 h-5 w-5" /> Products
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {/* Dropdown */}
              <div className="absolute left-0 mt-2 w-56 bg-white text-black rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200">
                {/* 3D Printers (nested) */}
                <div className="relative group/item">
                  <div className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    {/* <span className="flex items-center"> */}
                      <Link href="/products" className="flex items-center">
                      <Printer className="mr-2 h-4 w-4" /> 3D printers</Link>
                    {/* </span> */}
                    <ChevronRight className="h-4 w-4" />
                  </div>
                  {/* Nested Dropdown */}
                  <div className="absolute top-0 left-full ml-1 w-56 bg-white text-black rounded-md shadow-lg opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition duration-200">
                    <Link
                      href="/products/h2d"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      BambuLab h2d Series
                    </Link>
                    <Link
                      href="/products/a1"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      BambuLab A1
                    </Link>
                    <Link
                      href="/products/a1mini"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      BambuLab A1 mini
                    </Link>
                    <Link
                      href="/products/p1s"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      BambuLab p1s
                    </Link>
                    <Link
                      href="/products/x1c"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      BambuLab X1C
                    </Link>
                    <Link
                      href="/products/h2dpro"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      BambuLab H2D Pro
                    </Link>
                    <Link
                      href="/products/x1e"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      BambuLab X1E
                    </Link>
                    {/* <Link
                      href="/products/ams2pro"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                       AMS 2 Pro
                    </Link>
                    <Link
                      href="/products/amsht"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                       AMS HT
                    </Link>
                    <Link
                      href="/products/ams"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                       AMS
                    </Link>
                    <Link
                      href="/products/amslite"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                       AMS lite
                    </Link> */}

                  </div>
                </div>

                {/* Software */}
              
                <div className="relative group/item">
                  <div className="flex justify-between px-4 py-2 hover:bg-gray-100">
                    <span className="flex items-center">
                      <Code className="mr-2 h-4 w-4" /> Software
                    </span>

                    <ChevronDown className="h-4 w-4" />
                  </div>
                  <div className="absolute top-full mt-2 w-lg bg-white text-black rounded-md shadow-lg opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition duration-200">
                    <div className="flex gap-4 hover:bg-gray-50 p-2 rounded-md cursor-default">
                      <Image src="/images/Bambu Studio.png" alt="Bambu Studio" width={80} height={60} />
                      <div>
                        <h3 className="font-semibold">Bambu Studio</h3>
                        <p className="text-sm text-gray-900">All-in-one PC software for editing & printing 3D models.</p>
                      </div>
                    </div>

                    {/* Item 2 */}
                    <div className="flex gap-4 hover:bg-gray-50 p-2 rounded-md cursor-default">
                      <Image src="/images/Bambu Handy.png" alt="Bambu Handy" width={80} height={60} />
                      <div>
                        <h3 className="font-semibold ">Bambu Handy</h3>
                        <p className="text-sm text-gray-900">Powerful mobile app to access MakerWorld & monitor printers.</p>
                      </div>
                    </div>

                    {/* Item 3 */}
                    <div className="flex gap-4 hover:bg-gray-50 p-2 rounded-md cursor-default">
                      <Image src="/images/Build Plates.jpg" alt="Build Plates" width={80} height={60} />
                      <div>
                        <h3 className="font-semibold">Build suites</h3>
                        <p className="text-sm text-gray-900">Software for engraving, cutting & pen drawing in one workflow.</p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            {/* Accessories */}
            <div className="relative group">
              <button className="flex items-center hover:text-green-400">
                <Package className="mr-1 h-5 w-5" /> Accessories
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200">
                <Link
                  href="/accessories/filament"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Filament
                </Link>
                {/* <Link
                  href="/accessories/parts"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Spare Parts
                </Link> */}
              </div>
            </div>

            {/* Services */}
            <div className="relative group">
              <button className="flex items-center hover:text-green-400">
                <Headset className="mr-1 h-5 w-5" /> Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200">
                <Link
                  href="/services/support"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Support
                </Link>
                <Link
                  href="/services/faq"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  FAQs
                </Link>
              </div>
            </div>

            {/* Other links */}
            <Link href="/maker" className="flex items-center hover:text-green-400">
              <Globe className="mr-1 h-5 w-5" /> MakerWorld
            </Link>
            <Link href="/explore" className="flex items-center hover:text-green-400">
              <Layers className="mr-1 h-5 w-5" /> Explore
            </Link>
            <Link href="/about" className="flex items-center hover:text-green-400">
              <Info className="mr-1 h-5 w-5" /> About
            </Link>
          </div>

          {/* Right Side */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/cart"
              className="flex items-center bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-md"
            >
              <ShoppingCart className="mr-2 h-5 w-5" /> To Buy
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="focus:outline-none"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* // inside the mobile menu section of Navbar */}
      {mobileOpen && (
        <div className="md:hidden bg-black px-4 pb-4 space-y-2">
          {/* Products Dropdown */}
          <details className="group">
            <summary className="flex items-center justify-between cursor-pointer hover:text-green-400">
              <span>Products</span>
              <ChevronDown className="h-4 w-4 group-open:rotate-180 transition" />
            </summary>
            <div className="ml-4 mt-2 space-y-1">
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer hover:text-green-400">
                  <span>3D Printers</span>
                  <ChevronRight className="h-4 w-4 group-open:rotate-90 transition" />
                </summary>
                <div className="ml-4 mt-1 space-y-1">
                  <Link href="/products/printers/x1" className="block hover:text-green-400">
                    X1 Series
                  </Link>
                  <Link href="/products/printers/p1" className="block hover:text-green-400">
                    P1 Series
                  </Link>
                  <Link href="/products/printers/a1" className="block hover:text-green-400">
                    A1 Series
                  </Link>
                </div>
              </details>
              <Link href="/products/software" className="block hover:text-green-400">
                Software
              </Link>
            </div>
          </details>

          {/* Accessories Dropdown */}
          <details className="group">
            <summary className="flex items-center justify-between cursor-pointer hover:text-green-400">
              <span>Accessories</span>
              <ChevronDown className="h-4 w-4 group-open:rotate-180 transition" />
            </summary>
            <div className="ml-4 mt-2 space-y-1">
              <Link href="/accessories/filament" className="block hover:text-green-400">
                Filament
              </Link>
              <Link href="/accessories/parts" className="block hover:text-green-400">
                Spare Parts
              </Link>
            </div>
          </details>

          {/* Services Dropdown */}
          <details className="group">
            <summary className="flex items-center justify-between cursor-pointer hover:text-green-400">
              <span>Services</span>
              <ChevronDown className="h-4 w-4 group-open:rotate-180 transition" />
            </summary>
            <div className="ml-4 mt-2 space-y-1">
              <Link href="/services/support" className="block hover:text-green-400">
                Support
              </Link>
              <Link href="/services/FAQs" className="block hover:text-green-400">
                FAQs
              </Link>
            </div>
          </details>

          {/* Other links */}
          <Link href="/makerworld" className="block hover:text-green-400">
            MakerWorld
          </Link>
          <Link href="/explore" className="block hover:text-green-400">
            Explore
          </Link>
          <Link href="/about" className="block hover:text-green-400">
            About
          </Link>

          {/* Cart */}
          <Link
            href="/cart"
            className="block bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-md text-center"
          >
            <ShoppingCart className="inline-block mr-2 h-5 w-5" />
            To Buy
          </Link>
        </div>
      )}

    </nav>
  );
}
