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
}

export function ShopGrid({ umkms, title }: UMKMGridProps) {
  if (umkms.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-text-light text-lg">Tidak ada UMKM yang ditemukan</p>
      </div>
    )
  }

  return (
    <div>
      {title && <h2 className="text-3xl font-bold text-text mb-8">{title}</h2>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {umkms.map((umkm) => (
          <UMKMCard key={umkm.id} {...umkm} />
        ))}
      </div>
    </div>
  )
}
