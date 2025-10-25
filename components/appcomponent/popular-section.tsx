"use client"

import { useState, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

interface PopularUMKM {
  id: number
  name: string
  category: string
  description: string
  address: string
  region: string
  phone: string
  image: string
  Rating: number
  website?: string
  promo?: boolean
  isNew?: boolean
  isPopular?: boolean
  gallery?: string[]
}

interface PopularSectionProps {
  umkms: PopularUMKM[]
}

export function PopularSection({ umkms }: PopularSectionProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
      setTimeout(checkScroll, 300)
    }
  }

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-text">UMKM Populer</h2>
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="p-2 rounded-lg bg-primary-light text-primary hover:bg-primary hover:text-white transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="p-2 rounded-lg bg-primary-light text-primary hover:bg-primary hover:text-white transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div
          ref={scrollContainerRef}
          onScroll={checkScroll}
          className="flex gap-6 overflow-x-auto scroll-smooth pb-4 -mx-4 px-4"
          style={{ scrollBehavior: "smooth" }}
        >
          {umkms.map((umkm) => (
            umkm.Rating > 4.5 && <Link key={umkm.id} href={`/umkm/${umkm.id}`}>
              <div className="shrink-0 w-64 cursor-pointer group">
                <div className="relative h-40 bg-gray-200 rounded-lg overflow-hidden mb-3">
                  <img
                    src={umkm.image || "/placeholder.svg"}
                    alt={umkm.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-bold text-text line-clamp-2 group-hover:text-primary transition">{umkm.name}</h3>
                <p className="text-sm text-text-light">{umkm.category}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
