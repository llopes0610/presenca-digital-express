import Link from "next/link";
import { XCircle, ArrowLeft } from "lucide-react";

export default function PagamentoCancelado() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 via-white to-red-100 px-6 py-20">

      <div className="max-w-xl w-full text-center p-12 bg-white/80 backdrop-blur-xl shadow-[0_8px_40px_rgba(0,0,0,0.08)] rounded-3xl border border-red-200 animate-fade">

        <XCircle className="w-24 h-24 text-red-600 mx-auto mb-6 drop-shadow-md" />

        <h1 className="text-4xl font-extrabold text-dark-900 mb-4 tracking-tight">
          Pagamento Cancelado
        </h1>

        <p className="text-dark-600 text-lg mb-6 leading-relaxed">
          Parece que o pagamento não foi concluído.  
          Mas tudo bem — você pode tentar novamente quando quiser.
        </p>

        <p className="text-dark-700 mb-10">
          Se precisar de ajuda, entre em contato conosco. Estamos aqui por você ❤️
        </p>

        <Link
          href="/checkout"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-red-600 text-white font-semibold hover:bg-red-700 transition-all shadow-md"
        >
          <ArrowLeft className="w-5 h-5" />
          Voltar ao Checkout
        </Link>
      </div>

    </section>
  );
}
