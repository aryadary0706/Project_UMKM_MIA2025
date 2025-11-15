"use client";

import { useState } from "react";
import { Carousel, CarouselContent, CarouselItem} from "@/components/ui/carousel";
import CarouselDots from "./dotsCarousel";
import Image from "next/image";
import Link from "next/link";
import type { EmblaCarouselType } from "embla-carousel";
import { useEffect } from "react";
import mockUMKM from "@/data/mockShops.json";

export default function BannerCarousel() {
  const [index, setIndex] = useState(0);
  const [api, setApi] = useState<EmblaCarouselType | null>(null);
  const items = [1, 2, 3];

  const mostRatedUMKM = mockUMKM
    .sort((a, b) => b.Rating - a.Rating)
    .slice(0, 1);

  // Wrapper untuk mengatasi type mismatch antara Embla API (undefined) dan React State (null)
  const handleSetApi = (carouselApi: EmblaCarouselType | undefined) => {
    setApi(carouselApi || null);
  };

  useEffect(() => {
    if (!api) return;

    // Fungsi untuk mengupdate index saat slide berubah
    const handleSelect = () => {
      setIndex(api.selectedScrollSnap());
    };

    // 1. Mengatur index pertama kali (onInit)
    handleSelect(); 

    // 2. Mendaftarkan listener (onSelect)
    api.on("select", handleSelect);

    // 3. Cleanup listener
    return () => {
      api.off("select", handleSelect);
    };
  }, [api]); // Efek dipicu saat API tersedia/berubah

  return (
    <div className="w-full max-w-6xl mx-auto py-5">
      <Carousel
        opts={{ loop: true }}
        setApi = {handleSetApi}
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
                  className="w-[260px] md:w-[380px] lg:w-[440px] h-auto"
                  priority
                />
                <div className="flex flex-col items-start text-left gap-4 max-w-[350px] md:max-w-[400px]">
                  <div className="flex flex-row gap-3 mb-6">
                    <h1 className="text-yellow-900 font-bold text-xl md:text-4xl">Dekatkan Langkah, Dekatkan Ekonomi</h1>
                  </div>
                  <h2 className="text-gray-900 font-regular text-md md:text-xl">Temukan, promosikan, dan kembangkan usaha lokal dengan sistem yang terstruktur.</h2>
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
                <div className="flex flex-col items-start text-left gap-4 max-w-[350px] md:max-w-[400px]">
                  <div className="flex flex-row gap-3">
                    <h1 className="text-yellow-900 font-bold text-2xl md:text-4xl mb-4">Daftarkan usaha anda!</h1>
                  </div>
                  <h2 className="text-gray-900 font-regular text-lg md:text-xl">Website ini membantu memasarkan usaha anda dan anda dapat mengelolanya dengan satu aplikasi</h2>
                  <Link href="/affiliasi">
                    <button className="p-4 mt-5 rounded-xl bg-green-600 text-white border-gray-400 shadow-md">
                      Daftar UMKM
                    </button>
                  </Link>
                </div>
              <Image
                  src=".\svg\Market-launch-bro.svg"
                  alt="Market Launch"
                  width={200}
                  height={200}
                  className="w-[260px] md:w-[300px] lg:w-[330px] h-auto"
                  loading="eager"
                />
              </div>
            </div>
          </CarouselItem>

          {/* Slide 3 */}
          <CarouselItem>
            <div className="flex flex-col items-center justify-center text-center px-6 py-10 text-gray-800">

              <span className="text-yellow-900 font-bold text-3xl md:text-4xl mb-6">
                UMKM Pilihan Minggu Ini
              </span>

              {mostRatedUMKM.map((umkm: any) => (
                <div 
                  key={umkm.id} 
                  className="w-full max-w-xl mx-auto bg-white rounded-3xl p-6 border border-yellow-200 relative overflow-hidden flex flex-col md:flex-row gap-16 items-center"
                >
                  {/* Info UMKM */}
                  <div className="flex flex-col gap-3 items-start text-left">
                    <h3 className="text-xl font-bold text-gray-900">{umkm.name}</h3>
                    <p className="text-xs font-medium text-gray-600">{umkm.category}</p>

                    <p className="text-yellow-700 font-semibold text-lg">
                      ⭐ {umkm.Rating.toFixed(1)} / 5.0
                    </p>

                    {umkm.promo && (
                      <p className="text-sm text-green-700 font-medium">
                        🎉 Promo: {umkm.promo}
                      </p>
                    )}
                    <Link href={`/umkm/${umkm.id}`} className="w-full">
                      <button className="w-full mt-4 py-3 rounded-xl bg-green-600 text-white font-semibold shadow-md hover:bg-green-700 transition-all">
                        Kunjungi UMKM
                      </button>
                    </Link>
                  </div>
                  {/* Gambar UMKM */}
                  <div className="">
                    <Image 
                      src={umkm.image}
                      alt={umkm.name}
                      width={80}
                      height={80}
                      className="w-full h-42 rounded-2xl object-cover"

                    />
                  </div>
                </div>
              ))}
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
