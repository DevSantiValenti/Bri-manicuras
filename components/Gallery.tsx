import React from 'react';
import { GalleryItem } from '../types';

const galleryItems: GalleryItem[] = [
  {
    id: '1',
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCCB8dhB7SN8REJuxgwNMcKuK9-qMobUtXR8PRJbvA9D2QGLxikr0tNAGgSfe72HqQaVMw5J6b0HhaVstedIygn-ZjF-vRlL5Q3JPfxd8HTv5ISPSsSZGHYmqHrDkOaix-UeJXZZ-DYqQehId1oNSUYGQ6m5o5uZRMTOKdP2zzD4BPPp_kG5NEG-mn2WOCuUyuIzXMLQ6ikdZoQyKFpmPixsCDO-Eif_-zFwWrITR0yf5iJ0ZIySMCzZR4VeKEIYxPG_ZxVLEn5kQ",
    category: "Nail Art",
    type: 'image'
  },
  {
    id: '2',
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOHuWqZED3CZ2KvcP0wE1Y7xt1eWBysT7L1QaX4LJbBS4S-dZSsrjAKAOgd6AgeuKlo1cyb_n21npbqwO--flwoT93vToYGB9Y5i6zlXQN-FYjQD3qJzRnLWa6YU7V6J81jd84VkIwvYk8Z_eBluscCD8g5wzfUKSm-cfa7wpqB7mjsXsX7-jZqswL5-QkZHYnlTmPQE3f7BzOUKwwxBl3PNJJkG0k3_Z57MwrGzsGb1KJXS917D_j03-Eup8_dlp5TJwuxStntw",
    category: "Process",
    type: 'video'
  },
  {
    id: '3',
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAcK6JGwRHDYGP8ol8uwzqM21NR2kdAtnsEtGUZx-rJeO3I0ty0A8Y25JF0ANQr_9sN_v_vBajkUIhAIiHBvB45twKMXQgQQqVyR0fCpxH_2Ic0EXTHuQXHzophE8sxhu8Rh2jL9ZqlLBT8CQgHCmwiFQXIBm9C21ATTXnBQkjwFMYZDr-f7UVbLfw_0FfWajWADqrjwKOUWgbvxr15rmzABnhedUkiML8z7PRh9Z5W-1XT4jIR0BH4tGU5DQLv1m8pBql4ISithQ",
    category: "Classic French",
    type: 'image'
  },
  {
    id: '4',
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDgQFc5-YpMlt21bhi0pgs2wqdTj5v3Tl5z6brlHX5vPtcVYYBtmUaCmiOJU06vMTY26iZ8PGRJsjlqQN8tht17WowNbYilseshyYPmB1EtTva3bJJt8_dGFMQjfekgzk6ELY-wgjqPKrSinFvOYKW2-T3zw0a8KVOZZT90y54jEzUvdW2AVmZn5pcYFaakS63us7iMrk4qKL2cbi6oSZp5tNTTP4EHKZVF_Ek2hgE0UhOHdbMsrL_dIh-vtRVHgNUcqddsrKuy4w",
    category: "Results",
    type: 'video'
  }
];

export const Gallery: React.FC = () => {
  return (
    <section className="mt-8 px-4">
      <div className="mb-4 flex items-center justify-between px-1">
        <div className="flex flex-col">
          <h3 className="text-2xl font-bold text-primary-dark dark:text-white">Gallery</h3>
          <p className="text-xs font-medium text-text-secondary">
            Swipe to see our latest transformations
          </p>
        </div>
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
          <span className="material-symbols-outlined text-[20px]">photo_library</span>
        </div>
      </div>

      {/* Main Carousel */}
      <div className="relative w-full overflow-hidden rounded-2xl shadow-lg ring-1 ring-primary/20 bg-background-light dark:bg-background-dark">
        <div className="flex h-72 w-full snap-x snap-mandatory overflow-x-auto hide-scrollbar">
          {galleryItems.map((item) => (
            <div key={item.id} className="relative w-full flex-shrink-0 snap-center">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${item.image}')` }}
              ></div>
              
              {item.type === 'video' ? (
                 <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                   <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/30 backdrop-blur-md shadow-lg transition hover:scale-110 cursor-pointer">
                    <span className="material-symbols-outlined text-white text-[32px] ml-1">play_arrow</span>
                   </div>
                 </div>
              ) : (
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 via-transparent to-transparent"></div>
              )}
              
              <div className="absolute bottom-4 left-4">
                <span className="rounded bg-white/20 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-white backdrop-blur-sm">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5">
          <div className="h-1.5 w-4 rounded-full bg-white shadow-sm"></div>
          <div className="h-1.5 w-1.5 rounded-full bg-white/50 shadow-sm"></div>
          <div className="h-1.5 w-1.5 rounded-full bg-white/50 shadow-sm"></div>
          <div className="h-1.5 w-1.5 rounded-full bg-white/50 shadow-sm"></div>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="mt-3 grid grid-cols-4 gap-2">
        {galleryItems.map((item, index) => (
          <div
            key={`thumb-${item.id}`}
            className={`relative aspect-square cursor-pointer overflow-hidden rounded-lg border-2 shadow-sm ${index === 0 ? 'border-primary opacity-100' : 'border-transparent opacity-60'}`}
          >
            <div
              className="h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url('${item.image}')` }}
            ></div>
             {item.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                  <span className="material-symbols-outlined text-white text-[18px]">play_circle</span>
                </div>
             )}
          </div>
        ))}
      </div>
    </section>
  );
};