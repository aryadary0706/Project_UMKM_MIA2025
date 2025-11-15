import { Header } from "@/components/appcomponent/header";
import { Footer } from "@/components/appcomponent/footer";
import { FilterSections } from "@/components/appcomponent/filter-sections";
import BannerCarousel from "@/components/appcomponent/banner-carousel";
import { User } from "@/lib/User";

export default function App() {
  return (
    <div className="min-h-screen bg-[#EEDFC5]">
      {/* Header */}
      <Header/>
      <main className="flex flex-col">

        {/* Hero Section */}
      <section className="w-full pt-3 bg-[#EEDFC5]">
        <div className="max-w-7xl mx-auto">
          <BannerCarousel/>
        </div>
      </section>

      {/* Content Session */}
      <div id="kategori" className="w-full shadow-lg flex mt-2 rounded-t-[80px] bg-[#F9F5F0] border-2">
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