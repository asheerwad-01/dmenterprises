import React from 'react';
import { motion } from 'motion/react';
import { Award, Users, Package, Sliders, Truck, CheckCircle, ChevronRight } from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'Years of Excellence', value: '10+', icon: <Award size={20} className="text-primary" />, desc: 'Serving customers across India' },
    { label: 'Happy Customers', value: '25,000+', icon: <Users size={20} className="text-primary" />, desc: 'Trusted by businesses & individuals' },
    { label: 'Products Delivered', value: '50,000+', icon: <Package size={20} className="text-primary" />, desc: 'Trophies, gifts & stamps delivered' },
    { label: 'Customization', value: '100%', icon: <Sliders size={20} className="text-primary" />, desc: 'Tailor-made solutions for every need' },
    { label: 'Pan India Delivery', value: 'All Cities', icon: <Truck size={20} className="text-primary" />, desc: 'Fast & reliable shipping across India' },
  ];

  return (
    <main className="pt-32 pb-20">
      {/* Hero */}
      <section className="px-6 lg:px-10 py-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">Who We Are</span>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-navy-dark leading-none tracking-tighter">
                About <span className="text-primary italic">DM</span><br />Enterprises
              </h1>
              <p className="text-gray-500 font-medium leading-relaxed text-justify">
                DM Enterprises is your trusted partner for trophies, customized gifts, and rubber stamps with premium quality and unmatched service.
              </p>
            </div>
            <div className="flex gap-4">
              <button className="btn-primary">Our Story <ChevronRight size={18} /></button>
              <button className="btn-secondary">Why Choose Us</button>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="glass rounded-[32px] p-4 relative">
                <img 
                    src="https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=1200&auto=format&fit=crop" 
                    alt="Workplace" 
                    className="rounded-[28px] w-full"
                />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 lg:px-10 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="glass rounded-[32px] p-8 lg:p-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-2 group">
                <div className="bg-primary/5 p-4 rounded-2xl group-hover:bg-primary/10 transition-all">{stat.icon}</div>
                <div className="flex flex-col">
                  <span className="text-2xl font-extrabold text-navy-dark tracking-tight">{stat.value}</span>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none mt-1">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="px-6 lg:px-10 py-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 order-2 lg:order-1">
             <div className="glass rounded-[32px] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop" className="w-full" />
             </div>
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2 flex flex-col gap-6">
             <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">Our Story</span>
             <h2 className="text-4xl font-extrabold text-navy-dark tracking-tighter">Built on <span className="text-primary">Passion</span>. Driven by <span className="text-primary italic">Quality</span>.</h2>
             <p className="text-gray-500 leading-relaxed font-medium text-justify">
                Founded with a vision to deliver excellence in every product, DM Enterprises has grown into a trusted name in the industry. From elegant trophies to personalized gifts and precise rubber stamps, we combine craftsmanship, innovation and attention to detail in everything we do.
             </p>
             <p className="text-gray-500 leading-relaxed font-medium">
                Our commitment is simple - deliver premium quality products, on time, every time, and make every achievement memorable.
             </p>
             <div className="flex flex-col gap-2 mt-4">
                <span className="text-2xl font-script text-primary italic font-semibold">DM Enterprises</span>
                <span className="text-xs font-bold text-navy-dark uppercase tracking-[0.2em]">Team DM Enterprises</span>
             </div>
          </div>
        </div>
      </section>

      {/* Mission Vision */}
      <section className="px-6 lg:px-10 py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-10 flex flex-col gap-6 rounded-[24px]">
                <div className="bg-blue-100/50 p-4 rounded-full w-fit text-primary"><Award size={32} /></div>
                <h3 className="text-2xl font-extrabold text-navy-dark tracking-tight">Our Mission</h3>
                <p className="text-gray-500 font-medium">To provide high-quality, customized products that celebrate achievements and strengthen relationships.</p>
            </div>
            <div className="glass-card p-10 flex flex-col gap-6 rounded-[24px] bg-gold/5 border-gold/10">
                <div className="bg-gold/10 p-4 rounded-full w-fit text-gold"><Sliders size={32} /></div>
                <h3 className="text-2xl font-extrabold text-navy-dark tracking-tight">Our Vision</h3>
                <p className="text-gray-500 font-medium">To be India's most trusted brand for trophies, customized gifts and rubber stamps, known for quality and service.</p>
            </div>
            <div className="glass-card p-10 flex flex-col gap-6 rounded-[24px] bg-green-50/50 border-green-100">
                <div className="bg-green-100/50 p-4 rounded-full w-fit text-green-600"><CheckCircle size={32} /></div>
                <h3 className="text-2xl font-extrabold text-navy-dark tracking-tight">Our Values</h3>
                <ul className="flex flex-col gap-2 text-gray-500 font-medium text-sm">
                    <li>• Quality First</li>
                    <li>• Customer Satisfaction</li>
                    <li>• Integrity & Trust</li>
                    <li>• Innovation & Creativity</li>
                </ul>
            </div>
        </div>
      </section>
    </main>
  );
}
