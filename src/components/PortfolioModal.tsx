import React from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface PortfolioModalProps {
  images: {
    url: string;
    title: string;
    description: string;
  }[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

export default function PortfolioModal({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrevious,
}: PortfolioModalProps) {
  if (!isOpen) return null;

  const currentImage = images[currentIndex];

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
        aria-label="Fermer"
      >
        <X className="h-8 w-8" />
      </button>

      <button
        onClick={onPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors"
        aria-label="Image précédente"
      >
        <ChevronLeft className="h-12 w-12" />
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <img
            src={currentImage.url}
            alt={currentImage.title}
            className="max-h-[80vh] object-contain mx-auto"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
            <h3 className="text-2xl font-bold text-white mb-2">{currentImage.title}</h3>
            <p className="text-gray-200">{currentImage.description}</p>
          </div>
        </div>
      </div>

      <button
        onClick={onNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors"
        aria-label="Image suivante"
      >
        <ChevronRight className="h-12 w-12" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-primary' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}