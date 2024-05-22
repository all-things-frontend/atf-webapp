'use client';

import { Header } from '@/components/Header';
import { PAGE_ROUTES } from './contants';
import Link from 'next/link';
import { TextReveal } from '@/components/TextReveal';
import { TEXT_REVEAL_SENTENCE } from '@/mock-data';
import Footer from '@/components/Footer';
import { cn } from '@/lib/utils';
import { textGradientClass } from './utils/styleClass';

import { FlipWords } from '@/components/ui/flip-words';

export default function Home() {
  return (
    <div>
      <Header />
      <section className="flex flex-col items-center">
        <div className="flex flex-col justify-center items-center h-[300px]">
          <p
            className={cn(
              'w-[240px] text-4xl font-extrabold leading-snug whitespace-nowrap my-0 mx-auto'
            )}
          >
            React <span className={cn(textGradientClass)}>CHAD</span>
          </p>
          <div className="mt-4 text-xl">
            One stop destination for practising from a handfully curated list of
            problems
          </div>
          <div className="mt-4 text-2xl w-[280px] whitespace-nowrap">
            Master react for
            <FlipWords
              words={['Interviews.', 'Work.', 'Fun.']}
              className="text-yellow-500 font-bold dark:text-yellow-500"
            />
          </div>
        </div>
        <Link href={PAGE_ROUTES.DASHBOARD}>
          <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-green-800 bg-[linear-gradient(110deg, #001000 45%, #1e3b1e 55%, #001005)] bg-[length:200%_100%] px-6 font-medium text-green-400 transition-colors focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            Get Started
          </button>
        </Link>
      </section>
      <section className="p-96" id="text-reveal">
        <TextReveal sentence={TEXT_REVEAL_SENTENCE} />
      </section>
      <Footer />
    </div>
  );
}
