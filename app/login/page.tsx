"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useUserStore } from "@/lib/User";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // VALIDASI
    if (!email || !password) {
      setError("Semua field harus diisi");
      return;
    }

    if (password.length < 6) {
      setError("Password anda Salah");
      return;
    }

    setIsLoading(true);

    try {
      useUserStore.getState().setUser({
        email: email,
        username: "i am registered user",
        is_affiliate: false,
        owned_umkm_id: null,
      });

      router.push("/");
    } catch (err) {
      setError("Terjadi kesalahan, coba lagi.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex">
      {/* LEFT PANEL */}
      <section className="w-full md:flex-3/8 bg-white rounded-r-[70px] p-10 md:p-16 flex flex-col justify-center">
        <h1 className="text-3xl font-bold mb-6">Login</h1>

        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-300 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Email */}
          <div>
            <label className="block text-sm mb-2">Email</label>
            <div className="flex items-center border-b border-black/50 pb-2">
              <Mail size={18} className="mr-2 text-gray-500" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full outline-none"
                placeholder="email@example.com"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm mb-2">Password</label>
            <div className="flex items-center border-b border-black/50 pb-2">
              <Lock size={18} className="mr-2 text-gray-500" />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full outline-none"
                placeholder="••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="ml-2 text-gray-500"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Terms */}
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" className="w-4 h-4" />
            Ingat Saya
          </label>

          {/* Submit */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 bg-linear-to-r from-[#00980F] to-[#7DD33B] text-white rounded-lg font-semibold text-lg disabled:opacity-50"
          >
            {isLoading ? "Memproses..." : "Submit"}
          </button>
        </form>

        <div className="font-medium mt-10">
          <span>
            Belum punya akun?
            <Link href="/register">
              <i className="text-green-600 ml-1 hover:underline">Klik disini</i>
            </Link>
          </span>
        </div>
      </section>

      {/* RIGHT PANEL */}
      <section className="hidden md:flex md:flex-5/8 bg-linear-to-br from-[#00980F] to-[#7DD33B] sticky top-0 h-screen ">
        <div className="absolute bottom-0 right-0">
          <Image
            src="/login.png"
            alt="login Illustration"
            width={400}
            height={400}
            priority
          />
        </div>
      </section>
    </main>
  );
}
