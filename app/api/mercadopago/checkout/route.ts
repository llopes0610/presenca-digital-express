import { NextResponse } from "next/server";
import MercadoPagoConfig, { Preference } from "mercadopago";

const client = new MercadoPagoConfig({
  accessToken: process.env.MERCADO_PAGO_ACCESS_TOKEN!,
});

const PLANS = {
  basic: {
    title: "Presença Digital Express - Basic",
    price: 267.90,
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

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://presençaonlineexpress.com.br";

    const result = await preference.create({
      body: {
        items: [
          {
            id: planId,
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
          success: `${siteUrl}/checkout/sucesso`,
          failure: `${siteUrl}/checkout/cancelado`,
          pending: `${siteUrl}/checkout/pendente`,
        },
        auto_return: "approved" as const,
        
        // ADICIONE ESTAS LINHAS IMPORTANTES:
        statement_descriptor: "PRESENCA DIGITAL",
        external_reference: `${planId}-${Date.now()}`,
        
        // A URL que o botão "Voltar à loja" vai usar:
        marketplace: `${siteUrl}`,
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