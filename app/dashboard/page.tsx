import { Header } from "@/components/appcomponent/header";
import { Footer } from "@/components/appcomponent/footer";
import { FilterSections } from "@/components/appcomponent/filter-sections";
import BannerCarousel from "@/components/appcomponent/banner-carousel";

export default function App() {
  return (
    <div className="min-h-screen bg-[#F9F5F0]">
      {/* Header */}
      <Header />
      <main className="flex flex-col">
        {/* Hero Section */}
      <div id="banner" className="flex pb-10 pt-8 px-10 w-full">
        <BannerCarousel />
      </div>

      <div id="kategori" className="flex mt-3">
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