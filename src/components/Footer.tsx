import { Instagram, Linkedin, Twitter, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-heading font-medium text-charcoal mb-4">
              Son Designers
            </h3>
            <p className="text-graphite mb-6 max-w-md">
              Crafting Interiors. Defining Brands. A boutique studio merging 
              interior architecture with refined graphic systems.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {[
                { icon: Instagram, href: '#', label: 'Instagram' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Twitter, href: '#', label: 'Twitter' }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 text-graphite hover:text-accent transition-colors duration-300"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-medium text-charcoal mb-4">
              Services
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                'Interior Design',
                'Brand Identity',
                'Print & Packaging',
                'Hospitality Design',
                'Space Planning',
                'Art Direction'
              ].map((service) => (
                <li key={service}>
                  <a href="#" className="text-graphite hover:text-accent transition-colors duration-300">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-medium text-charcoal mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'Portfolio', href: '#portfolio' },
                { label: 'About', href: '#about' },
                { label: 'Services', href: '#services' },
                { label: 'Contact', href: '#contact' },
                { label: 'Journal', href: '#' },
                { label: 'Careers', href: '#' }
              ].map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-graphite hover:text-accent transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="py-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h5 className="font-heading font-medium text-charcoal mb-2">
                Stay Updated
              </h5>
              <p className="text-sm text-graphite">
                Get the latest projects and design insights delivered to your inbox.
              </p>
            </div>
            
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              />
              <button className="btn-hero text-sm px-6">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-graphite">
            © 2024 Son Designers. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-graphite hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-graphite hover:text-accent transition-colors">
              Terms of Service
            </a>
            
            <button
              onClick={scrollToTop}
              className="p-2 bg-muted rounded-lg text-graphite hover:text-accent hover:bg-accent/10 transition-all duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;