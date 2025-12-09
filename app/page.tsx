import { Hero } from '@/components/sections/Hero';
import { Problem } from '@/components/sections/Problem';
import { Solution } from '@/components/sections/Solution';
import { Plans } from '@/components/sections/Plans';
import { Testimonials } from '@/components/sections/Testimonials';
import { FAQ } from '@/components/sections/FAQ';
import { CTA } from '@/components/sections/CTA';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Problem />
      <Solution />
      <Plans />
      <Testimonials />
      <FAQ />
      <CTA />
    </main>
  );
}