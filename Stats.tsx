import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { ArrowRight, Globe } from "lucide-react";

const brands = [
  { 
    name: "Spotify", 
    color: "bg-[#1DB954]", 
    image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?q=80&w=1200&auto=format&fit=crop",
    stats: ["$2M+ Generated in earned talent value", "37M Views driven by wrapped 2024 alone", "90% Post rate across a curated creator squad"]
  },
  { 
    name: "Coca Cola", 
    color: "bg-[#F40009]", 
    image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?q=80&w=1200&auto=format&fit=crop",
    stats: ["Global campaign reach: 1B+", "45% Increase in brand favorability", "Integrated across 12 markets"]
  },
  { 
    name: "Asos", 
    color: "bg-[#76EE00]", 
    image: "https://images.unsplash.com/photo-1534452286302-2f5005574341?q=80&w=1200&auto=format&fit=crop",
    stats: ["2.5x ROI on influencer spend", "15% Average click-through rate", "Sold out collection in 24 hours"]
  },
  { 
    name: "Monzo", 
    color: "bg-[#14233C]", 
    image: "https://images.unsplash.com/photo-1616077168079-7e09a677fb2c?q=80&w=1200&auto=format&fit=crop",
    stats: ["Number 1 banking app on TikTok", "5M+ Organic video views", "300% Growth in UGC content"]
  }
];

export function Stats() {
  const [activeBrand, setActiveBrand] = useState(0);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const xTranslate = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={containerRef} className="py-24 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-6xl font-black text-stone-900 mb-6">
            Where scale meets substance
          </h2>
          <p className="text-xl text-stone-600 font-medium max-w-2xl mx-auto">
            6,000+ campaigns delivered. 90,000+ creators contracted.<br />
            92% client retention – and we're only just getting started
          </p>
        </div>
        
        {/* Brand Tabs Showcase */}
        <div className="flex flex-col lg:flex-row gap-4 h-[600px] mb-32">
          {brands.map((brand, i) => (
            <motion.div
              key={i}
              layout
              onClick={() => setActiveBrand(i)}
              className={`relative overflow-hidden cursor-pointer rounded-[40px] transition-all duration-500 ease-in-out ${
                activeBrand === i ? "flex-[4]" : "flex-1 grayscale opacity-60"
              } hidden lg:block`}
            >
              <img src={brand.image} alt={brand.name} className="absolute inset-0 w-full h-full object-cover" />
              <div className={`absolute inset-0 bg-black/20 ${activeBrand === i ? "opacity-100" : "opacity-0"} transition-opacity`} />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div className={`px-4 py-2 rounded-full bg-white flex items-center gap-2`}>
                    <div className={`w-2 h-2 rounded-full ${brand.name === "Spotify" ? "bg-green-500" : brand.name === "Coca Cola" ? "bg-red-500" : "bg-blue-500"}`} />
                    <span className="text-[10px] font-black uppercase text-stone-900">{brand.name}</span>
                  </div>
                  {activeBrand === i && (
                    <div className="p-3 bg-white rounded-full">
                      <ArrowRight className="w-5 h-5 text-stone-900" />
                    </div>
                  )}
                </div>
                
                {activeBrand === i && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-4"
                  >
                    {brand.stats.map((stat, si) => (
                      <div key={si} className="bg-white/90 backdrop-blur-sm p-3 rounded-2xl text-[11px] font-bold text-stone-900 w-fit">
                        {stat}
                      </div>
                    ))}
                  </motion.div>
                )}
              </div>
              
              {/* Vertical Title */}
              {activeBrand !== i && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="rotate-90 text-white text-3xl font-black uppercase tracking-tighter w-max">
                    {brand.name}
                  </span>
                </div>
              )}
            </motion.div>
          ))}
          
          {/* Mobile view would just be a list - skipping for brevity or simplify */}
        </div>
        
        {/* Global specialist section */}
        <div className="text-center space-y-8 py-20 border-t border-stone-100">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500 text-white rounded-full text-[10px] font-black uppercase tracking-wider">
            <Globe className="w-3 h-3" />
            Number 1 for recall & memory
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-stone-900 max-w-4xl mx-auto leading-tight">
            The world's largest independent creator marketing specialist.
          </h2>
          <p className="text-lg text-stone-600 font-medium">We know the hustle, ingenuity, and creativity it takes to earn attention.</p>
          
          <div className="flex justify-center gap-4">
             <div className="px-6 py-2 border border-stone-200 rounded-full text-stone-500 font-bold text-sm">
               Operating in <span className="text-stone-900">Chicago</span>
             </div>
          </div>
        </div>
      </div>
      
      {/* Ticker Section */}
      <div className="bg-stone-900 py-12 -mx-4 overflow-hidden mt-20">
        <motion.div 
          style={{ x: xTranslate }}
          className="flex whitespace-nowrap text-8xl sm:text-[180px] font-black uppercase italic tracking-tighter text-white/5 opacity-80"
        >
          Let's work together <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&h=200&fit=crop" className="w-32 h-32 rounded-full mx-10 object-cover rotate-12" alt="" />
          Let's work together <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop" className="w-32 h-32 rounded-full mx-10 object-cover -rotate-12" alt="" />
          Let's work together
        </motion.div>
      </div>
    </section>
  );
}
