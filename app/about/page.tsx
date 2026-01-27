'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Card from '@/components/Card';
import Button from '@/components/Button';
import { Star, Users, Award, Target } from 'lucide-react';

export default function About() {
  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: 'Ahmed Khan',
      role: 'Member for 3 years',
      content: 'Fitness Empire has transformed my life. The trainers are professional and the equipment is top-notch.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Fatima Ali',
      role: 'Member for 2 years',
      content: 'Best gym in Karachi! The atmosphere is motivating and staff is very supportive.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Omar Hassan',
      role: 'Member for 1 year',
      content: 'I achieved my fitness goals in just 6 months. Highly recommend!',
      rating: 5,
    },
  ];

  // Trainers data
  const trainers = [
    {
      id: 1,
      name: 'Ali Raza',
      specialty: 'Weight Training',
      experience: '8 years',
      image: '/images/trainer1.jpg',
    },
    {
      id: 2,
      name: 'Sara Ahmed',
      specialty: 'Cardio & Nutrition',
      experience: '6 years',
      image: '/images/trainer2.jpg',
    },
    {
      id: 3,
      name: 'Kamran Malik',
      specialty: 'Personal Training',
      experience: '10 years',
      image: '/images/trainer3.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />

      {/* About Hero Section */}
      <section className="relative py-32 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="absolute inset-0 bg-cover bg-center opacity-20"
             style={{ backgroundImage: 'url(/images/gym-about.jpg)' }}></div>

        <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About Fitness Empire
          </motion.h1>
          <p className="text-xl max-w-2xl mx-auto">
            Your journey to a healthier, stronger, and more confident you begins here
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2019, Fitness Empire started with a simple mission: to provide Karachi's premier fitness experience.
                Located at Plot No. 554/555, Saeedabad Share, Area 5J, 24 Market Road, Baldia Town, we've grown from a small
                community gym to the city's most trusted fitness destination.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                With state-of-the-art equipment, professional trainers, and a welcoming community, we're committed to helping
                you achieve your fitness goals, whatever they may be.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <Target className="text-red-600" size={24} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">500+</div>
                    <div className="text-gray-600">Happy Members</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <Award className="text-red-600" size={24} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">15+</div>
                    <div className="text-gray-600">Expert Trainers</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Vision & Mission
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We believe in empowering individuals to lead healthier lives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card variant="default">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <Star className="text-red-600" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be Karachi's leading fitness destination, inspiring and empowering individuals to achieve their health and wellness goals through professional guidance, state-of-the-art facilities, and a supportive community.
              </p>
            </Card>

            <Card variant="default">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <Target className="text-red-600" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide accessible, high-quality fitness services that cater to all levels of experience. We aim to create a welcoming environment where everyone feels comfortable pursuing their fitness journey with expert support and modern equipment.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Members Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from people who have transformed their lives with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: testimonial.id * 0.1 }}
              >
                <Card variant="testimonial">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current" size={20} />
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-4">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-500 text-sm">{testimonial.role}</div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Trainers */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Expert Trainers
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional trainers dedicated to your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trainers.map((trainer) => (
              <motion.div
                key={trainer.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: trainer.id * 0.1 }}
              >
                <Card variant="service">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{trainer.name}</h3>
                  <p className="text-red-600 font-medium mb-2">{trainer.specialty}</p>
                  <p className="text-gray-600 text-sm mb-4">Experience: {trainer.experience}</p>
                  <Button variant="secondary" size="sm">View Profile</Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Become part of Karachi's most supportive fitness community
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Join Now
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}