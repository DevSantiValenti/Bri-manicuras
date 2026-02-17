import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between bg-white/90 px-4 py-3 backdrop-blur-md dark:bg-background-dark/90 border-b border-primary/10">
      <div className="flex items-center gap-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
          <span className="material-symbols-outlined">spa</span>
        </div>
        <h1 className="text-xl font-bold tracking-tight text-primary-dark dark:text-white">
          Bri Manicurías
        </h1>
      </div>
      <button 
        className="flex h-10 w-10 items-center justify-center rounded-full text-text-secondary transition hover:bg-primary-light hover:text-primary active:scale-95"
        aria-label="Menu"
      >
        <span className="material-symbols-outlined">menu</span>
      </button>
    </header>
  );
};