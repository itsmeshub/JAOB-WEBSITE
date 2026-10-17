import { useEffect, useRef } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { AnimatedSection } from "@/components/layout/AnimatedSection";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Monitor,
  FileText,
  User,
  Shield,
  Clock,
  MapPin,
  PenTool,
  ClipboardCheck,
  AlertTriangle,
  Calendar,
  CreditCard,
  IdCard,
  BookOpenCheck,
  Award,
  FileCheck,
  CheckCircle2,
  ArrowRight,
  Laptop,
  GraduationCap,
  Users,
  Beaker,
  FolderOpen,
  ClipboardList,
  BadgeCheck,
  Search,
  Bell,
  Upload,
  RefreshCw,
  Ticket,
  Loader2,
} from "lucide-react";

export function Examination() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <PageLayout breadcrumbs={[{ label: "Admission", href: "/admission" }, { label: "Examination" }]}>
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-24 lg:py-32 text-white overflow-hidden min-h-[400px]">
        {/* Background Image with Parallax */}
        <motion.div
          style={{ y: backgroundY }}
          className="absolute inset-0 z-0"
        >
          <img
            src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Examination Background"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Dark Blue Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/80 via-primary-800/75 to-secondary-900/70 z-10" />

        {/* Decorative Elements */}
        <div className="absolute inset-0 z-15 opacity-20">
          <div className="absolute top-10 right-20 w-64 h-64 bg-accent-400 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-primary-400 rounded-full blur-3xl" />
        </div>

        {/* Content */}
        <div className="container-custom relative z-20">
          <AnimatedSection>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200 }}
              className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center mb-6 shadow-glow-accent"
            >
              <ClipboardCheck className="w-8 h-8 text-primary-900" />
            </motion.div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">Examination System</h1>
            <p className="text-primary-100 text-lg lg:text-xl max-w-2xl leading-relaxed">
              Online & Offline Examination — Simple, Transparent & Student-Friendly
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 1: About Our Examination System */}
      <section className="py-16">
        <div className="container-custom">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 md:p-10 shadow-soft-lg border border-secondary-100">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center shadow-lg">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-secondary-900 mb-6">About Our Examination System</h2>
                <p className="text-secondary-700 leading-relaxed text-lg">
                  Jharkhand Academic Open Board provides both <strong className="text-primary-700">Online and Offline</strong> examination facilities for Secondary (Class 10th) and Senior Secondary (Class 12th) students. Our examination system is designed to be simple, transparent, flexible, and student-friendly so that learners from both rural and urban areas can appear conveniently. Students may choose their preferred mode of examination based on comfort and availability.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 2: Examination Modes */}
      <section className="py-16 bg-gradient-to-br from-secondary-50 to-primary-50/30">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-3">Examination Modes</h2>
              <p className="body-text max-w-xl mx-auto">Choose the mode that suits you best</p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Online Examination Card */}
            <AnimatedSection delay={0}>
              <motion.div
                whileHover={{ y: -5, scale: 1.01 }}
                className="relative h-full bg-white/80 backdrop-blur rounded-3xl p-8 shadow-soft-lg border border-primary-100 hover:border-primary-300 transition-all duration-300"
              >
                <div className="absolute top-0 left-8 w-16 h-1 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full" />
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center mb-6 shadow-lg">
                  <Laptop className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-5">Online Examination</h3>
                <ul className="space-y-3">
                  {[
                    "User-friendly examination portal",
                    "Login using Roll Number & Password",
                    "Time-based exam with auto-submission",
                    "Secure monitored environment",
                    "Quick result processing",
                    "Available at authorized computer centres",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-secondary-700">
                      <CheckCircle2 className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatedSection>

            {/* Offline Examination Card */}
            <AnimatedSection delay={0.1}>
              <motion.div
                whileHover={{ y: -5, scale: 1.01 }}
                className="relative h-full bg-white/80 backdrop-blur rounded-3xl p-8 shadow-soft-lg border border-accent-100 hover:border-accent-300 transition-all duration-300"
              >
                <div className="absolute top-0 left-8 w-16 h-1 bg-gradient-to-r from-accent-500 to-accent-600 rounded-full" />
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center mb-6 shadow-lg">
                  <PenTool className="w-7 h-7 text-primary-900" />
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-5">Offline Examination</h3>
                <ul className="space-y-3">
                  {[
                    "Written examinations",
                    "Practical examinations",
                    "Internal assessments",
                    "Viva & project evaluation",
                    "Conducted at authorized centres",
                    "Report before reporting time",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-secondary-700">
                      <CheckCircle2 className="w-5 h-5 text-accent-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Section 3: Examination Process Timeline */}
      <section className="py-16">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-3">Examination Process</h2>
              <p className="body-text max-w-xl mx-auto">Your step-by-step journey to examination</p>
            </div>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Connecting Line */}
              <div className="absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-primary-200 via-primary-400 to-primary-200 hidden md:block" />

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  { step: 1, title: "Registration", desc: "Complete your registration process", icon: ClipboardList },
                  { step: 2, title: "Enrollment Number", desc: "Receive your unique enrollment ID", icon: IdCard },
                  { step: 3, title: "Hall Ticket", desc: "Download your admit card", icon: CreditCard },
                  { step: 4, title: "Appear in Exam", desc: "Take your examination", icon: GraduationCap },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <AnimatedSection key={index} delay={index * 0.1}>
                      <motion.div
                        whileHover={{ y: -5 }}
                        className="relative text-center"
                      >
                        <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center mx-auto mb-4 shadow-lg border-4 border-white">
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <div className="bg-white rounded-2xl p-5 shadow-soft border border-secondary-100">
                          <div className="text-xs font-bold text-primary-600 mb-1">Step {item.step}</div>
                          <h3 className="font-semibold text-secondary-900 mb-1">{item.title}</h3>
                          <p className="text-xs text-secondary-500">{item.desc}</p>
                        </div>
                        {index < 3 && (
                          <div className="hidden md:flex absolute top-8 right-0 translate-x-1/2 -translate-y-1/2 z-20">
                            <ArrowRight className="w-5 h-5 text-primary-400" />
                          </div>
                        )}
                      </motion.div>
                    </AnimatedSection>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Hall Ticket */}
      <section className="py-16 bg-secondary-50">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-3">Hall Ticket / Admit Card</h2>
              <p className="body-text max-w-xl mx-auto">Everything you need to know about your hall ticket</p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <AnimatedSection delay={0}>
              <div className="bg-white/80 backdrop-blur rounded-3xl p-8 shadow-soft-lg border border-secondary-100 h-full">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center mb-5">
                  <CreditCard className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-secondary-900 mb-4">Hall Ticket Contains</h3>
                <ul className="space-y-3">
                  {[
                    "Student Name",
                    "Roll Number",
                    "Centre",
                    "Subject Details",
                    "Exam Date & Time",
                    "Instructions",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-secondary-700">
                      <CheckCircle2 className="w-4 h-4 text-primary-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="bg-white/80 backdrop-blur rounded-3xl p-8 shadow-soft-lg border border-secondary-100 h-full">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center mb-5">
                  <ClipboardCheck className="w-6 h-6 text-primary-900" />
                </div>
                <h3 className="text-lg font-bold text-secondary-900 mb-4">Students Must Carry</h3>
                <ul className="space-y-3">
                  {[
                    "Printed Hall Ticket",
                    "Valid ID Proof",
                    "Required Stationery",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-secondary-700">
                      <CheckCircle2 className="w-4 h-4 text-accent-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>

          {/* Warning Box */}
          <AnimatedSection delay={0.2}>
            <div className="max-w-3xl mx-auto mt-8">
              <div className="relative bg-gradient-to-r from-error-50 to-error-100/50 rounded-2xl p-6 border border-error-200">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-error-500 flex items-center justify-center shrink-0">
                    <AlertTriangle className="w-5 h-5 text-white" />
                  </div>
                  <p className="font-semibold text-error-700 pt-2">
                    Without a valid Hall Ticket, entry into the examination hall will not be permitted.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 5: Examination Rules */}
      <section className="py-16">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-3">Examination Rules</h2>
              <p className="body-text max-w-xl mx-auto">Important guidelines to follow during examination</p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {[
              { icon: Clock, title: "Reach 30 minutes before exam", color: "primary" },
              { icon: AlertTriangle, title: "No mobile phones or smart devices", color: "error" },
              { icon: Shield, title: "No unfair means", color: "warning" },
              { icon: Users, title: "Maintain discipline", color: "accent" },
              { icon: PenTool, title: "Write clearly", color: "primary" },
              { icon: ClipboardList, title: "Follow invigilator instructions", color: "primary" },
            ].map((item, index) => {
              const Icon = item.icon;
              const colorClass = item.color === "primary" ? "from-primary-500 to-primary-700" :
                                item.color === "error" ? "from-error-500 to-error-600" :
                                item.color === "warning" ? "from-warning-500 to-warning-600" :
                                "from-accent-400 to-accent-600";
              return (
                <AnimatedSection key={index} delay={index * 0.05}>
                  <motion.div
                    whileHover={{ y: -3 }}
                    className="bg-white rounded-2xl p-5 shadow-soft border border-secondary-100 hover:border-primary-200 transition-all flex items-center gap-4"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colorClass} flex items-center justify-center shrink-0`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="font-medium text-secondary-800">{item.title}</span>
                  </motion.div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 6: On-Demand Examination */}
      <section className="py-16 bg-gradient-to-br from-primary-800 to-primary-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-400 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-3">Appear When You Are Ready!</h2>
              <p className="text-primary-200 max-w-xl mx-auto">On-Demand Examination facility</p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {[
              "Flexible examination dates",
              "Appear when prepared",
              "Improve performance",
              "Credit Transfer",
              "Available at authorized centres",
            ].map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.05}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 backdrop-blur rounded-2xl p-5 text-center border border-white/20 hover:border-accent-400/50 transition-all"
                >
                  <CheckCircle2 className="w-6 h-6 text-accent-400 mx-auto mb-3" />
                  <span className="text-sm font-medium">{item}</span>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Practical & Internal Assessment */}
      <section className="py-16">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-3">Practical & Internal Assessment</h2>
              <p className="body-text max-w-xl mx-auto">Practical examination components</p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Beaker, title: "Practical Lab Work", desc: "Hands-on laboratory experiments" },
              { icon: FolderOpen, title: "Project Work", desc: "Subject-specific project submission" },
              { icon: ClipboardList, title: "Internal Assessment", desc: "Continuous evaluation" },
              { icon: User, title: "Attendance & Performance", desc: "Regular attendance tracking" },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="group bg-white rounded-2xl p-6 shadow-soft-lg border border-secondary-100 hover:border-primary-200 transition-all text-center"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-primary-600" />
                    </div>
                    <h3 className="font-semibold text-secondary-900 mb-2">{item.title}</h3>
                    <p className="text-xs text-secondary-500">{item.desc}</p>
                  </motion.div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 8: Result & Marksheet */}
      <section className="py-16 bg-secondary-50">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-3">Result & Marksheet</h2>
              <p className="body-text max-w-xl mx-auto">Examination result services</p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {[
              { icon: Monitor, title: "Online Result", desc: "Check results online" },
              { icon: FileText, title: "Digital Marksheet", desc: "Download digital marksheet" },
              { icon: Award, title: "Provisional Certificate", desc: "Get provisional certificate" },
              { icon: BadgeCheck, title: "Migration & Verification", desc: "Migration and verification services" },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={index} delay={index * 0.05}>
                  <motion.div
                    whileHover={{ y: -3 }}
                    className="bg-white rounded-xl p-5 shadow-soft border border-secondary-100 hover:border-primary-200 transition-all"
                  >
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-secondary-900 mb-1 text-sm">{item.title}</h3>
                    <p className="text-xs text-secondary-500">{item.desc}</p>
                  </motion.div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 9: Online Verification */}
      <section className="py-16">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-3">Online Verification</h2>
              <p className="body-text max-w-xl mx-auto">Verify your academic credentials</p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {[
              { icon: User, title: "Student Verification" },
              { icon: Search, title: "Result Validation" },
              { icon: BadgeCheck, title: "Certificate Verification" },
              { icon: FileCheck, title: "Academic Record Verification" },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={index} delay={index * 0.05}>
                  <motion.div
                    whileHover={{ y: -3 }}
                    className="bg-white rounded-xl p-5 shadow-soft border border-secondary-100 hover:border-primary-200 transition-all text-center"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-100 to-accent-200 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-accent-700" />
                    </div>
                    <h3 className="font-semibold text-secondary-900 text-sm">{item.title}</h3>
                  </motion.div>
                </AnimatedSection>
              );
            })}
          </div>

          {/* Info Box */}
          <AnimatedSection delay={0.2}>
            <div className="max-w-2xl mx-auto mt-8">
              <div className="bg-gradient-to-r from-primary-50 to-primary-100/50 rounded-2xl p-5 border border-primary-200">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary-500 flex items-center justify-center shrink-0">
                    <Bell className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-primary-700 font-medium">
                    In case of any discrepancy, kindly contact the concerned Regional Centre.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
}
