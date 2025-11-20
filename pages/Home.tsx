import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Users, ExternalLink, Calendar, Sparkles } from 'lucide-react';
import { Button, Card, SectionHeader, Badge } from '../components/ui';
import { PROGRAMS, LINKS } from '../constants';

// Rugged "Wasatch" Style Mountain Graphic with Light Shift Animation
const WasatchHero = () => (
  <div className="absolute bottom-0 left-0 w-full h-[45vh] md:h-[55vh] lg:h-[65vh] overflow-hidden pointer-events-none z-0 flex items-end">
    <svg 
      viewBox="0 0 1440 400" 
      xmlns="http://www.w3.org/2000/svg" 
      preserveAspectRatio="none" 
      className="w-full h-full"
    >
      <defs>
        {/* Back Layer Gradient - Atmospheric Distance */}
        <linearGradient id="grad-back" x1="0%" y1="0%" x2="100%" y2="0%">
           <stop offset="0%" stopColor="#6D28D9" stopOpacity="0.1">
             <animate attributeName="stop-opacity" values="0.1;0.3;0.1" dur="6s" repeatCount="indefinite" />
           </stop>
           <stop offset="100%" stopColor="#C026D3" stopOpacity="0.2">
             <animate attributeName="stop-color" values="#C026D3;#E879F9;#C026D3" dur="8s" repeatCount="indefinite" />
           </stop>
        </linearGradient>

        {/* Mid Layer Gradient - The Alpenglow - INTENSIFIED */}
        <linearGradient id="grad-mid" x1="0%" y1="0%" x2="0%" y2="100%">
           <stop offset="0%" stopColor="#C026D3" stopOpacity="0.5">
              {/* Shift from Magenta to Bright Amber/Orange to simulate sunset hitting peaks */}
              <animate attributeName="stop-color" values="#C026D3;#F59E0B;#C026D3" dur="7s" repeatCount="indefinite" />
           </stop>
           <stop offset="100%" stopColor="#6D28D9" stopOpacity="0.8" />
        </linearGradient>

         {/* Front Layer Gradient - Deep Shadows */}
         <linearGradient id="grad-front" x1="50%" y1="0%" x2="50%" y2="100%">
           <stop offset="0%" stopColor="#4C1D95" stopOpacity="0.9">
              {/* Shift shadow tone slightly to contrast with light */}
              <animate attributeName="stop-color" values="#4C1D95;#7C3AED;#4C1D95" dur="10s" repeatCount="indefinite" />
           </stop>
           <stop offset="100%" stopColor="#6D28D9" stopOpacity="0.95" />
        </linearGradient>
      </defs>
      
      {/* Back Layer - High Peaks (Timpanogos style) */}
      <path 
        d="M0,400 L0,250 L180,180 L350,260 L520,140 L750,240 L950,120 L1150,200 L1320,150 L1440,220 V400 Z" 
        fill="url(#grad-back)" 
      />

      {/* Mid Layer - Rugged Ridge Line */}
      <path 
        d="M-50,400 L-50,300 L150,240 L300,310 L480,220 L620,290 L800,180 L980,280 L1150,200 L1300,290 L1490,250 V400 Z" 
        fill="url(#grad-mid)" 
        className="opacity-90"
      />

      {/* Front Layer - The Foothills / Closer Range */}
      <path 
        d="M0,400 L0,350 L120,310 L250,360 L420,280 L580,340 L720,260 L900,350 L1050,290 L1220,360 L1350,300 L1440,340 V400 Z" 
        fill="url(#grad-front)" 
      />
    </svg>
  </div>
);

