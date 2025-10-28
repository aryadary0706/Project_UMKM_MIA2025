"use client"

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { motion } from "motion/react"

export default function BannerCarousel() {
  const banners = [
    (
      <div className="flex items-center justify-end w-full h-75 sm:h-90 md:h-110 lg:h-130 bg-linear-to-r from-green-500 to-green-700 text-white rounded-3xl">
        <div className="flex flex-col items-end px-4 md:px-8 max-w-3xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
            Mock
          </h2>
        </div>
      </div>
    ),
    (
      <div className="flex items-center justify-end w-full h-75 sm:h-90 md:h-110 lg:h-130 bg-linear-to-r from-green-500 to-green-700 text-white rounded-3xl">
        <div className="flex flex-col items-end px-4 md:px-8 max-w-3xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
            Mock
          </h2>
        </div>
      </div>
    ),
  ]

  return (
    <div className="w-full max-w-8xl mx-auto">
      <Carousel className="w-full">
        <CarouselContent>
          {banners.map((banner, index) => (
            <CarouselItem key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                {banner}
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
