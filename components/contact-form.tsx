import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ContactForm() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[.03] p-8 md:p-12">
      <p className="max-w-xl text-lg leading-8 text-zinc-300">Have a product to build or an engineering problem to untangle? Send me a note and I’ll get back to you.</p>
      <Button asChild size="lg" className="mt-7 rounded-full"><a href="mailto:a.allaaeddine.riad@gmail.com"><Mail className="mr-2 h-4 w-4" /> Email Kaden</a></Button>
      <p className="mt-4 text-sm text-zinc-500">Opens your email app. No message is collected or stored on this site.</p>
    </div>
  );
}
