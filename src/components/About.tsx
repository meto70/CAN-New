import React from "react";
import { motion } from "motion/react";
import { Logo } from "./Logo";

export function About() {
  return (
    <section id="about" className="py-32 px-6 bg-[#f5f5f7]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="aspect-square bg-white rounded-[4rem] shadow-sm flex items-center justify-center border border-gray-100 overflow-hidden relative p-12"
        >
          <Logo className="scale-150" />
        </motion.div>
        
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-600 font-bold uppercase tracking-[0.2em] text-[10px] mb-8"
          >
            Inhaberin
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-10 tracking-tight text-gray-900"
          >
            Hatice Çerçioğlu Can
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-500 leading-relaxed mb-10 font-light italic"
          >
            „Wir verlassen Ihre Räume erst, wenn sie wirklich sauber sind. Als inhabergeführtes Unternehmen lege ich größten Wert auf persönliche Betreuung und absolute Gründlichkeit.“
          </motion.p>
          
          <div className="flex space-x-16">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <span className="block text-4xl font-bold text-gray-900 tracking-tighter">100%</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mt-2 block">Sorgfalt</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <span className="block text-4xl font-bold text-gray-900 tracking-tighter text-blue-600">Schwarzenbek</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mt-2 block">Standort</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
