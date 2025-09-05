'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      company: 'EcoTech Solutions',
      role: 'CEO',
      content: 'JH Digital transformed our online presence completely. Their strategic approach to design and branding helped us increase our conversion rates by 45% in just 3 months. The personalized attention and results-driven approach exceeded our expectations.',
      rating: 5,
      image: '/api/placeholder/80/80'
    },
    {
      id: 2,
      name: 'Michael Chen',
      company: 'FreshBite Restaurant',
      role: 'Founder',
      content: 'Working with JH Digital was a game-changer for our restaurant chain. They understood our vision perfectly and delivered a website that not only looks stunning but also drives real business results. Our online orders increased by 38%!',
      rating: 5,
      image: '/api/placeholder/80/80'
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      company: 'FitLife Coaching',
      role: 'Owner',
      content: 'The team at JH Digital is exceptional. They took the time to understand our business model and created a brand identity that perfectly represents our values. Our lead generation increased by 52% and client retention improved significantly.',
      rating: 5,
      image: '/api/placeholder/80/80'
    },
    {
      id: 4,
      name: 'David Thompson',
      company: 'TechFlow Inc.',
      role: 'Marketing Director',
      content: 'JH Digital delivered beyond our expectations. Their strategic approach to web design and branding helped us establish a strong online presence that converts visitors into loyal customers. Highly recommended!',
      rating: 5,
      image: '/api/placeholder/80/80'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="section-padding bg-slate-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Cards */}
          <div className="relative h-96">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ 
                  opacity: index === currentIndex ? 1 : 0,
                  x: index === currentIndex ? 0 : 100,
                  scale: index === currentIndex ? 1 : 0.95
                }}
                transition={{ duration: 0.5 }}
                className={`absolute inset-0 ${
                  index === currentIndex ? 'z-10' : 'z-0'
                }`}
              >
                <div className="bg-white rounded-2xl p-8 h-full flex flex-col justify-center">
                  {/* Rating */}
                  <div className="flex items-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Testimonial Content */}
                  <blockquote className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-xl font-bold text-primary-600">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-gray-600">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow duration-200 z-20"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow duration-200 z-20"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex 
                    ? 'bg-primary-600 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 