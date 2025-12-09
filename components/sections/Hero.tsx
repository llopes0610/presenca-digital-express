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

      {/* Background decorativo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-500/20 rounded-full blur-3xl" />
      </div>

      <div className="container-custom section-padding relative z-10">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* ------------------------- */}
          {/* COLUNA ESQUERDA */}
          {/* ------------------------- */}
          <div className="text-white animate-fade-in">

            {/* Badge */}
            <div className="mb-6">
              <Badge variant="success" className="animate-pulse">
                <Zap className="w-4 h-4 mr-1" />
                Entrega em 72 horas
              </Badge>
            </div>

            {/* Headline */}
            <h1 className="heading-xl mb-6 leading-tight">
              Seu Negócio Online{" "}
              <span className="text-secondary-400">Profissional</span> e{" "}
              <span className="text-secondary-400">Vendendo</span>
              <br />
              <span className="text-primary-400">Em Apenas 72 Horas</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-dark-200 mb-8 leading-relaxed">
              Site completo + Identidade visual + Google otimizado.
              <br />
              Tudo que você precisa para ser encontrado e gerar confiança.
              <br />
              <span className="font-semibold text-white">
                Sem mensalidade. Sem enrolação.
              </span>
            </p>

            {/* Benefícios */}
            <div className="space-y-3 mb-8">
              {[
                "Entrega garantida em 2 dias úteis",
                "100% personalizado para seu negócio",
                "Tecnologia profissional (Next.js + React)",
                "Garantia de 100% do dinheiro de volta",
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary-400 flex-shrink-0" />
                  <span className="text-dark-100">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="secondary"
                size="lg"
                icon={ArrowRight}
                onClick={handleCTA}
                className="text-lg"
              >
                Começar Agora
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

            {/* Trust */}
            <div className="mt-8 flex items-center gap-6 text-sm text-dark-300">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-secondary-400" />
                <span>Garantia Total</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-secondary-400" />
                <span>50+ Projetos</span>
              </div>
            </div>
          </div>

          {/* ------------------------- */}
          {/* COLUNA DIREITA - MOCKUP */}
          {/* ------------------------- */}
          <div className="relative hidden lg:flex items-center justify-center">

            {/* Glow */}
            <div className="absolute -inset-10 bg-primary-500/10 blur-3xl rounded-3xl opacity-70" />

            {/* Mockup container */}
            <div className="relative w-[520px] rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.45)] border border-white/10 backdrop-blur-xl overflow-hidden">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-white/5 p-2">

                <img
                  src="/mockups/pedify-mockup.png"
                  alt="Preview do site"
                  className="w-full h-auto rounded-xl shadow-xl object-cover scale-[0.98] hover:scale-100 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Card superior */}
            <div className="absolute top-10 right-6 bg-white/90 rounded-xl shadow-lg px-4 py-2 backdrop-blur-md border border-white/30">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                Online em 72h
              </div>
            </div>

            {/* Card inferior */}
            <div className="absolute bottom-8 left-4 bg-white/90 rounded-xl shadow-lg px-5 py-3 backdrop-blur-md border border-white/30">
              <div className="text-sm">
                <div className="font-semibold text-dark-900">A partir de</div>
                <div className="text-2xl font-bold text-primary-600">R$ 197</div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Wave divisor */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="
              M0 120
              L60 110
              C120 100 240 80 360 70
              C480 60 600 60 720 65
              C840 70 960 80 1080 85
              C1200 90 1320 90 1380 90
              L1440 90
              V120
              H1380
              C1320 120 1200 120 1080 120
              C960 120 840 120 720 120
              C600 120 480 120 360 120
              C240 120 120 120 60 120
              H0
              Z
            "
            fill="white"
          />
        </svg>
      </div>

    </section>
  );
}
