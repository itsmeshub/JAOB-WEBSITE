import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { chairmanMessage } from "@/data/homeData";

export function ChairmanMessage() {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-soft-lg">
                <img
                  src={chairmanMessage.image}
                  alt={chairmanMessage.name}
                  className="w-full h-[400px] object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-xl shadow-soft px-6 py-3 text-center">
                <h4 className="font-bold text-secondary-900">{chairmanMessage.name}</h4>
                <p className="text-sm text-secondary-500">{chairmanMessage.designation}</p>
              </div>
            </div>
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-accent-100 text-accent-700 text-sm font-medium mb-4">
              Chairman's Message
            </span>
            <h2 className="heading-2 mb-6">A Word from Our Chairman</h2>
            <div className="relative">
              <Quote className="absolute -top-2 -left-2 w-10 h-10 text-primary-200" />
              <blockquote className="pl-8 text-lg text-secondary-700 leading-relaxed italic">
                {chairmanMessage.message}
              </blockquote>
            </div>
            <div className="mt-8 pl-8">
              <div className="w-16 h-0.5 bg-primary-500 mb-4" />
              <h4 className="font-bold text-secondary-900">{chairmanMessage.name}</h4>
              <p className="text-sm text-secondary-500">{chairmanMessage.designation}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
