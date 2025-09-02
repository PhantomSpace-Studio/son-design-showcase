import { useState } from 'react';
import { ExternalLink, Eye, ArrowRight, X } from 'lucide-react';
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
  description: string;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Modern Residential Haven',
    category: 'Interior',
    image: project1,
    client: 'Private Client',
    year: '2024',
    services: ['Interior Design', 'Furniture Selection', 'Lighting Design'],
    description: 'A sophisticated residential project featuring custom furnishings and innovative lighting solutions.'
  },
  {
    id: '2',
    title: 'Boutique Hotel Identity',
    category: 'Hospitality',
    image: project2,
    client: 'Meridian Hotels',
    year: '2024',
    services: ['Interior Design', 'Brand Identity', 'Wayfinding'],
    description: 'Complete hospitality experience design with cohesive branding and wayfinding systems.'
  },
  {
    id: '3',
    title: 'Luxury Brand System',
    category: 'Graphics',
    image: project3,
    client: 'Artisan Collective',
    year: '2023',
    services: ['Brand Identity', 'Packaging Design', 'Print Collateral'],
    description: 'Comprehensive brand identity system with premium packaging and marketing materials.'
  }
];

interface ProjectDetailModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectDetailModal = ({ project, isOpen, onClose }: ProjectDetailModalProps) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-charcoal/90 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />
      <div className="relative bg-background rounded-lg shadow-large max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 md:h-96 object-cover rounded-t-lg"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-lg text-charcoal hover:bg-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-heading font-medium text-charcoal mb-4">
                {project.title}
              </h2>
              <p className="text-lg text-graphite mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="space-y-4">
                <h3 className="text-xl font-heading font-medium text-charcoal">
                  Project Challenge
                </h3>
                <p className="text-graphite leading-relaxed">
                  This project required balancing modern aesthetics with functional requirements, 
                  creating a space that reflects the client's personality while maintaining 
                  timeless appeal and superior craftsmanship throughout.
                </p>
                
                <h3 className="text-xl font-heading font-medium text-charcoal mt-6">
                  Our Solution
                </h3>
                <p className="text-graphite leading-relaxed">
                  We developed a comprehensive design approach that integrated custom elements 
                  with carefully selected materials, ensuring every detail contributed to the 
                  overall narrative and user experience.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-warm-neutral p-6 rounded-lg">
                <h4 className="font-heading font-medium text-charcoal mb-4">
                  Project Details
                </h4>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-graphite">Client:</span>
                    <span className="ml-2 text-charcoal font-medium">{project.client}</span>
                  </div>
                  <div>
                    <span className="text-graphite">Year:</span>
                    <span className="ml-2 text-charcoal font-medium">{project.year}</span>
                  </div>
                  <div>
                    <span className="text-graphite">Category:</span>
                    <span className="ml-2 text-charcoal font-medium">{project.category}</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-warm-neutral p-6 rounded-lg">
                <h4 className="font-heading font-medium text-charcoal mb-4">
                  Services
                </h4>
                <div className="space-y-2">
                  {project.services.map((service) => (
                    <div key={service} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></div>
                      <span className="text-graphite">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <button className="btn-hero w-full inline-flex items-center justify-center gap-2">
                <ExternalLink size={18} />
                View Full Case Study
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailModal;