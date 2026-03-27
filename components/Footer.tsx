import Link from "next/link";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Column 1: Intro */}
        <div>
          <h4 className="text-lg font-bold mb-6 border-l-4 border-green-600 pl-3">
            IVOIRE TISSUE
          </h4>
          <p className="text-gray-400 text-sm leading-relaxed">
            Redefining Excellence, Sustaining the Future. Established in 2022 in
            Montreal, Canada.
          </p>
          <div className="flex space-x-4 mt-6">
            <Link href="#" className="hover:text-green-500">
              <FaFacebook size={20} />
            </Link>
            <Link href="#" className="hover:text-green-500">
              <FaLinkedin size={20} />
            </Link>
            <Link href="#" className="hover:text-green-500">
              <FaYoutube size={20} />
            </Link>
          </div>
        </div>

        {/* Column 2: Products */}
        <div>
          <h4 className="text-lg font-bold mb-6 border-l-4 border-green-600 pl-3">
            PRODUCTS
          </h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li>
              <Link href="/products" className="hover:text-white">
                Bamboo Products
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-white">
                Virgin Products
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-white">
                Recycle Products
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-white">
                Mixed Products
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Quick Access */}
        <div>
          <h4 className="text-lg font-bold mb-6 border-l-4 border-green-600 pl-3">
            QUICK ACCESS
          </h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li>
              <Link href="/about-us" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className="hover:text-white">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/career" className="hover:text-white">
                Careers
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div>
          <h4 className="text-lg font-bold mb-6 border-l-4 border-green-600 pl-3">
            HEAD OFFICE
          </h4>
          <div className="text-sm text-gray-400 space-y-3">
            <p>
              222 Rue Poirier, #30 <br />
              St-Eustache, J7R 6B1
            </p>
            <p>+1 (514) 971-8238</p>
            <p className="text-green-500 font-semibold">
              sales@ivoiretissue.com
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
        <p>Copyright © 2023 Ivoire Tissue – All Rights Reserved.</p>
      </div>
    </footer>
  );
}
