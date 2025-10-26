"use client"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import {motion} from "motion/react"

export default function BannerCarousel() {

  const banners = [
    {
      title: "Welcome to the Dashboard",
      desc: "Manage all your activities in one place effortlessly.",
      color: "from-blue-600 to-indigo-600"
    },
    {
      title: "Latest Updates Available",
      desc: "Discover new features and improvements today.",
      color: "from-emerald-600 to-teal-600"
    },
    {
      title: "Explore New Features",
      desc: "Boost your productivity with our latest tools.",
      color: "from-purple-600 to-pink-600"
    }
  ]

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <Carousel className="w-full">
        <CarouselContent>
          {banners.map((banner, index) => (
            <CarouselItem key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className={`flex items-center justify-center w-full h-48 sm:h-60 md:h-72 lg:h-80 xl:h-96 rounded-2xl bg-linear-to-r ${banner.color} text-white`}
              >
                <div className="text-center px-4 md:px-8">
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
                    {banner.title}
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg opacity-90">
                    {banner.desc}
                  </p>
                </div>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Tombol navigasi kiri-kanan */}
        <div className="absolute inset-y-0 left-0 flex items-center">
          <CarouselPrevious className="bg-white/20 hover:bg-white/40 text-white rounded-full backdrop-blur-md">
            <ChevronLeft className="h-5 w-5" />
          </CarouselPrevious>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center">
          <CarouselNext className="bg-white/20 hover:bg-white/40 text-white rounded-full backdrop-blur-md">
            <ChevronRight className="h-5 w-5" />
          </CarouselNext>
        </div>
      </Carousel>
    </div>
  )
}
