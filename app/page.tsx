import { Header } from "@/components/appcomponent/header";
import { Footer } from "@/components/appcomponent/footer";
import { FilterSections } from "@/components/appcomponent/filter-sections";
import BannerCarousel from "@/components/appcomponent/banner-carousel";

export default function App() {
  return (
    <div className="min-h-screen bg-[#F9F5F0]">
      {/* Header */}
      <Header />
      <main className="flex flex-col items-center">
        {/* Hero Section */}
      <div id="banner" className="flex">
        <BannerCarousel />
      </div>

      <div id="kategori" className="flex mt-3 w-8xl">
        <FilterSections />
      </div>

      </main>
      {/* Footer */}
      <div id="kontak">
        <Footer />
      </div>
    </div>
  );
}