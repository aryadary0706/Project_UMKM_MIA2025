import { UMKMCard } from "./shop-card"

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

interface UMKMGridProps {
  umkms: UMKM[]
  title?: string
  loading?: boolean
  emptyMessage?: string
  layout?: "compact" | "spacious"
}

export function ShopGrid({ umkms, title }: UMKMGridProps) {
  if (umkms.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">Tidak ada UMKM yang ditemukan</p>
      </div>
    )
  }

  return (
    <section>
      {title && (
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 md:mb-8 text-center md:text-left">
          {title}
        </h2>
      )}

      {/* Grid responsif menengah */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
        {umkms.map((umkm) => (
          <UMKMCard key={umkm.id} {...umkm} />
        ))}
      </div>
    </section>
  )
}

