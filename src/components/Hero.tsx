import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <header className="relative pt-56 pb-24 px-6 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/30 blur-3xl rounded-full -mr-24 -mt-24 pointer-events-none" />
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center space-x-2 text-blue-600 font-bold tracking-[0.3em] text-[10px] uppercase mb-8 italic"
        >
          <Sparkles size={12} />
          <span>Clean As New</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-8xl font-bold tracking-tight mb-8 leading-[1.1] text-gray-900"
        >
          Reinheit neu <br className="hidden md:block" /> definiert.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed font-light"
        >
          Professionelle Reinigungslösungen für Privat und Gewerbe. <br /> Zuverlässig. Gründlich. Flexibel.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-5"
        >
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group bg-gray-900 text-white px-10 py-5 rounded-full text-lg font-semibold hover:bg-gray-800 transition-all shadow-xl flex items-center justify-center space-x-2"
          >
            <span>Kostenloses Angebot</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-10 py-5 rounded-full text-lg font-semibold text-blue-600 hover:bg-blue-50 transition-all"
          >
            Leistungen entdecken
          </button>
        </motion.div>
      </div>
    </header>
  );
}
