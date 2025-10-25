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

export function UMKMCard({ id, name, category, address, image, promo }: UMKM) {
  return (
    <Link href={`/umkm/${id}`}>
      <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer h-full">
        {/* Image Container */}
        <div className="relative h-48 bg-gray-200 overflow-hidden">
          <img src={image || "/placeholder.svg"} alt={name} className="w-full h-full object-cover" />
          {promo && (
            <div className="absolute top-3 right-3 bg-accent text-white px-3 py-1 rounded-full text-sm font-bold">
              {promo && "Promo"}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-bold text-lg text-text mb-2 line-clamp-2">{name}</h3>

          {/* Type Badge */}
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-block bg-primary-light text-primary px-3 py-1 rounded-full text-xs font-semibold">
              {category}
            </span>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2 text-text-light text-sm">
            <MapPin size={16} className="text-primary shrink-0" />
            <span className="line-clamp-1">{address}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
