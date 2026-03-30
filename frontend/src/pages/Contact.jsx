import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [serverMsg, setServerMsg] = useState('');

  const validate = () => {
    const e = {};
    if (!form.name.trim() || form.name.trim().length < 2)
      e.name = 'Name must be at least 2 characters.';
    if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email))
      e.email = 'Please enter a valid email address.';
    if (!form.message.trim() || form.message.trim().length < 10)
      e.message = 'Message must be at least 10 characters.';
    return e;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus('loading');

    try {
      const formEl = e.target;
      const formData = new FormData(formEl);
      // Netlify form submission endpoint from static HTML form
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      });

      setStatus('success');
      setServerMsg('Thanks! Your message has been sent successfully.');
      setForm({ name: '', email: '', message: '' });
      setErrors({});
    } catch (err) {
      setStatus('error');
      setServerMsg('Something went wrong. Please try again.');
    }
  };

  return (
    <div>
      {/* Header */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(124,252,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(124,252,0,0.03) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <p className="text-[#7CFC00] uppercase tracking-widest text-sm font-medium mb-4">Reach Out</p>
          <h1 className="section-title text-white mb-6">
            GET IN <span className="text-[#7CFC00]">TOUCH</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Have a project in mind? We'd love to hear about it. Send us a message and we'll get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-5">
            {[
              { icon: <Mail size={20} />, label: 'Email Us', value: 'samshamaray@gmail.com', href: 'mailto:samshamaray@gmail.com' },
              { icon: <Phone size={20} />, label: 'WhatsApp', value: '+91 9353974453', href: 'https://wa.me/919353974453' },
              { icon: <MapPin size={20} />, label: 'Visit Us', value: 'Nelamangla, Bangalore 562123', href: '#' },
            ].map((c) => (
              <a key={c.label} href={c.href} className="card-dark p-6 flex items-start gap-4 block group">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 text-[#7CFC00] group-hover:bg-[#7CFC00] group-hover:text-black transition-all duration-200"
                  style={{ background: 'rgba(124,252,0,0.08)' }}>
                  {c.icon}
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">{c.label}</p>
                  <p className="text-white text-sm font-medium">{c.value}</p>
                </div>
              </a>
            ))}

            {/* Social Links */}
            <div className="card-dark p-6">
              <p className="text-gray-500 text-xs uppercase tracking-widest mb-4">Follow Us</p>
              <div className="flex gap-3">
                {[
                  { label: 'IG', href: 'https://instagram.com/bizvoraa' },
                  { label: 'WA', href: 'https://wa.me/919353974453' },
                ].map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 rounded border border-white/10 flex items-center justify-center text-xs font-bold text-gray-400 hover:text-[#7CFC00] hover:border-[#7CFC00] transition-all duration-200">
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="card-dark p-8 md:p-10">
              {status === 'success' ? (
                <div className="text-center py-10">
                  <CheckCircle size={56} className="text-[#7CFC00] mx-auto mb-5" />
                  <h3 className="font-display text-3xl text-white tracking-wider mb-3">MESSAGE SENT!</h3>
                  <p className="text-gray-400 mb-8">{serverMsg}</p>
                  <button onClick={() => setStatus('idle')} className="btn-outline">
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  noValidate
                >
                  <h3 className="font-display text-2xl text-white tracking-widest mb-8">SEND A MESSAGE</h3>
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />

                  {/* Name */}
                  <div className="mb-5">
                    <label className="block text-xs text-gray-500 uppercase tracking-widest mb-2">
                      Full Name <span className="text-[#7CFC00]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={`w-full bg-[#111] border rounded-md px-4 py-3 text-white text-sm placeholder-gray-600 outline-none transition-all duration-200 focus:border-[#7CFC00] focus:ring-1 focus:ring-[#7CFC00]/30 ${
                        errors.name ? 'border-red-500' : 'border-white/10'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="mb-5">
                    <label className="block text-xs text-gray-500 uppercase tracking-widest mb-2">
                      Email Address <span className="text-[#7CFC00]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className={`w-full bg-[#111] border rounded-md px-4 py-3 text-white text-sm placeholder-gray-600 outline-none transition-all duration-200 focus:border-[#7CFC00] focus:ring-1 focus:ring-[#7CFC00]/30 ${
                        errors.email ? 'border-red-500' : 'border-white/10'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="mb-7">
                    <label className="block text-xs text-gray-500 uppercase tracking-widest mb-2">
                      Message <span className="text-[#7CFC00]">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell us about your project..."
                      className={`w-full bg-[#111] border rounded-md px-4 py-3 text-white text-sm placeholder-gray-600 outline-none transition-all duration-200 focus:border-[#7CFC00] focus:ring-1 focus:ring-[#7CFC00]/30 resize-none ${
                        errors.message ? 'border-red-500' : 'border-white/10'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Server Error */}
                  {status === 'error' && (
                    <div className="mb-5 p-4 rounded border border-red-500/30 bg-red-500/5 text-red-400 text-sm flex items-center gap-2">
                      <AlertCircle size={16} /> {serverMsg}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? (
                      <>
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} /> Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
