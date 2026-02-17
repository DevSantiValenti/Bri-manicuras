import React from 'react';

interface BottomBarProps {
  onBook: () => void;
}

export const BottomBar: React.FC<BottomBarProps> = ({ onBook }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 mx-auto max-w-md border-t border-primary/10 bg-white/95 px-6 py-4 backdrop-blur dark:bg-background-dark/95">
      <div className="flex items-center gap-4">
        <div className="flex flex-col">
          <span className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
            Next Opening
          </span>
          <span className="text-sm font-bold text-text-main dark:text-white">Today, 4:00 PM</span>
        </div>
        <button 
          onClick={onBook}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-base font-bold text-white shadow-lg shadow-primary/30 transition hover:bg-primary-dark active:scale-95"
        >
          <span className="material-symbols-outlined text-[20px]">calendar_month</span>
          Book Now
        </button>
      </div>
    </div>
  );
};