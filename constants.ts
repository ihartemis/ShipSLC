import { Hammer, Lightbulb, Stethoscope, Rocket, Zap, Code, Users, MonitorPlay } from 'lucide-react';
import { Program, ProgramType, Event, MemberShip, FAQItem } from './types';

export const LINKS = {
  SLACK: "https://join.slack.com/t/shipslc/shared_invite/zt-3ijkjzykm-6qva9qFZhZnBTTGUtYfyqw",
  MEETUP: "https://www.meetup.com/ship-slc/",
  TWITTER: "https://x.com/ShipSLC",
};

export const PROGRAMS: Program[] = [
  {
    id: 'vibe-code',
    title: 'Vibe Code Together',
    type: ProgramType.BUILD_SESSION,
    description: 'Weekly coworking build sessions. No agenda, just vibes and shipping. Get unstuck with help from others.',
    icon: Zap,
    frequency: 'Weekly'
  },
  {
    id: 'workshops',
    title: 'Deep Dive Workshops',
    type: ProgramType.WORKSHOP,
    description: 'Tactical sessions on marketing, growth, design systems, and modern stacks.',
    icon: Lightbulb,
    frequency: 'Monthly'
  },
  {
    id: 'clinics',
    title: 'Clinics & AMAs',
    type: ProgramType.CLINIC,
    description: 'Bring your blockers. Debugging help, tool recommendations, and Q&A with experts.',
    icon: Stethoscope,
    frequency: 'Bi-Weekly'
  },
  {
    id: 'demo-nights',
    title: 'Demo Nights',
    type: ProgramType.DEMO_NIGHT,
    description: 'Show what you shipped. Low-pressure, high-signal demos. No pitch decks, just product.',
    icon: Rocket,
    frequency: 'Quarterly'
  }
];

export const EVENTS: Event[] = [
  // Keeping structure for type safety, but data is deprecated in favor of Meetup
  {
    id: 'evt-1',
    title: 'Vibe Code Together',
    date: 'Every Thursday',
    time: '6:00 PM - 9:00 PM',
    location: 'Kiln SLC, Gateway',
    type: ProgramType.BUILD_SESSION,
    description: 'Join us for our weekly build session. Bring your laptop and your current project.',
    rsvpLink: LINKS.MEETUP,
    schedule: [
      { time: '6:00 PM', activity: 'Intros & Intentions' },
      { time: '6:30 PM', activity: 'Focused Build Time' },
      { time: '8:30 PM', activity: 'Optional Demos' }
    ]
  }
];

export const MEMBERSHIPS: MemberShip[] = [
  {
    id: 'ms-1',
    name: 'TaskFlow',
    maker: 'Sarah Jenkins',
    description: 'AI-powered task management for freelancers.',
    imageUrl: 'https://picsum.photos/id/48/400/300',
    url: '#'
  },
  {
    id: 'ms-2',
    name: 'TrailGuide',
    maker: 'Mike Ross',
    description: 'Offline maps for Utah hiking trails.',
    imageUrl: 'https://picsum.photos/id/28/400/300',
    url: '#'
  },
  {
    id: 'ms-3',
    name: 'DevDash',
    maker: 'Alex Chen',
    description: 'Analytics dashboard for GitHub repositories.',
    imageUrl: 'https://picsum.photos/id/3/400/300',
    url: '#'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Do I need to be technical?",
    answer: "No. This is a builder community—designers, PMs, founders, and no-code makers are welcome. Curiosity and momentum are what matter."
  },
  {
    question: "Can I just work quietly at build sessions?",
    answer: "Absolutely. You can stay heads-down the whole time and skip the share-out."
  },
  {
    question: "Won’t someone steal my idea?",
    answer: "Execution wins. We lean “build in public,” but you decide what to share."
  },
  {
    question: "Is there a cost?",
    answer: "Most events are free thanks to venue partners. Some specialized workshops may have a small fee to cover materials or food."
  },
  {
    question: "What should I bring?",
    answer: "Laptop, charger, and a clear next task."
  },
  {
    question: "How big are events?",
    answer: "We’re just getting started in building this thing, so events are pretty intimate. Build sessions are typically 5-10 people. Workshops will vary by topic and space."
  },
  {
    question: "Can I recruit or pitch my product?",
    answer: "Light mentions are fine if relevant and invited. No unsolicited sales or recruiting blasts."
  },
  {
    question: "Is this for beginners or advanced builders?",
    answer: "Both. We aim for a mixed room—come ready to learn and to help."
  },
  {
    question: "Will events be photographed or recorded?",
    answer: "We may take photos for recaps. Tell an organizer if you prefer not to be photographed; we’ll respect it."
  },
  {
    question: "How do I propose a talk/workshop?",
    answer: "Share a 3-bullet outline in #community-ideas or DM an organizer (topic, level, expected outcomes)."
  },
  {
    question: "How do I get help between events?",
    answer: "Use the Slack community. Quick questions welcome."
  },
  {
    question: "Can my company sponsor or host an event?",
    answer: "Yes—venue, snacks, or topic-aligned workshops are great. Contact us to connect."
  }
];