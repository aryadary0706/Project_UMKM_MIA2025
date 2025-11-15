"use client";

import { Header } from "@/components/appcomponent/header";
import { Footer } from "@/components/appcomponent/footer";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import mockShops from "@/data/mockShops.json";
import { ImageCarousel } from "@/components/appcomponent/image-carousel";
import { useUserStore } from "@/lib/User";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

export default function FormAffiliate() {
  const router = useRouter();
  const { user } = useUserStore();
  const activeUser = user;
  const mockStore = mockShops[0];

  useEffect(() => {
    if (!activeUser) return;

    if (!activeUser.is_affiliate) {
      router.push("/affiliasi/form");
    }
  }, [activeUser, router]);

  // === MOCK DATA ===
  const weeklyVisitors = [
    { week: "Week 1", visitors: 120 },
    { week: "Week 2", visitors: 200 },
    { week: "Week 3", visitors: 180 },
    { week: "Week 4", visitors: 250 },
  ];

  const weeklyRatings = [
    { week: "Week 1", rating: 4.2 },
    { week: "Week 2", rating: 4.5 },
    { week: "Week 3", rating: 4.3 },
    { week: "Week 4", rating: 4.7 },
  ];

  const currentWeekVisitors = weeklyVisitors[weeklyVisitors.length - 1].visitors;
  const currentRating = weeklyRatings[weeklyRatings.length - 1].rating.toFixed(1);

  // === END MOCK DATA ===

  return (
    <div className="min-h-screen bg-[#EEDFC5]">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="flex justify-between">
          <Link href="/">
            <Button variant="outline">
              <ChevronLeft /> Kembali
            </Button>
          </Link>
          <Link href="/affiliasi/form">
            <Button variant="outline">
              Edit Form
            </Button>
          </Link>
        </div>

        <h1 className="text-2xl md:text-3xl font-medium mt-6">Analisis Halaman Usaha <span className="text-green-600 font-bold">{mockStore.name}</span></h1>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {/* --- Grafik Pengunjung --- */}
          <div className="bg-white rounded-lg shadow-md p-5">
            <h2 className="font-bold text-lg mb-2">Pengunjung per Minggu</h2>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={weeklyVisitors}>
                <CartesianGrid stroke="#f0f0f0" />
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="visitors" stroke="#8B6F47" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
            <div className="mt-3 font-semibold text-gray-800">
              Jumlah pengunjung minggu ini: {currentWeekVisitors}
            </div>
          </div>

          {/* --- Grafik Rating --- */}
          <div className="bg-white rounded-lg shadow-md p-5">
            <h2 className="font-bold text-lg mb-2">Rating Usaha per Minggu</h2>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={weeklyRatings}>
                <CartesianGrid stroke="#f0f0f0" />
                <XAxis dataKey="week" />
                <YAxis domain={[0, 5]} />
                <Tooltip />
                <Line type="monotone" dataKey="rating" stroke="#FBBF24" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
            <div className="mt-3 font-semibold text-gray-800">
              Rating saat ini: {currentRating} / 5
            </div>
          </div>
        </section>

        {/* --- Navigasi ke halaman toko --- */}
        <section className="mt-8 bg-white rounded-lg shadow-md p-5 flex flex-col md:flex-row items-center gap-4">
          <img
            src={mockStore.image}
            alt={mockStore.name}
            className="w-32 h-32 object-cover rounded-lg"
          />
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-xl">{mockStore.name}</h3>
            <p className="text-gray-600">{mockStore.description}</p>
            <Link href={`/umkm/${mockStore.id}`}>
              <Button variant="default">Kunjungi Halaman Usaha</Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
