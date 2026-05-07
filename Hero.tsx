import { ArrowUpRight, Instagram, Youtube, Music2, Share2, PlayCircle, Pin } from "lucide-react";
import { motion } from "motion/react";

const creatorImages = [
  "https://images.unsplash.com/photo-1529139570502-d464d2739bab?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop"
];

const partners = [
  { icon: Pin, color: "#E60023" },
  { icon: Youtube, color: "#FF0000" },
  { icon: Share2, color: "#FFFC00" }, // Snapchat-ish
  { icon: Instagram, color: "#E4405F" },
  { icon: PlayCircle, color: "#0081FB" }, // Meta-ish
  { icon: Music2, color: "#000000" } // TikTok
];

export function Hero() {
  return (
    <section className="pt-32 pb-20 sm:pt-48 sm:pb-32 px-4 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-6xl sm:text-8xl font-black text-stone-900 leading-[0.9] tracking-tighter mb-6">
                We humanize brands
              </h1>
              <p className="text-xl sm:text-2xl text-stone-600 max-w-lg font-medium leading-relaxed">
                Founded by creators, we are a global marketing agency with creators at its core
                – built for creative, media & commerce
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
            >
              <button className="bg-brand-pink text-white px-8 py-4 rounded-full text-lg font-bold flex items-center gap-3 hover:bg-rose-600 transition-colors">
                <ArrowUpRight className="w-5 h-5" />
                Get in touch
              </button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              <p className="text-xs font-bold text-stone-400 uppercase tracking-widest">Global partners of</p>
              <div className="flex items-center gap-4">
                {partners.map((partner, i) => (
                  <div key={i} className="w-8 h-8 flex items-center justify-center rounded-full bg-stone-50 border border-stone-100 shadow-sm hover:scale-110 transition-transform">
                    <partner.icon className="w-4 h-4" style={{ color: partner.color }} />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          
          {/* Right Collage */}
          <div className="relative h-[600px] w-full hidden md:block">
            <div className="grid grid-cols-2 gap-4 h-full">
              {creatorImages.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9, y: 20 * (i + 1) }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 * i, ease: "easeOut" }}
                  className={`relative overflow-hidden rounded-3xl ${i % 2 === 0 ? "mt-8 mb-[-32px]" : "mb-8 mt-[-32px]"}`}
                >
                  <img 
                    src={img} 
                    alt="Creator" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
                </motion.div>
              ))}
            </div>
            
            {/* Floaties */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 bg-brand-green p-6 rounded-full shadow-xl rotate-12"
            >
              <div className="text-stone-900 font-black text-xs">IT'S TIME TO<br />HARD LAUNCH...</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
