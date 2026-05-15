import Navbar from '@/components/Navbar';
import Assigner from '@/components/Assigner';
import Link from 'next/link';
import { getManuals, getUsers } from '@/lib/data';
import { BookOpen, Activity, ArrowRight } from 'lucide-react';

export default async function Home() {
  const manuals = await getManuals();
  const users = await getUsers();
  
  return (
    <main className="min-h-screen pb-24 sm:pt-24 px-4 max-w-5xl mx-auto">
      <Navbar />
      
      <header className="mt-8 mb-12 text-center">
        <h1 className="text-5xl font-serif text-brand-primary mb-3">The House</h1>
        <p className="text-stone-500 italic text-lg">Welcome home. Use with intent.</p>
      </header>

      {/* Roster & Assignment Section is now front and center! */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold flex items-center gap-2 text-stone-800">
            <Activity className="text-brand-primary" size={24} />
            Daily Roster
          </h2>
          <Link href="/activities" className="text-sm font-medium text-brand-primary hover:underline flex items-center bg-brand-secondary/20 px-3 py-1.5 rounded-full transition-colors hover:bg-brand-secondary/40">
            View full weekly rota <ArrowRight size={14} className="ml-1" />
          </Link>
        </div>
        
        <Assigner users={users} />
      </section>

      <section className="pt-6 border-t border-brand-secondary/30">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold flex items-center gap-2 text-stone-800">
            <BookOpen className="text-brand-primary" size={24} />
            Manuals Library
          </h2>
          <Link href="/manuals" className="text-sm font-medium text-brand-primary hover:underline flex items-center">
            View all <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {manuals.slice(0, 4).map(manual => (
            <Link key={manual.id} href={`/manuals/${manual.slug}`} className="block h-full">
              <div className="glass-card h-full p-4 flex flex-col justify-between group">
                <span className="font-bold text-stone-800 leading-tight mb-4">{manual.title}</span>
                <div className="flex justify-end mt-auto">
                  <div className="w-8 h-8 rounded-full bg-brand-secondary/30 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors">
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
