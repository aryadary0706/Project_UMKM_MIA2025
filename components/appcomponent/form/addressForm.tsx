// components/form/Address.tsx
"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { REGIONS } from '@/data/region';

interface AddressProps {
  formData: {
    region: string;
    address: string;
  };
  onChange: (field: string, value: string) => void;
}

export const Address: React.FC<AddressProps> = ({ formData, onChange }) => {
  const handleGoogleMaps = () => {
    // window.open('https://www.google.com/maps', '_blank');
    alert('This would open Google Maps in a new tab.');
  };

  return (
    <div className="bg-white rounded-2xl border-2 border-[#8B6F47] p-8 mb-6">
      <h2 className="text-xl md:text-2xl font-bold mb-3">ALAMAT</h2>
      <span className="text-md font-medium text-gray-800 mb-3 block">Alamat Usaha anda. Bisa lengkapi secara manual atau Sinkronisasi dengan Lokasi anda saat ini. <a className="text-blue-400 underline" href='#'>Pelajari Selengkapnya</a> </span>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold mb-2">Region</label>
          <select
            value={formData.region}
            onChange={(e) => onChange('region', e.target.value)}
            className="w-full px-4 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B6F47] appearance-none bg-white"
          >
            {REGIONS.map((region) => (
              <option key={region.value} value={region.value}>
                {region.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">Address Description</label>
          <textarea
            value={formData.address}
            onChange={(e) => onChange('address', e.target.value)}
            rows={4}
            placeholder="Masukkan alamat lengkap..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B6F47] resize-none"
          />
        </div>

        <Button
          variant={'outline'}
          type='button'
          onClick={() => toast.success('Telah menandai lokasi anda!')}
        >
          Hubungkan ke Google Maps
        </Button>
      </div>
    </div>
  );
};