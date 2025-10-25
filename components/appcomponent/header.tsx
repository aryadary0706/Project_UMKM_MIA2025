"use client"

import Link from "next/link"
import { Menu, X, Cuboid } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-border">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg"><Cuboid className=" w-5 h-5"/></span>
            </div>
            <span className="font-bold text-lg text-text hidden sm:inline">Gokal</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-text hover:text-primary transition">
              Beranda
            </Link>
            <Link href="#kategori" className="text-text hover:text-primary transition">
              Kategori
            </Link>
            <Link href="#" className="text-text hover:text-primary transition">
              Tentang Kami
            </Link>
            <Link href="#" className="text-text hover:text-primary transition">
              Kontak
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition font-medium">
              Daftarkan UMKM
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/" className="block px-4 py-2 text-text hover:bg-primary/10 rounded">
              Beranda
            </Link>
            <Link href="#" className="block px-4 py-2 text-text hover:bg-primary/10 rounded">
              Kategori
            </Link>
            <Link href="#" className="block px-4 py-2 text-text hover:bg-primary/10 rounded">
              Tentang Kami
            </Link>
            <Link href="#" className="block px-4 py-2 text-text hover:bg-primary/10 rounded">
              Kontak
            </Link>
            {/* <button className="w-full mt-4 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition font-medium">
              Daftarkan UMKM
            </button> */}
          </div>
        )}
      </div>
    </nav>
  )
}
