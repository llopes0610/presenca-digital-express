'use client';

import React from 'react';
import { ArrowRight, Clock, Shield, Zap } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { formatWhatsAppLink, CONTACT_INFO, WHATSAPP_MESSAGES } from '@/lib/utils';

export function CTA() {
  const handleCTA = () => {
    const link = formatWhatsAppLink(CONTACT_INFO.phone, WHATSAPP_MESSAGES.default);
    window.open(link, '_blank');
  };

  const scrollToPlans = () => {
    document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="section-padding gradient-dark relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="mb-6 animate-pulse">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full text-red-300 text-sm font-semibold">
              <Clock className="w-4 h-4" />
              Restam apenas 3 vagas esta semana
            </div>
          </div>

          {/* Heading */}
          <h2 className="heading-lg text-white mb-6 animate-slide-up">
            Não Perca Mais Tempo Sendo{' '}
            <span className="text-secondary-400">Invisível Online</span>
          </h2>

          <p className="text-xl text-dark-200 mb-8 leading-relaxed">
            Seu concorrente já está um passo à frente.
            <br />
            Enquanto você espera, ele está fechando contratos que poderiam ser seus.
          </p>

          {/* Urgency points */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 text-left">
            {[
              {
                icon: Clock,
                title: 'Cada dia conta',
                text: 'Clientes estão procurando AGORA. Amanhã pode ser tarde.',
              },
              {
                icon: Zap,
                title: 'Resultado rápido',
                text: '72 horas e você já está vendendo online profissionalmente.',
              },
              {
                icon: Shield,
                title: 'Sem risco',
                text: '100% do dinheiro de volta se não gostar. Simples assim.',
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Icon className="w-8 h-8 text-secondary-400 mb-3" />
                  <h3 className="font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-dark-200 text-sm">{item.text}</p>
                </div>
              );
            })}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="secondary"
              size="lg"
              icon={ArrowRight}
              onClick={handleCTA}
              className="text-lg"
            >
              Quero Começar Agora
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={scrollToPlans}
              className="text-white border-white hover:bg-white/10"
            >
              Ver Planos Novamente
            </Button>
          </div>

          {/* Trust line */}
          <p className="mt-8 text-dark-300 text-sm">
            ✅ Pagamento seguro • ✅ Garantia total • ✅ Entrega garantida
          </p>
        </div>
      </div>

      {/* Wave divisor */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}