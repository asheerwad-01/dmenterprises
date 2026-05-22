import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, ChevronRight } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, phone, subject, message } = formData;

    // Construct the message
    const whatsappMessage = `*New Contact Inquiry*\n\n` +
      `*Name:* ${name}\n` +
      `*Email:* ${email}\n` +
      `*Phone:* ${phone}\n` +
      `*Subject:* ${subject}\n\n` +
      `*Message:*\n${message}`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Company WhatsApp number (using the one from the page)
    const whatsappNumber = '919658889357';

    // Redirect to WhatsApp
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <main className="pt-32 pb-20">
      <section className="px-6 lg:px-10 py-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 flex flex-col gap-6">
            <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">We're Here to Help</span>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-navy-dark leading-none tracking-tighter">
              Let's Create Something <br />
              <span className="text-primary italic">Extraordinary</span> <br />
              <span className="text-navy-dark">Together</span>
            </h1>
            <p className="text-gray-500 font-medium leading-relaxed max-w-sm">
              Have a question or need assistance? Reach out to us and our team will get back to you as soon as possible.
            </p>
          </div>
          <div className="lg:w-1/2">
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 blur-[80px] rounded-full -z-10" />
                <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200" alt="Contact" className="rounded-[32px] drop-shadow-2xl grayscale" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-10 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Form */}
          <div className="lg:col-span-7 glass rounded-[32px] p-8 lg:p-12 flex flex-col gap-10">
            <div className="flex items-center gap-4">
              <div className="bg-primary/10 p-4 rounded-2xl text-primary"><Send size={24} /></div>
              <div className="flex flex-col">
                <h3 className="text-2xl font-extrabold text-navy-dark tracking-tight">Send Us a Message</h3>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-widest leading-none">Fill in the details below and we'll get back to you shortly.</p>
              </div>
            </div>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleWhatsAppRedirect}>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold text-navy-dark/60 uppercase tracking-widest ml-1">Your Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Rahul Sharma"
                  className="glass-card bg-white/50 border-white/30 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold text-navy-dark/60 uppercase tracking-widest ml-1">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="rahul@example.com"
                  className="glass-card bg-white/50 border-white/30 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold text-navy-dark/60 uppercase tracking-widest ml-1">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 96588 89357"
                  className="glass-card bg-white/50 border-white/30 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold text-navy-dark/60 uppercase tracking-widest ml-1">Subject *</label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Bulk Inquiry"
                  className="glass-card bg-white/50 border-white/30 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                />
              </div>
              <div className="md:col-span-2 flex flex-col gap-2">
                <label className="text-[10px] font-bold text-navy-dark/60 uppercase tracking-widest ml-1">Your Message *</label>
                <textarea
                  rows={5}
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  className="glass-card bg-white/50 border-white/30 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium resize-none"
                ></textarea>
              </div>
              <button type="submit" className="btn-primary w-fit mt-4">Send Message <ChevronRight size={18} /></button>
            </form>
          </div>

          {/* Info Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="glass rounded-[32px] p-8 flex flex-col gap-8 h-full">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-4 rounded-2xl text-primary"><Phone size={24} /></div>
                <div className="flex flex-col">
                  <h3 className="text-2xl font-extrabold text-navy-dark tracking-tight">Contact Information</h3>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-widest leading-none">We're always here to help and assist you.</p>
                </div>
              </div>

              <div className="flex flex-col gap-8">
                <div className="flex gap-4 group">
                  <div className="glass-card p-3 rounded-xl text-primary h-fit group-hover:bg-primary group-hover:text-white transition-all"><MapPin size={22} /></div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">Our Address</span>
                    <p className="text-navy-dark font-bold text-sm mt-1">DM Enterprises, Near Kacheri Chowk, Sonepur-767017, Odisha</p>
                  </div>
                </div>
                <a href="tel:+919658889357" className="flex gap-4 group cursor-pointer">
                  <div className="glass-card p-3 rounded-xl text-primary h-fit group-hover:bg-primary group-hover:text-white transition-all"><Phone size={22} /></div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">Call Us</span>
                    <p className="text-navy-dark font-bold text-sm mt-1 transition-colors group-hover:text-primary">+91 96588 89357</p>
                    <p className="text-[10px] text-gray-400 font-medium tracking-tight">Mon - Sat: 9:00 AM to 6:00 PM</p>
                  </div>
                </a>
                <a href="mailto:dmsonepur@gmail.com" className="flex gap-4 group cursor-pointer">
                  <div className="glass-card p-3 rounded-xl text-primary h-fit group-hover:bg-primary group-hover:text-white transition-all"><Mail size={22} /></div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">Email Us</span>
                    <p className="text-navy-dark font-bold text-sm mt-1 transition-colors group-hover:text-primary">dmsonepur@gmail.com</p>
                    <p className="text-[10px] text-gray-400 font-medium tracking-tight">We reply within 24 hours</p>
                  </div>
                </a>
                <div className="flex gap-4 group">
                  <div className="glass-card p-3 rounded-xl text-primary h-fit group-hover:bg-primary group-hover:text-white transition-all"><Clock size={22} /></div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">Business Hours</span>
                    <p className="text-navy-dark font-bold text-sm mt-1">Mon - Sat: 9:00 AM - 6:00 PM</p>
                    <p className="text-navy-dark font-bold text-sm">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="px-6 lg:px-10 py-12">
        <div className="max-w-7xl mx-auto glass rounded-[32px] p-4 h-[500px] relative overflow-hidden">
          {/* Fake Map Background */}
          <div className="absolute inset-0 bg-[#E8EAED] flex items-center justify-center">
            <div className="absolute inset-0 opacity-20 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=28.6139,77.2090&zoom=13&size=1200x500&scale=2&style=feature:all|element:all|saturation:-100|lightness:10')] bg-center bg-cover" />
            <div className="relative z-10 flex flex-col items-center gap-4">
              <div className="bg-primary p-4 rounded-full text-white shadow-[0_20px_50px_rgba(30,99,255,0.4)] animate-bounce"><MapPin size={32} /></div>
              <div className="glass-card p-4 rounded-2xl flex flex-col items-center">
                <span className="font-bold text-navy-dark">DM Enterprises</span>
                <span className="text-[10px] text-gray-500 font-bold uppercase tracking-tight">Kacheri Chowk, Sonepur-767017, Odisha</span>
              </div>
            </div>
          </div>

          {/* Overlay Info */}
          <div className="absolute top-10 left-10 glass-card p-8 rounded-[24px] max-w-sm hidden md:flex flex-col gap-4">
            <span className="text-xs font-bold text-primary uppercase tracking-widest leading-none">Visit Us</span>
            <h3 className="text-3xl font-extrabold text-navy-dark tracking-tighter leading-none mt-1">Our Location</h3>
            <p className="text-gray-500 text-sm font-medium">We'd love to meet you! Visit our office or connect with us for any inquiries.</p>
            <button className="btn-secondary w-fit text-xs px-6 py-2.5 mt-2">Get Directions <ChevronRight size={14} /></button>
          </div>
        </div>
      </section>
    </main>
  );
}
