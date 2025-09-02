import { ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';
import { BookingModal, PortfolioModal } from './Modal';
import { useState } from 'react';

const Hero = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const scrollToPortfolio = () => {
    const portfolioSection = document.querySelector('#portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      <section className="hero-section relative flex items-center justify-center">
        {/* Background Image with enhanced overlay */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Son Designers studio workspace"
            className="w-full h-full object-cover scale-110 animate-[scale_20s_ease-in-out_infinite_alternate]"
          />
          <div className="absolute inset-0 bg-gradient-charcoal-texture opacity-60"></div>
          <div className="absolute inset-0 bg-texture-noise opacity-20"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-6">
          <div className="fade-in visible">
            <h1 className="hero-text mb-6 text-balance">
              Son Designers
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl font-light mb-4 text-balance max-w-3xl mx-auto">
              Interiors & Graphics
            </p>
            <p className="text-lg md:text-xl opacity-90 mb-12 max-w-2xl mx-auto text-balance">
              We craft timeless interiors and visual identities that tell your story.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button 
                className="btn-hero inline-flex items-center gap-2 group"
                onClick={scrollToPortfolio}
              >
                View Work
                <ArrowRight 
                  size={20} 
                  className="transition-transform duration-300 group-hover:translate-x-1" 
                />
              </button>
              <button 
                className="btn-ghost text-white border-white hover:border-accent hover:text-accent"
                onClick={() => setIsBookingModalOpen(true)}
              >
                Book Discovery Call
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator with animation */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 float">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center cursor-pointer hover:border-white transition-colors"
               onClick={scrollToPortfolio}>
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
    </>
  );
};

export default Hero;