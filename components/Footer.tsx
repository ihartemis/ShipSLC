import React from 'react';
import { Link } from 'react-router-dom';
import { Mountain, X, Mail } from 'lucide-react';
import { LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 dark:bg-black border-t border-gray-200 dark:border-gray-800 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="p-1.5 bg-gray-900 dark:bg-white rounded-lg text-white dark:text-black">
                <Mountain size={20} strokeWidth={2.5} />
              </div>
              <span className="font-heading font-bold text-xl tracking-tight text-gray-900 dark:text-white">
                ShipSLC
              </span>
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              The community for product builders in Salt Lake City. Let's ship together.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-4">Community</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><Link to="/join" className="hover:text-brand-grape">Join Slack</Link></li>
              <li><Link to="/events" className="hover:text-brand-grape">Events</Link></li>
              <li><a href={LINKS.MEETUP} target="_blank" rel="noreferrer" className="hover:text-brand-grape">Meetup Group</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><Link to="/about" className="hover:text-brand-grape">About</Link></li>
              <li><Link to="/about#community-guidelines" className="hover:text-brand-grape">Community Guidelines</Link></li>
              <li><Link to="/about#faq" className="hover:text-brand-grape">FAQ</Link></li>
              <li><Link to="/brand" className="hover:text-brand-grape">Brand Assets</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href={LINKS.TWITTER} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-brand-grape transition-colors">
                <X size={20} />
              </a>
              <a href="mailto:ihartemis@gmail.com" className="text-gray-400 hover:text-brand-grape transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 dark:text-gray-500">
          <p>&copy; {new Date().getFullYear()} ShipSLC. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed with 💜 in SLC.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;