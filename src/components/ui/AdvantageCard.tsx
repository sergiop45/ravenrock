import React from 'react';
import { motion } from 'framer-motion';

interface AdvantageCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  delay: number;
}

const AdvantageCard: React.FC<AdvantageCardProps> = ({ title, description, icon, color, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <div className={`mb-5 p-3 rounded-lg inline-block bg-gradient-to-r ${color}`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

export default AdvantageCard;