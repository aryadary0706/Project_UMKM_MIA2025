import Link from "next/link"
import { MapPin } from "lucide-react"

interface UMKM {
  id: number
  name: string
  category: string
  description: string
  address: string
  region: string
  phone: string
  image: string
  website?: string
  promo?: boolean
  isNew?: boolean
  isPopular?: boolean
  gallery?: string[]
}

export function UMKMCard({ id, name, category, region, image }: UMKM) {
  return (
    <Link href={`/umkm/${id}`}>
      <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer h-full max-w-72">
        {/* Image Container */}
        <div className="relative h-36 sm:h-40 md:h-44 lg:h-48 bg-gray-200 overflow-hidden">
          <img
            src={image || "/placeholder.svg"}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
        </div>

        {/* Content */}
        <div className="p-3 sm:p-4">
          {/* Nama UMKM */}
          <h3 className="font-semibold sm:font-bold text-base sm:text-lg text-gray-900 line-clamp-2 mb-2">
            {name}
          </h3>

          {/* Kategori */}
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-block bg-blue-100 text-blue-700 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[11px] sm:text-xs font-medium">
              {category}
            </span>
          </div>

          {/* Lokasi */}
          <div className="flex items-center gap-1.5 sm:gap-2 text-gray-500 text-xs sm:text-sm">
            <MapPin size={14} className="text-blue-500 shrink-0" />
            <span className="line-clamp-1">{region}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
