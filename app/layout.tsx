import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Presença Digital Express | Site Profissional em 48h | Lucas Lopes",
  description: "Site profissional + Identidade visual + Google Meu Negócio em 48 horas. A partir de R$ 197. Desenvolvedor full stack em São Paulo. Garantia total.",
  keywords: [
    "criação de sites",
    "site profissional",
    "desenvolvedor web",
    "site em 48 horas",
    "presença digital",
    "google meu negócio",
    "identidade visual",
    "site para pequenos negócios",
    "desenvolvedor freelancer",
    "Lucas Lopes",
    "Next.js",
    "React",
    "São Paulo"
  ],
  authors: [{ name: "Lucas Lopes" }],
  creator: "Lucas Lopes",
  publisher: "Lucas Lopes",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://presenca-digital-express.com.br",
    title: "Presença Digital Express | Site Profissional em 48h",
    description: "Site profissional + Identidade visual + Google Meu Negócio em 48 horas. A partir de R$ 197.",
    siteName: "Presença Digital Express",
  },
  twitter: {
    card: "summary_large_image",
    title: "Presença Digital Express | Site Profissional em 48h",
    description: "Site profissional + Identidade visual + Google Meu Negócio em 48 horas. A partir de R$ 197.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={inter.className}>
        {children}
        <WhatsAppButton />
        
        {/* Footer */}
        <footer className="bg-dark-900 text-white py-12">
          <div className="container-custom">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {/* Coluna 1 */}
              <div>
                <h3 className="text-xl font-bold mb-4">Presença Digital Express</h3>
                <p className="text-dark-400 leading-relaxed">
                  Transformando negócios invisíveis em marcas encontráveis.
                  Site profissional em 48 horas.
                </p>
              </div>

              {/* Coluna 2 */}
              <div>
                <h4 className="font-semibold mb-4">Contato</h4>
                <div className="space-y-2 text-dark-400">
                  <p>📱 (11) 99999-9999</p>
                  <p>📧 lucas@lucas-lopes.dev</p>
                  <p>📍 São Paulo, Brasil</p>
                </div>
              </div>

              {/* Coluna 3 */}
              <div>
                <h4 className="font-semibold mb-4">Links</h4>
                <div className="space-y-2">
                  <a href="#plans" className="block text-dark-400 hover:text-white transition-colors">
                    Planos e Preços
                  </a>
                  <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="block text-dark-400 hover:text-white transition-colors">
                    WhatsApp
                  </a>
                  <a href="mailto:lucas@lucas-lopes.dev" className="block text-dark-400 hover:text-white transition-colors">
                    Email
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-dark-800 text-center text-dark-400">
              <p>© 2024 Lucas Lopes - Presença Digital Express. Todos os direitos reservados.</p>
              <p className="text-sm mt-2">Desenvolvido com Next.js + React ⚡</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}