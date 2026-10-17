import { PageLayout } from "@/components/layout/PageLayout";
import { AnimatedSection } from "@/components/layout/AnimatedSection";
import { chairmanMessage } from "@/data/homeData";
import { Quote, Signature } from "lucide-react";
import { motion } from "framer-motion";

export function ChairmanMessagePage() {
  return (
    <PageLayout breadcrumbs={[{ label: "About", href: "/about" }, { label: "Chairman's Message" }]}>
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="container-custom relative z-10">
          <AnimatedSection>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Chairman's Message</h1>
            <p className="text-primary-200 text-lg max-w-2xl">
              Words of wisdom and guidance from our esteemed Chairman
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Message */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Profile */}
            <AnimatedSection>
              <div className="lg:sticky lg:top-24">
                <div className="rounded-2xl overflow-hidden shadow-soft-lg mb-6">
                  <img
                    src={chairmanMessage.image}
                    alt={chairmanMessage.name}
                    className="w-full h-[400px] object-cover object-top"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-secondary-900">{chairmanMessage.name}</h3>
                  <p className="text-secondary-500">{chairmanMessage.designation}</p>
                </div>
              </div>
            </AnimatedSection>

            {/* Message Content */}
            <AnimatedSection delay={0.2} className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-soft p-8 lg:p-12">
                <div className="relative mb-8">
                  <Quote className="absolute -top-2 -left-2 w-12 h-12 text-primary-200" />
                  <blockquote className="pl-10 text-lg text-secondary-700 leading-relaxed italic">
                    {chairmanMessage.message}
                  </blockquote>
                </div>

                <div className="border-t border-secondary-200 pt-8">
                  <h4 className="font-semibold text-secondary-900 mb-4">Key Priorities</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      "Quality Education for All",
                      "Digital Transformation",
                      "Inclusive Learning Environment",
                      "Student Welfare & Support",
                      "Academic Excellence",
                      "Community Engagement",
                    ].map((priority, index) => (
                      <motion.div
                        key={priority}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-center gap-3 p-3 rounded-xl bg-secondary-50"
                      >
                        <div className="w-2 h-2 rounded-full bg-primary-500" />
                        <span className="text-sm text-secondary-700">{priority}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl bg-primary-100 flex items-center justify-center">
                    <Signature className="w-8 h-8 text-primary-600" />
                  </div>
                  <div>
                    <div className="font-handwriting text-2xl text-secondary-800 italic">
                      {chairmanMessage.name.split(" ").slice(-1)[0]}
                    </div>
                    <div className="text-sm text-secondary-500">Chairman, JAOB</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
