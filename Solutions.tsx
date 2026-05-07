import { motion } from "motion/react";
import { Users, Target, Zap, BarChart3, MessageSquare, CreditCard, ClipboardList, PenTool } from "lucide-react";

const solutions = [
  { label: "Creator affiliate", icon: Users, color: "bg-rose-100 text-rose-600" },
  { label: "End-to-end creator campaigns", icon: Target, color: "bg-blue-100 text-blue-600" },
  { label: "Creator shortlisting", icon: Zap, color: "bg-amber-100 text-amber-600" },
  { label: "Creator contracting", icon: ClipboardList, color: "bg-purple-100 text-purple-600" },
  { label: "Creator payments", icon: CreditCard, color: "bg-emerald-100 text-emerald-600" },
  { label: "Live campaign reporting", icon: BarChart3, color: "bg-sky-100 text-sky-600" },
  { label: "Content feedback", icon: MessageSquare, color: "bg-pink-100 text-pink-600" },
  { label: "Creative strategy", icon: PenTool, color: "bg-indigo-100 text-indigo-600" },
];

export function Solutions() {
  return (
    <section className="py-24 bg-[#F8E7FF] px-4 overflow-hidden relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-6xl font-black text-stone-900 mb-6">
            Bespoke creator-led solutions
          </h2>
          <p className="text-lg text-stone-600 font-medium">
            Elevating the impact of creator marketing through our suite of creator-first solutions – all powered by partnerships, technology, and instinct.
          </p>
          <p className="text-sm text-stone-500 mt-6 max-w-xl mx-auto">
            Our AI-driven operating system, Waves, streamlines every step of the client and creator experience – scaling the delivery and success of creator campaigns.
          </p>
        </div>
        
        {/* Solutions Grid/Cloud */}
        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
          {solutions.concat(solutions).map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ delay: (i % 8) * 0.05 }}
              className={`flex items-center gap-3 px-6 py-3 rounded-full shadow-sm font-bold text-sm bg-white border border-stone-100 cursor-default`}
            >
              <div className={`p-1.5 rounded-full ${item.color}`}>
                <item.icon className="w-4 h-4" />
              </div>
              <span className="text-stone-700">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-pink/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
    </section>
  );
}
