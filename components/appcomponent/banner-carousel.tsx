"use client"

import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel"
import { Suspense } from "react";
import LoadingSpinner from "@/components/appcomponent/loadingSpinner";
import Image from "next/image";
import img1 from "@/public/images/banner1.webp";
import img2 from "@/public/images/banner2.webp";

export default function BannerCarousel() {
  const banners = [
    {
      img: img1,
      title: "Melangkah Bersama",
      desc: "Jelajahi UMKM-UMKM lokal dan dukung pertumbuhan komunitas kita.",
    },
    {
      img: img2,
      title: "Bergabung bersama kami",
      desc: "",
    }
  ];

  return (
    <div className="w-full max-w-8xl mx-auto relative">
      <Carousel className="w-full">
        <CarouselContent>
          {banners.map((banner, index) => (
            <CarouselItem key={index}>
              <Suspense fallback={<LoadingSpinner />}>
                <div className="relative w-full h-65 sm:h-95 md:h-115 lg:h-140 rounded-3xl overflow-hidden">
                  
                  {/* Gambar Background */}
                  <Image
                    src={banner.img}
                    alt={banner.title}
                    fill
                    priority={index === 0 ? true : false}
                    className="object-cover" // penting
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40" />

                  {/* Konten Teks */}
                  <div className="relative z-10 flex flex-col items-end justify-center h-full px-4 md:px-8 text-white max-w-3xl ml-auto">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
                      {banner.title}
                    </h2>
                    {banner.desc && (
                      <p className="text-base sm:text-lg text-right">
                        {banner.desc}
                      </p>
                    )}
                  </div>
                </div>
              </Suspense>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-20" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-20" />
      </Carousel>
    </div>
  );
}
