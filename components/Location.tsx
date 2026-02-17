import React from 'react';

export const Location: React.FC = () => {
  return (
    <section className="mt-8 px-4 mb-8">
      <h3 className="text-2xl font-bold text-primary-dark dark:text-white mb-4">Visit Us</h3>
      <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-gray-200">
        <div
          className="absolute inset-0 bg-cover bg-center"
          aria-label="Map view of city streets indicating location"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD6uUHfsVRou8fQQRj1cxzL-CzVTf5sljuT649_Uh3yLLEKkfc9dLeTQvxAtTZhAfwKhxLNpGhcDP3aHZLV74kXaYNh5DbMX1b90vtIRxyOOAoiZRQ5tR1pCdqX_NMrVS7CHjnVvIJIdRkqdoQFUfHMqbTSMkqpUhfqUF__FTXR1vKjo4mGzdsTGsKTxuJvvvvhfhquUfRFsf7ysHDSInteXSsz3uLJFLX_4I7eVBLRKAZVOUWFxRaV-KzvXxQDTwXdmWUQa5fseA')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
          <a 
            href="https://maps.google.com/?q=Av.+Santa+Fe+1234,+CABA" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 hover:bg-white transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-primary">location_on</span>
            <span className="font-bold text-sm text-text-main">Av. Santa Fe 1234, CABA</span>
          </a>
        </div>
      </div>
    </section>
  );
};