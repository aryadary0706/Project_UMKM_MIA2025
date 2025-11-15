import React from 'react';
import { Button } from '@/components/ui/button';
import { is } from 'date-fns/locale';

interface OperationalProps {
  formData: {
    hours: string;
    operationalDays: string[];
  };
  onChange: (field: string, value: string | string[]) => void;
}

export const Operational: React.FC<OperationalProps> = ({ formData, onChange }) => {
  const days = [
    { value: 'senin', label: 'Senin' },
    { value: 'selasa', label: 'Selasa' },
    { value: 'rabu', label: 'Rabu' },
    { value: 'kamis', label: 'Kamis' },
    { value: 'jumat', label: 'Jumat' },
    { value: 'sabtu', label: 'Sabtu' },
    { value: 'minggu', label: 'Minggu' },
  ];

  const weeks = [
    { value: 'everyday', label: 'Everyday', days: days.map(d => d.value) },
    { value: 'weekends', label: 'Weekend', days: ['sabtu', 'minggu'] },
    { value: 'weekdays', label: 'Weekday', days: ['senin', 'selasa', 'rabu', 'kamis', 'jumat'] },
  ];

  // guard default
  const selectedDays = formData.operationalDays ?? [];

  // helper: urutkan hari menurut urutan 'days'
  const sortDays = (list: string[]) => {
    const order = days.map(d => d.value);
    return [...list].sort((a, b) => order.indexOf(a) - order.indexOf(b));
  };

  const isExactGroupSelected = (groupDays: string[]) => {
    if (selectedDays.length !== groupDays.length) return false;
    return groupDays.every((d) => selectedDays.includes(d));
  };

  // toggle hari individual
  const handleDayToggle = (dayValue: string) => {
    let nextDays = selectedDays.includes(dayValue)
      ? selectedDays.filter(d => d !== dayValue)
      : [...selectedDays, dayValue];

    nextDays = sortDays(nextDays);
    onChange('operationalDays', nextDays);
  };

  // toggle grup (setiap hari / weekend / weekday)
  const handleWeekToggle = (groupDays: string[]) => {
    const isExactSelected = selectedDays.length === groupDays.length && groupDays.every(d => selectedDays.includes(d));
    
    const nextDays = isExactSelected ? [] : groupDays;
    onChange('operationalDays', nextDays);
  };

  return (
    <div className="bg-white rounded-2xl border-2 border-[#8B6F47] p-8 mb-6 shadow-xl">
      <h2 className="text-2xl font-extrabold mb-3 text-[#333]">OPERASIONAL</h2>
      <span className="text-md font-medium text-gray-600 mb-6 block">
        Jadwal Operasional Usaha Anda. Bersifat Opsional.
        <a
          className="text-blue-500 hover:text-blue-700 underline ml-1"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pelajari Selengkapnya
        </a>
      </span>

      <div className="space-y-6">
        {/* Jam Buka Section */}
        <div>
          <label className="block text-base font-semibold mb-2 text-[#333]">Jam Buka</label>
          <input
            type="text"
            value={formData.hours}
            onChange={(e) => onChange('hours', e.target.value)}
            placeholder="ex: 09:00 - 20:00"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B6F47] text-gray-700 text-base"
          />
        </div>

        {/* Hari Operasional Section */}
        <div>
          <label className="block text-base font-semibold text-[#333]">Hari Operasional</label>

          <div className="flex flex-col">
            {/* Kolom Atas: Pilihan Grup Minggu */}
            <div className="flex flex-row flex-wrap gap-5 p-3">
              {weeks.map((week) => {
                const isSelected = isExactGroupSelected(week.days);

                return (
                  <Button
                    key={week.value}
                    type="button"
                    onClick={() => handleWeekToggle(week.days)}
                    className={`
                      max-w-auto h-auto text-md font-mediumpy-3 px-3 rounded-md transition-all duration-200
                      ${isSelected 
                        ? 'bg-green-500 text-white hover:bg-green-600 border-green-500 shadow-md' 
                        : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                      }
                    `}
                  >
                    {week.label}
                  </Button>
                );
              })}
            </div>

            <div className="border-t border-gray-300 my-1" />

            {/* Kolom Atas: Pilihan Grup Minggu */}
            <div className="flex flex-row flex-wrap gap-3 p-3">
              {days.map((day) => {
                const isSelected = selectedDays.includes(day.value);
                return (
                  <Button
                    key={day.value}
                    type="button"
                    onClick={() => handleDayToggle(day.value)}
                    className={`w-auto h-auto text-sm font-medium px-3 rounded-md transition-all duration-200 ${isSelected
                      ? 'bg-green-500 text-white hover:bg-green-600 border-green-500 shadow-md'
                      : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {day.label}
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Operational;
