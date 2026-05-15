import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { getManuals } from '@/lib/data';
import { FileText, ArrowRight } from 'lucide-react';

export default async function ManualsPage() {
  const manuals = await getManuals();
  
  return (
    <main className="min-h-screen pb-24 sm:pt-24 px-4 max-w-4xl mx-auto">
      <Navbar />
      
      <header className="mt-8 mb-10 border-b border-brand-secondary pb-6">
        <h1 className="text-3xl font-serif text-brand-primary mb-2 flex items-center gap-3">
          <FileText size={32} />
          The Manuals
        </h1>
        <p className="text-stone-500 italic">Library of guides and standard operating procedures.</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {manuals.map(manual => (
          <Link key={manual.id} href={`/manuals/${manual.slug}`} className="block h-full">
            <div className="glass-card h-full p-5 flex flex-col justify-between">
              <div>
                <h2 className="text-lg font-bold text-stone-800 mb-2 leading-tight">{manual.title}</h2>
                <div className="w-10 h-1 bg-brand-primary/30 mb-4 rounded"></div>
              </div>
              <div className="flex justify-end mt-auto">
                <div className="w-8 h-8 rounded-full bg-brand-secondary/30 flex items-center justify-center text-brand-primary">
                  <ArrowRight size={16} />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
