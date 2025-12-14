"use client";

import React from "react";
import { ArrowRight, CheckCircle, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { formatWhatsAppLink, CONTACT_INFO, WHATSAPP_MESSAGES } from "@/lib/utils";

export function Hero() {
  const handleCTA = () => {
    const link = formatWhatsAppLink(
      CONTACT_INFO.phone,
      WHATSAPP_MESSAGES.default
    );
    window.open(link, "_blank");
  };

  const scrollToPlans = () => {
    document.getElementById("plans")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden gradient-dark">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-500/20 rounded-full blur-3xl" />
      </div>

      <div className="container-custom section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div className="text-white animate-fade-in">
            <div className="mb-6">
              <Badge variant="success" className="animate-pulse">
                <Zap className="w-4 h-4 mr-1" />
                Entrega em até 72h
              </Badge>
            </div>

            <h1 className="heading-xl mb-6 leading-tight">
              Seu Negócio Online{" "}
              <span className="text-secondary-400">Profissional</span> e{" "}
              <span className="text-secondary-400">Confiável</span>
              <br />
              <span className="text-primary-400">
                Em Até 72 Horas Após o Briefing
              </span>
            </h1>

            <p className="text-xl text-dark-200 mb-8 leading-relaxed">
              Criação de site profissional sob medida para o seu negócio.
              <br />
              Tudo começa com o levantamento completo de requisitos.
              <br />
              <span className="font-semibold text-white">
                Sem mensalidade. Pagamento único.
              </span>
            </p>

            <div className="space-y-3 mb-8">
              {[
                "Prazo contado após aprovação do briefing",
                "Projeto personalizado para seu negócio",
                "Tecnologia moderna (Next.js + React)",
                "Garantia total de satisfação",
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary-400" />
                  <span className="text-dark-100">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="secondary"
                size="lg"
                icon={ArrowRight}
                onClick={handleCTA}
              >
                Solicitar Atendimento
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={scrollToPlans}
                className="text-white border-white hover:bg-white/10"
              >
                Ver Planos
              </Button>
            </div>

            <div className="mt-8 flex items-center gap-6 text-sm text-dark-300">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-secondary-400" />
                <span>Garantia Total</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-secondary-400" />
                <span>Projetos Profissionais</span>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:flex items-center justify-center">
            <div className="absolute -inset-10 bg-primary-500/10 blur-3xl rounded-3xl opacity-70" />

            <div className="relative w-[520px] rounded-3xl shadow-2xl border border-white/10 backdrop-blur-xl overflow-hidden">
              <div className="bg-white/5 p-2 rounded-2xl">
                <img
                  src="/mockups/pedify-mockup.png"
                  alt="Preview do site"
                  className="w-full rounded-xl object-cover"
                />
              </div>
            </div>

            <div className="absolute bottom-8 left-4 bg-white/90 rounded-xl px-5 py-3 shadow-lg">
              <div className="text-sm">
                <div className="font-semibold text-dark-900">A partir de</div>
                <div className="text-2xl font-bold text-primary-600">
                  R$ 267,99
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
