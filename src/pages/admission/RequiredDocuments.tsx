import { PageLayout } from "@/components/layout/PageLayout";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/layout/AnimatedSection";
import { requiredDocuments } from "@/data/admissionData";
import { FileText, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export function RequiredDocuments() {
  return (
    <PageLayout breadcrumbs={[{ label: "Admission", href: "/admission" }, { label: "Required Documents" }]}>
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="container-custom relative z-10">
          <AnimatedSection>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Required Documents</h1>
            <p className="text-primary-200 text-lg max-w-2xl">
              Keep these documents ready before starting your application
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Documents Grid */}
      <section className="py-16">
        <div className="container-custom max-w-4xl">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {requiredDocuments.map((category, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-soft-lg transition-all border border-secondary-100"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center">
                      <FileText className="w-5 h-5 text-primary-600" />
                    </div>
                    <h3 className="font-semibold text-secondary-900">{category.category}</h3>
                  </div>
                  <ul className="space-y-3">
                    {category.documents.map((doc, docIndex) => (
                      <li key={docIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-success-500 shrink-0 mt-0.5" />
                        <span className="text-sm text-secondary-600">{doc}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimatedSection delay={0.3} className="mt-10">
            <div className="bg-warning-50 border border-warning-200 rounded-2xl p-6">
              <h3 className="font-semibold text-warning-800 mb-2">Important Notes</h3>
              <ul className="space-y-2 text-sm text-warning-700">
                <li>All documents must be clear and legible</li>
                <li>File size should not exceed 2MB per document</li>
                <li>Accepted formats: PDF, JPG, PNG</li>
                <li>Photograph should be against white background</li>
                <li>Signature should be in blue/black ink on white paper</li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
}
