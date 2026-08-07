'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Newspaper, Bell, LayoutGrid } from 'lucide-react';
import type { PostType } from '@/lib/api/types';

interface FilterTabsProps {
  currentType?: PostType;
}

export function NewsFilterTabs({ currentType }: FilterTabsProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleFilterChange = (type?: PostType) => {
    const params = new URLSearchParams(searchParams.toString());
    if (type) {
      params.set('type', type);
    } else {
      params.delete('type');
    }
    // Reset to page 1 on filter change
    params.delete('page');

    const query = params.toString();
    router.push(`/news${query ? `?${query}` : ''}`);
  };

  const tabs: { label: string; value?: PostType; icon: typeof LayoutGrid }[] = [
    { label: 'All Updates', value: undefined, icon: LayoutGrid },
    { label: 'News', value: 'news', icon: Newspaper },
    { label: 'Notices', value: 'notice', icon: Bell },
  ];

  return (
    <div className="flex items-center justify-center gap-2 p-1.5 bg-gray-100 rounded-2xl max-w-md mx-auto mb-12 shadow-inner border border-gray-200/80">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = currentType === tab.value;

        return (
          <button
            key={tab.label}
            onClick={() => handleFilterChange(tab.value)}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-bold transition-all duration-200 cursor-pointer ${
              isActive
                ? 'bg-white text-yokohama-red shadow-sm border border-gray-200/50'
                : 'text-gray-600 hover:text-yokohama-dark-text hover:bg-white/50'
            }`}
          >
            <Icon className={`w-4 h-4 ${isActive ? 'text-yokohama-red' : 'text-gray-400'}`} />
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
