"use client";

export function PricingButton({ name, price }: { name: string; price: number }) {
  async function handleCheckout() {
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, price }),
    });

    const data = await res.json();
    window.location.href = data.url; // redireciona para o Stripe
  }

  return (
    <button
      onClick={handleCheckout}
      className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
    >
      Comprar {name}
    </button>
  );
}
