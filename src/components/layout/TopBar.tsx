import { Phone, Mail, Clock, Accessibility } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";



export function TopBar() {
  return (
    <motion.div
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-primary-900 text-white text-xs py-2 px-4 hidden md:block"
    >
      <div className="container-custom flex items-center justify-between">
        <div className="flex items-center gap-6">
          <a href="tel:+911234567890" className="flex items-center gap-1.5 hover:text-primary-200 transition-colors">
            <Phone className="w-3.5 h-3.5" />
            <span>+91-1234-567-890</span>
          </a>
          <a href="mailto:info@jaob.gov.in" className="flex items-center gap-1.5 hover:text-primary-200 transition-colors">
            <Mail className="w-3.5 h-3.5" />
            <span>info@jaob.gov.in</span>
          </a>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            <span>Mon - Sat: 10:00 AM - 5:00 PM</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-1.5 hover:text-primary-200 transition-colors">
            <Accessibility className="w-3.5 h-3.5" />
            <span>Accessibility</span>
          </button>
          <div className="flex items-center gap-2">
            <span className="text-primary-200">A-</span>
            <span className="text-primary-200">A</span>
            <span className="font-bold">A+</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
