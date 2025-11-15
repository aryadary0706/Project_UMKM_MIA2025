"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useUMKMStore } from "@/lib/UMKMs";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import mockUMKMs from "@/data/mockShops.json";
import { ShopGrid } from "@/components/appcomponent/shop-grid";
import { Suspense } from "react";
import LoadingSpinner from "@/components/appcomponent/loadingSpinner";

const categories = [
  { value: "semua", label: "Semua" },
  { value: "kuliner", label: "Kuliner" },
  { value: "retail", label: "Retail" },
  { value: "jasa", label: "Jasa" },
  { value: "fashion", label: "Fashion" },
  { value: "elektronik", label: "Elektronik" },
  { value: "lainnya", label: "Lainnya" },
];

const locations = [
  { value: "semua", label: "Semua" },
  { value: "buahbatu", label: "Buahbatu" },
  { value: "bandung kidul", label: "Bandung Kidul" },
  { value: "batununggal", label: "Batununggal" },
  { value: "kiaracondong", label: "v" },
  { value: "lengkong", label: "Lengkong" },
  { value: "cicendo", label: "v" },
];

export function FilterSections() {
  const {
    filteredUMKMs,
    setUMKMs,
    setSearchQuery,
    setSelectedCategory,
    setSelectedLocation,
    togglePromo,
    toggleNew,
    isPromo,
    isNew,
  } = useUMKMStore();

  useEffect(() => {
    setUMKMs(mockUMKMs);
  }, [setUMKMs]);

  return (
    <section className="w-full pb-12 space-y-10 pt-26">
      {/* Title Section */}
      <div className="text-center space-y-2 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Jelajahi berbagai UMKM di daerahmu</h2>
        <p className="text-lg md:text-xl text-gray-600">Search, Filter, find it!</p>
      </div>

      {/* Search & Filter Controls */}
      <div className="w-full max-w-7xl mx-auto px-4 space-y-4">
        {/* Search + Dropdown Row */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-4">
          {/* Search */}
          <div className="relative flex-1 min-w-[250px]">
            <Input
              type="text"
              placeholder="Cari UMKM..."
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-white border-gray-300 focus:border-green-500 focus:ring-green-500 rounded-2xl"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
          <div className="flex flex-row gap-4">
            {/* Select Lokasi */}
            <Select onValueChange={setSelectedLocation}>
              <SelectTrigger className="w-1/2 sm:w-42 xl:w-50 bg-white rounded-2xl">
                <SelectValue placeholder="Lokasi" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Lokasi</SelectLabel>
                  {locations.map((loc) => (
                    <SelectItem key={loc.value} value={loc.value}>
                      {loc.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>

            {/* Select Kategori */}
            <Select onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-1/2 sm:w-40 xl:w-50 bg-white rounded-2xl">
                <SelectValue placeholder="Kategori" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Kategori</SelectLabel>
                  {categories.map((cat) => (
                    <SelectItem key={cat.value} value={cat.value}>
                      {cat.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-row flex-wrap gap-3 justify-start">
          <Button
            variant={isPromo ? "default" : "outline"}
            onClick={togglePromo}
            className={`flex items-center gap-1 ${
              isPromo
                ? "bg-green-600 text-white hover:bg-green-700"
                : " bg-white text-green-600 border-green-400 hover:bg-green-50"
            }`}
          >
            Sedang Promo
          </Button>

          <Button
            variant={isNew ? "default" : "outline"}
            onClick={toggleNew}
            className={`flex items-center gap-2 ${
              isNew
                ? "bg-yellow-400 text-white hover:bg-yellow-500"
                : "text-yellow-600 border-yellow-400 hover:bg-yellow-50"
            }`}
          >
            UMKM Baru
          </Button>
        </div>
      </div>

      {/* Grid */}
      <div className="w-full max-w-7xl mx-auto px-4">
        <Suspense fallback={<LoadingSpinner />}>
          <ShopGrid umkms={filteredUMKMs} />
        </Suspense>
      </div>
    </section>
  );
}