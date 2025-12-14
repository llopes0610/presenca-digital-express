'use client';

import React from 'react';
import { Globe, Palette, Search, Smartphone, Zap, Shield } from 'lucide-react';
import { Card } from '@/components/ui/Card';

export function Solution() {
  const features = [
    {
      icon: Globe,
      title: 'Site Profissional',
      description: 'Responsivo, rápido e otimizado. Funciona perfeitamente em celular, tablet e desktop.',
    },
    {
      icon: Palette,
      title: 'Identidade Visual',
      description: 'Logo moderna, paleta de cores e tipografia que transmitem profissionalismo.',
    },
    {
      icon: Search,
      title: 'Google Otimizado',
      description: 'Configuração completa do Google Meu Negócio + SEO para você ser encontrado.',
    },
    {
      icon: Smartphone,
      title: 'Cartão Digital',
      description: 'Link compartilhável com todos seus contatos. Cliente salva direto no celular.',
    },
    {
      icon: Zap,
      title: 'Entrega em 72h',
      description: 'Processos otimizados para você estar online em 3 dias úteis. Garantido.',
    },
    {
      icon: Shield,
      title: '100% Garantido',
      description: 'Não gostou? Devolvo todo o investimento. Sem perguntas, sem burocracia.',
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-secondary-100 text-secondary-700 rounded-full text-sm font-semibold">
              ✨ A Solução
            </span>
          </div>
          <h2 className="heading-lg mb-6">
            Presença Digital Completa{' '}
            <span className="gradient-text">Em 72 Horas</span>
          </h2>
          <p className="text-xl text-dark-600">
            Tudo que seu negócio precisa para ser encontrado, gerar confiança e começar a vender online.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                gradient
                className="p-8 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` } as React.CSSProperties}
              >
                <div className="mb-4">
                  <div className="inline-flex p-3 gradient-primary rounded-xl shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-dark-900 mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-dark-600 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>

        {/* Value Proposition */}
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 bg-gradient-to-br from-primary-50 via-white to-secondary-50 border-2 border-primary-200">
            <div className="text-center">
              <h3 className="heading-md mb-6">
                Por Que o Presença Digital Express é Diferente?
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div>
                  <h4 className="font-bold text-dark-900 mb-3 flex items-center gap-2">
                    <span className="text-2xl">❌</span>
                    Agências Tradicionais
                  </h4>
                  <ul className="space-y-2 text-dark-600">
                    <li>• Cobram R$ 2.000 - R$ 10.000+</li>
                    <li>• Demoram 30-90 dias para entregar</li>
                    <li>• Processos burocráticos</li>
                    <li>• Mensalidade de manutenção cara</li>
                    <li>• Você fica dependente deles</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-dark-900 mb-3 flex items-center gap-2">
                    <span className="text-2xl">✅</span>
                    Presença Digital Express
                  </h4>
                  <ul className="space-y-2 text-dark-600">
                    <li>• A partir de R$ 267 (pagamento único)</li>
                    <li>• Entrega garantida em 72 horas</li>
                    <li>• Processo ágil e transparente</li>
                    <li>• Hospedagem gratuita incluída</li>
                    <li>• Você tem total autonomia</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-dark-200">
                <p className="text-lg text-dark-700">
                  <strong>Não é Wix. Não é Canva. Não é template genérico.</strong>
                  <br />
                  É um projeto 100% personalizado, feito por desenvolvedor profissional,
                  com tecnologia de ponta (Next.js + React).
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}