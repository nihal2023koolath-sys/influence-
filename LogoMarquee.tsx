import { motion } from "motion/react";

const logos = [
  "https://upload.wikimedia.org/wikipedia/commons/4/4c/H%26M-Logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/c/ce/Coca-Cola_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_with_text.svg",
  "https://upload.wikimedia.org/wikipedia/commons/a/ad/Asos_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/c/cc/Monzo_logo.svg"
];

export function LogoMarquee() {
  return (
    <div className="bg-white py-12 border-y border-stone-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <p className="text-[11px] font-bold text-stone-400 uppercase tracking-[0.2em]">We've worked with:</p>
      </div>
      
      <div className="marquee-container opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500">
        <div className="marquee-content flex items-center gap-16 sm:gap-24">
          {logos.concat(logos).map((logo, i) => (
            <img 
              key={i} 
              src={logo} 
              alt="Partner logo" 
              className="h-6 sm:h-8 w-auto object-contain flex-shrink-0" 
            />
          ))}
        </div>
      </div>
    </div>
  );
}
