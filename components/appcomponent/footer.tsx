import Link from "next/link"
import { Mail, Phone, MapPin, Cuboid   } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold"><Cuboid /></span>
              </div>
              <span className="font-bold text-lg">BeliDekat</span>
            </div>
            <p className="text-gray-300 text-sm">Temukan UMKM Terbaik di Sekitarmu</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Navigasi</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/" className="hover:text-yellow-100transition">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-yellow-100 transition">
                  Kategori
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-yellow-100 transition">
                  Tentang Kami
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold mb-4">Dukungan</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="#" className="hover:text-yellow-100 transition">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-yellow-100 transition">
                  Kebijakan Privasi
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-yellow-100 transition">
                  Syarat & Ketentuan
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">Kontak</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-[#F9F5F0]" />
                <a href="mailto:info@temulokal.id" className="hover:text-yellow-100 transition">
                  info@temulokal.id
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-[#F9F5F0]" />
                <a href="tel:+62812345678" className="hover:text-yellow-100 transition">
                  +62 812 345 678
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-[#F9F5F0] mt-0.5" />
                <span className="text-[#F9F5F0] hover:text-yellow-100">Jakarta, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-sm text-gray-400">© 2025 BeliDekat. Semua hak dilindungi.</p>
        </div>
      </div>
    </footer>
  )
}
