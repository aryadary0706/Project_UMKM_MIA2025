"use client"

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { motion } from "motion/react"

export default function BannerCarousel() {
  const banners = [
    {
      title: "Welcome to the Dashboard",
      desc: "Manage all your activities in one place effortlessly.",
      color: "from-blue-600 to-indigo-600",
    },
    {
      title: "Latest Updates Available",
      desc: "Discover new features and improvements today.",
      color: "from-emerald-600 to-teal-600",
    },
    {
      title: "Explore New Features",
      desc: "Boost your productivity with our latest tools.",
      color: "from-purple-600 to-pink-600",
    },
  ]

  return (
    <div className="relative w-full left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      <Carousel className="w-full">
        <CarouselContent>
          {banners.map((banner, index) => (
            <CarouselItem key={index} className="p-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className={`flex items-center justify-center w-screen h-48 sm:h-60 md:h-80 lg:h-96 bg-linear-to-r ${banner.color} text-white`}
              >
                <div className="text-center px-4 md:px-8 max-w-3xl">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
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
      </Carousel>
    </div>
  )
}
