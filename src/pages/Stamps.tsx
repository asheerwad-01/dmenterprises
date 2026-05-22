import React from 'react';
import ProductCard from '@/components/ProductCard';
import { PRODUCTS } from '@/constants';
import { CheckCircle2, Package, History, Stamp, ArrowRight, ChevronDown, Filter } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Stamps() {
  const [selectedType, setSelectedType] = React.useState('All');
  const [sortBy, setSortBy] = React.useState('Popular');

  const stampCategories = [
    { title: 'Self Inking Stamps', subtitle: 'Fast & Convenient', image: 'https://www.thestampmaker.com/Images/products/TRODAT_PRINTY_4910.jpg.ashx?width=600&height=600&quality=90&format=webp&scale=canvas' },
    { title: 'Pre Inked Stamps', subtitle: 'Ready to Use', image: 'https://5.imimg.com/data5/SELLER/Default/2021/10/LO/CW/DN/35413928/trodat-flashy-red-pic-2--500x500.jpg' },
    { title: 'Wooden Handle Stamps', subtitle: 'Classic & Reliable', image: 'https://images.jdmagicbox.com/quickquotes/images_main/ergonomic-design-wooden-handle-rubber-stamp-2227254820-02lvhi1i.jpg' },
    { title: 'Pocket Stamps', subtitle: 'Compact & Portable', image: 'https://www.colop.com/media/catalog/product/cache/c42398b6d2e2aaadd2e3dde4cdef77a9/1/4/148591_detail1___colop-pocket-stamp-30-green-line_1.webp' },
    { title: 'Date & Number Stamps', subtitle: 'For Office Use', image: 'https://images.meesho.com/images/products/380804139/96rlg_512.webp?width=512' },
    { title: 'Specialty Stamps', subtitle: 'Custom Applications', image: 'https://m.media-amazon.com/images/I/619ZCQYZHRL.jpg' },
  ];

  const stamps = PRODUCTS.filter(p => {
    if (!p.category.includes('Stamp')) return false;
    if (selectedType === 'All') return true;
    return p.title.toLowerCase().includes(selectedType.toLowerCase().split(' ')[0]) ||
      p.category.toLowerCase().includes(selectedType.toLowerCase().split(' ')[0]);
  }).sort((a, b) => {
    if (sortBy === 'Price: Low to High') return a.price - b.price;
    if (sortBy === 'Price: High to Low') return b.price - a.price;
    return 0;
  });

  return (
    <main className="pt-32 pb-20">
      {/* Hero */}
      <section className="px-6 lg:px-10 py-16">
        <div className="max-w-7xl mx-auto glass rounded-[32px] overflow-hidden flex flex-col lg:flex-row items-center relative">
          <div className="lg:w-1/2 p-8 lg:p-20 flex flex-col gap-8 relative z-10">
            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-bold text-primary uppercase tracking-[0.4em]">Make Your Mark. Every Time.</span>
              <h1 className="text-4xl lg:text-6xl font-extrabold text-navy-dark tracking-tighter leading-none">
                High-Quality <span className="text-primary">Rubber Stamps</span> for Every <span className="italic text-gold">Need</span>
              </h1>
              <p className="text-gray-500 font-medium">Durable, precise and long-lasting stamps for business, office and personal use.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <button className="btn-primary">Shop Stamps <ArrowRight size={18} /></button>
              <button className="btn-secondary">Custom Design</button>
            </div>
          </div>
          <div className="lg:w-1/2 p-8 relative">
            <img src="https://images.unsplash.com/photo-1565538448774-67aa321ed3e2?q=80&w=1200" alt="Stamps" className="rounded-3xl shadow-2xl relative z-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-100/50 blur-[120px] -z-0" />
          </div>
        </div>
      </section>

      {/* Grid Header Info */}
      <section className="px-6 lg:px-10 py-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: <CheckCircle2 size={18} />, title: 'Crisp Impressions', desc: 'Clear & sharp prints' },
            { icon: <Package size={18} />, title: 'Premium Materials', desc: 'Built to last long' },
            { icon: <Stamp size={18} />, title: 'Customizable', desc: 'Text, logo & design' },
            { icon: <Package size={18} />, title: 'Quick Delivery', desc: 'Pan India shipping' },
          ].map((f, i) => (
            <div key={i} className="glass-card p-4 flex items-center gap-4 rounded-2xl">
              <div className="bg-primary/10 p-3 rounded-xl text-primary">{f.icon}</div>
              <div className="flex flex-col">
                <span className="text-[10px] font-extrabold text-navy-dark uppercase tracking-tight">{f.title}</span>
                <span className="text-[8px] text-gray-500 font-bold uppercase tracking-widest">{f.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="px-6 lg:px-10 py-12 text-center">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <h2 className="text-3xl font-extrabold text-navy-dark tracking-tighter">Shop by <span className="text-primary italic">Stamp Type</span></h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stampCategories.map((cat, i) => (
              <div
                key={i}
                onClick={() => setSelectedType(cat.title)}
                className={cn(
                  "glass-card p-6 rounded-[24px] flex flex-col items-center gap-4 group cursor-pointer transition-all border-2",
                  selectedType === cat.title ? "border-primary bg-primary/5" : "border-transparent hover:-translate-y-1"
                )}
              >
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center p-3 group-hover:scale-110 transition-transform">
                  <img src={cat.image} alt={cat.title} className="w-full h-full object-contain" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-bold text-navy-dark leading-tight">{cat.title}</span>
                  <span className="text-[8px] text-gray-500 font-bold uppercase tracking-widest leading-none">{cat.subtitle}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="px-6 lg:px-10 relative md:sticky top-[100px] z-30 transition-all">
        <div className="max-w-7xl mx-auto">
          <div className="glass rounded-full p-3 flex flex-wrap justify-between items-center px-8 gap-4">
            <div className="flex flex-wrap items-center gap-4">
              <button onClick={() => setSelectedType('All')} className="flex items-center gap-2 font-bold text-xs uppercase tracking-widest text-primary hover:underline cursor-pointer"><Filter size={14} /> Clear Filter</button>
              <div className="hidden sm:block h-4 w-[1px] bg-white/20" />
              <span className="text-xs font-bold text-navy-dark uppercase tracking-widest">Type: {selectedType}</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-widest">
                Sort by:
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-transparent text-navy-dark border-none outline-none font-bold uppercase tracking-widest cursor-pointer"
                >
                  <option>Popular</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product List */}
      <section className="px-6 lg:px-10 py-16">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stamps.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
          {stamps.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 font-bold uppercase tracking-[0.4em]">No stamps found in this category</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
