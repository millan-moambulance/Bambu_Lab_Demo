"use client";
import { FaFacebookF, FaInstagram, FaYoutube, FaRedditAlien, FaTiktok } from "react-icons/fa";
import { Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 pt-12">
      {/* Newsletter Section */}
      <div className="max-w-7xl mx-auto px-6 text-center md:text-left">
        <h3 className="text-2xl font-semibold text-white mb-4">
          Be the first to receive our latest product updates, newest offerings, and free product trials.
        </h3>

        <div className="flex flex-col md:flex-row items-center gap-4">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="flex-1 px-4 py-3 outline-1 rounded-md text-white focus:outline-blue-300"
          />
          <button className="bg-green-600 hover:bg-green-500 px-6 py-3 rounded-md text-white font-semibold">
            Sign Up
          </button>
        </div>

        <div className="flex items-center justify-center md:justify-start mt-3">
          <input type="checkbox" id="privacy" className="mr-2" />
          <label htmlFor="privacy" className="text-sm">
            I agree to <a href="#" className="underline">Terms of use</a> and{" "}
            <a href="#" className="underline">Privacy Policy</a>.
          </label>
        </div>
      </div>

      <hr className="my-10 border-gray-700" />

      {/* Links Section */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-6 gap-8 text-sm ">
        <div>
          <h4 className="text-white font-semibold mb-3 ">Products</h4>
          <ul className="space-y-2 ">
            <li><a href="/products" className="hover:text-green-400">3D Printers</a></li>
            <li><a href="/accessories/filament" className="hover:text-green-400">Filament</a></li>
            <li><a href="/accessories/filament" className="hover:text-green-400">Accessories</a></li>
            <li><a href="/maker" className="hover:text-green-400">Maker’s Supply</a></li>
            <li><a href="/accessories/filament" className="hover:text-green-400">Spare Parts</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Software</h4>
          <ul className="space-y-2">
            <li><a href="/services/support" className="hover:text-green-400">Bambu Studio</a></li>
            <li><a href="/services/support" className="hover:text-green-400">Bambu Handy</a></li>
            <li><a href="/services/support" className="hover:text-green-400">Bambu Suite</a></li>
            <li><a href="/services/support" className="hover:text-green-400">System Status</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Support</h4>
          <ul className="space-y-2">
            <li><a href="/services/support" className="hover:text-green-400">Support Center</a></li>
            <li><a href="/about" className="hover:text-green-400">Bambu Lab Academy</a></li>
            <li><a href="accessories/filament" className="hover:text-green-400">Filament Guide</a></li>
            <li><a href="#" className="hover:text-green-400">Official Wiki</a></li>
            <li><a href="#" className="hover:text-green-400">Security</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Community</h4>
          <ul className="space-y-2">
            <li><a href="/maker" className="hover:text-green-400">MakerWorld</a></li>
            <li><a href="#" className="hover:text-green-400">Facebook Group</a></li>
            <li><a href="#" className="hover:text-green-400">Reddit</a></li>
            <li><a href="#" className="hover:text-green-400">Forum</a></li>
            <li><a href="#" className="hover:text-green-400">Discord</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Company</h4>
          <ul className="space-y-2">
            <li><a href="/about" className="hover:text-green-400">About Us</a></li>
            <li><a href="/services/support" className="hover:text-green-400">Blog</a></li>
            <li><a href="/services/support" className="hover:text-green-400">Contact Us</a></li>
            <li><a href="#" className="hover:text-green-400">Careers</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3" >Cooperation</h4>
          <ul className="space-y-2">
            <li><a href="#"  className="hover:text-green-400">Authorized Reseller</a></li>
            <li><a href="#" className="hover:text-green-400">Partner with Us</a></li>
          </ul>
        </div>
      </div>

      <hr className="my-10 border-gray-700" />

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-4 pb-6">
        <div className="flex flex-wrap gap-3">
          <a href="#" className="hover:text-green-400">Privacy Policy</a> | 
          <a href="#" className="hover:text-green-400">Terms of Use</a> | 
          <a href="#" className="hover:text-green-400">Warranty</a> | 
          <a href="#" className="hover:text-green-400">Cookie Policy</a> | 
          <a href="#" className="hover:text-green-400">Cookie Settings</a>
        </div>

        <p className="text-center md:text-left">
          Copyright © 2025 Bambu Lab. All Rights Reserved.
        </p>

        <div className="flex items-center gap-4 text-lg">
          <FaFacebookF />
          <FaInstagram />
          <FaYoutube />
          <FaRedditAlien />
          <FaTiktok />
        </div>

        <div className="flex items-center gap-2">
          <Globe className="w-4 h-4" />
          <span>India</span> | <span>English</span>
        </div>
      </div>
    </footer>
  );
}
