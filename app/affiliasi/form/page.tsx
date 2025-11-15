"use client";

import { useState,  useEffect } from "react";
import { useRouter } from "next/navigation";
import { Header } from "@/components/appcomponent/header";
import { Footer } from "@/components/appcomponent/footer";
import { BusinessIdentity } from "@/components/appcomponent/form/IdentityForm";
import { Address } from "@/components/appcomponent/form/addressForm";
import { Operational } from "@/components/appcomponent/form/operationalForm";
import { useUMKMStore } from "@/lib/UMKMs";
import { useUserStore, User } from "@/lib/User";
import Link from "next/link";
import { Button } from "@/components/ui/button";
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
  const createUMKM = useUMKMStore((state) => state.createUMKM);
  const router = useRouter();
  const setAffiliateStatus = useUserStore((state) => state.setAffiliateStatus);


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

    if (!formData.name || !formData.category || !formData.description || !formData.address || !formData.region || !formData.phone || !formData.email || !formData.whatsapp || !formData.hours || formData.operationalDays.length === 0 ) {
      alert("Mohon lengkapi semua field yang diperlukan.");
      return;
    }

    const newUMKM = {
      id: 0,
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

    createUMKM(newUMKM);
    setAffiliateStatus(true);

    toast("Form Afiliasi Berhasil Disubmit!", {
      description: `Selamat ${formData.name} menjadi affiliate kami!`
    });
    router.push("/affiliasi");
  };

  return (
    <div className="min-h-screen bg-[#EEDFC5]">
      <Header />

      <main className="max-w-7xl mx-auto py-6 px-8">
        <div className="flex mb-4 justify-start items-center gap-6">
          <Link href="/">
          <Button variant="secondary" className="border border-gray-800">
            Kembali ke Beranda
          </Button>
        </Link>
        </div>
        <form onSubmit={handleSubmit}>
          <BusinessIdentity
            formData={{
              name: formData.name || "Warteg Barokah",
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

          <div>
            <span className="text-bold text-sm md:text-md">Tekan Tombol submit jika sudah mengisi form tersebut. Perhatikan data yang sudah dimasukan benar adanya</span>
          </div>

          <div className="flex justify-start mt-6">
              <Button
                variant="default"
                className="bg-white text-gray-700 px-5 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
                onClick ={handleSubmit}
                >
                Submit Afiliasi
              </Button>
          </div>
        </form>
      </main>
      <Footer />
    </div>
  );
}
