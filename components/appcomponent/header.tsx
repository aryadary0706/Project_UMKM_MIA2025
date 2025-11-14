"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import Image from "next/image";
import logo from "@/public/logo.png"
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import { Briefcase, LogOut } from "lucide-react"
import { useUserStore } from "@/lib/User";

export function Header() {
  const user = useUserStore((state) => state.user)!
  const [isOpen, setIsOpen] = useState(false)
  const [isPopup, setIsPopup] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b-2">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-10 py-1">
        <div className="flex justify-between items-center h-16">
          {/* Desktop Menu */}
          <div className="flex items-center gap-8">
            {/* Logo */}
            <Link href="/" className="flex items-end gap-1">
              <Image src={logo} alt="Nearby Logo" width={35} height={35}/>
            </Link>

            {/* Destkop Navigation */}
            <div className="hidden md:flex gap-3 text-md font-semibold items-center h-6">
              <Link href="/" className="font-light hover:underline transition">
                Home
              </Link>
              <Link href="#kategori" className="font-light  hover:underline transition">
                Search
              </Link>
              <Link href="#footer" className="font-light  hover:underline transition">
                About Us
              </Link>
            </div>
          </div>

          {/* Profil (Username & Avatar) */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="hidden md:flex items-center gap-2">
              <h1 className="font-light text-gray-800 mr-2">{user.username}</h1>
              <button onClick={()=>setIsPopup(!isPopup)} className="focus:outline-none">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" alt="User Avatar" className="w-9 h-9 rounded-full" />
                  <AvatarFallback>BR</AvatarFallback>
                </Avatar>
              </button>
            </div>

            <AnimatePresence>
              {isPopup && (
                <motion.div
                  key="avatar-popup"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="hidden md:flex  flex-col absolute right-10 top-full mt-2 w-32 bg-white rounded-lg shadow-xl overflow-hidden z-50"
                >
                  <Link href="/affiliasi" onClick={()=> setIsPopup(false)} className="flex items-center p-3 hover:bg-gray-100 transition">
                  <Briefcase size={20} className="mr-3 text-black" />
                  <span className="text-sm font-semibold text-black">Afiliasi</span>
                  </Link>
                  <button
                    onClick={() => { /* Handle Logout Logic di sini */ setIsPopup(false) }}
                    className="flex items-center w-full p-3 hover:bg-gray-100 transition"
                  >
                    <LogOut size={20} className="mr-3 text-black" />
                    <span className="text-sm font-semibold text-black">Logout</span>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>        

          {/* Icon hidden : md
          <Link href="/" className="md:hidden flex items-start gap-2">
            <Image src={logo} alt="Nearby Logo" width={35} height={35} priority/>
          </Link> */}

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
                  Home
                </Link>
                <Link href="#Search" className="font-medium  hover:underline transition">
                  Search
                </Link>
                <Link href="#footer" className="font-medium  hover:underline transition">
                  About Us
                </Link>
                <Link href="/affiliasi" className="font-medium  hover:underline transition">
                  Affiliasi
                </Link>
                <Link href="/login" className="font-medium  hover:underline transition">
                  Logout
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
