import { Link } from 'react-router-dom';

const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.532 5.862L.057 23.57l5.863-1.538A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.898 0-3.68-.513-5.21-1.408l-.374-.222-3.48.913.93-3.394-.243-.392A9.955 9.955 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
  </svg>
);

const socials = [
  { icon: <InstagramIcon />, href: 'https://instagram.com/bizvoraa', label: 'Instagram' },
  { icon: <WhatsAppIcon />, href: 'https://wa.me/919353974453', label: 'WhatsApp' },
];

export default function Footer() {
  return (
    <footer className="bg-brand-gray border-t border-white/5 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg width="30" height="30" viewBox="0 0 100 100" fill="none">
                <rect x="10" y="55" width="28" height="38" rx="3" transform="rotate(-20 10 55)" fill="#7CFC00"/>
                <rect x="40" y="30" width="28" height="50" rx="3" transform="rotate(-20 40 30)" fill="#7CFC00"/>
                <rect x="55" y="8" width="22" height="35" rx="3" transform="rotate(-20 55 8)" fill="white"/>
              </svg>
              <span className="font-display text-xl tracking-widest">
                <span className="text-white">BIZ</span>
                <span className="text-green">Vora</span>
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Empowering businesses to grow smarter through innovative digital solutions and strategic expertise.
            </p>
            <div className="flex gap-3 mt-5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 flex items-center justify-center rounded border border-white/10 text-gray-400 hover:text-[#7CFC00] hover:border-[#7CFC00] transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-lg tracking-widest text-white mb-4">QUICK LINKS</h4>
            <ul className="space-y-2">
              {[['Home', '/'], ['Services', '/services'], ['About', '/about'], ['Contact', '/contact']].map(([label, path]) => (
                <li key={path}>
                  <Link to={path} className="text-gray-400 hover:text-[#7CFC00] text-sm transition-colors duration-200">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg tracking-widest text-white mb-4">CONTACT US</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>📧 samshamaray@gmail.com</li>
              <li>📞 +91 9353974453</li>
              <li>📍 Nelamangla, Bangalore 562123</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <p>© {new Date().getFullYear()} BizVora. All rights reserved.</p>
          <p>Built with ❤️ for growing businesses.</p>
        </div>
      </div>
    </footer>
  );
}
