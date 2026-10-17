import { PageLayout } from "@/components/layout/PageLayout";
import { AnimatedSection } from "@/components/layout/AnimatedSection";
import { motion } from "framer-motion";
import {
  FileText,
  Download,
  Calendar,
  FileCode,
  Building2,
} from "lucide-react";

const letters = [
  {
    id: 1,
    title: "Establishment Order - JAOB",
    number: "GO/JAOB/2008/001",
    date: "March 15, 2008",
    department: "Education Department, Government of Jharkhand",
    type: "Establishment",
  },
  {
    id: 2,
    title: "Recognition of Secondary Level Courses",
    number: "GO/JAOB/2010/015",
    date: "June 22, 2010",
    department: "HRD Department, Government of Jharkhand",
    type: "Recognition",
  },
  {
    id: 3,
    title: "Senior Secondary Level Authorization",
    number: "GO/JAOB/2012/028",
    date: " September 5, 2012",
    department: "Education Department, Government of Jharkhand",
    type: "Authorization",
  },
  {
    id: 4,
    title: "Examination Conduct Guidelines",
    number: "GO/JAOB/2015/042",
    date: "January 10, 2015",
    department: "HRD Department, Government of Jharkhand",
    type: "Guidelines",
  },
  {
    id: 5,
    title: "Vocational Courses Approval",
    number: "GO/JAOB/2018/056",
    date: "April 28, 2018",
    department: "Skill Development Department",
    type: "Approval",
  },
  {
    id: 6,
    title: "Digital Transformation Initiative",
    number: "GO/JAOB/2020/068",
    date: "July 15, 2020",
    department: "IT Department, Government of Jharkhand",
    type: "Initiative",
  },
];

export function GovernmentLetters() {
  return (
    <PageLayout breadcrumbs={[{ label: "Administration", href: "/administration" }, { label: "Government Letters" }]}>
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="container-custom relative z-10">
          <AnimatedSection>
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center mb-6 shadow-glow-accent">
              <FileCode className="w-8 h-8 text-primary-900" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Government Letters</h1>
            <p className="text-primary-200 text-lg max-w-2xl">
              Official government orders, notifications, and letters related to JAOB
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Letters List */}
      <section className="py-16">
        <div className="container-custom max-w-4xl">
          <AnimatedSection>
            <div className="bg-gradient-to-r from-primary-50 to-primary-100/50 rounded-2xl p-6 mb-8 border border-primary-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary-500 flex items-center justify-center shrink-0">
                  <Building2 className="w-5 h-5 text-white" />
                </div>
                <p className="text-primary-700">
                  These are official government orders issued by various departments of the Government of Jharkhand.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <div className="space-y-4">
            {letters.map((letter, index) => (
              <AnimatedSection key={letter.id} delay={index * 0.05}>
                <motion.div
                  whileHover={{ y: -2 }}
                  className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-soft-lg transition-all border border-secondary-100 hover:border-primary-200"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center shrink-0">
                        <FileText className="w-6 h-6 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-secondary-900 mb-1">{letter.title}</h3>
                        <div className="flex flex-wrap items-center gap-3 text-sm text-secondary-500">
                          <span className="font-mono font-medium text-primary-600">{letter.number}</span>
                          <span className="w-1 h-1 rounded-full bg-secondary-400" />
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            {letter.date}
                          </span>
                        </div>
                        <p className="text-xs text-secondary-600 mt-2">{letter.department}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-xs font-medium">
                        {letter.type}
                      </span>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary-600 text-white text-sm font-medium hover:bg-primary-700 transition-colors shadow-soft"
                      >
                        <Download className="w-4 h-4" />
                        Download
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
