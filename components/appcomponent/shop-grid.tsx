import { UMKMCard } from "./shop-card"
import { UMKM } from "@/lib/UMKMs"

interface UMKMGridProps {
  umkms: UMKM[]
  title?: string
  loading?: boolean
  emptyMessage?: string
  layout?: "compact" | "spacious"
}

export function ShopGrid({ umkms }: UMKMGridProps) {
  if (!umkms || umkms.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">Tidak ada UMKM yang ditemukan</p>
      </div>
    )
  }

  return (
    <section>
      {/* Grid responsif menengah */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 lg:gap-8 justify-center">
        {umkms.map((umkm) => (
          <UMKMCard key={umkm.id} {...umkm} />
        ))}
      </div>
    </section>
  )
}

