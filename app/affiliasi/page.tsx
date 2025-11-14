"use client";

import { Header } from "@/components/appcomponent/header";
import { Footer } from "@/components/appcomponent/footer";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/lib/User";

export default function FormAffiliate() {
  const router = useRouter();
  const { user } = useUserStore();

  // 🧩 User dummy statis untuk proyek frontend tanpa login
  const user1 = {
    email: "test@email.com",
    username: "demo",
    is_affiliate: false,
    owned_umkm_id: null,
  };

  // 🧠 Gunakan user dummy jika store kosong
  const activeUser = user || user1;

  useEffect(() => {
  if (!activeUser) return;

  if (activeUser.is_affiliate) {
    // kalau true
    router.push("/affiliasi");
  } else {
    // kalau false
    router.push("/affiliasi/form");
  }
}, [activeUser, router]);

  return (
    <div className="min-h-screen bg-[#EEDFC5]">
      <Header user={user1}/>

      <main className="flex items-center justify-center h-[80vh]">
        <p className="text-gray-700 text-lg font-medium">
          Memeriksa status afiliasi...
        </p>
      </main>

      <Footer />
    </div>
  );
}
