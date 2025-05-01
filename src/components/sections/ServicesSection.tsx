import React from 'react';
import { motion } from 'framer-motion';
import { Globe, ShoppingCart, Cog, Layout } from 'lucide-react';
import ServiceCard from '../ui/ServiceCard';

const ServicesSection: React.FC = () => {
  const services = [
    {
      id: 1,
      title: "Sites Responsivos",
      description: "Desenvolvemos sites modernos que se adaptam perfeitamente a qualquer dispositivo, oferecendo a melhor experiência para seus usuários.",
      icon: <Globe className="h-10 w-10 text-primary-500" />,
      delay: 0.1
    },
    {
      id: 2,
      title: "Lojas Virtuais",
      description: "Criamos e-commerces completos, com foco em usabilidade, conversão e integração com meios de pagamento e sistemas de gestão.",
      icon: <ShoppingCart className="h-10 w-10 text-primary-500" />,
      delay: 0.2
    },
    {
      id: 3,
      title: "Automação de Processos",
      description: "Otimize seus fluxos de trabalho com soluções personalizadas que aumentam a produtividade e reduzem custos operacionais.",
      icon: <Cog className="h-10 w-10 text-primary-500" />,
      delay: 0.3
    },
    {
      id: 4,
      title: "Landing Pages",
      description: "Desenvolvemos páginas de alta conversão, focadas em atrair leads qualificados e aumentar suas vendas.",
      icon: <Layout className="h-10 w-10 text-primary-500" />,
      delay: 0.4
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Nossos <span className="text-primary-600">Serviços</span>
          </h2>
          <p className="section-subtitle">
            Oferecemos soluções digitais completas para impulsionar seu negócio no ambiente online,
            com foco em resultados e experiência do usuário.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <ServiceCard 
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={service.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;