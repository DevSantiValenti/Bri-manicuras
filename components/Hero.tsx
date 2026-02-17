import React from 'react';

interface HeroProps {
  onBook: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBook }) => {
  return (
    <div className="px-4 py-4">
      <div className="relative min-h-[400px] w-full overflow-hidden rounded-2xl bg-gray-200 shadow-lg group">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          role="img"
          aria-label="Close up of elegant female hands with pastel manicure holding a delicate flower"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCwJTDm7eEvRSHVTZI61tR_3iSXQ5axpRTgCMBUeI1aV1dVgBcKua4a4AwhaoP0KcSl8iJ1M4Ate2JwG7KHvbW29pGmX9EGzolLIGiQvjKWrb5RbEHZFcXQSAiZQBx0_OZAT2FBgnuido-naFfE-_Ff1Dj9PHXgy_tPELeR7nR8dVuL8zvTVimQUwz0daSY8lymXWHOVbpyg1v4Fspx9UY_GP0F7iT8xV9i1WypxmNTTzUlzuylu8EsNG3SbU7cGt2iCnVVRXUNqg')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <span className="mb-2 inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
            Premium Care
          </span>
          <h2 className="mb-2 text-3xl font-extrabold leading-tight">
            Elevate your style with perfect nails
          </h2>
          <p className="mb-6 text-sm font-medium text-white/90">
            Experience luxury nail care services tailored just for you.
          </p>
          <button 
            onClick={onBook}
            className="group flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-primary shadow-lg transition-all active:scale-95 active:bg-gray-50"
          >
            Book Appointment
            <span className="material-symbols-outlined text-[20px] transition-transform group-hover:translate-x-1">
              arrow_forward
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};