import { Header } from "@/components/appcomponent/header";
import { Footer } from "@/components/appcomponent/footer";
import mockUMKMs from "@/data/mockShops.json";
import { ShopGrid } from "@/components/appcomponent/shop-grid";
import { FilterSections } from "@/components/appcomponent/filter-sections";
import BannerCarousel from "@/components/appcomponent/banner-carousel";

export default function App() {
  return (
    <div className="min-h-screen bg-[#F9F5F0]">
      {/* Header */}
      <Header />
      <main className="px-4 md:px-0 flex flex-col items-center">
        {/* Hero Section */}
      <div id="banner" className="flex justify-center pb-2">
        <BannerCarousel />
      </div>

      <div id="kategori" className="flex mt-3 w-7xl">
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