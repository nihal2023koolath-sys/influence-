import { ArrowUpRight, Menu } from "lucide-react";
import { motion } from "motion/react";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      {/* Alert Banner */}
      <div className="bg-stone-50 py-2 border-b border-stone-200 text-[10px] sm:text-[11px] text-center font-medium tracking-wide text-stone-600 px-4">
        Our team will only ever reach out from our @influencer.com email or our official @influencer Instagram handle.
      </div>
      
      {/* Main Nav */}
      <div className="bg-white/80 backdrop-blur-md border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 h-16 sm:h-20 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="/" className="flex items-center gap-1">
              <span className="text-brand-pink text-2xl font-black italic tracking-tighter">influencer</span>
            </a>
            
            <div className="hidden lg:flex items-center gap-6">
              {["About", "Services", "Technology", "Work", "Resources", "Careers"].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className="text-[13px] font-medium text-stone-600 hover:text-stone-900 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <a href="/signin" className="hidden sm:block text-[13px] font-medium text-stone-600 hover:text-stone-900">
              Sign In
            </a>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#C1FF72] text-stone-900 px-4 py-2 sm:px-6 sm:py-2.5 rounded-full text-[13px] font-bold flex items-center gap-2"
            >
              <ArrowUpRight className="w-4 h-4" />
              Get in touch
            </motion.button>
            <button className="lg:hidden p-2 text-stone-600">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
