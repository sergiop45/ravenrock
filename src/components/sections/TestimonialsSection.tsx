import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import TestimonialCard from '../ui/TestimonialCard';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: "Ana Silva",
      company: "Fashion Store",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
      testimonial: "A RavenRock transformou completamente o nosso e-commerce. As vendas aumentaram em 40% no primeiro mês após o lançamento da nova loja virtual!",
      rating: 5
    },
    {
      id: 2,
      name: "Carlos Mendes",
      company: "Tech Solutions",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
      testimonial: "A automação de processos implementada pela RavenRock reduziu nosso tempo operacional em 65%. A equipe é extremamente profissional e atenciosa.",
      rating: 5
    },
    {
      id: 3,
      name: "Mariana Costa",
      company: "Agência Marketing",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600",
      testimonial: "As landing pages desenvolvidas pela RavenRock triplicaram nossa taxa de conversão. Resultado excepcional e suporte sempre disponível!",
      rating: 5
    },
    {
      id: 4,
      name: "Pedro Alves",
      company: "Consultoria JS",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600",
      testimonial: "O site responsivo que desenvolveram para nós trouxe um aumento significativo no tráfego mobile, representando agora 60% das nossas conversões.",
      rating: 4
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const totalTestimonials = testimonials.length;

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % totalTestimonials);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + totalTestimonials) % totalTestimonials);
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            O que nossos <span className="text-primary-600">clientes</span> dizem
          </h2>
          <p className="section-subtitle">
            Confira os depoimentos de quem já transformou seu negócio com nossas soluções digitais.
          </p>
        </motion.div>

        <div className="relative">
          {/* Desktop View */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                name={testimonial.name}
                company={testimonial.company}
                image={testimonial.image}
                testimonial={testimonial.testimonial}
                rating={testimonial.rating}
                delay={index * 0.1}
              />
            ))}
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden">
            <TestimonialCard
              key={testimonials[currentTestimonial].id}
              name={testimonials[currentTestimonial].name}
              company={testimonials[currentTestimonial].company}
              image={testimonials[currentTestimonial].image}
              testimonial={testimonials[currentTestimonial].testimonial}
              rating={testimonials[currentTestimonial].rating}
              delay={0}
            />
            
            <div className="flex justify-center mt-8 space-x-4">
              <button 
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Depoimento anterior"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button 
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Próximo depoimento"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="text-center mt-10">
            <a href="#contact" className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700">
              Quero transformar meu negócio também
              <ChevronRight className="ml-1 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;