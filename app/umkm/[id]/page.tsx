"use client";

import { Header } from "@/components/appcomponent/header";
import { Footer } from "@/components/appcomponent/footer";
import { ImageCarousel } from "@/components/appcomponent/image-carousel";
import { ShopGrid } from "@/components/appcomponent/shop-grid";
import { MapPin, Phone, Clock, Star, ChevronLeft } from "lucide-react";
import { UMKM } from "@/lib/UMKMs";
import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import mockumkms from "@/data/mockShops.json";
import { Button } from "@/components/ui/button";
import { getCategoryColor } from "@/components/appcomponent/category-colors";

export default function UMKMDetailPage() {
	const params = useParams();
	const id = params?.id;
	const selectedUMKM = (mockumkms as UMKM[]).find(
		(m) => String(m.id) === String(id)
	);

	const coords = selectedUMKM?.coordinates;
	const whatsapp = selectedUMKM?.whatsapp;

	const [rating, setRating] = useState<number | null>(null);

	const handleSendRating = () => {
		if (!rating) return;
		// placeholder: replace with API call if needed
		alert(`Terima kasih! Anda memberi rating ${rating}`);
		setRating(null);
	};

	// Use public environment variable for Maps API key when provided.
	// If no key is set (e.g. during local dev without a key), fall back to a plain maps.google.com embed that doesn't require the Maps Embed API key.
	const MAPS_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
	const mapSrc = coords
		? MAPS_KEY
			? `https://www.google.com/maps/embed/v1/place?key=${MAPS_KEY}&q=${coords.lat},${coords.lng}`
			: `https://www.google.com/maps?q=${coords.lat},${coords.lng}&z=15&output=embed`
		: undefined;

	if (!selectedUMKM) {
		return (
			<div className="min-h-screen bg-[#F9F5F0]">
				<Header />
				<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
					<p className="text-center text-text-light">
						UMKM tidak ditemukan.
					</p>
				</main>
				<Footer />
			</div>
		);
	}

	const { bg: categoryBg, text: categoryText } = getCategoryColor(
		selectedUMKM.category
	);
	return (
		<div className="min-h-screen bg-background">
			<Header />

			<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
				{/* Back Button */}
				<Link href="/">
					<Button variant="outline">
						<ChevronLeft /> Kembali
					</Button>
				</Link>

				{/* Header */}
				<div className="mb-8">
					<div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
						<div>
							<h1 className="text-4xl font-bold text-text mb-2">
								{selectedUMKM.name}
							</h1>
							<div className="flex items-center gap-4 flex-wrap">
								<span
									className={`px-4 py-1 rounded-full font-semibold ${categoryBg} ${categoryText}`}
								>
									{selectedUMKM.category}
								</span>
								<span
									className={`ml-3 px-4 py-1 rounded-full font-semibold bg-white/90 text-gray-900 flex items-center gap-2 text-[16px]`}
								>
									<MapPin
										size={12}
										className="text-red-500"
									/>
									{selectedUMKM.region}
								</span>
								<div className="flex items-center gap-1">
									<Star
										size={18}
										className="text-yellow-500 fill-yellow-500"
									/>
									<span className="font-bold">
										{selectedUMKM.Rating}
									</span>
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
					<ImageCarousel
						images={selectedUMKM.gallery ?? []}
						title={selectedUMKM.name}
					/>
				</div>

				{/* Content Grid */}
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
					{/* Main Content */}
					<div className="lg:col-span-2 space-y-8">
						{/* Description */}
						<div>
							<h2 className="text-2xl font-bold text-text mb-4">
								Tentang
							</h2>
							<p className="text-text-light leading-relaxed">
								{selectedUMKM.description}
							</p>
						</div>

						{/* Map */}
						<div>
							<h2 className="text-2xl font-bold text-text mb-4">
								Lokasi
							</h2>
							<div className="w-full h-80 bg-gray-200 rounded-lg overflow-hidden">
								{coords ? (
									<iframe
										width="100%"
										height="100%"
										frameBorder="0"
										src={mapSrc}
										allowFullScreen
										loading="lazy"
										referrerPolicy="no-referrer-when-downgrade"
										className="w-full h-full"
									/>
								) : (
									<div className="w-full h-full flex items-center justify-center text-text-light">
										Lokasi tidak tersedia
									</div>
								)}
							</div>
							<p className="text-text-light mt-4 flex items-start gap-2">
								<MapPin
									size={20}
									className="text-primary shrink-0 mt-0.5"
								/>
								{selectedUMKM.address}
							</p>
						</div>
					</div>

					{/* Sidebar */}
					<div className="space-y-6">
						{/* Contact Card */}
						<div className="bg-white p-6 rounded-xl border border-border">
							<h3 className="font-bold text-lg text-text mb-4">
								Hubungi Kami
							</h3>

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
								{whatsapp ? (
									<a
										href={`https://wa.me/${whatsapp.replace(
											/\D/g,
											""
										)}`}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center gap-3 p-3 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition font-medium"
									>
										<Phone size={20} />
										WhatsApp
									</a>
								) : (
									<button
										disabled
										className="flex items-center gap-3 p-3 bg-green-50 text-green-400 rounded-lg transition font-medium opacity-60 cursor-not-allowed"
									>
										<Phone size={20} />
										WhatsApp
									</button>
								)}

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
							<p className="text-text-light">
								{selectedUMKM.hours}
							</p>
						</div>

						{/* Rating */}
						<div className="bg-white p-6 rounded-xl border border-border">
							<h3 className="font-bold text-lg text-text mb-4">
								Kasih Rating
							</h3>
							<div className="flex items-center gap-6 mb-4">
								{[1, 2, 3, 4, 5].map((n) => (
									<button
										key={n}
										type="button"
										aria-label={`Rating ${n}`}
										onClick={() => setRating(n)}
										className={
											`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold transition-shadow ${
												rating === n
													? "ring-4 ring-yellow-300"
													: ""
											} ` + "bg-[#3d2917]"
										}
									>
										{n}
									</button>
								))}
							</div>
							<div>
								<button
									type="button"
									onClick={handleSendRating}
									className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#e6a84a] text-white font-semibold shadow-sm hover:brightness-95 transition"
								>
									Send
								</button>
							</div>
						</div>

						{/* Info Box */}
						<div className="bg-primary-light p-6 rounded-xl">
							<p className="text-sm text-text">
								Dukung bisnis lokal dengan berbelanja di UMKM
								pilihan Anda. Setiap pembelian membantu
								mengembangkan ekonomi komunitas.
							</p>
						</div>
					</div>
				</div>

				{/* Related UMKM */}
				<section className="border-t border-border pt-12">
					<ShopGrid
						umkms={mockumkms.slice(0, 3)}
						title="UMKM Serupa di Sekitar Anda"
					/>
				</section>
			</main>

			<Footer />
		</div>
	);
}
