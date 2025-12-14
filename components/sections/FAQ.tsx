"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Em quanto tempo o site fica pronto?",
      answer:
        "O prazo é de até 72 horas úteis após o levantamento e aprovação de todos os requisitos do projeto (briefing).",
    },
    {
      question: "O que é o levantamento de requisitos?",
      answer:
        "É a etapa onde coletamos todas as informações do seu negócio: textos, serviços, público-alvo e preferências visuais.",
    },
    {
      question: "Existe mensalidade?",
      answer:
        "Não. O pagamento é único. Você só paga domínio e hospedagem se quiser algo adicional no futuro.",
    },
    {
      question: "E se eu não gostar do resultado?",
      answer:
        "Você tem garantia total de satisfação conforme o plano contratado.",
    },
  ];

  return (
    <section className="section-padding bg-dark-50">
      <div className="container-custom max-w-3xl">
        <h2 className="heading-lg text-center mb-10">Perguntas Frequentes</h2>

        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-xl mb-4">
            <button
              className="w-full p-5 flex justify-between items-center"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="font-semibold">{faq.question}</span>
              <ChevronDown
                className={`transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="px-5 pb-5 text-dark-600">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
