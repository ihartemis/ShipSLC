import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Users, ExternalLink, Calendar, Snowflake } from 'lucide-react';
import { Button, Card, SectionHeader, Badge } from '../components/ui';
import { PROGRAMS, LINKS } from '../constants';
import { Newsletter } from '../components/Newsletter';

// --- SNOWFLAKE SVG LIBRARY (10 Variations - Classic/Crystalline) ---
const SnowflakeSVGs = [
  // 1. Classic Dendrite
  <g key="1"><path d="M12 2v20M2 12h20" strokeWidth="2" strokeLinecap="round"/><path d="M12 2L8 6M12 2l4 4M12 22l-4-4M12 22l4-4M2 12l4-4M2 12l4 4M22 12l-4-4M22 12l-4 4" strokeWidth="1.5"/></g>,
  // 2. Star Crystal
  <g key="2"><path d="M12 0L15 9L24 12L15 15L12 24L9 15L0 12L9 9L12 0Z" fill="currentColor" opacity="0.4" /><path d="M12 4v16M4 12h16" strokeWidth="1.5"/></g>,
  // 3. Fern
  <g key="3"><path d="M12 2v20M3.3 7l17.4 10M3.3 17l17.4-10" strokeWidth="1.5"/><circle cx="12" cy="12" r="2" fill="currentColor"/></g>,
  // 4. Hex Plate
  <g key="4"><path d="M12 4L19 8V16L12 20L5 16V8L12 4Z" fill="none" strokeWidth="2"/><path d="M12 4v16M5 8l14 8M5 16l14-8" strokeWidth="1" opacity="0.6"/></g>,
  // 5. Elaborate
  <g key="5"><path d="M12 1v22M1 12h22M4.2 4.2l15.6 15.6M19.8 4.2L4.2 19.8" strokeWidth="1"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/><circle cx="12" cy="4" r="1" fill="currentColor"/><circle cx="20" cy="12" r="1" fill="currentColor"/><circle cx="12" cy="20" r="1" fill="currentColor"/><circle cx="4" cy="12" r="1" fill="currentColor"/></g>,
  // 6. Simple 6-point
  <g key="6"><path d="M12 2v20M3.34 7l17.32 10M3.34 17l17.32-10" strokeWidth="2" strokeLinecap="round"/><circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.5"/></g>,
  // 7. Layered Star
  <g key="7"><path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10L12 0Z" fill="currentColor" opacity="0.3"/><path d="M12 4v16M4 12h16" strokeWidth="2"/></g>,
  // 8. Geometry
  <g key="8"><rect x="11" y="1" width="2" height="22" fill="currentColor"/><rect x="1" y="11" width="22" height="2" fill="currentColor"/><rect x="6" y="6" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(45 12 12)"/></g>,
  // 9. Delicate
  <g key="9"><path d="M12 1v22M2.5 6.5l19 11M2.5 17.5l19-11" strokeWidth="1"/><path d="M12 6l-2-2M12 6l2-2M12 18l-2 2M12 18l2 2" strokeWidth="1"/></g>,
  // 10. Heavy Frost
  <g key="10"><path d="M12 3v18M3 12h18" strokeWidth="3" strokeLinecap="round" opacity="0.6"/><path d="M6 6l12 12M18 6L6 18" strokeWidth="1.5"/></g>
];

