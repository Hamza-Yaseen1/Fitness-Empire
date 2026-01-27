'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  category: string;
}

interface GalleryProps {
  items: GalleryItem[];
}

const Gallery = ({ items }: GalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (src: string) => {
    setSelectedImage(src);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((item) => (
          <motion.div
            key={item.id}
            className="relative aspect-square cursor-pointer overflow-hidden rounded-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => openModal(item.src)}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
              <span className="text-white opacity-0 hover:opacity-100 transition-opacity duration-300 font-medium">
                View Image
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal for enlarged image */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
        >
          <motion.div
            className="relative max-w-4xl w-full max-h-[90vh]"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
          >
            <Image
              src={selectedImage}
              alt="Enlarged view"
              fill
              className="object-contain"
              sizes="90vw"
            />
            <button
              className="absolute top-4 right-4 text-white bg-red-600 rounded-full p-2 hover:bg-red-700 transition-colors"
              onClick={closeModal}
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Gallery;