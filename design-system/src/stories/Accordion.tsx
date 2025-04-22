// src/components/data-display/Accordion/AccordionGroup.tsx
import React, { useState } from 'react';
import { Accordion } from './Accordion';


interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

interface AccordionGroupProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  defaultOpenIndex?: number | number[];
  className?: string;
}

export const AccordionGroup = ({
  items,
  allowMultiple = false,
  defaultOpenIndex,
  className = '',
}: AccordionGroupProps) => {
  const getDefaultOpenIndices = () => {
    if (defaultOpenIndex === undefined) return [];
    if (Array.isArray(defaultOpenIndex)) return defaultOpenIndex;
    return [defaultOpenIndex];
  };

  const [openIndices, setOpenIndices] = useState<number[]>(getDefaultOpenIndices());

  const toggleItem = (index: number) => {
    setOpenIndices((prev) => {
      if (allowMultiple) {
        return prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index];
      } else {
        return prev.includes(index) ? [] : [index];
      }
    });
  };

  return (
    <div className={`space-y-2 ${className}`}>
      {items.map((item, index) => (
        <Accordion
          key={index}
          title={item.title}
          isOpen={openIndices.includes(index)}
          onToggle={() => toggleItem(index)}
        >
          {item.content}
        </Accordion>
      ))}
    </div>
  );
};