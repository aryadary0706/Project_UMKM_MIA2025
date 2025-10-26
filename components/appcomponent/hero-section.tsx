"use client"

import { Search } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface HeroSectionProps {
  onSearch: (query: string) => void
  onFilter: (type: string, location: string) => void
}

const categories = [
  {value: "Semua", label: "Semua"},
  {value: "kuliner", label: "Kuliner"},
  {value: "retail", label: "Retail"},
  {value: "jasa", label: "Jasa"},
  {value: "fashion", label: "Fashion"},
  {value: "elektronik", label: "Elektronik"},
  {value: "rumah tangga", label: "Rumah Tangga"},
  {value: "kerajinan", label: "Kerajinan"},
  {value: "lainnya", label: "Lainnya"},
]

const locations = [
  {value: "Semua", label: "Semua"},
  {value: "bojongsoang", label: "Bojongsoang"},
  {value: "buahbatu", label: "Buahbatu"},
  {value: "dayeuhkolot", label: "Dayeuhkolot"},
  {value: "batununggal", label: "Batununggal"},,
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
    <section className="bg-linear-to-br from-cyan-200 via-background to-orange-200 py-12 lg:py-16 w-full shadow-lg">
      <div className="flex flex-row flex-wrap justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        {/* Heading */}
        <div className="text-left mb-14">
          <h1 className="text-4xl md:text-5xl font-bold mb-12">
            Temukan UMKM
          </h1>
          <p className="text-lg text-text-light max-w-lg mx-auto">
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
            <Select
              value={selectedType}
              onValueChange={(value) => {
                setSelectedType(value)
                onFilter(value, selectedLocation)
              }}
            >
              <SelectTrigger className="flex-1 px-4 py-3 rounded-lg border border-border bg-white text-text focus:outline-none focus:ring-2 focus:ring-primary">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Categories</SelectLabel>
                  {categories.map((category) => (
                    <SelectItem key={category.label} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>

            <Select
              value={selectedLocation}
              onValueChange={(value) => {
                setSelectedLocation(value)
                onFilter(selectedType, value)
              }}
            >
              <SelectTrigger className="flex-1 px-4 py-3 rounded-lg border border-border bg-white text-text focus:outline-none focus:ring-2 focus:ring-primary">
                <SelectValue placeholder="Select a location" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                    <SelectLabel>Locations</SelectLabel>
                    {locations.map((locations) => (
                      <SelectItem key={locations?.label} value={locations?.value}>
                        {locations?.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </section>
  )
}
