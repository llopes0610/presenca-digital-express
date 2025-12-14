import { NextResponse } from "next/server";
import MercadoPagoConfig, { Preference } from "mercadopago";

const client = new MercadoPagoConfig({
  accessToken: process.env.MERCADO_PAGO_ACCESS_TOKEN!,
});

const PLANS = {
  basic: {
    title: "Presença Digital Express - Basic",
    price: 10.90,
  },
  pro: {
    title: "Presença Digital Express - Pro",
    price: 429.9,
  },
  premium: {
    title: "Presença Digital Express - Premium",
    price: 667.9,
  },
};

export async function POST(req: Request) {
  try {
    const { planId, customerEmail, customerName } = await req.json();

    const plan = PLANS[planId as keyof typeof PLANS];

    if (!plan) {
      return NextResponse.json({ error: "Plano inválido" }, { status: 400 });
    }

    const preference = new Preference(client);

    const result = await preference.create({
      body: {
        items: [
          {
            id: planId, // <- ADICIONE ESTA LINHA
            title: plan.title,
            quantity: 1,
            currency_id: "BRL",
            unit_price: plan.price,
          },
        ],
        payer: {
          name: customerName,
          email: customerEmail,
        },
        back_urls: {
          success: `${process.env.NEXT_PUBLIC_SITE_URL}/checkout/sucesso`,
          failure: `${process.env.NEXT_PUBLIC_SITE_URL}/checkout/cancelado`,
          pending: `${process.env.NEXT_PUBLIC_SITE_URL}/checkout/pendente`,
        },
        auto_return: "approved" as const,
      },
    });

    return NextResponse.json({
      init_point: result.init_point,
    });
  } catch (error) {
    console.error("Erro Mercado Pago:", error);
    return NextResponse.json(
      { error: "Erro ao criar pagamento" },
      { status: 500 }
    );
  }
}