const Snowfall = () => {
  const [flakes, setFlakes] = useState<{ 
    id: number; 
    isSpecial: boolean; 
    variantIndex: number;
    left: number; 
    duration: number; 
    delay: number;
    layer: 'back' | 'mid' | 'front'; 
  }[]>([]);

  useEffect(() => {
    const createFlake = (id: number, offsetTime = false) => {
      const rand = Math.random();
      let layer: 'back' | 'mid' | 'front' = 'mid';
      if (rand < 0.3) layer = 'back';
      else if (rand > 0.85) layer = 'front';
      
      const isSpecial = Math.random() > 0.9; // 10% special

      // Slower, more cinematic speeds
      let baseDuration = 12;
      if (layer === 'front') baseDuration = 7;
      if (layer === 'back') baseDuration = 20;

      return {
        id,
        isSpecial,
        variantIndex: Math.floor(Math.random() * SnowflakeSVGs.length),
        left: Math.random() * 100,
        duration: baseDuration + Math.random() * 8, 
        delay: offsetTime ? Math.random() * -20 : 0,
        layer
      };
    };

    // Initial batch
    const initialFlakes = Array.from({ length: 50 }).map((_, i) => createFlake(i, true));
    setFlakes(initialFlakes);

    // Continuous generation
    const interval = setInterval(() => {
      setFlakes(prev => {
        const now = Date.now();
        // Keep around 100 flakes
        const filtered = prev.length > 100 ? prev.slice(1) : prev;
        return [...filtered, createFlake(now)];
      });
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden h-screen" aria-hidden="true">
      {flakes.map((flake) => {
        // STYLE CONFIG
        let sizeClass = "w-1.5 h-1.5"; 
        let opacity = 0.8;
        
        if (flake.layer === 'back') {
            sizeClass = "w-1 h-1";
            opacity = 0.5;
        } else if (flake.layer === 'front') {
            sizeClass = "w-2.5 h-2.5";
            opacity = 0.95;
        }

        return (
            <div 
            key={flake.id}
            className="absolute top-[-40px]"
            style={{
                left: `${flake.left}vw`,
                animation: `snowfall ${flake.duration}s linear forwards`,
                animationDelay: `${flake.delay}s`,
                opacity: opacity
            }}
            >
            {flake.isSpecial ? (
                // SPECIAL FLAKE (Brand Colors)
                <div className={`
                    ${flake.layer === 'back' ? 'scale-75 blur-[0.5px]' : flake.layer === 'front' ? 'scale-125' : 'scale-100'} 
                    opacity-80
                `}>
                    <svg 
                        width="24" height="24" viewBox="0 0 24 24" 
                        fill="none" stroke="currentColor" 
                        className="animate-spin-slow text-brand-magenta dark:text-brand-amber"
                    >
                        <defs>
                            <linearGradient id={`grad-${flake.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#C026D3" />
                                <stop offset="100%" stopColor="#F59E0B" />
                            </linearGradient>
                        </defs>
                        <g stroke={`url(#grad-${flake.id})`} fill={`url(#grad-${flake.id})`}>
                            {SnowflakeSVGs[flake.variantIndex]}
                        </g>
                    </svg>
                </div>
            ) : (
                // STANDARD SNOW
                // High contrast for white background visibility
                <div 
                    className={`
                        ${sizeClass} rounded-full 
                        bg-slate-200 dark:bg-white 
                        border border-white/50 dark:border-none
                        shadow-sm dark:shadow-none
                        ${flake.layer === 'back' ? 'blur-[0.5px]' : ''}
                    `}
                />
            )}
            </div>
        );
      })}
    </div>
  );
};

// Rugged "Wasatch" Style Mountain Graphic
const WasatchHero = ({ scrollY }: { scrollY: number }) => (
  <div className="absolute bottom-0 left-0 w-full h-[180px] md:h-[55vh] lg:h-[65vh] overflow-hidden pointer-events-none z-0 flex items-end">
    <svg 
      viewBox="0 0 1440 400" 
      xmlns="http://www.w3.org/2000/svg" 
      preserveAspectRatio="xMidYMax slice" 
      className="w-full h-full"
    >
      <defs>
        <linearGradient id="grad-back-light" x1="0%" y1="0%" x2="100%" y2="0%">
           <stop offset="0%" stopColor="#6D28D9" stopOpacity="0.1"><animate attributeName="stop-opacity" values="0.1;0.4;0.1" dur="3s" repeatCount="indefinite" /></stop>
           <stop offset="100%" stopColor="#C026D3" stopOpacity="0.2"><animate attributeName="stop-color" values="#C026D3;#F472B6;#C026D3" dur="4s" repeatCount="indefinite" /></stop>
        </linearGradient>
        <linearGradient id="grad-mid-light" x1="0%" y1="0%" x2="0%" y2="100%">
           <stop offset="0%" stopColor="#C026D3" stopOpacity="0.5"><animate attributeName="stop-color" values="#C026D3;#F59E0B;#C026D3" dur="3.5s" repeatCount="indefinite" /></stop>
           <stop offset="100%" stopColor="#6D28D9" stopOpacity="0.8" />
        </linearGradient>
         <linearGradient id="grad-front-light" x1="50%" y1="0%" x2="50%" y2="100%">
           <stop offset="0%" stopColor="#4C1D95" stopOpacity="0.9"><animate attributeName="stop-color" values="#4C1D95;#7C3AED;#4C1D95" dur="5s" repeatCount="indefinite" /></stop>
           <stop offset="100%" stopColor="#6D28D9" stopOpacity="0.95" />
        </linearGradient>
        
        {/* Dark Mode Gradients */}
        <linearGradient id="grad-back-dark" x1="0%" y1="0%" x2="100%" y2="0%">
           <stop offset="0%" stopColor="#1e1b4b" stopOpacity="0.5"><animate attributeName="stop-opacity" values="0.5;0.8;0.5" dur="4s" repeatCount="indefinite" /></stop>
           <stop offset="100%" stopColor="#4c1d95" stopOpacity="0.4"><animate attributeName="stop-color" values="#4c1d95;#7c3aed;#4c1d95" dur="5s" repeatCount="indefinite" /></stop>
        </linearGradient>
        <linearGradient id="grad-mid-dark" x1="0%" y1="0%" x2="0%" y2="100%">
           <stop offset="0%" stopColor="#d97706" stopOpacity="0.6"><animate attributeName="stop-color" values="#d97706;#fbbf24;#d97706" dur="3s" repeatCount="indefinite" /></stop>
           <stop offset="100%" stopColor="#312e81" stopOpacity="0.95" />
        </linearGradient>
         <linearGradient id="grad-front-dark" x1="50%" y1="0%" x2="50%" y2="100%">
           <stop offset="0%" stopColor="#2e1065" stopOpacity="0.95"><animate attributeName="stop-color" values="#2e1065;#581c87;#2e1065" dur="6s" repeatCount="indefinite" /></stop>
           <stop offset="100%" stopColor="#020617" stopOpacity="1" />
        </linearGradient>
      </defs>
      
      {/* Back Layer Group */}
      <g className="will-change-transform" style={{ transform: `translate3d(0, ${scrollY * 0.3}px, 0)` }}>
        <path d="M0,400 L0,250 L180,180 L350,260 L520,140 L750,240 L950,120 L1150,200 L1320,150 L1440,220 V400 Z" className="fill-[url(#grad-back-light)] dark:fill-[url(#grad-back-dark)] transition-colors duration-700 ease-in-out"/>
        {/* Massive Snowfields - Back - Updated for heavy snowpack */}
        <path d="M120,205 C140,195 160,190 180,180 C200,190 220,210 230,220 L260,240 L220,230 L180,225 L140,220 Z" fill="white" className="opacity-80 dark:opacity-40" />
        <path d="M460,180 C480,160 500,145 520,140 C550,145 570,160 590,180 L560,175 L520,170 L480,175 Z" fill="white" className="opacity-80 dark:opacity-40" />
        <path d="M890,160 C920,140 930,125 950,120 C980,125 1000,145 1020,160 L1050,180 L1000,170 L950,165 L900,170 Z" fill="white" className="opacity-80 dark:opacity-40" />
        <path d="M1260,190 C1290,170 1300,155 1320,150 C1350,160 1370,185 1390,200 L1350,195 L1320,190 L1290,195 Z" fill="white" className="opacity-80 dark:opacity-40" />
      </g>

      {/* Mid Layer Group */}
      <g className="will-change-transform" style={{ transform: `translate3d(0, ${scrollY * 0.15}px, 0)` }}>
        <path d="M-50,400 L-50,300 L150,240 L300,310 L480,220 L620,290 L800,180 L980,280 L1150,200 L1300,290 L1490,250 V400 Z" className="fill-[url(#grad-mid-light)] dark:fill-[url(#grad-mid-dark)] opacity-90 transition-colors duration-700 ease-in-out"/>
        {/* Massive Snowfields - Mid - Updated for heavy snowpack */}
        <path d="M100,270 C120,250 140,240 150,240 C180,250 210,280 230,295 L200,285 L150,275 L110,280 Z" fill="white" className="opacity-70 dark:opacity-30" />
        <path d="M430,250 C450,230 465,220 480,220 C510,230 540,260 560,275 L520,265 L480,255 L450,260 Z" fill="white" className="opacity-70 dark:opacity-30" />
        <path d="M750,220 C770,200 790,185 800,180 C830,190 860,220 890,245 L850,235 L800,225 L760,230 Z" fill="white" className="opacity-70 dark:opacity-30" />
        <path d="M1100,230 C1120,210 1140,200 1150,200 C1180,210 1210,240 1230,255 L1190,245 L1150,240 L1110,245 Z" fill="white" className="opacity-70 dark:opacity-30" />
      </g>

      {/* Front Layer */}
      <path d="M0,400 L0,350 L120,310 L250,360 L420,280 L580,340 L720,260 L900,350 L1050,290 L1220,360 L1350,300 L1440,340 V400 Z" className="fill-[url(#grad-front-light)] dark:fill-[url(#grad-front-dark)] transition-colors duration-700 ease-in-out will-change-transform" style={{ transform: `translate3d(0, ${scrollY * 0.05}px, 0)` }}/>
    </svg>
  </div>
);

const Home: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isSnowing, setIsSnowing] = useState(false);

  useEffect(() => {
    const handleScroll = () => requestAnimationFrame(() => setScrollY(window.scrollY));
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col w-full overflow-x-hidden relative">
      {isSnowing && <Snowfall />}
      
      {/* HERO SECTION */}
      <section className="relative pt-6 pb-20 lg:pt-20 lg:pb-32 min-h-[80vh] lg:min-h-[700px] flex flex-col justify-center overflow-hidden bg-white dark:bg-brand-dark">
        <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-900 [mask-image:linear-gradient(to_bottom,white,transparent)] dark:[mask-image:linear-gradient(to_bottom,white,transparent)] pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-gradient-to-b from-brand-grape/10 to-transparent blur-3xl -z-10 translate-x-1/4 -translate-y-1/4 rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-gradient-to-t from-brand-amber/10 to-transparent blur-3xl -z-10 -translate-x-1/4 translate-y-1/4 rounded-full"></div>

        <WasatchHero scrollY={scrollY} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mb-20 lg:mb-0">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            
            <div className="mb-8 animate-fade-in delay-100 relative z-20">
              <button 
                onClick={() => setIsSnowing(!isSnowing)}
                className={`
                  inline-flex items-center gap-2 px-5 py-2.5 rounded-full border text-sm font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer
                  ${isSnowing 
                    ? 'bg-blue-50 border-blue-200 text-blue-600 dark:bg-blue-900/30 dark:border-blue-700 dark:text-blue-300 shadow-inner' 
                    : 'bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:shadow-md hover:border-brand-grape/30 hover:text-brand-grape dark:hover:text-brand-magenta'
                  }
                `}
              >
                {isSnowing ? (
                    <>
                        <span>Clear the skies</span>
                        <span className="text-base">☀️</span>
                    </>
                ) : (
                    <>
                        <Snowflake size={16} className="text-brand-grape dark:text-brand-magenta" />
                        <span>Let it snow!</span>
                    </>
                )}
              </button>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold font-heading tracking-tight text-gray-900 dark:text-white leading-[1.1] mb-8 animate-fade-in delay-100 drop-shadow-sm">
              Build, learn, and <br />
              <span className="text-shimmer">ship together.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto animate-fade-in delay-200">
              The community for product builders in Salt Lake City. Connect with founders, engineers, and designers.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto animate-fade-in delay-300">
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

      <section className="py-24 relative overflow-hidden">
        <div className="absolute right-0 top-1/3 w-96 h-96 bg-brand-magenta/20 blur-[100px] -z-10 rounded-full"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-dark rounded-[2rem] p-8 md:p-16 text-white relative overflow-hidden shadow-2xl shadow-brand-grape/20 border border-gray-800 animate-fade-in delay-200 group">
            <div className="absolute top-0 right-0 w-full h-full bg-ship-gradient opacity-10 group-hover:opacity-15 transition-opacity duration-500"></div>
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

      <Newsletter />
    </div>
  );
};

export default Home;