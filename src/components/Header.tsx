import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Search, User, Heart, ShoppingCart, Menu, X, Facebook, Instagram, Phone, Mail, Truck, Box, HelpCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'motion/react';
import { PRODUCTS } from '@/constants';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Trophies & Awards', path: '/trophies' },
    { name: 'Rubber Stamps', path: '/stamps' },
    { name: 'Customized Gifts', path: '/gifts' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const searchResults = searchQuery.length > 2
    ? PRODUCTS.filter(p =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase())
    ).slice(0, 5)
    : [];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Top Thin Bar */}
      <div className="hidden lg:flex justify-between items-center py-2 px-10 glass border-b border-white/20 text-[10px] uppercase tracking-wider font-semibold text-gray-500">
        <div className="flex gap-6 items-center">
          <span className="text-primary-dark">Welcome to DM Enterprises</span>
        </div>
        <div className="flex gap-6 items-center">
          <div className="flex items-center gap-3 ml-4 border-l border-white/30 pl-4">
            <Facebook size={12} className="cursor-pointer hover:text-primary transition-colors" />
            <Instagram size={12} className="cursor-pointer hover:text-primary transition-colors" />
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={cn(
        "transition-all duration-300 px-6 lg:px-10 py-4 flex justify-between items-center",
        isScrolled ? "glass m-2 lg:m-4 rounded-full shadow-lg" : "bg-transparent"
      )}>
        <Link to="/" className="flex items-center">
          <img
            src="DM Logo.png"
            alt="DM Enterprises"
            className="h-10 lg:h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => cn(
                "text-sm font-semibold tracking-tight transition-colors hover:text-primary",
                isActive ? "text-primary border-b-2 border-primary" : "text-navy-dark"
              )}
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4 lg:gap-6">
          <button
            onClick={() => setIsSearchOpen(true)}
            className="p-2 hover:bg-white/50 rounded-full transition-colors cursor-pointer"
          >
            <Search size={20} />
          </button>
          <button className="lg:hidden p-2 cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-navy-dark/95 backdrop-blur-xl flex flex-col p-10"
          >
            <div className="flex justify-between items-center w-full max-w-4xl mx-auto mb-12">
              <span className="text-white/40 text-xs font-bold uppercase tracking-[0.5em]">Search our collection</span>
              <button
                onClick={() => {
                  setIsSearchOpen(false);
                  setSearchQuery('');
                }}
                className="p-3 glass rounded-full text-white hover:bg-white/20 transition-all cursor-pointer"
              >
                <X size={24} />
              </button>
            </div>

            <div className="w-full max-w-4xl mx-auto flex flex-col gap-10">
              <div className="relative group">
                <input
                  autoFocus
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="What are you looking for?"
                  className="w-full bg-transparent border-b-2 border-white/20 text-4xl lg:text-6xl font-extrabold text-white outline-none pb-4 focus:border-primary transition-all placeholder:text-white/10 italic tracking-tighter"
                />
                <Search size={32} className="absolute right-0 top-1/2 -translate-y-full text-white/20 group-focus-within:text-primary transition-all" />
              </div>

              {/* Search Results */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {searchResults.map((result) => (
                  <Link
                    key={result.id}
                    to={`/product/${result.id}`}
                    onClick={() => setIsSearchOpen(false)}
                    className="glass p-4 rounded-3xl flex items-center gap-6 hover:bg-white/10 transition-all border-white/5"
                  >
                    <div className="w-20 h-20 bg-white rounded-2xl p-3 flex items-center justify-center shrink-0">
                      <img src={result.image} alt={result.title} className="max-h-full max-w-full object-contain" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold text-primary uppercase tracking-widest leading-none">{result.category}</span>
                      <h4 className="text-xl font-bold text-white tracking-tight mt-1">{result.title}</h4>
                      <span className="text-white/60 font-semibold mt-1">₹{result.price}</span>
                    </div>
                  </Link>
                ))}
                {searchQuery.length > 2 && searchResults.length === 0 && (
                  <div className="text-white/40 font-bold uppercase tracking-widest text-sm py-10">
                    No items found for "{searchQuery}"
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="fixed top-0 right-0 h-full w-64 glass lg:hidden p-8 flex flex-col gap-6"
          >
            <div className="flex justify-between items-center mb-4">
              <span className="font-bold text-navy-dark tracking-widest uppercase">Navigation</span>
              <button onClick={() => setIsMenuOpen(false)}><X size={24} /></button>
            </div>
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => cn(
                  "text-lg font-bold transition-colors",
                  isActive ? "text-primary" : "text-navy-dark"
                )}
              >
                {link.name}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
