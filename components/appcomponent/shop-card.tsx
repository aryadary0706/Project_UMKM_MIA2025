import Link from "next/link";
import { MapPin, Star } from "lucide-react";
import { UMKM } from "@/lib/UMKMs";
import Image from "next/image";

type ColorClasses = {
    bg: string;
    text: string;
};

type CategoryKey = "kuliner" | "retail" | "jasa" | "fashion" | "elektronik" | "lainnya" | "default";

const categoryColorMap: Record<CategoryKey, ColorClasses> = {
    kuliner: { bg: "bg-red-500/80", text: "text-white" },
    retail: { bg: "bg-blue-500/80", text: "text-white" },
    jasa: { bg: "bg-purple-500/80", text: "text-white" },
    fashion: { bg: "bg-pink-500/80", text: "text-white" },
    elektronik: { bg: "bg-indigo-500/80", text: "text-white" },
    lainnya: { bg: "bg-gray-500/80", text: "text-white" },
    default: { bg: "bg-gray-500/80", text: "text-white" }, 
};

function getCategoryColor(category: string): ColorClasses {
    const normalizedCategory = category.toLowerCase();
    if (Object.keys(categoryColorMap).includes(normalizedCategory)) {
        return categoryColorMap[normalizedCategory as CategoryKey];
    }
    return categoryColorMap.default;
}

export function UMKMCard({ id, name, category, region, image, Rating, promo, isNew }: UMKM) {
    const { bg, text } = getCategoryColor(category);

    return (
        <Link href={`/umkm/${id}`}>
            <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.05] cursor-pointer h-full">
                <div className="relative w-full h-64 md:h-68 lg:h-73 flex flex-col justify-between p-4">

                    {/* Background Image */}
                    <Image
                        src={image || "/images/placeholder.png"}
                        alt="UMKM Image"
                        fill
                        placeholder="blur"
                        blurDataURL="/images/placeholder.png"
                        className="object-cover"
                    />
                    {/* Dark Overlay (background gelap) */}
                    <div className="absolute inset-0 bg-linear-to-b from-black/40 to-black/70" />
                    {/* --- CONTENT LAPIS ATAS --- */}
                    <div className="relative z-10 h-full flex flex-col justify-between">
                        {/* Top Section */}
                        <div className="flex items-start justify-between">
                            {/* Location Badge */}
                            <div className="bg-white/90 text-gray-900 text-[10px] sm:text-xs px-2 py-0.5 rounded-full flex items-center gap-1 font-semibold">
                                <MapPin size={12} className="text-red-500" />
                                {region}
                            </div>
                            {/* Rating Badge */}
                            {Rating && (
                                <div className="flex items-center gap-1 bg-white/90 text-gray-900 px-2 py-0.5 rounded-full text-[10px] sm:text-sm font-bold shrink-0">
                                    <Star size={12} className="text-yellow-500 fill-yellow-500" />
                                    {Rating}
                                </div>
                            )}
                        </div>
                        {/* Bottom Section */}
                        <div className="flex flex-col text-white">
                            {/* Category + Other Badges */}
                            <div className="flex items-center justify-between gap-2 mb-2">   
                                {/* Category Badge */}
                                <div className={`inline-block ${bg} ${text} px-3 py-1 rounded-full text-xs sm:text-sm font-bold`}>
                                    {category}
                                </div>
                                <div className="flex gap-2">
                                    {/* Promo Badge */}
                                    {promo && (
                                        <div className="inline-block text-xs sm:text-sm font-bold bg-orange-500/70 px-2 py-1 rounded-full">
                                            🔥 Promo!
                                        </div>
                                    )}
                                    {/* New Badge */}
                                    {isNew && (
                                        <div className="inline-block text-xs sm:text-sm font-bold bg-blue-400/70 px-2 py-1 rounded-full">
                                            Baru!
                                        </div>
                                    )}
                                </div>
                            </div>
                            {/* UMKM Name */}
                            <h3 className="font-bold text-xl sm:text-2xl leading-tight line-clamp-2">
                                {name}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>

        </Link>
    );
}