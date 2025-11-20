import React from 'react';
import { ExternalLink, Slack, Heart } from 'lucide-react';
import { LINKS } from '../constants';
import { SectionHeader, Card, Button } from '../components/ui';

const Join: React.FC = () => {
  return (
    <div className="pt-10 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-extrabold font-heading tracking-tight text-gray-900 dark:text-white mb-6">
                Ready to ship?
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
                There are two main ways to get involved. Both are free.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {/* Slack Card */}
            <div className="animate-fade-in delay-100">
                <Card className="p-8 md:p-12 flex flex-col items-center text-center relative border-t-4 border-t-brand-grape h-full">
                    <div className="w-20 h-20 bg-brand-grape/10 rounded-3xl flex items-center justify-center text-brand-grape mb-6 animate-float">
                        <Slack size={40} />
                    </div>
                    <h2 className="text-2xl font-bold mb-3 font-heading dark:text-white">Join the Slack</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-8 flex-grow">
                        The daily heartbeat. Ask for help, share wins, finding co-founders, and general watercooler chat.
                    </p>
                    <a href={LINKS.SLACK} target="_blank" rel="noreferrer" className="w-full">
                        <Button size="lg" variant="secondary" className="w-full">
                            Launch Slack
                        </Button>
                    </a>
                </Card>
            </div>

            {/* Meetup Card */}
            <div className="animate-fade-in delay-200">
                <Card className="p-8 md:p-12 flex flex-col items-center text-center relative border-t-4 border-t-brand-amber h-full">
                    <div className="w-20 h-20 bg-brand-amber/10 rounded-3xl flex items-center justify-center text-brand-amber mb-6 animate-float-delayed">
                        <Heart size={40} />
                    </div>
                    <h2 className="text-2xl font-bold mb-3 font-heading dark:text-white">RSVP on Meetup</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-8 flex-grow">
                        Where we manage events. Join the group to get notified immediately when new workshops or sessions drop.
                    </p>
                    <a href={LINKS.MEETUP} target="_blank" rel="noreferrer" className="w-full">
                        <Button size="lg" className="w-full">
                            Go to Meetup
                        </Button>
                    </a>
                </Card>
            </div>
        </div>

        {/* Code of Conduct */}
        <div className="max-w-3xl mx-auto animate-fade-in delay-300">
            <h3 className="text-2xl font-bold font-heading mb-6 dark:text-white">Community Guidelines</h3>
            <div className="prose prose-lg dark:prose-invert">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                    ShipSLC is a safe, welcoming space. We prioritize shipping, learning, and kindness.
                </p>
                <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                        <div className="mt-2.5 w-2 h-2 rounded-full bg-brand-grape shrink-0"></div>
                        <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-2">
                            <span className="font-bold text-brand-grape shrink-0">Ship it.</span>
                            <span className="text-gray-700 dark:text-gray-300">Don’t let perfect block progress. Small, frequent releases &gt; big, never-done plans.</span>
                        </div>
                    </li>
                    <li className="flex items-start gap-3">
                        <div className="mt-2.5 w-2 h-2 rounded-full bg-brand-grape shrink-0"></div>
                        <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-2">
                            <span className="font-bold text-brand-grape shrink-0">Be constructive.</span>
                            <span className="text-gray-700 dark:text-gray-300">Feedback is specific, kind, and actionable.</span>
                        </div>
                    </li>
                    <li className="flex items-start gap-3">
                        <div className="mt-2.5 w-2 h-2 rounded-full bg-brand-grape shrink-0"></div>
                        <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-2">
                            <span className="font-bold text-brand-grape shrink-0">Celebrate wins.</span>
                            <span className="text-gray-700 dark:text-gray-300">Progress counts—merged PRs, screenshots, launches, lessons learned.</span>
                        </div>
                    </li>
                     <li className="flex items-start gap-3">
                        <div className="mt-2.5 w-2 h-2 rounded-full bg-brand-grape shrink-0"></div>
                        <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-2">
                            <span className="font-bold text-brand-grape shrink-0">Give back.</span>
                            <span className="text-gray-700 dark:text-gray-300">Share your stack, notes, and hard-won tips.</span>
                        </div>
                    </li>
                     <li className="flex items-start gap-3">
                        <div className="mt-2.5 w-2 h-2 rounded-full bg-brand-grape shrink-0"></div>
                        <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-2">
                            <span className="font-bold text-brand-grape shrink-0">No selling.</span>
                            <span className="text-gray-700 dark:text-gray-300">No recruiting drive-bys. Build relationships first; keep pitches opt-in.</span>
                        </div>
                    </li>
                </ul>
                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
                     <p className="text-sm text-gray-500">
                        We strictly enforce our Community Guidelines. Harassment of any kind is not tolerated.
                     </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Join;