"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Mail, Lock, Eye, EyeOff } from "lucide-react"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      router.push("/")
    } catch (err) {
      setError("Email atau password salah")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 bg-linear-to-br from-[#f3e9dd] to-white py-12 px-4">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-[#1F2937] mb-2">Login</h1>
              <p className="text-gray-600">Masuk ke akun Nearby Anda</p>
            </div>

            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">{error}</div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#1F2937] mb-2">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3a5a40] focus:border-transparent outline-none transition-all"
                    placeholder="nama@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-[#1F2937] mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3a5a40] focus:border-transparent outline-none transition-all"
                    placeholder="........."
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded border-gray-300 text-[#3a5a40] focus:ring-[#3a5a40]" />
                  <span className="text-sm text-gray-600">Ingat saya</span>
                </label>
                <Link href="#" className="text-sm text-[#3a5a40] hover:text-[#2d4630] font-medium">
                  Lupa password?
                </Link>
              </div>

              <Link href="/">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 bg-[#3a5a40] text-white rounded-lg hover:bg-[#2d4630] transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                  {isLoading ? "Memproses..." : "Masuk"}
                </button>
              </Link>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Belum punya akun?{" "}
                <Link href="/register" className="text-[#3a5a40] hover:text-[#2d4630] font-medium">
                  Daftar sekarang
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