const Home: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative pt-12 pb-20 lg:pt-24 lg:pb-32 min-h-[90vh] lg:min-h-[800px] flex flex-col justify-center overflow-hidden bg-white dark:bg-brand-dark">
        {/* Background Grid & Decorations */}
        <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-900 [mask-image:linear-gradient(to_bottom,white,transparent)] dark:[mask-image:linear-gradient(to_bottom,white,transparent)] pointer-events-none"></div>
        
        <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-gradient-to-b from-brand-grape/10 to-transparent blur-3xl -z-10 translate-x-1/4 -translate-y-1/4 rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-gradient-to-t from-brand-amber/10 to-transparent blur-3xl -z-10 -translate-x-1/4 translate-y-1/4 rounded-full"></div>

        {/* Mountain Graphic anchored to bottom */}
        <WasatchHero />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mb-20 lg:mb-0">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-grape/5 dark:bg-brand-grape/10 border border-brand-grape/20 text-brand-grape dark:text-brand-magenta text-sm font-medium mb-8 animate-fade-in delay-100 backdrop-blur-sm">
              <Sparkles size={14} />
              <span>Building the future in SLC</span>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold font-heading tracking-tight text-gray-900 dark:text-white leading-[1.1] mb-8 animate-fade-in delay-200 drop-shadow-sm">
              Build, learn, and <br />
              <span className="text-shimmer">ship together.</span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto animate-fade-in delay-300">
              The community for product builders in Salt Lake City. Connect with founders, engineers, and designers. No fluff, just people making cool stuff.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto animate-fade-in delay-500">
              <a href={LINKS.SLACK} target="_blank" rel="noreferrer" className="w-full sm:w-auto">
                <Button size="lg" variant="white" className="w-full sm:w-auto border-gray-200 dark:border-gray-700 dark:bg-gray-800/80 dark:text-white dark:hover:bg-gray-800 backdrop-blur-sm">
                  Join Slack
                </Button>
              </a>
              <a href={LINKS.MEETUP} target="_blank" rel="noreferrer" className="w-full sm:w-auto">
                <Button size="lg" variant="primary" className="w-full sm:w-auto shadow-lg shadow-brand-grape/25">
                  RSVP on Meetup
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="py-20 bg-gray-50/50 dark:bg-black/20 border-y border-gray-100 dark:border-gray-800/50 backdrop-blur-sm relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in">
            <SectionHeader 
              title="What we do" 
              subtitle="Consistent programming to help you move from idea to shipped product."
              align="center"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROGRAMS.map((program, index) => (
              <div key={program.id} className={`h-full animate-fade-in`} style={{ animationDelay: `${index * 100 + 200}ms` }}>
                <Card className="p-6 flex flex-col h-full border-t-4 border-t-transparent hover:border-t-brand-grape transition-all duration-300 group bg-white/80 dark:bg-gray-800/80 backdrop-blur-md">
                  <div className="w-14 h-14 rounded-2xl bg-brand-light dark:bg-brand-dark border border-gray-100 dark:border-gray-700 flex items-center justify-center text-brand-grape group-hover:scale-110 transition-transform duration-300 mb-5 shadow-sm">
                    <program.icon size={26} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 font-heading dark:text-white group-hover:text-brand-grape transition-colors">{program.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm flex-grow leading-relaxed">{program.description}</p>
                </Card>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center animate-fade-in delay-500">
            <Link to="/events">
              <Button variant="secondary" className="group">
                See all events 
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED EVENT / NEXT UP */}
      <section className="py-24 relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute right-0 top-1/3 w-96 h-96 bg-brand-magenta/20 blur-[100px] -z-10 rounded-full"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-dark rounded-[2rem] p-8 md:p-16 text-white relative overflow-hidden shadow-2xl shadow-brand-grape/20 border border-gray-800 animate-fade-in delay-200 group">
            <div className="absolute top-0 right-0 w-full h-full bg-ship-gradient opacity-10 group-hover:opacity-15 transition-opacity duration-500"></div>
            {/* Animated shine effect */}
            <div className="absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-10 left-[-100%] group-hover:animate-shine" />
            
            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-6">
                  <Badge color="brand">Next Session</Badge>
                  <span className="flex items-center gap-1 text-brand-amber text-sm font-bold animate-pulse">
                    <Zap size={14} fill="currentColor" /> Happening Weekly
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 leading-tight">
                  Vibe Code Together
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-xl leading-relaxed">
                  Join us every Friday for our weekly build session. Bring your laptop, your current project, and good vibes.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 text-gray-300">
                   <div className="flex items-center gap-2">
                      <Calendar className="text-brand-magenta" size={20} />
                      <span className="font-medium">Fridays, 9 AM</span>
                   </div>
                   <div className="flex items-center gap-2">
                      <Users className="text-brand-amber" size={20} />
                      <span className="font-medium">HAVN, Salt Lake Crossing</span>
                   </div>
                </div>
              </div>
              
              <div className="w-full lg:w-auto flex flex-col gap-4 min-w-[200px]">
                <a href={LINKS.MEETUP} target="_blank" rel="noreferrer" className="w-full">
                   <Button size="lg" variant="white" className="w-full justify-center text-lg font-bold py-4">
                     RSVP Now <ExternalLink className="ml-2 w-5 h-5" />
                   </Button>
                </a>
                <p className="text-center text-sm text-gray-400">Spots are limited</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-24 bg-white dark:bg-brand-dark relative">
        <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-900 [mask-image:linear-gradient(to_top,white,transparent)] dark:[mask-image:linear-gradient(to_top,white,transparent)] pointer-events-none h-1/2 top-0"></div>
        
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 animate-fade-in">
          <div className="inline-flex p-4 rounded-2xl bg-brand-grape/10 text-brand-grape mb-8 animate-float">
            <Calendar size={32} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 dark:text-white">Stay in the loop</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-xl mx-auto">
            Weekly updates on what's happening in the SLC product scene. No spam, ever.
          </p>
          
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto relative">
            <input 
              type="email" 
              required
              placeholder="Enter your email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-5 py-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 dark:text-white focus:ring-2 focus:ring-brand-grape focus:border-transparent outline-none shadow-sm transition-all"
            />
            <Button type="submit" size="lg" disabled={subscribed} className="shadow-lg shadow-brand-grape/20">
              {subscribed ? 'Joined!' : 'Subscribe'}
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;