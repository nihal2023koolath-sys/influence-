import { Paintbrush, Lightbulb, ShoppingBag } from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    title: "Creative",
    icon: Paintbrush,
    color: "bg-[#FFE5E5]",
    iconColor: "text-rose-500",
    description: "We craft ideas that move culture. Creator campaigns deliver a 91% higher 6-second view-through rate vs. standard ads.",
    stat: "91% higher view-through",
  },
  {
    title: "Media",
    icon: Lightbulb,
    color: "bg-[#E5F9E5]",
    iconColor: "text-green-500",
    description: "We orchestrate precision amplification across social platforms and beyond. Creator content drives 70% higher click-through rate.",
    stat: "70% higher CTR",
  },
  {
    title: "Commerce",
    icon: ShoppingBag,
    color: "bg-[#E5F1FF]",
    iconColor: "text-blue-500",
    description: "We turn creator trust into measurable conversion. Creator-led content drives 3.3x higher ROI compared to digital ads.",
    stat: "3.3x higher ROI",
  }
];

export function Features() {
  return (
    <section className="py-24 bg-stone-50 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Manifesto */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h2 className="text-3xl sm:text-5xl font-black text-stone-900 tracking-tight leading-tight">
            From concept to content, we put creators at the heart of creativity, media, and commerce back to drive performance across the funnel
          </h2>
        </div>
        
        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="bg-white p-8 rounded-[40px] shadow-sm border border-stone-100 flex flex-col justify-between h-full"
            >
              <div>
                <div className={`${feature.color} w-12 h-12 rounded-2xl flex items-center justify-center mb-8`}>
                  <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
                </div>
                <h3 className="text-2xl font-bold text-stone-900 mb-4">{feature.title}</h3>
                <p className="text-stone-600 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-stone-50">
                <p className="text-[11px] font-bold text-stone-400 uppercase tracking-wider">{feature.stat}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
