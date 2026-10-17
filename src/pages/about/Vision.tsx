import { PageLayout } from "@/components/layout/PageLayout";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/layout/AnimatedSection";
import { visionData } from "@/data/aboutData";
import { Eye, Monitor, Award, Users, Globe } from "lucide-react";
import { motion } from "framer-motion";

const iconMap: Record<string, React.ReactNode> = {
  Eye: <Eye className="w-6 h-6" />,
  Monitor: <Monitor className="w-6 h-6" />,
  Award: <Award className="w-6 h-6" />,
  Users: <Users className="w-6 h-6" />,
  Globe: <Globe className="w-6 h-6" />,
};

export function Vision() {
  return (
    <PageLayout breadcrumbs={[{ label: "About", href: "/about" }, { label: "Vision" }]}>
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="container-custom relative z-10">
          <AnimatedSection>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Our Vision</h1>
            <p className="text-primary-200 text-lg max-w-2xl">{visionData.description}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Vision Cards */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <AnimatedSection>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-soft-lg">
                  <img
                    src={visionData.image}
                    alt="JAOB Vision"
                    className="w-full h-[400px] object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-2xl bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center shadow-glow-accent">
                  <Eye className="w-10 h-10 text-white" />
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="space-y-6">
                <h2 className="heading-2">Looking Towards the Future</h2>
                <p className="body-text leading-relaxed">
                  Our vision extends beyond the present. We aspire to create an educational ecosystem 
                  that is inclusive, innovative, and impactful. By leveraging technology and adopting 
                  best practices, we aim to set new benchmarks in open and distance learning.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-primary-50 border border-primary-100">
                    <div className="text-2xl font-bold text-primary-600">100K+</div>
                    <div className="text-sm text-secondary-600">Students by 2030</div>
                  </div>
                  <div className="p-4 rounded-xl bg-success-50 border border-success-100">
                    <div className="text-2xl font-bold text-success-600">500+</div>
                    <div className="text-sm text-secondary-600">Study Centers</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visionData.visions.map((vision, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-soft-lg transition-all border border-secondary-100"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center text-primary-600 mb-4">
                    {iconMap[vision.icon] || <Eye className="w-6 h-6" />}
                  </div>
                  <h3 className="font-semibold text-secondary-900 mb-2">{vision.title}</h3>
                  <p className="text-sm text-secondary-600">{vision.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </PageLayout>
  );
}
