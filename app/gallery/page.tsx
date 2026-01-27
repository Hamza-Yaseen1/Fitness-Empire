'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Gallery from '@/components/Gallery';
import Button from '@/components/Button';
import { Camera, Dumbbell, Users, HeartPulse } from 'lucide-react';

export default function GalleryPage() {
  // Gallery items data
  const galleryItems = [
    { id: 1, src: '/images/gym-exterior.avif', alt: 'Gym Exterior', category: 'exterior' },
    { id: 2, src: '/images/weight-area.jpg', alt: 'Weight Training Area', category: 'interior' },
    { id: 3, src: '/images/cardio-area.jpg', alt: 'Cardio Equipment Area', category: 'interior' },
    { id: 4, src: '/images/group-class.jpg', alt: 'Group Fitness Class', category: 'classes' },
    { id: 5, src: '/images/personal-trainer.jpg', alt: 'Personal Training Session', category: 'training' },
    { id: 6, src: '/images/equipment.jpg', alt: 'Modern Gym Equipment', category: 'equipment' },
    { id: 7, src: '/images/reception.jpg', alt: 'Gym Reception', category: 'interior' },
    { id: 8, src: '/images/members.jpg', alt: 'Happy Gym Members', category: 'members' },
    { id: 9, src: '/images/yoga-class.jpg', alt: 'Yoga Class', category: 'classes' },
    { id: 10, src: '/images/nutrition-area.jpg', alt: 'Nutrition Consultation Area', category: 'nutrition' },
    { id: 11, src: '/images/locker-room.jpg', alt: 'Locker Room', category: 'facilities' },
    { id: 12, src: '/images/indoor-court.jpg', alt: 'Indoor Court', category: 'facilities' },
  ];

  // Categories for filtering
  const categories = [
    { id: 'all', name: 'All', icon: Camera },
    { id: 'interior', name: 'Interior', icon: Dumbbell },
    { id: 'exterior', name: 'Exterior', icon: HeartPulse },
    { id: 'classes', name: 'Classes', icon: Users },
    { id: 'training', name: 'Training', icon: Dumbbell },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />

      {/* Gallery Hero Section */}
      <section className="relative py-32 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="absolute inset-0 bg-cover bg-center opacity-20"
             style={{ backgroundImage: 'url(/images/gym-gallery.jpg)' }}></div>

        <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Gallery
          </motion.h1>
          <p className="text-xl max-w-2xl mx-auto">
            Take a virtual tour of our state-of-the-art facilities
          </p>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Facilities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our premium gym facilities and equipment
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                className="flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-red-100 text-gray-700 hover:text-red-600 rounded-full transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <category.icon size={18} />
                {category.name}
              </motion.button>
            ))}
          </div>

          {/* Gallery Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Gallery items={galleryItems} />
          </motion.div>

          {/* Gallery Features */}
          <div className="mt-16">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              Our Premium Facilities
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                    <Dumbbell className="text-red-600" size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Advanced Equipment</h4>
                  <p className="text-gray-600">
                    State-of-the-art machines and free weights from leading manufacturers
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                    <Users className="text-red-600" size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Group Classes</h4>
                  <p className="text-gray-600">
                    Wide variety of group fitness classes for all levels
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                    <HeartPulse className="text-red-600" size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Wellness Areas</h4>
                  <p className="text-gray-600">
                    Relaxation and recovery areas for post-workout recovery
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Visit Our Gym Today!
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Experience our premium facilities firsthand
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Schedule a Tour
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}