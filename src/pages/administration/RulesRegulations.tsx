import { PageLayout } from "@/components/layout/PageLayout";
import { AnimatedSection } from "@/components/layout/AnimatedSection";
import { motion } from "framer-motion";
import {
  Scale,
  FileText,
  Download,
  BookOpen,
  Users,
  ClipboardList,
  Award,
  Shield,
} from "lucide-react";

const regulations = [
  {
    id: 1,
    title: "JAOB Act & Rules 2008",
    description: "The Jharkhand Academic Open Board Act and associated rules governing the establishment and functioning of the board.",
    icon: Scale,
    category: "Act & Rules",
    size: "1.2 MB",
  },
  {
    id: 2,
    title: "Admission Regulations",
    description: "Comprehensive guidelines for admission process, eligibility criteria, and enrollment procedures.",
    icon: Users,
    category: "Admission",
    size: "850 KB",
  },
  {
    id: 3,
    title: "Examination Bye-Laws",
    description: "Rules and regulations governing the conduct of examinations, evaluation, and certification.",
    icon: ClipboardList,
    category: "Examination",
    size: "1.5 MB",
  },
  {
    id: 4,
    title: "Academic Calendar",
    description: "Annual academic calendar with important dates, schedules, and deadlines.",
    icon: BookOpen,
    category: "Academic",
    size: "450 KB",
  },
  {
    id: 5,
    title: "Student Code of Conduct",
    description: "Guidelines for student behavior, discipline, and ethical standards.",
    icon: Shield,
    category: "Student",
    size: "680 KB",
  },
  {
    id: 6,
    title: "Certification Policy",
    description: "Rules for issuing certificates, marksheets, and other academic documents.",
    icon: Award,
    category: "Certification",
    size: "920 KB",
  },
];

export function RulesRegulations() {
  return (
    <PageLayout breadcrumbs={[{ label: "Administration", href: "/administration" }, { label: "Rules & Regulations" }]}>
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="container-custom relative z-10">
          <AnimatedSection>
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center mb-6 shadow-glow-accent">
              <Scale className="w-8 h-8 text-primary-900" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Rules & Regulations</h1>
            <p className="text-primary-200 text-lg max-w-2xl">
              Official rules, regulations, and bye-laws governing JAOB operations
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Regulations Grid */}
      <section className="py-16">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-3">Regulatory Documents</h2>
              <p className="body-text max-w-xl mx-auto">
                Download and review the official regulations governing JAOB
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {regulations.map((reg, index) => {
              const Icon = reg.icon;
              return (
                <AnimatedSection key={reg.id} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-soft-lg transition-all border border-secondary-100 hover:border-primary-200 h-full flex flex-col"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center mb-5">
                      <Icon className="w-7 h-7 text-primary-600" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-semibold text-primary-600 mb-2">{reg.category}</div>
                      <h3 className="font-semibold text-secondary-900 mb-3">{reg.title}</h3>
                      <p className="text-sm text-secondary-600 leading-relaxed mb-4">{reg.description}</p>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-secondary-100">
                      <span className="text-xs text-secondary-500">{reg.size}</span>
                      <motion.button
                        whileHover={{ scale: 1.05, x: 3 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 text-primary-600 font-semibold text-sm hover:text-primary-700 transition-colors"
                      >
                        <Download className="w-4 h-4" />
                        Download PDF
                      </motion.button>
                    </div>
                  </motion.div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-secondary-50">
        <div className="container-custom">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-100 to-accent-200 flex items-center justify-center mx-auto mb-6">
                <FileText className="w-7 h-7 text-accent-700" />
              </div>
              <h2 className="heading-3 mb-4">Need Clarification?</h2>
              <p className="text-secondary-600 mb-6 leading-relaxed">
                If you have any questions regarding the rules and regulations, please contact our helpdesk
                or visit the Admission section for detailed guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/admission/helpdesk"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-700 shadow-soft transition-all"
                >
                  Contact Helpdesk
                </motion.a>
                <motion.a
                  href="/about/authorities"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-secondary-100 text-secondary-700 font-semibold hover:bg-secondary-200 transition-all"
                >
                  View Authorities
                </motion.a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
}
