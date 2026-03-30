import { Link } from 'react-router-dom';
import { Target, Eye, Lightbulb, Users } from 'lucide-react';

const values = [
  { icon: <Lightbulb size={22} />, title: 'Innovation', desc: 'We challenge the status quo and embrace new ideas to keep our clients ahead.' },
  { icon: <Target size={22} />, title: 'Results-First', desc: 'Every decision we make is guided by measurable outcomes for your business.' },
  { icon: <Users size={22} />, title: 'Collaboration', desc: 'We work as an extension of your team, not just another vendor.' },
  { icon: <Eye size={22} />, title: 'Transparency', desc: 'Honest communication and clear reporting — no surprises, no fluff.' },
];

export default function About() {
  return (
    <div>
      {/* Header */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(124,252,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(124,252,0,0.03) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
        <div className="relative max-w-6xl mx-auto px-6">
          <p className="text-[#7CFC00] uppercase tracking-widest text-sm font-medium mb-4">Who We Are</p>
          <h1 className="section-title text-white mb-6">
            ABOUT <span className="text-[#7CFC00]">BIZVORA</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            Founded in 2012, BizVora has helped hundreds of businesses across industries unlock their true potential through smart strategy and fearless execution.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card-dark p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 font-display text-8xl text-[#7CFC00]/5 select-none pointer-events-none leading-none">M</div>
            <div className="text-[#7CFC00] mb-4">
              <Target size={32} />
            </div>
            <h2 className="font-display text-2xl tracking-widest text-white mb-4">OUR MISSION</h2>
            <p className="text-gray-400 leading-relaxed">
              To democratize access to world-class business strategies and digital capabilities, empowering companies of every size to compete, grow, and win in the modern economy.
            </p>
          </div>

          <div className="card-dark p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 font-display text-8xl text-[#7CFC00]/5 select-none pointer-events-none leading-none">V</div>
            <div className="text-[#7CFC00] mb-4">
              <Eye size={32} />
            </div>
            <h2 className="font-display text-2xl tracking-widest text-white mb-4">OUR VISION</h2>
            <p className="text-gray-400 leading-relaxed">
              To be the most trusted growth partner for 10,000+ businesses globally by 2030 — building a world where great ideas are never held back by a lack of execution capability.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <p className="text-[#7CFC00] uppercase tracking-widest text-sm font-medium mb-3">What Drives Us</p>
          <h2 className="section-title text-white">CORE <span className="text-[#7CFC00]">VALUES</span></h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((v) => (
            <div key={v.title} className="card-dark p-7 text-center">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-[#7CFC00]"
                style={{ background: 'rgba(124,252,0,0.08)' }}>
                {v.icon}
              </div>
              <h3 className="text-white font-semibold mb-2">{v.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 pb-24 text-center">
        <h2 className="section-title text-white mb-4">LET'S <span className="text-[#7CFC00]">CONNECT</span></h2>
        <p className="text-gray-400 mb-8">Join hundreds of businesses already growing with BizVora.</p>
        <Link to="/contact" className="btn-primary">Get in Touch →</Link>
      </section>
    </div>
  );
}
