import { Palette, Home, Package, Users } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Interior Design',
    description: 'Complete interior architecture for residential and commercial spaces, from concept to completion.',
    features: [
      'Space Planning & Layout',
      'Custom Furniture Design',
      'Material & Finish Selection',
      'Lighting Design',
      'Project Management'
    ]
  },
  {
    icon: Palette,
    title: 'Brand Identity',
    description: 'Comprehensive visual identity systems that capture your brand\'s essence and resonate with your audience.',
    features: [
      'Logo & Visual Identity',
      'Brand Guidelines',
      'Color & Typography Systems',
      'Digital & Print Applications',
      'Brand Strategy'
    ]
  },
  {
    icon: Package,
    title: 'Print & Packaging',
    description: 'Sophisticated print design and packaging solutions that elevate your brand presence.',
    features: [
      'Packaging Design',
      'Marketing Collateral',
      'Publication Design',
      'Signage & Wayfinding',
      'Production Oversight'
    ]
  },
  {
    icon: Users,
    title: 'Hospitality Design',
    description: 'Specialized design services for hotels, restaurants, and hospitality venues.',
    features: [
      'Guest Experience Design',
      'F&B Concept Development',
      'Hospitality Branding',
      'Operational Efficiency',
      'Atmosphere Creation'
    ]
  }
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-light text-charcoal mb-6">
            Services
          </h2>
          <p className="text-lg text-graphite max-w-2xl mx-auto text-balance">
            Crafting spaces and brands that merge function with narrative, 
            from private residences to hospitality experiences.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-8 bg-warm-neutral rounded-lg shadow-soft hover:shadow-medium transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 p-3 bg-accent rounded-lg text-accent-foreground group-hover:bg-gradient-gold transition-all duration-300">
                  <service.icon size={24} />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-heading font-medium text-charcoal mb-4">
                    {service.title}
                  </h3>
                  <p className="text-graphite mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center text-sm text-graphite"
                      >
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl md:text-4xl font-heading font-light text-charcoal mb-12">
            Our Process
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your vision, needs, and project goals through detailed consultation.' },
              { step: '02', title: 'Concept', description: 'Developing initial design concepts and mood boards that capture the essence of your project.' },
              { step: '03', title: 'Development', description: 'Refining designs with detailed specifications, material selections, and technical drawings.' },
              { step: '04', title: 'Delivery', description: 'Managing implementation and installation to ensure flawless execution of the final design.' }
            ].map((phase) => (
              <div key={phase.step} className="text-center">
                <div className="text-4xl font-heading font-light text-accent mb-4">
                  {phase.step}
                </div>
                <h4 className="text-xl font-heading font-medium text-charcoal mb-3">
                  {phase.title}
                </h4>
                <p className="text-sm text-graphite leading-relaxed">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;