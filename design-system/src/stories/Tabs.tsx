import React, { useState } from 'react';

interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
  disabled?: boolean;
}

interface TabsProps {
  items: TabItem[];
  defaultActiveId?: string;
}

export const Tabs: React.FC<TabsProps> = ({ items, defaultActiveId }) => {
  const [activeId, setActiveId] = useState(defaultActiveId || items[0]?.id);

  return (
    <div className="w-full">
      <div className="flex border-b border-gray-200">
        {items.map(item => (
          <button
            key={item.id}
            className={`px-4 py-2 font-medium text-sm focus:outline-none
              ${activeId === item.id 
                ? 'border-b-2 border-primary-500 text-primary-600' 
                : 'text-gray-500 hover:text-gray-700'}
              ${item.disabled ? 'opacity-50 cursor-not-allowed' : ''}
            `}
            onClick={() => !item.disabled && setActiveId(item.id)}
            disabled={item.disabled}
            role="tab"
            aria-selected={activeId === item.id}
            aria-controls={`tabpanel-${item.id}`}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="p-4">
        {items.map(item => (
          <div
            key={item.id}
            id={`tabpanel-${item.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${item.id}`}
            className={activeId === item.id ? 'block' : 'hidden'}
          >
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
};