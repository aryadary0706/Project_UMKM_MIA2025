"use client"

import { Header } from "@/components/appcomponent/header"
import { Footer } from "@/components/appcomponent/footer"
import { ImageCarousel } from "@/components/appcomponent/image-carousel"
import { ShopGrid } from "@/components/appcomponent/shop-grid"
import { MapPin, Phone, Clock, Star } from "lucide-react"
import { UMKM } from "@/lib/UMKMs"
import Link from "next/link"
import mockumkms from "@/data/mockShops.json"


export default function UMKMDetailPage( selectedUMKM: UMKM) {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Back Button */}
        <Link href="/" className="text-primary hover:text-primary/80 font-medium mb-6 inline-block">
          ← Kembali ke Direktori
        </Link>

        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
            <div>
              <h1 className="text-4xl font-bold text-text mb-2">{selectedUMKM.name}</h1>
              <div className="flex items-center gap-4 flex-wrap">
                <span className="bg-primary-light text-primary px-4 py-1 rounded-full font-semibold">
                  {selectedUMKM.category}
                </span>
                <div className="flex items-center gap-1">
                  <Star size={18} className="text-accent fill-accent" />
                  <span className="font-bold">{selectedUMKM.Rating}</span>
                  {/* <span className="text-text-light">({selectedUMKM.reviews} ulasan)</span> */}
                </div>
              </div>
            </div>
            {selectedUMKM.promo && (
              <div className="bg-accent text-white px-6 py-3 rounded-lg font-bold text-lg">
                🔥 {selectedUMKM.promo}
              </div>
            )}
          </div>
        </div>

        {/* Image Carousel */}
        <div className="mb-12">
          <ImageCarousel images={selectedUMKM.gallery} title={selectedUMKM.name} />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <div>
              <h2 className="text-2xl font-bold text-text mb-4">Tentang</h2>
              <p className="text-text-light leading-relaxed">{selectedUMKM.description}</p>
            </div>

            {/* Map */}
            <div>
              <h2 className="text-2xl font-bold text-text mb-4">Lokasi</h2>
              <div className="w-full h-80 bg-gray-200 rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDummyKey&q=${selectedUMKM.coordinates.lat},${selectedUMKM.coordinates.lng}`}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
              <p className="text-text-light mt-4 flex items-start gap-2">
                <MapPin size={20} className="text-primary shrink-0 mt-0.5" />
                {selectedUMKM.address}
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Card */}
            <div className="bg-white p-6 rounded-xl border border-border">
              <h3 className="font-bold text-lg text-text mb-4">Hubungi Kami</h3>

              <div className="space-y-4">
                {/* Phone */}
                <a
                  href={`tel:${selectedUMKM.phone}`}
                  className="flex items-center gap-3 p-3 bg-primary-light text-primary rounded-lg hover:bg-primary hover:text-white transition font-medium"
                >
                  <Phone size={20} />
                  Telepon
                </a>

                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${selectedUMKM.whatsapp.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition font-medium"
                >
                  <Phone size={20} />
                  WhatsApp
                </a>

                {/* Visit Location */}
                {/* <a
                  href={`https://maps.google.com/?q=${selectedUMKM.coordinates.lat},${selectedUMKM.coordinates.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-accent-light text-accent rounded-lg hover:bg-accent hover:text-white transition font-medium"
                >
                  <MapPin size={20} />
                  Kunjungi Lokasi
                </a> */}
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white p-6 rounded-xl border border-border">
              <h3 className="font-bold text-lg text-text mb-4 flex items-center gap-2">
                <Clock size={20} className="text-primary" />
                Jam Operasional
              </h3>
              <p className="text-text-light">{selectedUMKM.hours}</p>
            </div>

            {/* Info Box */}
            <div className="bg-primary-light p-6 rounded-xl">
              <p className="text-sm text-text">
                Dukung bisnis lokal dengan berbelanja di UMKM pilihan Anda. Setiap pembelian membantu mengembangkan
                ekonomi komunitas.
              </p>
            </div>
          </div>
        </div>

        {/* Related UMKM */}
        <section className="border-t border-border pt-12">
          <ShopGrid umkms={mockumkms} title="UMKM Serupa di Sekitar Anda" />
        </section>
      </main>

      <Footer />
    </div>
  )
}
