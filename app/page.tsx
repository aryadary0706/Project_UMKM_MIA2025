"use client";

import { Header } from "@/components/appcomponent/header";
import { Footer } from "@/components/appcomponent/footer";
import { ImageCarousel } from "@/components/appcomponent/image-carousel";
import { HeroSection } from "@/components/appcomponent/hero-section";
import { PopularSection } from "@/components/appcomponent/popular-section";
import { useMemo, useState } from "react";
import mockUMKMs from "@/data/mockShops.json";
import { ShopGrid } from "@/components/appcomponent/shop-grid";
import { MapPin, Phone, Clock, Star } from "lucide-react";
import Link from "next/link";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("");
  const [filterLocation, setFilterLocation] = useState("");

  const filteredUMKMs = useMemo(() => {
    return mockUMKMs.filter((umkm) => {
      const matchesSearch = umkm.name.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesType = !filterType || umkm.category.toLowerCase().includes(filterType.toLowerCase())
      const matchesLocation = !filterLocation || umkm.region.toLowerCase().includes(filterLocation.toLowerCase())
      return matchesSearch && matchesType && matchesLocation
    })
  }, [searchQuery, filterType, filterLocation])

  const handleSearch = (query: string) => {
    setSearchQuery(query)
  }

  const handleFilter = (type: string, location: string) => {
    setFilterType(type)
    setFilterLocation(location)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <div className="flex">
        <HeroSection onSearch={handleSearch} onFilter={handleFilter} />
      </div>

      {/* Main Content */}
      <main id="kategori" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <ShopGrid umkms={filteredUMKMs} title="Semua" />
      </main>

      {/* Popular Section */}
      <section className="bg-primary-light/30">
        <PopularSection umkms={mockUMKMs} />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}