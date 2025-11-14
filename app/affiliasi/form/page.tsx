"use client";

import { useState,  useEffect } from "react";
import { useRouter } from "next/navigation";
import { Header } from "@/components/appcomponent/header";
import { Footer } from "@/components/appcomponent/footer";
import { BusinessIdentity } from "@/components/appcomponent/form/IdentityForm";
import { Address } from "@/components/appcomponent/form/addressForm";
import { Operational } from "@/components/appcomponent/form/operationalForm";
import { useUMKMStore } from "@/lib/UMKMs";
import { useUserStore } from "@/lib/User";
import { toast } from "sonner";

interface FormData {
  name: string;
  phone: string;
  owner: string;
  email: string;
  whatsapp: string;
  category: string;
  description: string;
  coverImage: File | null;
  image: File | null;

  region: string;
  address: string;

  hours: string;
  operationalDays: string[];
}

export default function FormAffiliate() {
  const addUMKM = useUMKMStore((state) => state.addUMKM);
  const router = useRouter();

  const isAffiliate = false; // ubah jadi true untuk tes redirect ke /affiliasi/page

  useEffect(() => {
    if (isAffiliate) {
      router.push("/affiliasi");
    } else {
      router.push("/affiliasi/form");
    }
  }, [isAffiliate, router])

  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    owner: "",
    email: "",
    whatsapp: "",
    category: "",
    description: "",
    coverImage: null,
    image: null,
    region: "",
    address: "",
    hours: "",
    operationalDays: [],
  });

  const handleChange = (field: string, value: string | string[]) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };


  const handleImageChange = (field: string, file: File | null) => {
    setFormData((prev) => ({
      ...prev,
      [field]: file,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.owner) {
      alert("Mohon lengkapi data yang wajib diisi");
      return;
    }

    // 📌 Convert FormData → UMKM
    const newUMKM = {
      id: 0, // akan di-generate otomatis di store
      name: formData.name,
      category: formData.category,
      description: formData.description,
      address: formData.address,
      region: formData.region,
      phone: formData.phone,
      email: formData.email,
      whatsapp: formData.whatsapp,
      hours: formData.hours,
      operationalDays: formData.operationalDays,
      Rating: 0,
      coordinates: { lat: 0, lng: 0 },
      isNew: true,
    };

    addUMKM(newUMKM);

    alert("UMKM berhasil ditambahkan!");
  };

  return (
    <div className="min-h-screen bg-[#EEDFC5]">
      <Header />

      <main className="max-w-7xl mx-auto py-8">
        <div className="flex mb-6 justify-center">
          <span className="text-4xl font-bold">FORMULIR ...</span>
        </div>
        <form onSubmit={handleSubmit}>
          <BusinessIdentity
            formData={{
              name: formData.name,
              phone: formData.phone,
              email: formData.email,
              whatsapp: formData.whatsapp,
              category: formData.category,
              description: formData.description,
            }}
            onChange={handleChange}
            onImageChange={handleImageChange}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Address
              formData={{
                region: formData.region,
                address: formData.address,
              }}
              onChange={handleChange}
            />

            <Operational
              formData={{
                hours: formData.hours,
                operationalDays: formData.operationalDays,
              }}
              onChange={handleChange}
            />
          </div>

          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-500 transition-colors shadow-lg"
            >
              Submit Afiliasi
            </button>
          </div>
        </form>
      </main>
      <Footer />
    </div>
  );
}
