import { Instagram, Youtube, Linkedin, Mail, Music2, Globe2 } from "lucide-react";

const footerLinks = {
  Company: ["Home", "About", "Careers"],
  Work: ["Services", "Technology", "Case Studies", "Resources"],
  Legal: ["Platform Terms", "Creator Terms (Company)", "Creator Terms (US)", "Modern Slavery Act", "Whistleblower Policy", "Privacy Policy"],
  General: ["Contact", "Sign In", "Creator Payments"]
};

export function Footer() {
  return (
    <footer className="bg-black text-white pt-24 pb-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 sm:gap-8 mb-20">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="space-y-6">
              <h4 className="text-[11px] font-black uppercase tracking-widest text-stone-500 border-b border-stone-800 pb-4">
                {title}
              </h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-stone-300 hover:text-white transition-colors text-[13px] font-medium">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          <div className="col-span-full lg:col-span-1 flex flex-col items-start gap-4">
            <div className="flex items-center gap-2 bg-stone-900 border border-stone-800 px-4 py-2 rounded-full cursor-pointer hover:bg-stone-800 transition-colors">
              <Globe2 className="w-4 h-4" />
              <span className="text-[12px] font-bold">EN</span>
              <span className="text-[8px] opacity-50">▼</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-stone-900">
          <div className="flex items-center gap-2 mb-8 md:mb-0">
            <span className="text-2xl font-black italic tracking-tighter">influencer</span>
          </div>
          
          <div className="flex items-center gap-6 mb-8 md:mb-0">
            {[Instagram, Music2, Linkedin, Mail].map((Icon, i) => (
              <a key={i} href="#" className="p-2 bg-stone-900 rounded-full hover:bg-stone-800 transition-colors">
                <Icon className="w-5 h-5 text-stone-300" />
              </a>
            ))}
          </div>
          
          <p className="text-stone-500 text-[11px] font-bold">
            ©2026 Influencer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
