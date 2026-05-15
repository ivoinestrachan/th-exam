import Navbar from '@/components/Navbar';
import WeeklyRota from '@/components/WeeklyRota';
import { Calendar } from 'lucide-react';

export default function ActivitiesPage() {
  return (
    <main className="min-h-screen pb-24 sm:pt-24 px-4 max-w-6xl mx-auto">
      <Navbar />
      
      <header className="mt-8 mb-10 border-b border-brand-secondary pb-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-serif text-brand-primary mb-2 flex items-center gap-3">
          <Calendar size={32} />
          Master Schedule
        </h1>
        <p className="text-stone-500 italic">Weekly collective rota.</p>
      </header>

      {/* Native React Rota Component */}
      <WeeklyRota />
    </main>
  );
}
