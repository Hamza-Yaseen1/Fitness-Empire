'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import Card from '@/components/Card';
import { Users, Award, Star, Clock, MapPin, Phone } from 'lucide-react';

export default function Home() {
  // Stats data for animated counters
  const stats = [
    { id: 1, value: '500+', label: 'Members', icon: Users },
    { id: 2, value: '15+', label: 'Trainers', icon: Award },
    { id: 3, value: '5+', label: 'Years Experience', icon: Star },
    { id: 4, value: '24/7', label: 'Support', icon: Clock },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/gym-hero.avif')`,
          }}
        ></div>

        <div className="relative z-20 container mx-auto px-4 md:px-6 text-center text-white">
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            FITNESS EMPIRE
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transform Your Body & Mind at Karachi's Premier Fitness Destination
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button href="/contact" variant="primary" size="lg">
              Join Now
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Contact Us
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Gym Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Welcome to Fitness Empire
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Located at Plot No. 554/555, Saeedabad Share, Area 5J, 24 Market Road, Baldia Town, Karachi,
              Fitness Empire is your premier destination for health and wellness. We offer state-of-the-art
              facilities and professional guidance to help you achieve your fitness goals.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="text-red-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Our Location</h3>
                <p className="text-gray-600">
                  Plot No. 554/555, Saeedabad Share, Area 5J, 24 Market Road, Baldia Town, Karachi
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <Clock className="text-red-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Opening Hours</h3>
                <p className="text-gray-600">
                  7:00 AM – 11:30 PM Daily
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <motion.div
                key={stat.id}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: stat.id * 0.1 }}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                    <stat.icon size={24} />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Fitness Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join Fitness Empire today and experience the difference with our premium facilities and expert trainers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/pricing" variant="primary" size="lg">
              View Plans
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
