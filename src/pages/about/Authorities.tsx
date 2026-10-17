import { PageLayout } from "@/components/layout/PageLayout";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/layout/AnimatedSection";
import { authoritiesData } from "@/data/aboutData";
import { motion } from "framer-motion";
import { Award, Clock } from "lucide-react";

export function Authorities() {
  return (
    <PageLayout breadcrumbs={[{ label: "About", href: "/about" }, { label: "Authorities" }]}>
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="container-custom relative z-10">
          <AnimatedSection>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Board Authorities</h1>
            <p className="text-primary-200 text-lg max-w-2xl">{authoritiesData.description}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Members Grid */}
      <section className="py-16">
        <div className="container-custom">
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {authoritiesData.members.map((member, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-all border border-secondary-100"
                >
                  <div className="relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover object-top"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-secondary-900/80 to-transparent p-4">
                      <h3 className="text-white font-semibold">{member.name}</h3>
                      <p className="text-white/80 text-sm">{member.designation}</p>
                    </div>
                  </div>
                  <div className="p-5 space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <Award className="w-4 h-4 text-primary-500" />
                      <span className="text-secondary-600">{member.qualification}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-accent-500" />
                      <span className="text-secondary-600">{member.experience}</span>
                    </div>
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
