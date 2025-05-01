import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  company: string;
  image: string;
  testimonial: string;
  rating: number;
  delay: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  name, 
  company, 
  image, 
  testimonial, 
  rating,
  delay 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <div className="flex space-x-1 mb-4">
        {Array(5).fill(0).map((_, index) => (
          <Star 
            key={index} 
            className={`h-5 w-5 ${index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
          />
        ))}
      </div>
      
      <p className="text-gray-600 mb-6">"{testimonial}"</p>
      
      <div className="flex items-center">
        <img 
          src={image} 
          alt={name} 
          className="h-12 w-12 rounded-full object-cover mr-4" 
        />
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-gray-500">{company}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;