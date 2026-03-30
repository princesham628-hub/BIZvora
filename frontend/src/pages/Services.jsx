import { Link } from 'react-router-dom';
import {
  Globe, BarChart2, Megaphone, Code2, Search, HeartHandshake,
  ArrowRight
} from 'lucide-react';

const services = [
  {
    icon: <Globe size={32} />,
    title: 'Digital Strategy',
    desc: 'We craft comprehensive digital roadmaps that align your business goals with market opportunities. From audits to action plans, we set the foundation for growth.',
    tags: ['Roadmapping', 'Market Research', 'Competitor Analysis'],
  },
  {
    icon: <Code2 size={32} />,
    title: 'Web Development',
    desc: 'High-performance websites and web apps built with modern frameworks. We deliver fast, secure, scalable solutions that convert visitors into customers.',
    tags: ['React', 'Node.js', 'E-commerce', 'CMS'],
  },
  {
    icon: <Megaphone size={32} />,
    title: 'Digital Marketing',
    desc: 'Multi-channel campaigns that drive real results. We combine creativity with data to ensure your brand reaches the right audience at the right time.',
    tags: ['Social Media', 'Email Marketing', 'PPC', 'Content'],
  },
  {
    icon: <Search size={32} />,
    title: 'SEO & Analytics',
    desc: 'Dominate search rankings with our proven SEO methodology. We continuously analyze and optimize to ensure sustained organic growth.',
    tags: ['On-page SEO', 'Technical SEO', 'Google Analytics', 'Reporting'],
  },
  {
    icon: <BarChart2 size={32} />,
    title: 'Business Intelligence',
    desc: 'Turn raw data into actionable insights. Our BI solutions help you make smarter decisions faster with intuitive dashboards and deep analytics.',
    tags: ['Dashboards', 'KPI Tracking', 'Forecasting', 'Reporting'],
  },
  {
    icon: <HeartHandshake size={32} />,
    title: 'Brand Consulting',
    desc: 'Build a brand that resonates and endures. We help define your identity, messaging, and positioning to stand out in crowded markets.',
    tags: ['Identity', 'Messaging', 'Positioning', 'Design'],
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
              <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-grow">{s.desc}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {s.tags.map((tag) => (
                  <span key={tag} className="text-xs border border-white/10 text-gray-500 rounded px-2 py-1">
                    {tag}
                  </span>
                ))}
              </div>
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
