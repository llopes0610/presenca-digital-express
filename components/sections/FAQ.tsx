'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Realmente entrega em 48h?',
      answer: 'Sim! 48 horas ÚTEIS após você enviar todas as informações necessárias (textos, fotos, logo se já tiver). Cumpro prazo ou devolvo o dinheiro. É o meu compromisso com você.',
    },
    {
      question: 'E se eu não tiver logo ou fotos profissionais?',
      answer: 'Sem problemas! Nos planos Pro e Premium, crio a identidade visual completa para você. No Premium, ainda otimizo suas fotos com IA. Nas outras opções, uso banco de imagens profissional e tipografia moderna.',
    },
    {
      question: 'Vou conseguir editar o site depois?',
      answer: 'Sim! Entrego tutorial em vídeo mostrando como editar textos e trocar fotos. É super simples. Se preferir não mexer, posso fazer manutenções por R$ 50 cada ajuste.',
    },
    {
      question: 'Preciso pagar mensalidade?',
      answer: 'NÃO! Você paga apenas pela criação (valor único). O site fica hospedado gratuitamente no Vercel ou Netlify. A única coisa que você paga depois é a renovação do domínio após 1 ano (cerca de R$ 40/ano).',
    },
    {
      question: 'Aceita parcelamento?',
      answer: 'Sim! Aceito até 3x sem juros no cartão de crédito. Para pagamento via PIX à vista, dou 10% de desconto.',
    },
    {
      question: 'E se eu quiser adicionar mais páginas depois?',
      answer: 'Sem problemas! Cobro R$ 80 por página adicional. Ou podemos fazer um novo orçamento personalizado se você quiser expandir bastante.',
    },
    {
      question: 'Meu negócio é muito específico, funciona para mim?',
      answer: 'Funciona para QUALQUER tipo de negócio local: estética, saúde, reformas, vendas, serviços, consultoria, fotografia, advocacia... Qualquer profissional que precise ser encontrado online.',
    },
    {
      question: 'Qual a diferença entre os planos?',
      answer: 'Basic: essencial para estar online. Pro: solução completa com identidade visual. Premium: tudo incluído + ferramentas avançadas. Todos têm qualidade profissional, muda apenas o escopo.',
    },
    {
      question: 'E se eu não gostar do resultado?',
      answer: 'Devolvo 100% do seu investimento. Simples assim. Sem perguntas, sem burocracia. Mas nunca precisei fazer isso porque entrego qualidade e trabalho junto com você até ficar perfeito.',
    },
    {
      question: 'Por que é tão mais barato que uma agência?',
      answer: 'Porque sou desenvolvedor autônomo, não tenho custos de agência (escritório, equipe grande, burocracia). Criei processos otimizados que me permitem entregar qualidade profissional com preço justo.',
    },
  ];

  return (
    <section className="section-padding bg-dark-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold flex items-center gap-2 justify-center">
              <HelpCircle className="w-4 h-4" />
              Perguntas Frequentes
            </span>
          </div>
          <h2 className="heading-lg mb-6">
            Tire Suas{' '}
            <span className="gradient-text">Dúvidas</span>
          </h2>
          <p className="text-xl text-dark-600">
            Respostas claras e diretas para as perguntas mais comuns.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-dark-200 overflow-hidden transition-all duration-200 hover:shadow-lg animate-slide-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left hover:bg-dark-50 transition-colors"
              >
                <span className="font-semibold text-dark-900 text-lg">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-primary-600 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 text-dark-700 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions */}
        <div className="mt-12 text-center">
          <p className="text-dark-600 mb-4">
            Ainda tem alguma dúvida?
          </p>
          <a
            href={`https://wa.me/5511999999999?text=${encodeURIComponent('Olá! Tenho uma dúvida sobre o Presença Digital Express')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
          >
            Fale comigo no WhatsApp
            <ChevronDown className="w-4 h-4 -rotate-90" />
          </a>
        </div>
      </div>
    </section>
  );
}