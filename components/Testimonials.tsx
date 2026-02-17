import React from 'react';

export const Testimonials: React.FC = () => {
  return (
    <section className="mt-8 px-4">
      <div className="rounded-2xl bg-primary-light p-6 dark:bg-primary/20">
        <div className="mb-4 flex items-center gap-2 text-primary">
          {[1, 2, 3, 4, 5].map((star) => (
            <span key={star} className="material-symbols-outlined fill-current text-[20px]">
              star
            </span>
          ))}
          <span className="text-sm font-bold text-text-main dark:text-white ml-2">5.0 (120+)</span>
        </div>
        <p className="mb-4 text-lg font-medium italic leading-relaxed text-primary-dark dark:text-white">
          "Absolutely in love with my nails! Bri is so talented and careful. The environment is
          relaxing and professional. Highly recommend!"
        </p>
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 overflow-hidden rounded-full bg-gray-300">
            <img
              alt="Portrait of happy client"
              className="h-full w-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGF0Y4E_ZYNbixMIKECyL44JlfD-4TdFdGLXsiEVLV9OQV2fJjPY8wwuLz7AM2ZK6ecHXDIEwxAIbR9P3rHNFO9RJj09cJkiT0XzymfaO_P9JUyP7XxuGN8Clt8N8N50lookRtNOI_uVXz0Koe3fMqCWuqXBBHxBm5xVFzw_0J9I2nMn8Dm1FcV4pFVNb1oo7bJYR65QlU3PAc3snadMDNiTbZGlDRQXABBpoBRcUqNb92mEe1wDlyvHsWWF61u8xbpJEQb1wsyA"
            />
          </div>
          <div>
            <p className="text-sm font-bold text-text-main dark:text-white">Sofia Martinez</p>
            <p className="text-xs text-text-secondary dark:text-primary-light">Regular Client</p>
          </div>
        </div>
      </div>
    </section>
  );
};