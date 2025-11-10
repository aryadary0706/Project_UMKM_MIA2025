"use client";

import { useState } from "react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
} from "@/components/ui/carousel";
import CarouselDots from "./dotsCarousel";
import Image from "next/image";
import Link from "next/link";
import type { EmblaCarouselType } from "embla-carousel";

export default function BannerCarousel() {
  const [index, setIndex] = useState(0);
  const [api, setApi] = useState<EmblaCarouselType | null>(null);
  const items = [1, 2, 3];
  // Update index when slide changes
  function handleSelect(carousel: EmblaCarouselType) {
    setIndex(carousel.selectedScrollSnap());
  }
  return (
    <div className="w-full max-w-7xl mx-auto py-5">
      <Carousel
        setApi={(carouselApi) => {
          setApi(carouselApi);
          carouselApi.on("select", () => handleSelect(carouselApi));
        }}
        opts={{ loop: true }}
        className="relative"
      >
        <CarouselContent>
          {/* Slide 1 */}
          <CarouselItem>
            <div className="flex flex-col items-center w-full p-10">
              <div className="px-6 flex flex-row gap-6 justify-between w-full">
                <Image
                  src=".\svg\flea-market-rafiki.svg"
                  alt="fleaMarket"
                  width={440}
                  height={440}
                  loading="eager"
                />
                <div className="flex flex-col items-start text-left gap-4 max-w-[450px]">
                  <div className="flex flex-row gap-3">
                    <h1 className="text-yellow-900 font-bold text-4xl">Dekatkan Langkah, Dekatkan Ekonomi</h1>
                  </div>
                  <h2 className="text-gray-900 font-regular text-xl">Temukan, promosikan, dan kembangkan usaha lokal dengan sistem yang terstruktur.</h2>
                  <Link href="#kategori">
                    <button className="p-4 mt-9 rounded-xl bg-green-600 text-white border-gray-400 shadow-md">
                      Temukan UMKM
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </CarouselItem>

          {/* Slide 2 */}
          <CarouselItem>
            <div className="flex flex-col items-center justify-center text-center p-10 text-gray-900">
              <div className="px-6 flex flex-row gap-6 justify-between w-full">
                <div className="flex flex-col items-start text-left gap-4 max-w-[480px]">
                  <div className="flex flex-row gap-3">
                    <h1 className="text-yellow-900 font-bold text-5xl">Daftarkan usaha anda!</h1>
                  </div>
                  <h2 className="text-gray-900 font-regular text-xl">Jika anda tertarik, klik saja untuk memulainya</h2>
                  <Link href="">
                    <button className="p-4 mt-5 rounded-xl bg-green-600 text-white border-gray-400 shadow-md">
                      Daftar UMKM
                    </button>
                  </Link>
                </div>
              <Image
                  src=".\svg\Market-launch-bro.svg"
                  alt="Market Launch"
                  width={300}
                  height={300}
                  loading="eager"
                />
              </div>
            </div>
          </CarouselItem>

          {/* Slide 3 */}
          <CarouselItem>
            <div className="flex flex-col items-center justify-center text-center p-10 bg-[#fff4cc] text-gray-800 rounded-3xl">
              <h1 className="text-3xl font-bold mb-3">Anggota Tim</h1>
              <p className="max-w-md">
                <ul>
                  <li>Kemas M. Aryadary Rasyad</li>
                  <li>Ilham Bashthotan</li>
                  <li>M. Paksi Pratama</li>
                </ul>
              </p>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>

      {/* Dots → Klik pindahkan slide */}
      <CarouselDots
        total={items.length}
        currentIndex={index}
        onDotClick={(i) => api?.scrollTo(i)}
      />
    </div>
  );
}
