import { motion } from "framer-motion";
import {
  Landmark,
  Building2,
  BookOpen,
  BookMarked,
  GraduationCap,
  Award,
  ExternalLink,
} from "lucide-react";
import { importantLinks } from "@/data/homeData";

const iconMap: Record<string, React.ReactNode> = {
  Landmark: <Landmark className="w-6 h-6" />,
  Building: <Building2 className="w-6 h-6" />,
  BookOpen: <BookOpen className="w-6 h-6" />,
  BookMarked: <BookMarked className="w-6 h-6" />,
  GraduationCap: <GraduationCap className="w-6 h-6" />,
  Award: <Award className="w-6 h-6" />,
};

export function ImportantLinks() {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
            Important Links
          </span>
          <h2 className="heading-2 mb-3">Useful Resources</h2>
          <p className="body-text max-w-xl mx-auto">
            Quick access to important government and educational portals
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {importantLinks.map((link, index) => (
            <motion.a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-secondary-50 hover:bg-primary-50 border border-transparent hover:border-primary-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="w-14 h-14 rounded-xl bg-white shadow-soft flex items-center justify-center text-primary-600 group-hover:scale-110 transition-transform">
                {iconMap[link.icon]}
              </div>
              <span className="text-sm font-medium text-secondary-700 text-center group-hover:text-primary-600 transition-colors">
                {link.title}
              </span>
              <ExternalLink className="w-3.5 h-3.5 text-secondary-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
