import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white pt-20 pb-10 px-6 lg:px-20 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-[-10%] left-[-5%] w-[30%] h-[40%] bg-primary/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-5%] right-[-5%] w-[40%] h-[50%] bg-gold/10 blur-[150px] rounded-full" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        {/* Company Info */}
        <div className="flex flex-col gap-6">
          <Link to="/" className="flex items-center bg-white p-2 rounded-lg w-fit">
            <img
              src="/DM Logo.png"
              alt="DM Enterprises"
              className="h-8 lg:h-10 w-auto object-contain"
            />
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed">
            DM Enterprises is your trusted partner for trophies, customized gifts, and rubber stamps with premium quality you can rely on.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 bg-white/5 hover:bg-primary transition-all rounded-full"><Facebook size={18} /></a>
            <a href="#" className="p-2 bg-white/5 hover:bg-primary transition-all rounded-full"><Instagram size={18} /></a>
            <a href="#" className="p-2 bg-white/5 hover:bg-primary transition-all rounded-full"><Twitter size={18} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-bold mb-6 tracking-tight">Quick Links</h4>
          <ul className="flex flex-col gap-4 text-gray-400 text-sm">
            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
            <li><Link to="/shop" className="hover:text-primary transition-colors">Shop</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            <li><Link to="#" className="hover:text-primary transition-colors">Bulk Orders</Link></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h4 className="text-lg font-bold mb-6 tracking-tight">Categories</h4>
          <ul className="flex flex-col gap-4 text-gray-400 text-sm">
            <li><Link to="/trophies" className="hover:text-primary transition-colors">Trophies & Awards</Link></li>
            <li><Link to="/trophies" className="hover:text-primary transition-colors">Mementos</Link></li>
            <li><Link to="/gifts" className="hover:text-primary transition-colors">Customized Gifts</Link></li>
            <li><Link to="/gifts" className="hover:text-primary transition-colors">Keyrings</Link></li>
            <li><Link to="/stamps" className="hover:text-primary transition-colors">Rubber Stamps</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-bold mb-6 tracking-tight">Contact Us</h4>
          <ul className="flex flex-col gap-6">
            <li>
              <a href="tel:+919876543210" className="flex gap-4 group cursor-pointer w-fit">
                <div className="bg-primary/10 p-2 rounded-lg text-primary h-fit group-hover:bg-primary group-hover:text-white transition-all"><Phone size={18} /></div>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500 font-semibold uppercase">Call Us</span>
                  <span className="text-sm group-hover:text-primary transition-colors">+91 98765 43210</span>
                </div>
              </a>
            </li>
            <li>
              <a href="mailto:info@dmenterprises.com" className="flex gap-4 group cursor-pointer w-fit">
                <div className="bg-primary/10 p-2 rounded-lg text-primary h-fit group-hover:bg-primary group-hover:text-white transition-all"><Mail size={18} /></div>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500 font-semibold uppercase">Email Us</span>
                  <span className="text-sm group-hover:text-primary transition-colors">dmsonepur@gmail.com</span>
                </div>
              </a>
            </li>
            <li className="flex gap-4 items-center">
              <div className="bg-primary/10 p-2 rounded-lg text-primary h-fit"><MapPin size={18} /></div>
              <div className="flex flex-col">
                <span className="text-xs text-gray-500 font-semibold uppercase">Address</span>
                <span className="text-sm text-gray-400">Kacheri Chowk, Sonepur-767017, Odisha</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-gray-500 text-xs">© 2011 DM Enterprises. All Rights Reserved.</p>
        <div className="flex gap-4 items-center">
          <span className="text-[8px] font-bold text-gray-600 uppercase tracking-widest hidden sm:inline">Secure Payments</span>
          <div className="flex gap-2">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Visa_acceptance_logo_%282015_onwards%29.svg/250px-Visa_acceptance_logo_%282015_onwards%29.svg.png" className="h-4 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all pointer-events-none" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/MasterCard_early_1990s_logo.svg/250px-MasterCard_early_1990s_logo.svg.png" className="h-4 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all pointer-events-none" />
          </div>
        </div>
      </div>
    </footer>
  );
}
