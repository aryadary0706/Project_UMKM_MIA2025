import Link from "next/link";
import { MapPin, Star } from "lucide-react";
import { useUMKMStore, UMKM } from "@/lib/UMKMs";

export function UMKMCard({ id, name, category, region, image, Rating }: UMKM) {
	return (
		<Link href={`/umkm/${id}`}>
			<div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer h-full">
				{/* Image Section */}
				<div className="relative h-36 sm:h-40 md:h-44 lg:h-48 bg-gray-200 overflow-hidden">
					{/* Image */}
					<img
						src={image || "/placeholder.svg"}
						alt={name}
						className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
					/>

					{/* Location Badge */}
					<div className="absolute top-2 left-2 bg-black/60 text-white text-[10px] sm:text-xs px-2 py-0.5 rounded-full flex items-center gap-1">
						<MapPin size={12} />
						{region}
					</div>
				</div>

				{/* Content */}
				<div className="p-3 sm:p-4">
					{/* Top Row: Name + Rating */}
					<div className="flex items-start justify-between gap-2 mb-2">
						<h3 className="font-semibold sm:font-bold text-base sm:text-lg text-gray-900 line-clamp-2">
							{name}
						</h3>

						{/* Rating Badge */}
						{Rating && (
							<div className="flex items-center gap-1 bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-medium shrink-0">
								<Star size={12} className="text-yellow-400" />
								{Rating}
							</div>
						)}
					</div>

					{/* Category */}
					<div className="inline-block bg-blue-100 text-blue-700 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[11px] sm:text-xs font-medium mb-2">
						{category}
					</div>
				</div>
			</div>
		</Link>
	);
}
