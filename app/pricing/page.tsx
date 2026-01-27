'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Card from '@/components/Card';
import Button from '@/components/Button';
import { Check, Star, Users, Dumbbell, HeartPulse } from 'lucide-react';

export default function Pricing() {
  // Pricing plans data
  const pricingPlans = [
    {
      id: 1,
      name: 'Monthly',
      price: 'Rs. 3,000',
      period: 'per month',
      features: [
        'Access to all gym equipment',
        'Basic fitness assessment',
        'Group fitness classes',
        'Locker facility',
        'Free parking',
        'Guest passes (2/month)',
      ],
      popular: false,
    },
    {
      id: 2,
      name: 'Quarterly',
      price: 'Rs. 8,000',
      period: 'per 3 months',
      features: [
        'Access to all gym equipment',
        'Basic fitness assessment',
        'Group fitness classes',
        'Locker facility',
        'Free parking',
        'Guest passes (4/month)',
        '1 free personal training session',
        'Nutrition consultation',
      ],
      popular: true,
    },
    {
      id: 3,
      name: 'Yearly',
      price: 'Rs. 25,000',
      period: 'per year',
      features: [
        'Access to all gym equipment',
        'Comprehensive fitness assessment',
        'All group fitness classes',
        'Locker facility',
        'Free parking',
        'Unlimited guest passes',
        '4 free personal training sessions',
        'Monthly nutrition consultations',
        'Priority booking for classes',
        'Exclusive member events',
      ],
      popular: false,
    },
  ];

  // Benefits data
  const benefits = [
    {
      id: 1,
      title: 'Flexible Membership',
      description: 'Choose the plan that fits your lifestyle and budget',
      icon: Dumbbell,
    },
    {
      id: 2,
      title: 'No Contract Required',
      description: 'Cancel anytime with 30 days notice',
      icon: HeartPulse,
    },
    {
      id: 3,
      title: 'Family Discounts',
      description: 'Special rates for family memberships',
      icon: Users,
    },
    {
      id: 4,
      title: 'Free Trial',
      description: '7-day free trial for new members',
      icon: Star,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />

      {/* Pricing Hero Section */}
      <section className="relative py-32 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="absolute inset-0 bg-cover bg-center opacity-20"
             style={{ backgroundImage: 'url(/images/gym-pricing.jpg)' }}></div>

        <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Membership Plans
          </motion.h1>
          <p className="text-xl max-w-2xl mx-auto">
            Choose the perfect plan to achieve your fitness goals
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Plan
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Flexible options to suit your fitness journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: plan.id * 0.1 }}
              >
                {plan.popular ? (
                  <div className="relative">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                    <Card className="border-2 border-red-600 relative pt-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                      <div className="mb-6">
                        <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                        <span className="text-gray-600">/{plan.period}</span>
                      </div>
                      <ul className="space-y-3 mb-8">
                        {plan.features.map((feature, index) => (
                          <li key={index} className="flex items-center">
                            <Check className="text-green-500 mr-2 flex-shrink-0" size={20} />
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button href="/contact" variant="primary" size="md" className="w-full">
                        Get Started
                      </Button>
                    </Card>
                  </div>
                ) : (
                  <Card>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-600">/{plan.period}</span>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <Check className="text-green-500 mr-2 flex-shrink-0" size={20} />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button href="/contact" variant="secondary" size="md" className="w-full">
                      Get Started
                    </Button>
                  </Card>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Membership Benefits
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Enjoy exclusive benefits with your membership
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: benefit.id * 0.1 }}
              >
                <Card variant="default">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                    <benefit.icon className="text-red-600" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about our membership plans
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Can I freeze my membership?</h3>
              <p className="text-gray-600">
                Yes, you can freeze your membership for up to 3 months with a medical certificate.
                A processing fee of Rs. 500 applies for freezing/unfreezing requests.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Do you offer family discounts?</h3>
              <p className="text-gray-600">
                Yes, we offer family discounts! Register 3 or more family members and get 15% off
                each membership. Contact us for more details.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">What's included in the free trial?</h3>
              <p className="text-gray-600">
                Our 7-day free trial includes full access to all gym facilities, group classes,
                and locker facilities. No commitment required!
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Can I upgrade my plan?</h3>
              <p className="text-gray-600">
                Absolutely! You can upgrade your membership plan at any time. The remaining balance
                from your current plan will be credited toward the upgrade.
              </p>
            </div>
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
            Join Fitness Empire today and get your first week free!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary" size="lg">
              Sign Up Now
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Schedule Tour
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}