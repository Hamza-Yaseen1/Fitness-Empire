'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { useState } from 'react';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const galleryItems = [
    {
      id: 1,
      title: 'Weight Training Area',
      image: '/images/weight-training.avif',
      category: 'equipment',
    },
    {
      id: 2,
      title: 'Weight Area',
      image: '/images/weight-area.avif',
      category: 'equipment',
    },
    {
      id: 3,
      title: 'Equipment Section',
      image: '/images/equipment.avif',
      category: 'equipment',
    },
    {
      id: 4,
      title: 'Group Fitness Class',
      image: '/images/group-fitness.avif',
      category: 'classes',
    },
    {
      id: 5,
      title: 'Group Class Sessions',
      image: '/images/group-class.avif',
      category: 'classes',
    },
    {
      id: 6,
      title: 'Indoor Court',
      image: '/images/indoor-court.avif',
      category: 'facilities',
    },
    {
      id: 7,
      title: 'Locker Room',
      image: '/images/locker-room.avif',
      category: 'facilities',
    },
    {
      id: 8,
      title: 'Our Members',
      image: '/images/members.avif',
      category: 'community',
    },
    {
      id: 9,
      title: 'Nutrition Programs',
      image: '/images/nutrition.avif',
      category: 'services',
    },
    {
      id: 10,
      title: 'Professional Trainer',
      image: '/images/personal-trainer.avif',
      category: 'trainers',
    },
    {
      id: 11,
      title: 'Expert Coaching',
      image: '/images/tariner2.avif',
      category: 'trainers',
    },
    {
      id: 12,
      title: 'Female Trainer',
      image: '/images/trainer-girl1.avif',
      category: 'trainers',
    },
    {
      id: 13,
      title: 'Gym Gallery',
      image: '/images/gym-gallery.avif',
      category: 'facilities',
    },
    {
      id: 14,
      title: 'Gym Exterior',
      image: '/images/gym-exterior.avif',
      category: 'facilities',
    },
    {
      id: 15,
      title: 'Contact Location',
      image: '/images/gym-contact.avif',
      category: 'facilities',
    },
    {
      id: 16,
      title: 'Pricing Details',
      image: '/images/gym-pricing.avif',
      category: 'facilities',
    },
  ];

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'equipment', label: 'Equipment' },
    { id: 'classes', label: 'Classes' },
    { id: 'facilities', label: 'Facilities' },
    { id: 'trainers', label: 'Trainers' },
    { id: 'services', label: 'Services' },
    { id: 'community', label: 'Community' },
  ];

  const filteredItems =
    selectedCategory === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center justify-center overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/gym-gallery.avif')`,
          }}
        ></div>

        <motion.div
          className="relative z-20 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Gallery</h1>
          <p className="text-xl md:text-2xl text-gray-200">
            Explore the fitness empire experience
          </p>
        </motion.div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-red-600 text-white shadow-lg scale-105'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                {category.label}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 container mx-auto px-4 md:px-6">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-64 md:h-72 overflow-hidden bg-gray-200">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <h3 className="text-white text-xl font-bold text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredItems.length === 0 && (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-2xl text-gray-600">
              No images found in this category.
            </p>
          </motion.div>
        )}
      </section>

      <Footer />
    </div>
  );
}
