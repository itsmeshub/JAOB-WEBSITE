import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { LARAVEL_APPLY_URL } from "@/config/externalLinks";

export function AdmissionBanner() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="py-4 bg-gradient-to-r from-accent-500 via-accent-600 to-accent-500 text-white"
    >
      <div className="container-custom">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-sm sm:text-base">Admissions Open for 2024-25</h3>
              <p className="text-accent-100 text-xs sm:text-sm flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                Last Date: 31st March 2025
              </p>
            </div>
          </div>
          <a
            href={LARAVEL_APPLY_URL}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-accent-700 font-semibold text-sm hover:bg-accent-50 transition-colors shadow-lg shrink-0"
          >
            Apply Now
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.section>
  );
}
