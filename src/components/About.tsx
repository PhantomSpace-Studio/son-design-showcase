import { Award, Users, Calendar } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, label: 'Awards Won', value: '12+' },
    { icon: Users, label: 'Happy Clients', value: '150+' },
    { icon: Calendar, label: 'Years Experience', value: '8+' }
  ];

  return (
    <section id="about" className="section-padding bg-gradient-fade">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-light text-charcoal mb-8">
              About Son Designers
            </h2>
            
            <div className="space-y-6 text-graphite leading-relaxed">
              <p className="text-lg">
                Son Designers is a boutique studio merging interior architecture with 
                refined graphic systems. We design spaces and brands that marry craft, 
                function, and narrative.
              </p>
              
              <p>
                Our approach is rooted in understanding the unique story each client 
                brings to their project. Whether designing a private residence or 
                developing a comprehensive brand identity, we believe in creating 
                timeless solutions that evolve beautifully with time.
              </p>
              
              <p>
                From material selection to typography choices, every decision is made 
                with intention and care. We collaborate closely with our clients, 
                architects, and craftspeople to ensure each project exceeds expectations 
                while maintaining our commitment to sustainable and thoughtful design practices.
              </p>
            </div>

            <div className="mt-10">
              <button className="btn-hero">
                Download Portfolio PDF
              </button>
            </div>
          </div>

          {/* Stats & Values */}
          <div className="space-y-8">
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="flex justify-center mb-3">
                    <div className="p-3 bg-accent rounded-lg text-accent-foreground">
                      <stat.icon size={24} />
                    </div>
                  </div>
                  <div className="text-2xl font-heading font-medium text-charcoal">
                    {stat.value}
                  </div>
                  <div className="text-sm text-graphite">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Philosophy */}
            <div className="bg-background p-8 rounded-lg shadow-soft">
              <h3 className="text-2xl font-heading font-medium text-charcoal mb-4">
                Our Philosophy
              </h3>
              <blockquote className="text-graphite italic leading-relaxed">
                "Design is not just about aesthetics—it's about creating environments 
                and experiences that enhance human connection and tell authentic stories. 
                Every space and brand should feel both timeless and deeply personal."
              </blockquote>
              <cite className="block text-right mt-4 text-sm text-accent font-medium">
                — Studio Founders
              </cite>
            </div>

            {/* Recognition */}
            <div className="bg-charcoal text-charcoal-foreground p-8 rounded-lg">
              <h3 className="text-xl font-heading font-medium mb-4">
                Recognition
              </h3>
              <div className="space-y-2 text-sm">
                <div>• Architectural Digest Design Awards 2024</div>
                <div>• Interior Design Magazine Best of Year 2023</div>
                <div>• Design & Architecture Award for Hospitality 2023</div>
                <div>• Featured in Wallpaper* Magazine</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;