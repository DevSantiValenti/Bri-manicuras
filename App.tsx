import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { Location } from './components/Location';
import { BottomBar } from './components/BottomBar';

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const handleBook = (serviceName?: string) => {
    setSelectedService(serviceName || "General Appointment");
    setIsBookingOpen(true);
  };

  const closeBooking = () => {
    setIsBookingOpen(false);
    setSelectedService(null);
  };

  return (
    <div className="relative mx-auto flex h-full min-h-screen w-full max-w-md flex-col overflow-x-hidden bg-background-light shadow-2xl dark:bg-background-dark">
      <Header />
      
      <main className="flex-1 pb-24">
        <Hero onBook={() => handleBook()} />
        <Services onBook={handleBook} />
        <Gallery />
        <Testimonials />
        <Location />
      </main>

      <BottomBar onBook={() => handleBook()} />

      {/* Booking Modal Overlay */}
      {isBookingOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 backdrop-blur-sm sm:items-center">
          <div className="w-full max-w-md transform rounded-t-2xl bg-white p-6 shadow-xl transition-all dark:bg-background-dark sm:rounded-2xl m-4">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-bold text-primary-dark dark:text-white">
                Book Appointment
              </h3>
              <button
                onClick={closeBooking}
                className="rounded-full p-1 hover:bg-gray-100 dark:hover:bg-white/10"
              >
                <span className="material-symbols-outlined text-text-secondary">close</span>
              </button>
            </div>
            
            <div className="mb-6">
              <p className="mb-2 text-sm text-text-secondary">Selected Service:</p>
              <div className="rounded-lg bg-primary-light px-4 py-2 font-semibold text-primary">
                {selectedService}
              </div>
            </div>

            <p className="mb-6 text-sm text-text-secondary">
              Our calendar is filling up quickly! Confirm your interest and we will contact you via WhatsApp to finalize the time.
            </p>

            <button
              onClick={() => {
                alert("Reservation request sent! We will contact you shortly.");
                closeBooking();
              }}
              className="w-full rounded-xl bg-primary py-3.5 font-bold text-white shadow-lg transition active:scale-95 hover:bg-primary-dark"
            >
              Confirm via WhatsApp
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;