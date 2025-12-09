"use client";

import { useState } from "react";
import { ArrowRight, Lock, Mail, User, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function CheckoutPage() {
  const [loading, setLoading] = useState(false);
  const [plan, setPlan] = useState("basic");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleCheckout = async () => {
    if (!email || !name) {
      alert("Preencha seu nome e e-mail.");
      return;
    }

    setLoading(true);

    const res = await fetch("/api/mercadopago/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        planId: plan,
        customerEmail: email,
        customerName: name,
      }),
    });

    const data = await res.json();

    if (data?.init_point) {
      window.location.href = data.init_point; // Redireciona para o Mercado Pago
    } else {
      alert("Erro ao iniciar o pagamento.");
    }

    setLoading(false);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-dark-50 via-white to-primary-50/30 flex items-center justify-center px-4 py-16">
      <Card className="max-w-xl w-full p-10 shadow-2xl border-primary-200 backdrop-blur-xl animate-fade">
        
        <h1 className="heading-md text-center mb-4">Finalizar Pagamento</h1>
        <p className="text-center text-dark-600 mb-8">
          Complete suas informações para concluir sua compra.
        </p>

        {/* Form */}
        <div className="space-y-6">
          {/* Nome */}
          <div>
            <label className="text-sm font-semibold mb-2 flex items-center gap-2">
              <User className="w-4 h-4" /> Nome Completo
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 rounded-lg border border-dark-200 bg-white focus:ring-2 focus:ring-primary-500 outline-none"
              placeholder="Seu nome completo"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-semibold mb-2 flex items-center gap-2">
              <Mail className="w-4 h-4" /> E-mail
            </label>
            <input
              type="email"
              className="w-full px-4 py-3 rounded-lg border border-dark-200 bg-white focus:ring-2 focus:ring-primary-500 outline-none"
              placeholder="seuemail@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Plano */}
          <div>
            <label className="text-sm font-semibold mb-2">Escolha o Plano</label>
            <select
              className="w-full px-4 py-3 rounded-lg border border-dark-200 bg-white focus:ring-2 focus:ring-primary-500 outline-none"
              onChange={(e) => setPlan(e.target.value)}
            >
              <option value="basic">Basic — R$ 197</option>
              <option value="pro">Pro — R$ 297</option>
              <option value="premium">Premium — R$ 497</option>
            </select>
          </div>

          {/* Botão */}
          <Button
            className="w-full h-12 text-lg font-semibold mt-4 inline-flex items-center justify-center"
            onClick={handleCheckout}
          >
            {loading ? (
              <Loader2 className="animate-spin" />
            ) : (
              <>
                Finalizar Compra <ArrowRight className="ml-2 w-5 h-5" />
              </>
            )}
          </Button>

          {/* Segurança */}
          <p className="text-xs text-dark-500 flex items-center justify-center gap-2 mt-3">
            <Lock className="w-4 h-4" /> Pagamento 100% seguro via Mercado Pago
          </p>
        </div>
      </Card>
    </section>
  );
}
