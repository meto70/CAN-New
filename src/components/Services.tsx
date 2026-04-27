import React from "react";
import { motion } from "motion/react";
import { Home, Building2, Layout as WindowIcon, StepForward, Construction, Truck } from "lucide-react";

const services = [
  {
    title: "Unterhaltsreinigung",
    description: "Die regelmäßige Pflege für Büros, Praxen und Privathaushalte.",
    tag: "Standard",
    icon: <Home className="text-blue-600" size={32} />
  },
  {
    title: "Büro- & Praxis",
    description: "Hygienische Reinigung für ein professionelles Arbeitsumfeld.",
    tag: "Gewerbe",
    icon: <Building2 className="text-blue-600" size={32} />
  },
  {
    title: "Fenster & Glas",
    description: "Streifenfreier Glanz für Fenster, Schaufenster und Rahmen.",
    tag: "Spezial",
    icon: <WindowIcon className="text-blue-600" size={32} />
  },
  {
    title: "Treppenhaus",
    description: "Ein sauberer Eingangsbereich für Ihr Mehrfamilienhaus.",
    tag: "Objektpflege",
    icon: <StepForward className="text-blue-600" size={32} />
  },
  {
    title: "Bauendreinigung",
    description: "Bezugsfertige Übergabe nach Bau- oder Renovierungsarbeiten.",
    tag: "Bau",
    icon: <Construction className="text-blue-600" size={32} />
  },
  {
    title: "Entrümpelung",
    description: "Professionelle Entsorgungsdienste – schnell und unkompliziert.",
    tag: "Service",
    icon: <Truck className="text-blue-600" size={32} />
  }
];

export function Services() {
  return (
    <section id="services" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Was wir für Sie tun.
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            className="h-1 bg-blue-600 mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 p-12 rounded-[3rem] service-card group"
            >
              <div className="mb-6 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight text-gray-900 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-500 leading-relaxed mb-6">
                {service.description}
              </p>
              <span className="text-[11px] font-bold uppercase tracking-widest text-blue-600/60 group-hover:text-blue-600 transition-colors">
                {service.tag}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
