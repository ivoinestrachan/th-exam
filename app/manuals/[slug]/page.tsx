import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { getManualContent, getManuals } from '@/lib/data';
import { ArrowLeft } from 'lucide-react';
import { notFound } from 'next/navigation';

export default async function ManualDetailPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const manuals = await getManuals();
  const manual = manuals.find(m => m.slug === params.slug);
  
  if (!manual) return notFound();
  
  const content = await getManualContent(params.slug);
  
  // Extract body content to strip out html/head tags that would conflict
  // We use regex to grab everything between <body> and </body>
  const bodyContentMatch = content?.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  const safeContent = bodyContentMatch ? bodyContentMatch[1] : content || 'Content not found.';
  
  // Extract the style tag content and patch it for responsiveness and scoping
  const styleMatch = content?.match(/<style[^>]*>([\s\S]*)<\/style>/i);
  let styles = styleMatch ? styleMatch[1] : '';
  
  // Patch styles: 
  // 1. Remove @page and * selectors to prevent global layout leakage
  styles = styles.replace(/@page\s*\{[^}]*\}/gi, '');
  styles = styles.replace(/\*\s*\{[^}]*\}/gi, '');
  
  // Remove before/after absolute bars that break layout
  styles = styles.replace(/body::?(before|after)\s*\{[^}]*\}/gi, '');
  
  // 2. Scope 'body' selectors to our wrapper class.
  styles = styles.replace(/body(\s*::?before|\s*\{)/gi, '.manual-content-wrapper$1');

  // 3. Make it perfectly responsive & centered.
  styles = styles
    .replace(/width:\s*210mm;?/gi, 'width: 100%;')
    .replace(/height:\s*297mm;?/gi, 'min-height: 100vh; height: auto;')
    .replace(/overflow:\s*hidden;?/gi, '');

  // 4. Force mobile responsiveness for hardcoded grids and huge padding/fonts
  styles += `
    @media (max-width: 640px) {
      .manual-content-wrapper { padding: 6% !important; }
      .manual-content-wrapper .zones { grid-template-columns: 1fr !important; }
      .manual-content-wrapper .flow { flex-wrap: wrap !important; justify-content: center !important; gap: 1rem !important; }
      .manual-content-wrapper .flow-arrow { display: none !important; }
      .manual-content-wrapper .checks { flex-wrap: wrap !important; gap: 1rem !important; }
      .manual-content-wrapper h1 { font-size: 2.8rem !important; line-height: 1.1 !important; }
      .manual-content-wrapper .zone-letter { font-size: 2rem !important; }
      .manual-content-wrapper .golden { flex-direction: column !important; gap: 1rem !important; text-align: left !important; }
      .manual-content-wrapper .golden-icon { font-size: 2rem !important; align-self: flex-start !important; }
      .manual-content-wrapper .index-row { flex-direction: column !important; align-items: flex-start !important; gap: 0.5rem !important; padding-bottom: 1rem !important; }
    }
  `;

  return (
    <main className="min-h-screen pb-24 px-4 max-w-4xl mx-auto">
      <Navbar />
      
      <div className="sticky top-0 z-40 bg-stone-50/90 backdrop-blur-md py-4 border-b border-stone-200 mb-8 mt-4 sm:mt-24">
        <Link href="/manuals" className="inline-flex items-center text-sm font-medium text-brand-primary hover:text-brand-primary/80 transition-colors">
          <ArrowLeft size={16} className="mr-1" /> Back to Manuals
        </Link>
      </div>
      
      <div className="flex justify-center w-full">
        <div className="glass p-0 sm:p-8 rounded-xl overflow-hidden shadow-2xl relative w-full flex justify-center bg-stone-100/50">
          {/* Inject scoped and patched styles */}
          <style dangerouslySetInnerHTML={{ __html: styles }} />
          
          {/* Render HTML natively, centered like a piece of paper */}
          <div 
            className="manual-content-wrapper bg-[#f4f9fb] w-full max-w-[800px] min-h-[800px] overflow-visible pb-12 rounded shadow-sm"
            dangerouslySetInnerHTML={{ __html: safeContent }}
          />
        </div>
      </div>
    </main>
  );
}
