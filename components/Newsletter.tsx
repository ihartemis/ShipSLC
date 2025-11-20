import React from 'react';
import { Calendar } from 'lucide-react';
import { Button } from './ui';

export const Newsletter: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-brand-dark relative w-full border-t border-gray-100 dark:border-gray-800">
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-900 [mask-image:linear-gradient(to_top,white,transparent)] dark:[mask-image:linear-gradient(to_top,white,transparent)] pointer-events-none h-1/2 top-0"></div>
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 animate-fade-in">
        <div className="inline-flex p-4 rounded-2xl bg-brand-grape/10 text-brand-grape mb-8 animate-float">
          <Calendar size={32} />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 dark:text-white">Stay in the loop</h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-xl mx-auto">
          Weekly updates on what's happening in the SLC product scene.
        </p>
        
        <form 
          action="https://buttondown.com/api/emails/embed-subscribe/ship-slc"
          method="post"
          target="_blank"
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto relative"
        >
          <label htmlFor="bd-email" className="sr-only">Enter your email</label>
          <input 
            type="email" 
            name="email"
            id="bd-email"
            required
            placeholder="Enter your email" 
            className="flex-1 px-5 py-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 dark:text-white focus:ring-2 focus:ring-brand-grape focus:border-transparent outline-none shadow-sm transition-all"
          />
          <Button type="submit" size="lg" className="shadow-lg shadow-brand-grape/20">
            Subscribe
          </Button>
        </form>
        <p className="mt-4 text-xs text-gray-400">
          <a href="https://buttondown.com/refer/ship-slc" target="_blank" rel="noreferrer" className="hover:text-brand-grape transition-colors">
            Powered by Buttondown
          </a>
        </p>
      </div>
    </section>
  );
};