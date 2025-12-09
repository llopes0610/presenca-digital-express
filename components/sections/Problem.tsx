'use client';

import React from 'react';
import { XCircle, TrendingDown, AlertTriangle } from 'lucide-react';
import { Card } from '@/components/ui/Card';

export function Problem() {
  const problems = [
    {
      icon: XCircle,
      title: 'Invisível no Google',
      description: 'Cliente te procura e não encontra nada. Resultado? Ele contrata seu concorrente.',
      stat: '70% dos clientes pesquisam online antes de comprar',
    },
    {
      icon: TrendingDown,
      title: 'Instagram que não converte',
      description: 'Muitos seguidores, poucas vendas. Sem um destino profissional, engajamento não vira dinheiro.',
      stat: 'Bio sem link perde até 60% de conversões',
    },
    {
      icon: AlertTriangle,
      title: 'Parece amador',
      description: 'Sem site, sem identidade visual. Clientes escolhem quem transmite mais confiança.',
      stat: '75% confiam mais em negócios com site',
    },
  ];

  return (
    <section className="section-padding bg-dark-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-semibold">
              ⚠️ Você está perdendo dinheiro
            </span>
          </div>
          <h2 className="heading-lg mb-6">
            3 Motivos Que Fazem Você Perder Clientes{' '}
            <span className="gradient-text">Todos os Dias</span>
          </h2>
          <p className="text-xl text-dark-600">
            Se você se identifica com pelo menos um desses problemas,
            está na hora de investir na sua presença digital.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <Card
                key={index}
                className="p-8 hover:border-red-200 transition-colors animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` } as React.CSSProperties}
              >
                <div className="mb-4">
                  <div className="inline-flex p-3 bg-red-100 rounded-xl">
                    <Icon className="w-8 h-8 text-red-600" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-dark-900 mb-3">
                  {problem.title}
                </h3>
                
                <p className="text-dark-600 mb-4 leading-relaxed">
                  {problem.description}
                </p>
                
                <div className="pt-4 border-t border-dark-200">
                  <p className="text-sm font-semibold text-red-600">
                    📊 {problem.stat}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Call out */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 rounded-lg p-6 max-w-4xl mx-auto">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-dark-900 mb-2">
                Cada dia que passa sem presença digital profissional é dinheiro na mesa.
              </h4>
              <p className="text-dark-700">
                Enquanto você lê isso, potenciais clientes estão procurando no Google por alguém que 
                faça exatamente o que você faz. <strong>Se você não aparece, eles contratam o concorrente.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}