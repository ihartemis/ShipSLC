import React from 'react';
import { PROGRAMS, LINKS } from '../constants';
import { Card, SectionHeader, Button, Badge } from '../components/ui';
import { ArrowRight, ExternalLink } from 'lucide-react';

const Events: React.FC = () => {
  return (
    <div className="pt-10 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6 animate-fade-in">
          <SectionHeader 
            title="Events" 
            subtitle="Structured ways to help you build, learn, and launch."
          />
          <div className="md:mb-10 shrink-0">
            <a href={LINKS.MEETUP} target="_blank" rel="noreferrer">
              <Button size="lg" className="shadow-xl shadow-brand-grape/20 w-full md:w-auto">
                RSVP on Meetup <ExternalLink className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROGRAMS.map((program, index) => {
            const isActive = program.id === 'vibe-code';
            
            return (
              <div key={program.id} className="animate-fade-in" style={{ animationDelay: `${index * 100 + 100}ms` }}>
                <Card className={`p-8 h-full flex flex-col ${!isActive ? 'border-dashed border-2' : 'border-brand-grape/20 shadow-lg'}`}>
                  <div className="flex items-start justify-between mb-6">
                    <div className={`p-3 rounded-2xl ${isActive ? 'bg-brand-grape/10 dark:bg-brand-grape/20 text-brand-grape dark:text-brand-magenta' : 'bg-gray-100 text-gray-400 dark:bg-gray-800 dark:text-gray-500'}`}>
                      <program.icon size={32} />
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Badge color={isActive ? 'brand' : 'gray'}>{program.frequency}</Badge>
                      {isActive ? (
                        <span className="text-xs font-bold text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30 px-2 py-0.5 rounded-full border border-green-200 dark:border-green-800">
                          Active Now
                        </span>
                      ) : (
                        <span className="text-xs font-bold text-amber-600 dark:text-amber-400 bg-amber-100 dark:bg-amber-900/30 px-2 py-0.5 rounded-full border border-amber-200 dark:border-amber-800">
                          Coming Soon
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <h3 className={`text-2xl font-bold font-heading mb-3 dark:text-white ${!isActive ? 'text-gray-500' : ''}`}>{program.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 flex-grow leading-relaxed">
                    {program.description}
                  </p>

                  <div className={`bg-gray-50 dark:bg-black/30 rounded-xl p-4 mb-6 ${!isActive ? 'opacity-70' : ''}`}>
                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">What to expect</h4>
                    <ul className="space-y-2">
                        {program.id === 'vibe-code' && (
                          <>
                            <li className="text-sm flex items-center gap-2 dark:text-gray-300"><div className="w-1.5 h-1.5 rounded-full bg-brand-grape"></div> 2 hours of focused build time</li>
                            <li className="text-sm flex items-center gap-2 dark:text-gray-300"><div className="w-1.5 h-1.5 rounded-full bg-brand-grape"></div> Low-voice "zones" for focus</li>
                            <li className="text-sm flex items-center gap-2 dark:text-gray-300"><div className="w-1.5 h-1.5 rounded-full bg-brand-grape"></div> Optional share-out at the end</li>
                          </>
                        )}
                        {program.id === 'workshops' && (
                          <>
                            <li className="text-sm flex items-center gap-2 dark:text-gray-300"><div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div> Expert-led sessions</li>
                            <li className="text-sm flex items-center gap-2 dark:text-gray-300"><div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div> Real-world playbooks</li>
                            <li className="text-sm flex items-center gap-2 dark:text-gray-300"><div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div> Practical takeaways</li>
                          </>
                        )}
                        {program.id === 'clinics' && (
                          <>
                            <li className="text-sm flex items-center gap-2 dark:text-gray-300"><div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div> 1:1 debugging help</li>
                            <li className="text-sm flex items-center gap-2 dark:text-gray-300"><div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div> Stack recommendations</li>
                            <li className="text-sm flex items-center gap-2 dark:text-gray-300"><div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div> Unblock your progress</li>
                          </>
                        )}
                        {program.id === 'demo-nights' && (
                          <>
                            <li className="text-sm flex items-center gap-2 dark:text-gray-300"><div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div> 5 minute hard limit</li>
                            <li className="text-sm flex items-center gap-2 dark:text-gray-300"><div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div> Live product, no slides</li>
                            <li className="text-sm flex items-center gap-2 dark:text-gray-300"><div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div> Feedback from peers</li>
                          </>
                        )}
                    </ul>
                  </div>

                  {isActive ? (
                    <a href={LINKS.MEETUP} target="_blank" rel="noreferrer">
                      <Button variant="secondary" className="w-full group">
                        Find upcoming sessions 
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </a>
                  ) : (
                    <Button variant="ghost" className="w-full bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-500 cursor-not-allowed" disabled>
                      Being built...
                    </Button>
                  )}
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Events;