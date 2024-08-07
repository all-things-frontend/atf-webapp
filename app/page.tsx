'use client';

import { Header } from '@/components/Header';
import { PAGE_ROUTES } from './contants';
import Link from 'next/link';
import { TextReveal } from '@/components/TextReveal';
import { TEXT_REVEAL_SENTENCE } from '@/mock-data';
import Footer from '@/components/Footer';
import { QuestionsProvider } from '@/context/question';

export default function Home() {
  return (
    <QuestionsProvider>
      <div>
        <Header />
        <section className="flex flex-col items-center">
          <div className="flex justify-center items-center h-[300px]">
            <p className="text-4xl text-primary font-bold leading-snug text-center overflow-hidden animate-typingAnimate whitespace-nowrap my-0 mx-auto border-transparent border-r-primary border">
              Master React by practising from a set of handfully curated
              problems.
            </p>
          </div>
          <Link href={PAGE_ROUTES.DASHBOARD}>
            <button className="border border-primary p-4 text-primary rounded-md hover:bg-primary hover:text-black">
              Get Started
            </button>
          </Link>
        </section>
        <section className="p-96" id="text-reveal">
          <TextReveal sentence={TEXT_REVEAL_SENTENCE} />
        </section>
        <Footer />
      </div>
    </QuestionsProvider>
  );
}
