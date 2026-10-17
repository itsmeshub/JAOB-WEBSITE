import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FileText,
  Award,
  CreditCard,
  UserPlus,
  ShieldCheck,
  ArrowRightLeft,
  Download,
  HelpCircle,
} from "lucide-react";
import { quickServices } from "@/data/homeData";
import { isExternalUrl } from "@/lib/utils";

const iconMap: Record<string, React.ReactNode> = {
  FileText: <FileText className="w-6 h-6" />,
  Award: <Award className="w-6 h-6" />,
  CreditCard: <CreditCard className="w-6 h-6" />,
  UserPlus: <UserPlus className="w-6 h-6" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6" />,
  ArrowRightLeft: <ArrowRightLeft className="w-6 h-6" />,
  Download: <Download className="w-6 h-6" />,
  HelpCircle: <HelpCircle className="w-6 h-6" />,
};

export function QuickServices() {
  return (
    <section className="py-12 bg-secondary-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="heading-2 mb-2">Quick Services</h2>
          <p className="body-text max-w-xl mx-auto">
            Access all essential services with just one click
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {quickServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              {isExternalUrl(service.link) ? (
                <a
                  href={service.link}
                  className={`flex flex-col items-center gap-3 p-4 rounded-2xl ${service.color} ${service.hoverColor} transition-all duration-300 hover:-translate-y-1 hover:shadow-soft group`}
                >
                  <div className="w-12 h-12 rounded-xl bg-white/80 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    {iconMap[service.icon]}
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-sm">{service.title}</h3>
                    <p className="text-xs opacity-70 mt-0.5 hidden lg:block">{service.description}</p>
                  </div>
                </a>
              ) : (
                <Link
                  to={service.link}
                  className={`flex flex-col items-center gap-3 p-4 rounded-2xl ${service.color} ${service.hoverColor} transition-all duration-300 hover:-translate-y-1 hover:shadow-soft group`}
                >
                  <div className="w-12 h-12 rounded-xl bg-white/80 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    {iconMap[service.icon]}
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-sm">{service.title}</h3>
                    <p className="text-xs opacity-70 mt-0.5 hidden lg:block">{service.description}</p>
                  </div>
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
