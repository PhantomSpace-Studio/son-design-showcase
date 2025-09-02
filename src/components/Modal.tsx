import { useState } from 'react';
import { X, Calendar, Download, Mail } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title: string;
}

const Modal = ({ isOpen, onClose, children, title }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-charcoal/80 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />
      <div className="relative bg-background rounded-lg shadow-large max-w-lg w-full mx-4 scale-in visible">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h3 className="text-2xl font-heading font-medium text-charcoal">
            {title}
          </h3>
          <button
            onClick={onClose}
            className="p-2 text-graphite hover:text-charcoal transition-colors rounded-lg hover:bg-muted"
          >
            <X size={20} />
          </button>
        </div>
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal = ({ isOpen, onClose }: ContactModalProps) => (
  <Modal isOpen={isOpen} onClose={onClose} title="Get in Touch">
    <div className="space-y-6">
      <p className="text-graphite">
        Ready to start your project? Choose how you'd like to connect with us.
      </p>
      
      <div className="space-y-4">
        <button 
          onClick={() => window.location.href = '#contact'}
          className="btn-hero w-full inline-flex items-center justify-center gap-2"
        >
          <Mail size={18} />
          Contact Form
        </button>
        
        <button 
          onClick={() => window.open('mailto:hello@sondesigners.com')}
          className="btn-gold w-full inline-flex items-center justify-center gap-2"
        >
          <Mail size={18} />
          Email Directly
        </button>
        
        <button 
          onClick={() => window.open('tel:+15551234567')}
          className="btn-ghost w-full inline-flex items-center justify-center gap-2"
        >
          <Calendar size={18} />
          Call Us
        </button>
      </div>
    </div>
  </Modal>
);

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal = ({ isOpen, onClose }: BookingModalProps) => (
  <Modal isOpen={isOpen} onClose={onClose} title="Book Discovery Call">
    <div className="space-y-6">
      <p className="text-graphite">
        Schedule a 20-minute discovery call to discuss your project vision and see how we can help bring it to life.
      </p>
      
      <div className="bg-warm-neutral p-6 rounded-lg">
        <h4 className="font-heading font-medium text-charcoal mb-3">
          What we'll cover:
        </h4>
        <ul className="space-y-2 text-sm text-graphite">
          <li>• Your project goals and timeline</li>
          <li>• Design style preferences</li>
          <li>• Budget and scope discussion</li>
          <li>• Next steps in our process</li>
        </ul>
      </div>
      
      <button 
        onClick={() => window.open('https://calendly.com/sondesigners')}
        className="btn-hero w-full inline-flex items-center justify-center gap-2"
      >
        <Calendar size={18} />
        Schedule on Calendly
      </button>
    </div>
  </Modal>
);

interface PortfolioModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PortfolioModal = ({ isOpen, onClose }: PortfolioModalProps) => (
  <Modal isOpen={isOpen} onClose={onClose} title="Download Portfolio">
    <div className="space-y-6">
      <p className="text-graphite">
        Get our complete portfolio PDF featuring 20+ projects with detailed case studies, process insights, and client testimonials.
      </p>
      
      <div className="bg-warm-neutral p-6 rounded-lg">
        <h4 className="font-heading font-medium text-charcoal mb-3">
          Includes:
        </h4>
        <ul className="space-y-2 text-sm text-graphite">
          <li>• Complete project gallery</li>
          <li>• Behind-the-scenes process</li>
          <li>• Client testimonials</li>
          <li>• Material specifications</li>
          <li>• Awards and recognition</li>
        </ul>
      </div>
      
      <form className="space-y-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
          required
        />
        <button 
          type="submit"
          className="btn-hero w-full inline-flex items-center justify-center gap-2"
        >
          <Download size={18} />
          Download Portfolio PDF
        </button>
      </form>
      
      <p className="text-xs text-graphite text-center">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </div>
  </Modal>
);

export default Modal;