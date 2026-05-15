import Link from 'next/link';
import { Home, BookOpen, CalendarCheck } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 glass sm:top-0 sm:bottom-auto px-6 py-4 flex justify-around sm:justify-center sm:gap-12 items-center">
      <Link href="/" className="flex flex-col items-center gap-1 text-stone-600 hover:text-brand-primary transition-colors">
        <Home size={24} />
        <span className="text-[10px] font-semibold uppercase tracking-wider">Home</span>
      </Link>
      <Link href="/manuals" className="flex flex-col items-center gap-1 text-stone-600 hover:text-brand-primary transition-colors">
        <BookOpen size={24} />
        <span className="text-[10px] font-semibold uppercase tracking-wider">Manuals</span>
      </Link>
      <Link href="/activities" className="flex flex-col items-center gap-1 text-stone-600 hover:text-brand-primary transition-colors">
        <CalendarCheck size={24} />
        <span className="text-[10px] font-semibold uppercase tracking-wider">Activities</span>
      </Link>
    </nav>
  );
}
