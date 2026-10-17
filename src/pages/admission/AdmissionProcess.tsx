import { PageLayout } from "@/components/layout/PageLayout";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/layout/AnimatedSection";
import { admissionProcessSteps } from "@/data/admissionData";
import { motion } from "framer-motion";
import { UserPlus, FileText, Upload, CreditCard, CheckCircle, Mail } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  UserPlus: <UserPlus className="w-6 h-6" />,
  FileText: <FileText className="w-6 h-6" />,
  Upload: <Upload className="w-6 h-6" />,
  CreditCard: <CreditCard className="w-6 h-6" />,
  CheckCircle: <CheckCircle className="w-6 h-6" />,
  Mail: <Mail className="w-6 h-6" />,
};

export function AdmissionProcess() {
  return (
    <PageLayout breadcrumbs={[{ label: "Admission", href: "/admission" }, { label: "Admission Process" }]}>
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="container-custom relative z-10">
          <AnimatedSection>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Admission Process</h1>
            <p className="text-primary-200 text-lg max-w-2xl">
              Follow these simple steps to complete your admission at JAOB
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16">
        <div className="container-custom max-w-4xl">
          <StaggerContainer className="space-y-8">
            {admissionProcessSteps.map((step) => (
              <StaggerItem key={step.step}>
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex gap-6 p-6 rounded-2xl bg-white shadow-soft hover:shadow-soft-lg transition-all border border-secondary-100"
                >
                  <div className="shrink-0">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white shadow-glow">
                      {iconMap[step.icon]}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-primary-100 text-primary-700 text-xs font-bold">
                        Step {step.step}
                      </span>
                      <h3 className="text-lg font-semibold text-secondary-900">{step.title}</h3>
                    </div>
                    <p className="text-secondary-600 leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </PageLayout>
  );
}
