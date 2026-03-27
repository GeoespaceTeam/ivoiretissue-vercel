"use client"; // 因为有交互逻辑，设为客户端组件
import Link from "next/link";
import Image from "next/image";
import { FiSearch } from "react-icons/fi";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Our Products", href: "/products" },
  { name: "Customer Zone", href: "/customer-zone" },
  { name: "Contact Us", href: "/contact-us" },
];

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo - 确保 public 文件夹下有 Mar.png */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/Mar.png"
            alt="Logo"
            width={100}
            height={60}
            className="object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-[15px] font-semibold text-gray-700 hover:text-green-700 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right Tools */}
        <div className="flex items-center space-x-5">
          <button className="text-gray-600 hover:text-green-700">
            <FiSearch size={20} />
          </button>

          <div className="flex items-center bg-gray-100 px-3 py-1.5 rounded-full border border-gray-200">
            <span className="text-[10px] font-bold text-gray-400 mr-2 uppercase">
              Lang
            </span>
            <select className="bg-transparent text-xs font-bold text-gray-700 focus:outline-none cursor-pointer">
              <option>EN</option>
              <option>FR</option>
              <option>ZH</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
}
