import { CATEGORIES } from '@/constants';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function CategoryBar() {
  return (
    <section className="py-12 px-6 lg:px-10 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
            <div className="flex justify-between items-end">
                <div className="flex flex-col gap-2">
                    <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">Discover Our Range</span>
                    <h2 className="text-4xl font-extrabold text-navy-dark tracking-tighter">Shop by <span className="text-primary italic">Category</span></h2>
                </div>
                <Link to="/shop" className="text-sm font-bold text-primary hover:underline transition-all mb-1">Explore All Products</Link>
            </div>

            <div className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide no-scrollbar">
                {CATEGORIES.map((cat, i) => (
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        key={cat.id} 
                        className="flex-shrink-0"
                    >
                        <Link to={cat.path} state={{ selectedCategory: cat.title }} className="glass-card group flex flex-col items-center gap-4 p-6 rounded-3xl w-48 transition-all hover:-translate-y-2 hover:shadow-xl">
                            <div className="w-28 h-28 rounded-full bg-white relative overflow-hidden flex items-center justify-center p-4">
                                <img 
                                    src={cat.image} 
                                    alt={cat.title} 
                                    className="w-full h-full object-contain group-hover:scale-125 transition-transform duration-500" 
                                />
                            </div>
                            <div className="flex flex-col items-center text-center gap-1">
                                <h4 className="text-sm font-bold text-navy-dark tracking-tight">{cat.title}</h4>
                                <p className="text-[10px] font-medium text-gray-500 uppercase tracking-widest">{cat.subtitle}</p>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  );
}
