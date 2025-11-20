import React from 'react';
import { SectionHeader } from '../components/ui';
import { FAQS, LINKS } from '../constants';
import { ChevronDown, Cpu, Users, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-10 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ABOUT SECTION */}
        <div className="animate-fade-in">
            <SectionHeader title="About ShipSLC" />
            
            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 mb-16 leading-relaxed">
                <p>
                    We’re a community for people in Salt Lake City who build, launch, and grow their own products — whether that’s an app, SaaS, AI tool, or side project.
                </p>
                <p>
                    This is a space for builders, product-minded coders, and full-stack PMs who care about creating real things and getting them into the world. We talk about everything from idea validation and UX to code, launch strategy, and growth.
                </p>
                <p>
                    Expect casual meetups, deep dives, and show-and-tells from people actually shipping. No fluff, just people making cool stuff and helping each other get better.
                </p>
            </div>
        </div>

        {/* ROLE OF AI SECTION */}
        <div className="mb-16 animate-fade-in delay-100">
            <div className="flex items-center gap-3 mb-6">
                 <div className="p-2 bg-brand-magenta/10 rounded-lg text-brand-magenta">
                    <Cpu size={24} />
                 </div>
                 <h2 className="text-3xl font-bold font-heading text-gray-900 dark:text-white">The Role of AI</h2>
            </div>
            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                    AI is changing how products get made—and who makes them.
                </p>
                <div className="space-y-6">
                    <div>
                        <span className="block text-xl font-bold text-gray-900 dark:text-white mb-2">Roles are collapsing.</span>
                        <span className="block">With AI copilots and design/code generation, a “PM + designer + developer” can increasingly be one builder. We welcome that cross-discipline mindset.</span>
                    </div>
                    <div>
                        <span className="block text-xl font-bold text-gray-900 dark:text-white mb-2">Timelines are compressing.</span>
                        <span className="block">It’s never been cheaper or faster to prototype, test, and iterate. Ideas matter—execution matters more. ShipSLC helps you move from “I should build this” to “I shipped it” with accountability, feedback, and shared expertise.</span>
                    </div>
                </div>
            </div>
        </div>

        {/* COMMUNITY GUIDELINES */}
        <div id="community-guidelines" className="scroll-mt-24 mb-16 p-8 bg-gray-50 dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 animate-fade-in delay-200">
            <div className="flex items-center gap-3 mb-6">
                 <div className="p-2 bg-brand-amber/10 rounded-lg text-brand-amber">
                    <Users size={24} />
                 </div>
                 <h2 className="text-2xl font-bold font-heading text-gray-900 dark:text-white">Community Guidelines</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
                ShipSLC is a safe, welcoming space. We prioritize shipping, learning, and kindness.
            </p>
            <ul className="space-y-6">
                <li className="flex items-start gap-3">
                    <div className="mt-2 w-2 h-2 rounded-full bg-brand-grape shrink-0" />
                    <div className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                        <span className="font-bold text-gray-900 dark:text-white block sm:inline sm:mr-2">Ship it.</span>
                        Don’t let perfect block progress. Small, frequent releases &gt; big, never-done plans.
                    </div>
                </li>
                <li className="flex items-start gap-3">
                    <div className="mt-2 w-2 h-2 rounded-full bg-brand-grape shrink-0" />
                    <div className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                        <span className="font-bold text-gray-900 dark:text-white block sm:inline sm:mr-2">Be constructive.</span>
                        Feedback is specific, kind, and actionable.
                    </div>
                </li>
                <li className="flex items-start gap-3">
                    <div className="mt-2 w-2 h-2 rounded-full bg-brand-grape shrink-0" />
                    <div className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                        <span className="font-bold text-gray-900 dark:text-white block sm:inline sm:mr-2">Celebrate wins.</span>
                        Progress counts—merged PRs, screenshots, launches, lessons learned.
                    </div>
                </li>
                <li className="flex items-start gap-3">
                    <div className="mt-2 w-2 h-2 rounded-full bg-brand-grape shrink-0" />
                    <div className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                        <span className="font-bold text-gray-900 dark:text-white block sm:inline sm:mr-2">Give back.</span>
                        Share your stack, notes, and hard-won tips.
                    </div>
                </li>
                <li className="flex items-start gap-3">
                    <div className="mt-2 w-2 h-2 rounded-full bg-brand-grape shrink-0" />
                    <div className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                        <span className="font-bold text-gray-900 dark:text-white block sm:inline sm:mr-2">No selling.</span>
                        No recruiting drive-bys. Build relationships first; keep pitches opt-in.
                    </div>
                </li>
            </ul>
        </div>

        {/* PITCH A WORKSHOP */}
        <div className="mb-16 animate-fade-in delay-300">
            <div className="flex items-center gap-3 mb-6">
                 <div className="p-2 bg-brand-grape/10 rounded-lg text-brand-grape">
                    <Lightbulb size={24} />
                 </div>
                 <h2 className="text-2xl font-bold font-heading text-gray-900 dark:text-white">How to pitch a workshop</h2>
            </div>
            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                    We love member-led sessions. If you’ve got deep knowledge of a stack, a marketing playbook, or a design pattern:
                </p>
                <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-brand-grape mt-2.5 shrink-0"></div>
                        <span><a href={LINKS.SLACK} target="_blank" rel="noreferrer" className="text-brand-grape hover:underline font-bold">Join the Slack</a></span>
                    </li>
                    <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-brand-grape mt-2.5 shrink-0"></div>
                        <span>Post your idea in <strong>#community-ideas</strong> (title, 2–3 bullets, ideal audience, any prerequisites)</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-brand-grape mt-2.5 shrink-0"></div>
                        <span>Or DM an organizer with a quick outline + preferred date(s)</span>
                    </li>
                </ul>
                <p className="text-base text-gray-500 mt-4 italic">
                    We’ll help shape the scope, find a slot, and promote it.
                </p>
            </div>
        </div>

        {/* FAQs */}
        <div id="faq" className="scroll-mt-24 animate-fade-in delay-500">
            <SectionHeader title="Frequently Asked Questions" />
            
            <div className="space-y-4">
                {FAQS.map((faq, idx) => (
                    <details key={idx} className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">
                        <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-gray-900 dark:text-white group-hover:bg-gray-50 dark:group-hover:bg-gray-800/50 transition-colors">
                            {faq.question}
                            <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180 text-gray-400" />
                        </summary>
                        <div className="px-6 pb-6 text-gray-600 dark:text-gray-300 leading-relaxed border-t border-gray-100 dark:border-gray-800 pt-4">
                            {faq.answer}
                        </div>
                    </details>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;