import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">T</span>
              </div>
              <span className="font-bold text-lg">TemuLokal</span>
            </div>
            <p className="text-gray-300 text-sm">Temukan UMKM Terbaik di Sekitarmu</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Navigasi</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/" className="hover:text-primary transition">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition">
                  Kategori
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition">
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
                <Link href="#" className="hover:text-primary transition">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition">
                  Kebijakan Privasi
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition">
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
                <Mail size={16} className="text-primary" />
                <a href="mailto:info@temulokal.id" className="hover:text-primary transition">
                  info@temulokal.id
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-primary" />
                <a href="tel:+62812345678" className="hover:text-primary transition">
                  +62 812 345 678
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-primary mt-0.5" />
                <span>Jakarta, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-sm text-gray-400">© 2025 TemuLokal. Semua hak dilindungi.</p>
        </div>
      </div>
    </footer>
  )
}
