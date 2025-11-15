"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Mail, Lock, User, Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import logo from "@/public/logo.png";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [registerUMKM, setRegisterUMKM] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // VALIDASI USERNAME & PASSWORD
    if (!name || !email || !password || !confirmPassword) {
      setError("Semua field harus diisi");
      return;
    }

    if (password !== confirmPassword) {
      setError("Password tidak cocok");
      return;
    }

    if (password.length < 6) {
      setError("Password minimal 6 karakter");
      return;
    }

    setIsLoading(true);

    try {
      // PILIH REDIRECT
      if (registerUMKM) {
        router.push("/affiliasi/form");
      } else {
        router.push("/login");
      }
    } catch (err) {
      setError("Terjadi kesalahan, silakan coba lagi");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex">
      {/* ================= LEFT PANEL ================= */}
      <section className="w-full md:w-3/8 bg-white rounded-r-[70px] p-10 md:p-16 flex flex-col justify-center">
        <h1 className="text-3xl font-bold mb-6">Daftar</h1>

        {/* Error box */}
        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-300 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        {/* FORM */}
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

          {/* Username */}
          <div>
            <label className="block text-sm mb-2">Username</label>
            <div className="flex items-center border-b border-black/50 pb-2">
              <User size={18} className="mr-2 text-gray-500" />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full outline-none"
                placeholder="username"
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

          {/* Confirm Password */}
          <div>
            <label className="block text-sm mb-2">Konfirmasi Password</label>
            <div className="flex items-center border-b border-black/50 pb-2">
              <Lock size={18} className="mr-2 text-gray-500" />
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full outline-none"
                placeholder="••••••"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="ml-2 text-gray-500"
              >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* UMKM Checkbox */}
          <div className="bg-green-100 border border-green-300 rounded-xl p-4 flex gap-3">
            <input
              type="checkbox"
              checked={registerUMKM}
              onChange={() => setRegisterUMKM(!registerUMKM)}
              className="w-5 h-5"
            />
            <div>
              <p className="font-medium text-sm">
                Anda mendaftar untuk mempromosikan usaha anda.
              </p>
              <p className="text-xs text-gray-600">
                Centang checkbox ini agar diarahkan untuk mendaftar UMKM
              </p>
            </div>
          </div>

          {/* Terms */}
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" className="w-4 h-4" required />
            Saya setuju dengan syarat ketentuan & kebijakan privasi
          </label>

          {/* Submit */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 bg-linear-to-r from-green-700 to-green-400 text-white rounded-lg font-semibold text-lg disabled:opacity-50"
          >
            {isLoading ? "Memproses..." : "Submit"}
          </button>
        </form>

        <div className="font-medium mt-10">
          <span>Sudah memiliki Akun? 
            <Link href="/login" className="tewxt-green-400">
              <i className="text-green-600 ml-1 hover:underline">Masuk disini</i>
            </Link></span>
        </div>
      </section>

      {/* RIGHT PANEL */}
      <section className="hidden md:block w-5/8 bg-linear-to-br from-green-400 to-green-800  sticky top-0 h-screen">
        <div className="absolute bottom-0 right-0">
          <Image
            src="/Logo_Daftar.png"
            alt="Register Illustration"
            width={400}
            height={400}
            priority
          />
        </div>
      </section>
    </main>
  );
}
