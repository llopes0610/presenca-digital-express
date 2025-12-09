import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
}

export function formatWhatsAppLink(phone: string, message?: string): string {
  const cleanPhone = phone.replace(/\D/g, '');
  const encodedMessage = message ? encodeURIComponent(message) : '';
  return `https://wa.me/${cleanPhone}${encodedMessage ? `?text=${encodedMessage}` : ''}`;
}

export const CONTACT_INFO = {
  phone: '5511987079347', // ALTERE AQUI SEU NÚMERO',
  linkedin: 'lucas-lopes',
  location: 'São Paulo, Brasil',
};

export const WHATSAPP_MESSAGES = {
  default: 'Olá! Gostaria de saber mais sobre o Presença Digital Express',
  basic: 'Olá! Tenho interesse no Plano BASIC (R$ 197)',
  pro: 'Olá! Tenho interesse no Plano PRO (R$ 297)',
  premium: 'Olá! Tenho interesse no Plano PREMIUM (R$ 497)',
  custom: 'Olá! Gostaria de um orçamento personalizado',
};