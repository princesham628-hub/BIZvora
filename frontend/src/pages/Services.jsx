import { Link } from 'react-router-dom';
import {
  Globe, BarChart2, Megaphone, Code2, Search, HeartHandshake,
  ArrowRight
} from 'lucide-react';

const services = [
  {
    icon: <Megaphone size={32} />,
    title: 'Digital Marketing Services',
    items: [
      'Social Media Management',
      'Performance Marketing',
      'Lead Generation',
      'WhatsApp Marketing',
      'Influencer / Collaboration Marketing',
    ],
  },
  {
    icon: <HeartHandshake size={32} />,
    title: 'Branding & Creative Services',
    items: [
      'Basic Branding & Setup',
      'Graphic Design',
      'Video Editing',
      'Photography & Videography',
    ],
  },
  {
    icon: <Globe size={32} />,
    title: 'Website & Online Presence',
    items: [
      'Website / Landing Page Creation',
      'Google Business Profile Optimization',
      'E-Commerce Setup',
    ],
  },
  {
    icon: <BarChart2 size={32} />,
    title: 'Business Automation & Tools',
    items: [
      'Billing Setup',
      'WhatsApp Handling / Customer Support System',
      'Employee Management System',
    ],
  },
  {
    icon: <Search size={32} />,
    title: 'Business Growth & Consulting',
    items: [
      'Business Consulting',
      'Idea Generation',
      'Data Analysis',
    ],
  },
  {
    icon: <Megaphone size={32} />,
    title: 'Marketing & Sales Expansion',
    items: [
      'Affiliate Marketing',
      'Reselling Business',
    ],
  },
  {
    icon: <Globe size={32} />,
    title: 'Career & Income Opportunities',
    items: [
      'Freelancing',
      'Investment Guidance',
    ],
  },
];

export default function Services() {
  return (
    <div>
      {/* Header */}
      <section className="relative pt-36 pb-20 text-center overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(124,252,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(124,252,0,0.03) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
        <div className="relative max-w-4xl mx-auto px-6">
          <p className="text-[#7CFC00] uppercase tracking-widest text-sm font-medium mb-4">What We Offer</p>
          <h1 className="section-title text-white mb-6">
            OUR <span className="text-[#7CFC00]">SERVICES</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            End-to-end solutions designed to accelerate your growth, strengthen your brand, and future-proof your business.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="card-dark p-7 flex flex-col">
              <div className="text-[#7CFC00] mb-5 p-3 w-fit rounded-lg" style={{ background: 'rgba(124,252,0,0.08)' }}>
                {s.icon}
              </div>
              <h3 className="text-white font-semibold text-xl mb-3">{s.title}</h3>
              <ul className="text-gray-400 text-sm leading-relaxed mb-5 flex-grow space-y-2">
                {s.items.map((item) => (
                  <li key={item} className="list-disc list-inside">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-5">Not sure which service fits your needs?</p>
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
            Let's Talk <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
