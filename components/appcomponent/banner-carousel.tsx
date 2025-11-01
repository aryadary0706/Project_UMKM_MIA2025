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
import { Button } from "../ui/button";
import Link from "next/link";
import { Handbag } from 'lucide-react';

export default function BannerCarousel() {
  const banners = [
    {
      img: img1,
      title: "Melangkah Bersama",
      desc: "Jelajahi UMKM-UMKM lokal dan dukung pertumbuhan ekonomi kita.",
    },
    {
      img: img2,
      title: "Bergabung bersama kami",
      desc: "Pasarkan usaha anda dengan website ini",
      button: true
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
                  <div className="absolute inset-0 bg-black/50" />

                  {/* Konten Teks */}
                  <div className="relative z-10 flex flex-col items-end justify-center h-full px-4 md:px-8 text-white max-w-3xl ml-auto right-8">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
                      {banner.title}
                    </h2>
                    {banner.desc && (
                      <p className="text-base sm:text-xl text-right mb-2">
                        {banner.desc}
                      </p>
                    )}
                    {banner.button && (
                      <Link href="/register">
                        <Button variant="secondary" className="px-5 py-3 text-lg rounded-xl bg-white text-green-600 hover:bg-gray-200"><Handbag/>Daftar Usaha</Button>
                      </Link>
                    )}
                  </div>
                </div>
              </Suspense>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious
          className="
            absolute left-0 top-1/2 -translate-y-1/2 z-20
            bg-gray-300/80 hover:bg-white text-gray-800 px-2 py-8 rounded-sm shadow-lg
            transition-colors duration-200 border-0
          "
        />
        <CarouselNext
          className="
            absolute right-0 top-1/2 -translate-y-1/2 z-20
            bg-gray-300/80 hover:bg-white text-gray-800 rounded-sm px-2 py-8 shadow-lg
            transition-colors duration-200 border-0
          "
        />
      </Carousel>
    </div>
  );
}
