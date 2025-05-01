import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="pt-28 pb-20 md:pt-36 md:pb-24 bg-gradient-to-br from-primary-50 via-white to-secondary-50 overflow-hidden"
    >
      <div className="container-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Transformando ideias em 
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> soluções digitais </span>
              inovadoras
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 md:pr-12">
              Especialistas em desenvolvimento de sites responsivos, lojas virtuais, 
              automação de processos e landing pages que convertem.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="btn-primary"
              >
                Solicitar Orçamento
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="#services" 
                className="btn-secondary"
              >
                Nossos Serviços
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-w-16 aspect-h-6">
              <img 
                src="raven.png" 
                alt="Equipe RavenRock trabalhando em soluções digitais" 
                className="object-cover rounded-xl shadow-2xl"
              />
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-xl">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <p className="font-medium text-sm">100+ Projetos Entregues</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;