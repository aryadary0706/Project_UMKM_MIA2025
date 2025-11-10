"use client"

import Link from "next/link"
import { Menu, X, LogIn, Store } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import Image from "next/image";
import logo from "@/public/logo.png"
import { Button } from "../ui/button"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isProfile, setIsProfile] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b-2">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-10 py-1">
        <div className="flex justify-between items-center h-16">
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image src={logo} alt="Nearby Logo" width={35} height={35}/>
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
            <Link href="/login">
              <Button variant="outline" className=" flex flex-row gap-4 px-4 py-2 rounded-lg transition font-medium items-center shadow-md">
                <LogIn className="w-6 h-6"/>Login
              </Button>
            </Link>
          </div>

          {/* Icon hidden : md */}
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
              <div className="flex flex-col gap-2 mt-2">
                <div className="h-px w-full bg-gray-300"/>
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
                <Link href="/login">
                  <Button variant="outline" className="w-full flex flex-row justify-center gap-3 mt-4 px-4 py-2 rounded-md transition font-medium">
                    <LogIn className="w-6 h-6"/>Login
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
