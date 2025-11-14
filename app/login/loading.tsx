// app/loading.tsx
import LoadingSpinner from "@/components/appcomponent/loadingSpinner";

// Komponen Loading sederhana
export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#F9F5F0]">
      <LoadingSpinner/>
      <p className="mt-4 text-lg font-medium text-gray-700">
        Mempersiapkan form Login...
      </p>
    </div>
  );
}