import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Users, Zap, Shield } from 'lucide-react';

const features = [
  { icon: <TrendingUp size={28} />, title: 'Data-Driven Growth', desc: 'We leverage analytics and insights to craft strategies that deliver measurable ROI.' },
  { icon: <Zap size={28} />, title: 'Rapid Execution', desc: 'From concept to launch, we move fast without sacrificing quality or precision.' },
  { icon: <Users size={28} />, title: 'Expert Team', desc: 'Our specialists bring cross-industry expertise tailored to your unique challenges.' },
  { icon: <Shield size={28} />, title: 'Trusted Partner', desc: 'We build long-term partnerships based on transparency, results, and integrity.' },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(124,252,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(124,252,0,0.04) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(124,252,0,0.06) 0%, transparent 70%)' }} />

        <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 border border-[#7CFC00]/30 bg-[#7CFC00]/5 rounded-full px-4 py-1.5 mb-8 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-[#7CFC00] animate-pulse" />
              <span className="text-xs text-[#7CFC00] font-medium tracking-widest uppercase">Grow Smarter Today</span>
            </div>

            <h1 className="font-display text-[clamp(3rem,8vw,7rem)] leading-none tracking-wider mb-6 animate-fade-up opacity-0-start" style={{ animationFillMode: 'forwards' }}>
              <span className="text-white">Grow Your Business</span><br />
              <span className="text-[#7CFC00]">Faster with Bizvora</span>
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed max-w-xl mb-10 animate-fade-up opacity-0-start animate-delay-200" style={{ animationFillMode: 'forwards' }}>
              We help local businesses generate leads, increase visibility, and boost sales using smart digital strategies.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-up opacity-0-start animate-delay-300" style={{ animationFillMode: 'forwards' }}>
              <Link to="/services" className="btn-primary flex items-center gap-2">
                Explore Services <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn-outline">
                Talk to Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why BizVora */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="mb-14 text-center">
          <p className="text-[#7CFC00] uppercase tracking-widest text-sm font-medium mb-3">Why Choose Us</p>
          <h2 className="section-title text-white">
            THE <span className="text-[#7CFC00]">BIZVORA</span> ADVANTAGE
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((f) => (
            <div key={f.title} className="card-dark p-8 flex gap-5">
              <div className="text-[#7CFC00] mt-1 flex-shrink-0">{f.icon}</div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-2">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="relative rounded-xl overflow-hidden border border-[#7CFC00]/20 p-12 text-center"
          style={{ background: 'linear-gradient(135deg, rgba(124,252,0,0.05) 0%, rgba(0,0,0,0) 100%)' }}>
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10"
            style={{ background: 'radial-gradient(circle, #7CFC00, transparent)', transform: 'translate(30%, -30%)' }} />
          <h2 className="section-title text-white mb-4">READY TO <span className="text-[#7CFC00]">SCALE?</span></h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">Let's build something extraordinary together. Our team is ready to turn your vision into results.</p>
          <Link to="/contact" className="btn-primary animate-pulse-green">
            Start Your Journey →
          </Link>
        </div>
      </section>
    </div>
  );
}
