"use client"

import { Search } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button" // Menggunakan shadcn/ui Button
import { Input } from "@/components/ui/input"   // Menggunakan shadcn/ui Input

interface HeroSectionProps {
  onSearch: (query: string) => void
  onFilter: (type: string, location: string) => void
}

const categories = [
  "Makanan & Minuman",
  "Fashion & Aksesoris",
]

export function HeroSection({ onSearch, onFilter }: HeroSectionProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedType, setSelectedType] = useState("")
  const [selectedLocation, setSelectedLocation] = useState("")

  const handleSearch = () => {
    onSearch(searchQuery)
  }

  const handleFilter = () => {
    onFilter(selectedType, selectedLocation)
  }

  return (
    <section className="bg-linear-to-br from-cyan-200 via-background to-orange-200 py-16 lg:py-38 w-full shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-text mb-12 text-balance">
            Temukan UMKM Terbaik di Sekitarmu
          </h1>
          <p className="text-lg text-text-light max-w-2xl mx-auto">
            Dukung bisnis lokal dan temukan produk berkualitas dari pengusaha di komunitas Anda
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-light" size={20} />
              <Input
                type="text"
                placeholder="Cari nama..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-border bg-white text-text placeholder-text-light focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <Button
              onClick={handleSearch}
              className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition font-medium whitespace-nowrap"
            >
              Cari
            </Button>
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-3">
            <select
              value={selectedType}
              onChange={(e) => {
                setSelectedType(e.target.value)
                handleFilter()
              }}
              className="flex-1 px-4 py-3 rounded-lg border border-border bg-white text-text focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">Semua</option>
              <option value="makanan">Kuliner</option>
              <option value="fashion">Fashion</option>
              <option value="kerajinan">Kerajinan Tangan</option>
              <option value="jasa">Jasa & Layanan</option>
              <option value="elektronik">Elektronik & Gadget</option>
            </select>

            <select
              value={selectedLocation}
              onChange={(e) => {
                setSelectedLocation(e.target.value)
                handleFilter()
              }}
              className="flex-1 px-4 py-3 rounded-lg border border-border bg-white text-text focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">Semua Lokasi</option>
              <option value="jakarta">Bojongsoang</option>
              <option value="bandung">Bandung</option>
              <option value="surabaya">Surabaya</option>
              <option value="medan">Medan</option>
              <option value="yogyakarta">Yogyakarta</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  )
}
