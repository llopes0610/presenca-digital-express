import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";

export default function PagamentoSucesso() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-emerald-100 px-6 py-20">

      <div className="max-w-xl w-full text-center p-12 bg-white/80 backdrop-blur-xl shadow-[0_8px_40px_rgba(0,0,0,0.08)] rounded-3xl border border-emerald-200 animate-fade">

        <CheckCircle className="w-24 h-24 text-emerald-600 mx-auto mb-6 drop-shadow-md" />

        <h1 className="text-4xl font-extrabold text-dark-900 mb-4 tracking-tight">
          Pagamento Confirmado! 🎉
        </h1>

        <p className="text-dark-600 text-lg mb-6 leading-relaxed">
          Sua compra foi processada com sucesso!  
          Em instantes você receberá um e-mail com todos os detalhes e próximos passos.
        </p>

        <p className="text-dark-700 mb-10">
          Obrigado por confiar em nosso trabalho!  
          Estamos prontos para começar seu projeto. ✨
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-all shadow-md"
        >
          Ir para o Início <ArrowRight className="w-5 h-5" />
        </Link>
      </div>

    </section>
  );
}
