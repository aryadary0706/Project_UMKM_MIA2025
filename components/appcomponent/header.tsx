"use client"

import Link from "next/link"
import { Menu, X, Cuboid, Store } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-border">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-10 py-3">
        <div className="flex justify-between items-center h-16">
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="w-11 h-11 bg-primary rounded-lg flex items-center bg-linear-to-br from-green-400 to-green-600 justify-center">
                <span className="text-white font-bold text-lg">
                  <Cuboid className="w-7 h-7" />
                </span>
              </div>
            </Link>
            <div className="gap-6 mx-2 flex font-semibold">
              <Link href="/" className="font-medium hover:underline transition">
                Beranda
              </Link>
              <Link href="#kategori" className="font-medium  hover:underline transition">
                Kategori
              </Link>
              <Link href="#kontak" className="font-medium  hover:underline transition">
                Tentang Kami
              </Link>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/register">
              <button className="bg-linear-to-br from-green-400 to-green-600 flex flex-row gap-4 text-white px-5 py-2 rounded-lg hover:bg-primary/90 transition font-medium">
                <Store />Afiliasi
              </button>
            </Link>
          </div>

          {/* Icon hidden */}
          <Link href="/" className="md:hidden flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">
                <Cuboid className="w-5 h-5" />
              </span>
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu dengan Framer Motion */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="md:hidden pb-4 space-y-2"
            >
              <Link href="/" className="block px-4 py-2 text-text hover:bg-primary/10 rounded">
                Beranda
              </Link>
              <Link href="#kategori" className="block px-4 py-2 text-text hover:bg-primary/10 rounded">
                Kategori
              </Link>
              <Link href="#kontak" className="block px-4 py-2 text-text hover:bg-primary/10 rounded">
                Tentang Kami
              </Link>
              <Link href="/register">
                <button className="w-full flex flex-row justify-center gap-3 mt-4 bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition font-medium bg-linear-to-br from-green-400 to-green-600">
                  <Store />Afiliasi
                </button>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
