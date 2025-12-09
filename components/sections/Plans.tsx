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
      price: 197,
      subtitle: "Comece agora",
      description: "Ideal para quem precisa estar online rápido",
      icon: Zap,
      popular: false,
      features: [
        "Site profissional de 1 página",
        "Domínio .com.br incluso (1 ano)",
        "Design responsivo",
        "Formulário → WhatsApp",
        "Google Meu Negócio",
        "3 ajustes (7 dias)",
        "Tutorial em vídeo",
      ],
      delivery: "48h úteis",
      guarantee: "7 dias",
    },
    {
      name: "Pro",
      price: 297,
      subtitle: "Mais vendido",
      description: "Solução completa para profissionais",
      icon: Star,
      popular: true,
      features: [
        "TUDO do Basic +",
        "Site de até 3 páginas",
        "Logo + paleta de cores",
        "Cartão digital",
        "Integração Instagram",
        "SEO otimizado",
        "5 ajustes (10 dias)",
        "Consultoria 30min",
      ],
      delivery: "48h úteis",
      guarantee: "10 dias",
    },
    {
      name: "Premium",
      price: 497,
      subtitle: "Solução completa",
      description: "Tudo que você precisa para crescer",
      icon: Crown,
      popular: false,
      features: [
        "TUDO do Pro +",
        "Site até 5 páginas",
        "Identidade visual completa",
        "3 posts Instagram",
        "5 fotos com IA",
        "Agendamento online",
        "Pixel Facebook",
        "SSL premium",
        "10 ajustes (15 dias)",
        "2 consultorias (1h)",
      ],
      delivery: "48h úteis",
      guarantee: "15 dias",
    },
  ];

  const handleMercadoPagoCheckout = async (plan: Plan) => {
    try {
      const res = await fetch("/api/mercadopago/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          planId: plan.name.toLowerCase(),
          customerEmail: "cliente@gmail.com",
          customerName: "Cliente",
        }),
      });

      const data = await res.json();

      if (data?.init_point) {
        window.location.href = data.init_point;
        return;
      }

      alert("Erro ao redirecionar para o pagamento.");
    } catch (error) {
      console.error(error);
      alert("Erro ao iniciar checkout.");
    }
  };

  return (
    <section
      id="plans"
      className="section-padding bg-gradient-to-br from-dark-50 via-white to-primary-50/30"
    >
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-6">
            Escolha o Plano Ideal{" "}
            <span className="gradient-text">Para Seu Negócio</span>
          </h2>
          <p className="text-xl text-dark-600">
            Pagamento único. Sem mensalidade. Garantia total de satisfação.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {plans.map((plan, index) => {
            const Icon = plan.icon;

            return (
              <Card
                key={index}
                className={`relative overflow-hidden ${
                  plan.popular ? "border-2 border-secondary-500 shadow-2xl scale-105" : ""
                }`}
              >
                <div className="p-8">

                  <div className="mb-4">
                    <div
                      className={`inline-flex p-3 rounded-xl ${
                        plan.popular ? "gradient-secondary" : "gradient-primary"
                      }`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-dark-900 mb-2">
                    {plan.name}
                  </h3>

                  {!plan.popular && (
                    <p className="text-sm text-dark-600 mb-4">{plan.subtitle}</p>
                  )}

                  <div className="mb-6">
                    <span className="text-5xl font-bold text-dark-900">
                      R$ {plan.price}
                    </span>
                    <p className="text-sm text-dark-600 mt-1">Pagamento único</p>
                  </div>

                  <p className="text-dark-600 mb-6">{plan.description}</p>

                  <Button
                    variant={plan.popular ? "secondary" : "primary"}
                    className="w-full mb-6"
                    icon={ArrowRight}
                    onClick={() => handleMercadoPagoCheckout(plan)}
                  >
                    Comprar Agora
                  </Button>

                  <div className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-secondary-600" />
                        <span className="text-sm text-dark-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-dark-200 space-y-2 text-sm text-dark-600">
                    <div className="flex justify-between">
                      <span>Entrega:</span>
                      <span className="font-semibold text-dark-900">
                        {plan.delivery}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span>Garantia:</span>
                      <span className="font-semibold text-dark-900">
                        {plan.guarantee}
                      </span>
                    </div>
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
