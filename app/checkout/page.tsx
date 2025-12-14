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

  const isFormValid = name.trim() !== "" && email.trim() !== "";

  const handleCheckout = async () => {
    if (!isFormValid || loading) return;

    setLoading(true);

    try {
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
        window.location.href = data.init_point;
        return;
      }

      alert("Erro ao iniciar o pagamento.");
    } catch (err) {
      alert("Erro de conexão com o pagamento.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-dark-50 via-white to-primary-50 px-4">
      <Card className="max-w-xl w-full p-10 shadow-2xl">
        <h1 className="heading-md text-center mb-4">Finalizar Pagamento</h1>

        <div className="space-y-6">
          <div>
            <label className="text-sm font-semibold flex gap-2 mb-2">
              <User className="w-4 h-4" /> Nome Completo
            </label>
            <input
              className="w-full px-4 py-3 rounded-lg border"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label className="text-sm font-semibold flex gap-2 mb-2">
              <Mail className="w-4 h-4" /> E-mail
            </label>
            <input
              type="email"
              className="w-full px-4 py-3 rounded-lg border"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="text-sm font-semibold mb-2 block">
              Plano
            </label>
            <select
              className="w-full px-4 py-3 rounded-lg border"
              value={plan}
              onChange={(e) => setPlan(e.target.value)}
            >
              <option value="basic">Basic — R$ 267,99</option>
              <option value="pro">Pro — R$ 429,90</option>
              <option value="premium">Premium — R$ 667,90</option>
            </select>
          </div>

          <Button
            onClick={handleCheckout}
            disabled={!isFormValid || loading}
            className="w-full h-12 text-lg"
          >
            {loading ? (
              <Loader2 className="animate-spin" />
            ) : (
              <>
                Finalizar Compra <ArrowRight className="ml-2 w-5 h-5" />
              </>
            )}
          </Button>

          <p className="text-xs text-center flex gap-2 justify-center">
            <Lock className="w-4 h-4" /> Pagamento seguro via Mercado Pago
          </p>
        </div>
      </Card>
    </section>
  );
}


//movido