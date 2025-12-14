"use client";

import React from "react";
import { Check, Star, Zap, Crown, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

interface Plan {
  name: string;
  price: number;
  subtitle: string;
  description: string;
  icon: any;
  popular: boolean;
  features: string[];
  delivery: string;
  guarantee: string;
}

export function Plans() {
  const plans: Plan[] = [
    {
      name: "Basic",
      price: 267.99,
      subtitle: "Essencial",
      description: "Para quem precisa de presença online profissional",
      icon: Zap,
      popular: false,
      features: [
        "Site profissional de 1 página",
        "Design responsivo",
        "Botão WhatsApp",
        "SEO básico",
        "Google Meu Negócio",
        "3 ajustes após entrega",
      ],
      delivery: "Até 72h após levantamento de requisitos",
      guarantee: "7 dias",
    },
    {
      name: "Pro",
      price: 429.9,
      subtitle: "Mais escolhido",
      description: "Ideal para profissionais e negócios em crescimento",
      icon: Star,
      popular: true,
      features: [
        "Tudo do Basic",
        "Site com até 3 páginas",
        "Identidade visual (logo + cores)",
        "SEO otimizado",
        "Integração Instagram",
        "5 ajustes após entrega",
      ],
      delivery: "Até 72h após levantamento de requisitos",
      guarantee: "10 dias",
    },
    {
      name: "Premium",
      price: 667.9,
      subtitle: "Completo",
      description: "Presença digital avançada e escalável",
      icon: Crown,
      popular: false,
      features: [
        "Tudo do Pro",
        "Site com até 5 páginas",
        "Identidade visual completa",
        "Conteúdo otimizado",
        "Integrações avançadas",
        "10 ajustes após entrega",
      ],
      delivery: "Até 72h após levantamento de requisitos",
      guarantee: "15 dias",
    },
  ];

  return (
    <section id="plans" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-lg">
            Planos do <span className="gradient-text">Presença Digital Express</span>
          </h2>
          <p className="text-dark-600 mt-4">
            Pagamento único • Sem mensalidade • Entrega após briefing aprovado
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const Icon = plan.icon;

            return (
              <Card key={index} className={plan.popular ? "border-2 border-secondary-500 scale-105" : ""}>
                <div className="p-8">
                  <Icon className="w-8 h-8 text-primary-600 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-dark-600 mb-4">{plan.subtitle}</p>

                  <div className="text-4xl font-bold mb-6">
                    R$ {plan.price.toFixed(2)}
                  </div>

                  <Button className="w-full mb-6" icon={ArrowRight}>
                    Contratar
                  </Button>

                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex gap-2">
                        <Check className="w-5 h-5 text-secondary-600" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 text-sm text-dark-600">
                    <p><strong>Entrega:</strong> {plan.delivery}</p>
                    <p><strong>Garantia:</strong> {plan.guarantee}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
