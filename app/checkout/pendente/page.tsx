import Link from "next/link";
import { Clock, ArrowLeft } from "lucide-react";

export default function PagamentoPendente() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-50 via-white to-yellow-100 px-6 py-20">
      <div className="max-w-xl w-full text-center p-12 bg-white/80 backdrop-blur-xl shadow-xl rounded-3xl border border-yellow-200">
        <Clock className="w-24 h-24 text-yellow-600 mx-auto mb-6" />

        <h1 className="text-4xl font-extrabold mb-4 text-dark-900">
          Pagamento Pendente
        </h1>

        <p className="text-dark-600 text-lg mb-6">
          Seu pagamento ainda não foi confirmado.
          <br />
          Se você escolheu Pix ou boleto, a confirmação pode levar alguns minutos.
        </p>

        <p className="text-dark-700 mb-10">
          Assim que o pagamento for aprovado, entraremos em contato para iniciar
          o levantamento de requisitos do seu site.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-yellow-600 text-white font-semibold hover:bg-yellow-700 transition-all"
        >
          <ArrowLeft className="w-5 h-5" />
          Voltar para o site
        </Link>
      </div>
    </section>
  );
}
