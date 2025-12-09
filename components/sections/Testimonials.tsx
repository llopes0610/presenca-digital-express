'use client';

import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Card } from '@/components/ui/Card';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Mariana Costa',
      role: 'Esteticista',
      image: '👩‍💼', // Emoji como placeholder
      rating: 5,
      text: 'Antes do Lucas, eu só tinha Instagram. Os clientes perguntavam endereço, preço, horário... tudo espalhado. Agora tenho um site lindo que já responde TUDO. Aumentei 40% os agendamentos em 2 semanas!',
    },
    {
      name: 'Rafael Almeida',
      role: 'Personal Trainer',
      image: '💪',
      rating: 5,
      text: 'Achei que ia ser aquele site genérico de Wix. Cara, ficou PROFISSIONAL mesmo. As pessoas me acham no Google agora. Valeu cada centavo, e olha que paguei menos que uma semana de academia. Entrega rápida de verdade!',
    },
    {
      name: 'Camila Rocha',
      role: 'Arquiteta',
      image: '👩‍🎨',
      rating: 5,
      text: 'Precisava de algo rápido para apresentar em uma reunião importante. Lucas entregou em 48h exatas, com direito a logo, cartão digital e site. Fechei o projeto! Super recomendo.',
    },
    {
      name: 'Bruno Silva',
      role: 'Fotógrafo',
      image: '📸',
      rating: 5,
      text: 'Meu portfólio finalmente tem um destino profissional. O site carrega rápido, as fotos ficaram lindas e os clientes agora me levam muito mais a sério. Investimento que se paga sozinho.',
    },
    {
      name: 'Juliana Santos',
      role: 'Nutricionista',
      image: '🥗',
      rating: 5,
      text: 'Estava perdendo pacientes para concorrentes que tinham site. Agora apareço no Google quando pesquisam "nutricionista [minha cidade]". Já recuperei o investimento na primeira semana!',
    },
    {
      name: 'Carlos Mendes',
      role: 'Advogado',
      image: '⚖️',
      rating: 5,
      text: 'Como advogado, preciso transmitir credibilidade. O site ficou exatamente como eu queria: sério, profissional e fácil de navegar. Clientes chegam muito mais preparados agora.',
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm font-semibold">
              ⭐ Depoimentos
            </span>
          </div>
          <h2 className="heading-lg mb-6">
            O Que Nossos Clientes{' '}
            <span className="gradient-text">Estão Dizendo</span>
          </h2>
          <p className="text-xl text-dark-600">
            Resultados reais de pessoas reais que transformaram seus negócios.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` } as React.CSSProperties}
            >
              {/* Quote icon */}
              <div className="mb-4">
                <Quote className="w-10 h-10 text-primary-200" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-dark-700 leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-6 border-t border-dark-100">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-secondary-400 flex items-center justify-center text-2xl">
                  {testimonial.image}
                </div>
                <div>
                  <div className="font-bold text-dark-900">{testimonial.name}</div>
                  <div className="text-sm text-dark-600">{testimonial.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { number: '50+', label: 'Projetos Entregues' },
            { number: '100%', label: 'Satisfação' },
            { number: '48h', label: 'Tempo Médio' },
            { number: '4.9/5', label: 'Avaliação Média' },
          ].map((stat, index) => (
            <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 100}ms` } as React.CSSProperties}>
              <div className="text-4xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-dark-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}