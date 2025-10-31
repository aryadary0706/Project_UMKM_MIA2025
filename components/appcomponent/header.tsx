"use client"

import Link from "next/link"
import { Menu, X, Cuboid, Store } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import Image from "next/image";
import React from "react"
import logo from "@/public/logo.png"
import { Separator } from "@radix-ui/react-separator"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-border">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-10 py-1">
        <div className="flex justify-between items-center h-16">
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image src={logo} alt="Marketeers Logo" width={30} height={30} priority/>
            </Link>
            <div className="gap-4 mx-0 text-lg flex font-semibold items-center h-6">
              <Link href="/" className="font-medium hover:underline transition">
                Beranda
              </Link>
              <Link href="#kategori" className="font-medium  hover:underline transition">
                Kategori
              </Link>
              <Link href="#kontak" className="font-medium  hover:underline transition">
                Tentang Kami
              </Link>
              <div className="h-full w-px bg-gray-300 mx-2" />
              <Link href="/Afiliasi" className="font-medium text-red-500">
                Afiliasi
              </Link>
              <Link href="/Profil" className="font-medium text-red-500">
                Profil
              </Link>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/register">
              <button className="bg-green-700 flex flex-row gap-4 text-white px-4 py-2 rounded-lg hover:bg-green-500 transition font-medium items-center">
                <Store className="w-6 h-6"/>Afiliasi
              </button>
            </Link>
          </div>

          {/* Icon hidden */}
          <Link href="/" className="md:hidden flex items-center gap-2">
            <Image src={logo} alt="Marketeers Logo" width={35} height={35} priority/>
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
              <Link href="/" className="font-medium hover:underline transition">
                Beranda
              </Link>
              <Link href="#kategori" className="font-medium  hover:underline transition">
                Kategori
              </Link>
              <Link href="#kontak" className="font-medium  hover:underline transition">
                Tentang Kami
              </Link>
              <Link href="/Afiliasi" className="font-medium text-red-500">
                Afiliasi
              </Link>
              <Link href="/Profil" className="font-medium text-red-500">
                Profil
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
