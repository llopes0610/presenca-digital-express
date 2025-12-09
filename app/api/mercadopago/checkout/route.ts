import { NextRequest, NextResponse } from "next/server";
import MercadoPagoConfig, { Preference } from "mercadopago";

// Cliente Mercado Pago
const client = new MercadoPagoConfig({
  accessToken: process.env.MERCADO_PAGO_ACCESS_TOKEN!,
});

export async function POST(request: NextRequest) {
  try {
    const { planId, customerName, customerEmail } = await request.json();

    if (!planId || !customerName || !customerEmail) {
      return NextResponse.json(
        { error: "Dados incompletos" },
        { status: 400 }
      );
    }

    // Planos (em reais)
    const plans: Record<
      string,
      { name: string; price: number }
    > = {
      basic: {
        name: "Presença Digital Express - Basic",
        price: 197,
      },
      pro: {
        name: "Presença Digital Express - Pro",
        price: 297,
      },
      premium: {
        name: "Presença Digital Express - Premium",
        price: 497,
      },
    };

    const selectedPlan = plans[planId];
    if (!selectedPlan) {
      return NextResponse.json({ error: "Plano inválido" }, { status: 400 });
    }

    const preference = new Preference(client);

    // ================================
    // 🚀 PIX + Cartão + Boleto (CORRETO)
    // ================================
    const response: any = await preference.create({
      body: {
        binary_mode: false, // permite boleto e cartão

        items: [
          {
            id: planId,
            title: selectedPlan.name,
            quantity: 1,
            unit_price: selectedPlan.price,
            currency_id: "BRL",
          },
        ],

        payer: {
          name: customerName,
          email: customerEmail,
        },

        back_urls: {
          success: `${process.env.NEXT_PUBLIC_SITE_URL}/pagamento/sucesso`,
          failure: `${process.env.NEXT_PUBLIC_SITE_URL}/pagamento/cancelado`,
          pending: `${process.env.NEXT_PUBLIC_SITE_URL}/pagamento/pendente`,
        },

        auto_return: "approved",

        payment_methods: {
          // ❗ permitido deixar tudo liberado
          excluded_payment_methods: [],
          excluded_payment_types: [],
          installments: 12, // habilita parcelamento
        },
      },
    });

    return NextResponse.json({
      success: true,
      init_point: response.init_point,
    });

  } catch (err: any) {
    console.error("🔥 Erro Mercado Pago:", err);

    return NextResponse.json(
      { error: err.message || "Erro ao criar preferência" },
      { status: 500 }
    );
  }
}


