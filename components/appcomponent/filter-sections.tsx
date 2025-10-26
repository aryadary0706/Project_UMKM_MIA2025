"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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

const categories = [
  { value: "semua", label: "Semua" },
  { value: "kuliner", label: "Kuliner" },
  { value: "retail", label: "Retail" },
  { value: "jasa", label: "Jasa" },
  { value: "fashion", label: "Fashion" },
  { value: "elektronik", label: "Elektronik" },
];

const locations = [
  { value: "semua", label: "Semua" },
  { value: "bojongsoang", label: "Bojongsoang" },
  { value: "buahbatu", label: "Buahbatu" },
  { value: "dayeuhkolot", label: "Dayeuhkolot" },
  { value: "batununggal", label: "Batununggal" },
];

export function FilterSections() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [isNew, setIsNew] = useState(false);
  const [isPromo, setIsPromo] = useState(false);

  // Filter data UMKM
  const filteredUMKMs = useMemo(() => {
    return mockUMKMs.filter((umkm) => {
      const matchesSearch = umkm.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "" ||
        umkm.category.toLowerCase() === selectedCategory.toLowerCase();
      const matchesLocation =
        selectedLocation === "" ||
        umkm.region.toLowerCase() === selectedLocation.toLowerCase();
      const matchesNew = !isNew || umkm.isNew === true;
      const matchesPromo = !isPromo || umkm.promo === true;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesLocation &&
        matchesNew &&
        matchesPromo
      );
    });
  }, [searchQuery, selectedCategory, selectedLocation, isNew, isPromo]);

  return (
    <section className="w-full px-4 md:px-10 space-y-6">
      {/* Search & Filter Bar */}
      <div className="flex flex-wrap gap-4 justify-center md:justify-start items-center">
        {/* Search Bar */}
        <div className="relative w-full md:w-1/3">
          <Input
            type="text"
            placeholder="Cari UMKM..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        </div>

        {/* Select Lokasi */}
        <Select onValueChange={setSelectedLocation}>
          <SelectTrigger className="w-40">
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
          <SelectTrigger className="w-40">
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

        {/* Tombol Filter */}
        <div className="flex gap-3">
          <Button
            variant={isPromo ? "default" : "outline"}
            onClick={() => setIsPromo((prev) => !prev)}
            className={`flex items-center gap-1 ${
              isPromo
                ? "bg-orange-500 text-white hover:bg-orange-600"
                : "text-orange-600 border-orange-500 hover:bg-orange-50"
            }`}
          >
            Sedang Promo
          </Button>

          <Button
            variant={isNew ? "default" : "outline"}
            onClick={() => setIsNew((prev) => !prev)}
            className={`flex items-center gap-1 ${
              isNew
                ? "bg-yellow-400 text-black hover:bg-yellow-500"
                : "text-yellow-600 border-yellow-400 hover:bg-yellow-50"
            }`}
          >
            Baru
          </Button>
        </div>
      </div>

      {/* Hasil Grid */}
      <div className="w-full">
        <ShopGrid
          umkms={filteredUMKMs}
          title="Daftar UMKM"
        />
      </div>
    </section>
  );
}
