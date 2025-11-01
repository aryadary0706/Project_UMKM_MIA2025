"use client"

import { useState, useMemo, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"


interface ImageCarouselProps {
  images: string[]
  title: string
}

const FALLBACK_IMAGE_URL = "/images/placeholder-shop.png";

export function ImageCarousel({ images, title }: ImageCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentImageError, setCurrentImageError] = useState(false);

    const imageUrl = useMemo(() => {
        const currentSrc = images[currentIndex];
      
        if (currentImageError || !currentSrc) {
            return FALLBACK_IMAGE_URL;
        }
        return currentSrc;
    }, [currentIndex, images, currentImageError]);

    // Handler untuk tombol navigasi
    const goToPrevious = useCallback(() => {
        setCurrentImageError(false); // Reset error saat pindah
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    }, [images.length]);

    const goToNext = useCallback(() => {
        setCurrentImageError(false); // Reset error saat pindah
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, [images.length]);

    // Handler saat gambar gagal dimuat
    const handleImageError = useCallback(() => {
        setCurrentImageError(true);
    }, []);
    
    // Jika array gambar kosong, kita hanya menampilkan placeholder
    const totalImages = images.length > 0 ? images.length : 1;


  return (
    <div className="relative w-full h-96 border-2 bg-gray-200 rounded-xl overflow-hidden group">
      {/* Main Image */}
        <img
          src={imageUrl} // Menggunakan URL yang sudah diproses (termasuk fallback)
           alt={`${title} - ${currentIndex + 1}`}
        className="w-full h-full object-cover"
        // Logika Error Handler
        onError={handleImageError} 
      />
        
      {/* Tombol navigasi hanya muncul jika ada lebih dari satu gambar (selain placeholder) */}
      {images.length > 1 && (
        <>
            {/* Navigation Buttons */}
            <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-text p-2 rounded-full transition opacity-0 group-hover:opacity-100"
            >
                <ChevronLeft size={24} />
            </button>
            <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-text p-2 rounded-full transition opacity-0 group-hover:opacity-100"
            >
                <ChevronRight size={24} />
            </button>

            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setCurrentIndex(index);
                            setCurrentImageError(false); // Reset error saat pindah
                        }}
                        className={`w-2 h-2 rounded-full transition ${index === currentIndex ? "bg-primary w-6" : "bg-white/50"}`}
                    />
                ))}
            </div>

            {/* Counter */}
            <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {currentIndex + 1} / {totalImages}
            </div>
        </>
      )}
    </div>
  )
}