import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Award, Users, BarChart } from 'lucide-react';
import AdvantageCard from '../ui/AdvantageCard';

const AdvantagesSection: React.FC = () => {
  const advantages = [
    {
      id: 1,
      title: "Entrega Rápida",
      description: "Nossos processos otimizados garantem entregas dentro do prazo, sem comprometer a qualidade.",
      icon: <Clock className="h-10 w-10 text-white" />,
      color: "from-primary-500 to-primary-700",
      delay: 0.1
    },
    {
      id: 2,
      title: "Qualidade Premium",
      description: "Utilizamos as melhores práticas e tecnologias do mercado para entregar produtos de alta qualidade.",
      icon: <Award className="h-10 w-10 text-white" />,
      color: "from-secondary-500 to-secondary-700",
      delay: 0.2
    },
    {
      id: 3,
      title: "Equipe Especializada",
      description: "Contamos com profissionais altamente qualificados em todas as áreas do desenvolvimento digital.",
      icon: <Users className="h-10 w-10 text-white" />,
      color: "from-accent-500 to-accent-700",
      delay: 0.3
    },
    {
      id: 4,
      title: "Resultados Mensuráveis",
      description: "Nossos projetos são orientados por dados, garantindo resultados concretos e mensuráveis.",
      icon: <BarChart className="h-10 w-10 text-white" />,
      color: "from-primary-700 to-secondary-700",
      delay: 0.4
    }
  ];

  return (
    <section id="advantages" className="py-20 bg-gray-50">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Por que escolher a <span className="text-primary-600">RavenRock</span>
          </h2>
          <p className="section-subtitle">
            Conheça as vantagens de trabalhar com uma equipe comprometida 
            com a excelência e focada em resultados.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage) => (
            <AdvantageCard
              key={advantage.id}
              title={advantage.title}
              description={advantage.description}
              icon={advantage.icon}
              color={advantage.color}
              delay={advantage.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;