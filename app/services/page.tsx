'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Card from '@/components/Card';
import Button from '@/components/Button';
import { Dumbbell, HeartPulse, Users, Apple, BarChart3, Star } from 'lucide-react';

export default function Services() {
  // Services data
  const services = [
    {
      id: 1,
      title: 'Weight Training',
      description: 'Build strength and muscle mass with our state-of-the-art weight training equipment and expert guidance.',
      icon: Dumbbell,
      image: './images/weight-training.avif',
    },
    {
      id: 2,
      title: 'Cardio Classes',
      description: 'Burn calories and improve cardiovascular health with our high-energy cardio classes.',
      icon: HeartPulse,
      image: '../public/images/cardio.jpg',
    },
    {
      id: 3,
      title: 'Personal Training',
      description: 'One-on-one personalized training sessions tailored to your specific goals and needs.',
      icon: Users,
      image: './public/images/personal-training.webp',
    },
    {
      id: 4,
      title: 'Nutrition Coaching',
      description: 'Professional nutrition guidance to fuel your body properly and maximize your results.',
      icon: Apple,
      image: '.../images/nutrition.avif',
    },
    {
      id: 5,
      title: 'Group Fitness',
      description: 'Join our fun and engaging group fitness classes suitable for all fitness levels.',
      icon: Users,
      image: '/images/group-fitness.jpg',
    },
    {
      id: 6,
      title: 'Progress Tracking',
      description: 'Monitor your fitness journey with our advanced tracking systems and regular assessments.',
      icon: BarChart3,
      image: '/images/progress-tracking.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      {/* Services Hero Section */}
      <section className="relative py-32 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="absolute inset-0 bg-cover bg-center opacity-20"
             style={{ backgroundImage: 'url(/images/gym-services.jpg)' }}></div>

        <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Fitness Services
          </motion.h1>
          <p className="text-xl max-w-2xl mx-auto">
            Comprehensive fitness solutions designed to help you achieve your goals
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Fitness Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our range of services designed to meet your fitness needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: service.id * 0.1 }}
              >
                <Card variant="service">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                      <service.icon className="text-red-600" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                  </div>

                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48 mb-4" />

                  <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>

                  <Button variant="secondary" size="sm">
                    Learn More
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Programs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Special Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tailored programs for specific fitness goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card variant="default">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <Star className="text-red-600" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Beginner Program</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Perfect for those new to fitness. Step-by-step guidance to build confidence and establish healthy habits.
                </p>
                <ul className="text-gray-600 space-y-2 mb-4">
                  <li>• Personal orientation session</li>
                  <li>• Basic exercise techniques</li>
                  <li>• Equipment familiarization</li>
                  <li>• Progress tracking</li>
                </ul>
                <Button variant="secondary" size="sm">Start Now</Button>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card variant="default">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <Star className="text-red-600" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Weight Loss Program</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Comprehensive program combining exercise and nutrition to help you achieve sustainable weight loss.
                </p>
                <ul className="text-gray-600 space-y-2 mb-4">
                  <li>• Customized workout plan</li>
                  <li>• Nutrition counseling</li>
                  <li>• Weekly progress reviews</li>
                  <li>• Support groups</li>
                </ul>
                <Button variant="secondary" size="sm">Start Now</Button>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card variant="default">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <Star className="text-red-600" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Strength Building</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Advanced program focused on building muscle mass and increasing overall strength.
                </p>
                <ul className="text-gray-600 space-y-2 mb-4">
                  <li>• Progressive overload training</li>
                  <li>• Muscle group specialization</li>
                  <li>• Recovery optimization</li>
                  <li>• Performance tracking</li>
                </ul>
                <Button variant="secondary" size="sm">Start Now</Button>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Fitness Empire?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer the best in fitness and wellness
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Dumbbell className="text-red-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Premium Equipment</h3>
              <p className="text-gray-600">State-of-the-art machines and free weights</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-red-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Trainers</h3>
              <p className="text-gray-600">Certified professionals with years of experience</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <HeartPulse className="text-red-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Health Focused</h3>
              <p className="text-gray-600">We prioritize your health and safety</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Apple className="text-red-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Nutrition Support</h3>
              <p className="text-gray-600">Complete wellness with nutrition guidance</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Life?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Choose from our wide range of fitness services and start your journey today
          </p>
          <Button href="/pricing" variant="primary" size="lg">
            View Pricing
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}