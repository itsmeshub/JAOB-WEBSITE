import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Globe,
  MessageSquare,
  Share2,
  Video,
  ArrowUp,
  ExternalLink,
  Shield,
} from "lucide-react";
import { isExternalUrl } from "@/lib/utils";
import { LARAVEL_APPLY_URL, LARAVEL_ADMIN_LOGIN_URL, LARAVEL_STUDENT_LOGIN_URL } from "@/config/externalLinks";

const quickLinks = [
  { label: "About Board", href: "/about" },
  { label: "Admission", href: LARAVEL_APPLY_URL },
  { label: "Result", href: "/result" },
  { label: "Admit Card", href: "/admit-card" },
  { label: "Downloads", href: "/downloads" },
  { label: "Contact Us", href: "/contact" },
];

const services = [
  { label: "Apply Online", href: LARAVEL_APPLY_URL },
  { label: "Certificate Verification", href: "/verification" },
  { label: "Student Login", href: LARAVEL_STUDENT_LOGIN_URL },
  { label: "Fee Structure", href: "/admission/fee-structure" },
  { label: "Syllabus", href: "/downloads/syllabus" },
  { label: "Notifications", href: "/downloads/notifications" },
];

const importantLinks = [
  { label: "Ministry of Education", href: "https://www.education.gov.in/" },
  { label: "Government of Jharkhand", href: "https://www.jharkhand.gov.in/" },
  { label: "CBSE Board", href: "https://www.cbse.gov.in/" },
  { label: "NCERT", href: "https://ncert.nic.in/textbook.php" },
  { label: "UGC", href: "https://www.ugc.gov.in/" },
  { label: "AICTE", href: "https://www.aicte.gov.in/" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-secondary-900 text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-20 h-20 lg:w-22 lg:h-22"><img src="/images/logo.png" alt="JAOB Logo"className="w-full h-full object-contain"/>
              </div>
              <div>
                <h3 className="font-bold text-lg leading-tight">Jharkhand Academic</h3>
                <p className="text-secondary-400 text-sm">Open Board (JAOB)</p>
              </div>
            </div>
            <p className="text-secondary-400 text-sm leading-relaxed mb-6">
              Empowering education across India through open and distance learning. 
              Committed to quality education for all.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://jaob.in/" className="w-9 h-9 rounded-lg bg-secondary-800 flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-secondary-800 flex items-center justify-center hover:bg-primary-600 transition-colors">
                <MessageSquare className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-secondary-800 flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Share2 className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-secondary-800 flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Video className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) =>
                isExternalUrl(link.href) ? (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-secondary-400 text-sm hover:text-white transition-colors flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                      {link.label}
                    </a>
                  </li>
                ) : (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-secondary-400 text-sm hover:text-white transition-colors flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                      {link.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-semibold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((link) =>
                isExternalUrl(link.href) ? (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-secondary-400 text-sm hover:text-white transition-colors flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-500" />
                      {link.label}
                    </a>
                  </li>
                ) : (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-secondary-400 text-sm hover:text-white transition-colors flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-500" />
                      {link.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-400 shrink-0 mt-0.5" />
                <span className="text-secondary-400 text-sm">
                  JAOB Headquarters, Education Complex, Ranchi, Jharkhand - 834001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-400 shrink-0" />
                <span className="text-secondary-400 text-sm">+919304626238</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-400 shrink-0" />
                <span className="text-secondary-400 text-sm">jaob2013@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary-400 shrink-0" />
                <span className="text-secondary-400 text-sm">Mon - Sat: 10:00 AM - 5:00 PM</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Important Links */}
        <div className="mt-12 pt-8 border-t border-secondary-800">
          <h4 className="font-semibold text-sm mb-4 text-secondary-300">Important Links</h4>
          <div className="flex flex-wrap gap-4">
            {importantLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-secondary-500 text-sm hover:text-white transition-colors flex items-center gap-1"
              >
                {link.label}
                <ExternalLink className="w-3 h-3" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-secondary-950 py-4">
        <div className="container-custom flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-secondary-500 text-sm text-center sm:text-left">
            &copy; {new Date().getFullYear()} Jharkhand Academic Open Board. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="#" className="text-secondary-500 text-sm hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="text-secondary-500 text-sm hover:text-white transition-colors">
              Terms of Use
            </Link>
            <Link to="#" className="text-secondary-500 text-sm hover:text-white transition-colors">
              Sitemap
            </Link>
            <a
              href={LARAVEL_ADMIN_LOGIN_URL}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent-500 text-primary-900 text-sm font-semibold hover:bg-accent-400 transition-all duration-200"
            >
              <Shield className="w-3.5 h-3.5" />
              <span>Admin Login</span>
            </a>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-lg bg-primary-600 flex items-center justify-center hover:bg-primary-700 transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
