// components/form/BusinessIdentity.tsx
import React from 'react';
import { Upload  } from 'lucide-react';
import { CATEGORIES } from '@/data/category';

interface BusinessIdentityProps {
  formData: {
    name: string;
    phone: string;
    email: string;
    whatsapp: string;
    category: string;
    description: string;
  };
  onChange: (field: string, value: string) => void;
  onImageChange: (field: string, file: File | null) => void;
}

export const BusinessIdentity: React.FC<BusinessIdentityProps> = ({
  formData,
  onChange,
  onImageChange,
}) => {
  const handleFileChange = (field: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    onImageChange(field, file);
  };

  return (
    <div className="bg-white rounded-2xl border-2 border-[#8B6F47] px-14 py-10 mb-6  md:mx-0">
      <h2 className="text-xl md:text-2xl font-bold mb-3">IDENTITAS USAHA</h2>
      <span className="text-md font-medium text-gray-800 mb-6 block">Form ini menyangkut mengenai data usaha anda seperti nama, jenis usaha, dll. Isi identitas usaha Anda dengan lengkap dan benar.</span>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Kolom Kiri */}
        <div className="space-y-4">
          <div>
            <label className="block text-xs md:text-sm font-semibold mb-2">Nama UMKM</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => onChange('name', e.target.value)}
              placeholder='Nama Usaha'
              className="w-full px-4 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B6F47]"
            />
          </div>

          <div>
            <label className="block text-xs md:text-sm font-semibold mb-2">Kategori</label>
            <select
              value={formData.category}
              onChange={(e) => onChange('category', e.target.value)}
              className="w-full px-4 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B6F47] appearance-none bg-white"
            >
              {CATEGORIES.map((category) => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">No. Telp</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => onChange('phone', e.target.value)}
              placeholder='ex: +62XXXXXXXX'
              className="w-full px-4 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B6F47]"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Email (Opsional)</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => onChange('email', e.target.value)}
              placeholder='email@gmail.com'
              className="w-full px-4 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B6F47]"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Whatsapp (Opsional)</label>
            <input
              type="tel"
              value={formData.whatsapp}
              onChange={(e) => onChange('whatsapp', e.target.value)}
              placeholder='08XXXXXXXXXX'
              className="w-full px-4 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B6F47]"
            />
          </div>
        </div>

        {/* Kolom Kanan */}
        <div className="space-y-4">
          <div>
            <label className="block text-xs md:text-sm font-semibold mb-2">Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => onChange('description', e.target.value)}
              rows={6}
              placeholder='jelaskan apa usaha anda ex: Usaha makanan yang berdiri sejak bla bla bla'
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B6F47] resize-none"
            />
          </div>
          {/* Image Upload Section */}
          <div className="flex flex-row gap-4">
            <div className='w-3/8'>
              <label className="block text-sm font-semibold mb-2">Cover Image</label>
              <label className="flex items-center justify-center h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileChange('coverImage', e)}
                  className="hidden"
                />
                <div className='flex flex-col gap-2 items-center'>
                  <Upload className="w-8 h-8 text-gray-400" />
                  <span className='text-xs text-gray-400'>Max. File Upload 1 MB</span>
                </div>
              </label>
            </div>

            <div className='w-5/8'>
              <label className="block text-sm font-semibold mb-2">Image</label>
              <label className="flex items-center justify-center h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileChange('image', e)}
                  className="hidden"
                />
                <div className='flex flex-col gap-2 items-center'>
                  <Upload className="w-8 h-8 text-gray-400" />
                  <span className='text-xs text-gray-400'>Max. File Upload 1 MB</span>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};