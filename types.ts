import { LucideIcon } from 'lucide-react';

export enum ProgramType {
  BUILD_SESSION = 'Build Session',
  WORKSHOP = 'Workshop',
  CLINIC = 'Clinic / AMA',
  DEMO_NIGHT = 'Demo Night'
}

export interface Program {
  id: string;
  title: string;
  type: ProgramType;
  description: string;
  icon: LucideIcon;
  frequency: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  type: ProgramType;
  description: string;
  schedule?: { time: string; activity: string }[];
  prerequisites?: string[];
  rsvpLink: string;
  isPast?: boolean;
}

export interface MemberShip {
  id: string;
  name: string;
  maker: string;
  description: string;
  imageUrl: string;
  url: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}