import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';

interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  client: string;
  year: string;
  services: string[];
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Modern Residential Haven',
    category: 'Interior',
    image: project1,
    client: 'Private Client',
    year: '2024',
    services: ['Interior Design', 'Furniture Selection', 'Lighting Design']
  },
  {
    id: '2',
    title: 'Boutique Hotel Identity',
    category: 'Hospitality',
    image: project2,
    client: 'Meridian Hotels',
    year: '2024',
    services: ['Interior Design', 'Brand Identity', 'Wayfinding']
  },
  {
    id: '3',
    title: 'Luxury Brand System',
    category: 'Graphics',
    image: project3,
    client: 'Artisan Collective',
    year: '2023',
    services: ['Brand Identity', 'Packaging Design', 'Print Collateral']
  }
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filters = ['All', 'Interior', 'Graphics', 'Hospitality'];
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="section-padding bg-warm-neutral">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-light text-charcoal mb-6">
            Selected Work
          </h2>
          <p className="text-lg text-graphite max-w-2xl mx-auto text-balance">
            A curated collection of our interior and graphic design projects, 
            showcasing our commitment to timeless elegance and functional beauty.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2 p-2 bg-background rounded-lg shadow-soft">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-charcoal text-charcoal-foreground shadow-medium'
                    : 'text-charcoal hover:text-accent hover:bg-muted'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="portfolio-grid">
          {filteredProjects.map((project) => (
            <article key={project.id} className="project-card group">
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-card-image"
                  loading="lazy"
                />
                <div className="project-card-overlay">
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="text-xl font-heading font-medium mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm opacity-90 mb-3">{project.client} • {project.year}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.services.map((service) => (
                        <span
                          key={service}
                          className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded text-xs"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                    <button className="inline-flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors">
                      View Project <ExternalLink size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center mt-16">
          <button className="btn-gold">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;