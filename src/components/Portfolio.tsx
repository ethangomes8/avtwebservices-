import React, { useState } from 'react';
import PortfolioModal from './PortfolioModal';

const portfolioData = [
  {
    id: 'art-doise',
    title: "Restaurant L'Art-Doise",
    description: 'Cuisine traditionnelle française',
    thumbnail: '/images/image-principale.png',
    images: [
      {
        url: '/images/image-principale.png',
        title: "L'Art-Doise - Ambiance",
        description: 'Une atmosphère chaleureuse et authentique',
      },
      {
        url: '/images/image-principale_annexe1.png',
        title: 'Nos Plats Signature',
        description: 'Des plats traditionnels préparés avec passion',
      },
      {
        url: '/images/image-secondaire_annexe5.png',
        title: 'Notre Carte',
        description: 'Une sélection de plats raffinés et savoureux',
      },
    ],
  },
  {
    id: 'drops-bar',
    title: 'Drops Bar Lille',
    description: 'Bar & Restaurant',
    thumbnail: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1600&q=80',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1600&q=80',
        title: 'Drops Bar - Ambiance',
        description: 'Une atmosphère unique au cœur de Lille',
      },
      {
        url: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1600&q=80',
        title: 'Notre Bar',
        description: 'Une sélection de cocktails créatifs',
      },
      {
        url: 'https://images.unsplash.com/photo-1525268323446-0505b6fe7778?auto=format&fit=crop&w=1600&q=80',
        title: 'Espace Lounge',
        description: 'Un cadre moderne et confortable',
      },
    ],
  },
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleProjectClick = (projectId: string) => {
    setSelectedProject(projectId);
    setCurrentImageIndex(0);
  };

  const handleClose = () => {
    setSelectedProject(null);
  };

  const handleNext = () => {
    const project = portfolioData.find((p) => p.id === selectedProject);
    if (project) {
      setCurrentImageIndex((prev) =>
        prev === project.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const handlePrevious = () => {
    const project = portfolioData.find((p) => p.id === selectedProject);
    if (project) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? project.images.length - 1 : prev - 1
      );
    }
  };

  const currentProject = portfolioData.find((p) => p.id === selectedProject);

  return (
    <section id="portfolio" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-secondary">
          Nos Réalisations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {portfolioData.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-lg hover:shadow-xl transition-shadow"
              onClick={() => handleProjectClick(project.id)}
            >
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="text-white text-center p-6">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {currentProject && (
        <PortfolioModal
          images={currentProject.images}
          currentIndex={currentImageIndex}
          isOpen={!!selectedProject}
          onClose={handleClose}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      )}
    </section>
  );
}