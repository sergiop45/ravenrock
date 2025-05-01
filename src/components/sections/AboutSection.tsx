import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const AboutSection: React.FC = () => {
  const achievements = [
    "Mais de 100 projetos entregues com sucesso",
    "5 anos de experiência no mercado",
    "Equipe de especialistas certificados",
    "Satisfação garantida ou seu dinheiro de volta"
  ];

  return (
    <section id="about" className="py-20 bg-primary/5">
      <div className="container-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1"
          >
            <div className="relative aspect-h-2">
              <img 
                src="img9.png" 
                alt="Equipe RavenRock" 
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-5 rounded-lg shadow-xl">
                <div className="text-primary text-center">
                  <div className="font-bold text-3xl">100+</div>
                  <div className="text-sm">Clientes satisfeitos</div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Sobre a <span className="text-primary">RavenRock</span>
            </h2>
            
            <p className="text-dark/70 mb-6">
              Somos uma empresa de tecnologia fundada em 2019 com a missão de transformar ideias
              em soluções digitais inovadoras que impulsionam o crescimento dos nossos clientes.
            </p>
            
            <p className="text-dark/70 mb-8">
              Nossa equipe é formada por profissionais apaixonados por tecnologia e
              comprometidos em entregar projetos de alta qualidade, com foco em resultados.
              Trabalhamos em parceria com nossos clientes para entender suas necessidades
              e desenvolver soluções personalizadas que atendam aos seus objetivos.
            </p>
            
            <ul className="space-y-3 mb-8">
              {achievements.map((achievement, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center"
                >
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  <span>{achievement}</span>
                </motion.li>
              ))}
            </ul>
            
            <a 
              href="#contact" 
              className="btn-primary"
            >
              Fale com nosso time
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;