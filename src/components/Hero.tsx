import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="pt-32 pb-16 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto glass rounded-[32px] overflow-hidden relative">
        {/* Background Gradients */}
        <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[100%] bg-primary/10 blur-[100px] rounded-full" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[40%] h-[80%] bg-gold/10 blur-[120px] rounded-full" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 p-8 lg:p-16">
          <div className="lg:w-1/2 flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-2"
            >
              <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">Honor. Recognize. Celebrate.</span>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-navy-dark leading-[1.05] tracking-tighter">
                Awards, Gifts & <br />
                <span className="text-primary">Impressions</span> that <br />
                <span className="bg-gradient-to-r from-navy to-primary bg-clip-text text-transparent">Last</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-500 font-medium leading-relaxed max-w-md"
            >
              Premium quality trophies, customized gifts, and rubber stamps for every occasion and every achievement.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/shop" className="btn-primary">
                Shop Now <ArrowRight size={20} />
              </Link>
              <button className="btn-secondary">
                <Play size={16} className="fill-navy" /> Custom Order
              </button>
            </motion.div>

            {/* Feature Badges Small */}
            <div className="flex gap-6 mt-4">
              {['Premium Quality', 'Custom Designs', 'On-Time Delivery'].map((f, i) => (
                <div key={i} className="flex items-center gap-2 text-[10px] font-bold text-navy-dark/60 uppercase">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {f}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative z-20"
            >
              <img
                src="https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?q=80&w=1200&auto=format&fit=crop"
                alt="Product Composition"
                className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-3xl"
              />
              {/* Floating Element */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -top-10 -right-10 glass-card p-6 rotate-6 hidden lg:block"
              >
                <div className="flex flex-col items-center gap-1">
                  <span className="text-2xl">🏆</span>
                  <span className="text-[10px] font-bold text-navy-dark uppercase">Excellence</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Simple decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/20 rounded-full z-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-white/10 rounded-full z-0" />
          </div>
        </div>
      </div>
    </section>
  );
}
