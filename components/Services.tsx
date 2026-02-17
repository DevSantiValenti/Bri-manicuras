import React from 'react';
import { Service } from '../types';

interface ServicesProps {
  onBook: (serviceName: string) => void;
}

const servicesList: Service[] = [
  {
    id: '1',
    title: 'Sculpted Nails',
    description: 'Acrylic extensions tailored for perfect length and lasting durability.',
    price: 45.00,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhwVYY9hlHlYmT4jGrEmydFIrOwQTgeQy4nf5jcpK1gWLakxEnXWMrVcLIAK4pDZdNy6HnsFIzH0PFFQs8tNLqa_j7F6zfj2l-8D5vQ9mikgZ99pOT72VhdQ_fRimgwNIYN8Zt6FRDMFSpVOYfseJrezUlPiH5Ebi_5uN1yfhf2a6W7lpvC6jnhe72itYdw6XqP-hk2GdNNuRvh4ZTGR38bWtWz97VeDUklYhbh7U17OQl7tdVNp6YPlpS2uunG8GaEKJ0xRrPqg",
    alt: "Close up of long acrylic sculpted nails with pink polish"
  },
  {
    id: '2',
    title: 'Semi-permanent',
    description: 'Long-lasting gel polish that stays shiny and chip-free for weeks.',
    price: 30.00,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAaKxH5NjIAa0uIyw_khMHqmq0JFcG_tyyWVwuR_9CmlTZFxtZ6bXSVo0prNdWo77xX65qP-UJ5u4TT9AZosDc5otJzmA70xXP0iYh0VcClPqcmt2k9XnYpvR8rsIE66FHz7SuboOBJ0PAmm1ScIClzuoCAbVT3mc-01nEmDUmCNkF8XA45wzh9FZHJWc3JxAPKZSgBINBueTYausWscixzpTb5f8XwBZmyIC7CgMaMZ5mnVNWhVdNkRXqReGeeRN8k0nT944vC1w",
    alt: "Application of red gel nail polish"
  },
  {
    id: '3',
    title: 'Kapping',
    description: 'Natural nail reinforcement to promote growth and prevent breakage.',
    price: 35.00,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDb5td2ObrdUB7y3sgT_IrBXnQOlc1jdYwdJ9VN6kioBh259K3WYP3bmMpihKEr67Dl7E3VPxTk64Wc1tvNfSK27vhPj-rnNHpePlaN4g9uzdTEPuHzJud8ZYK9fUN4N0DSrbxNBBPJdpsDnh3sMK1zporYkq1BrZSf0iHpgI3Sf798J2EN0Yqz8-qrplHXMwAcLhBrMfTSJFrNK8jBS6fEU_Im4_zjav5b8nwkegqWmI5PraUJJ3gtP60-8JqL3B7-wJ8-tuBIAg",
    alt: "Natural looking manicured nails with clear strengthening coat"
  }
];

export const Services: React.FC<ServicesProps> = ({ onBook }) => {
  return (
    <section className="mt-4 px-4">
      <div className="mb-4 flex items-center justify-between px-1">
        <h3 className="text-2xl font-bold text-primary-dark dark:text-white">Our Services</h3>
        <a className="text-sm font-semibold text-primary hover:underline" href="#services">
          View All
        </a>
      </div>
      <div className="flex flex-col gap-4">
        {servicesList.map((service) => (
          <div
            key={service.id}
            className="group relative flex overflow-hidden rounded-2xl bg-white p-4 shadow-sm ring-1 ring-primary/10 transition-shadow hover:shadow-md dark:bg-white/5 dark:ring-white/10"
          >
            <div className="flex flex-1 flex-col justify-between pr-4">
              <div>
                <h4 className="mb-1 text-lg font-bold text-text-main dark:text-white">
                  {service.title}
                </h4>
                <p className="text-sm leading-relaxed text-text-secondary dark:text-gray-400">
                  {service.description}
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-lg font-bold text-primary">${service.price.toFixed(2)}</span>
                <button 
                  onClick={() => onBook(service.title)}
                  className="rounded-lg bg-primary/10 px-3 py-1.5 text-xs font-bold text-primary transition-colors hover:bg-primary hover:text-white dark:bg-white/10 dark:text-white dark:hover:bg-primary"
                >
                  Book
                </button>
              </div>
            </div>
            <div className="h-28 w-28 shrink-0 overflow-hidden rounded-xl bg-gray-100">
              <div
                className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                aria-label={service.alt}
                style={{ backgroundImage: `url('${service.image}')` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};