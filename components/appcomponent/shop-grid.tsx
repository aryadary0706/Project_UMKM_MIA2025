import { UMKMCard } from "./shop-card"
import { UMKM } from "@/lib/UMKMs"
import Image from "next/image"

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
      <div className="flex flex-col justify-center items-center">
        <Image
          src="House searching-pana.svg"
          alt="No UMKM Found"
          width={300}
          height={300}
          className="mb-2"
        />
        <p className="text-gray-900 font-bold text-lg">Tidak ada UMKM yang ditemukan</p>
      </div>
    )
  }

  return (
    <section>
      {/* Grid responsif menengah */}
      <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 lg:gap-8 justify-center">
        {umkms.map((umkm) => (
          <UMKMCard key={umkm.id} {...umkm} />
        ))}
      </div>
    </section>
  )
}