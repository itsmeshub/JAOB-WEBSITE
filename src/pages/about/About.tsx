import { PageLayout } from "@/components/layout/PageLayout";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/layout/AnimatedSection";
import { aboutData } from "@/data/aboutData";
import { Clock, Award, MapPin, Wallet } from "lucide-react";
import { motion } from "framer-motion";

const iconMap: Record<string, React.ReactNode> = {
  Clock: <Clock className="w-6 h-6" />,
  Award: <Award className="w-6 h-6" />,
  MapPin: <MapPin className="w-6 h-6" />,
  Wallet: <Wallet className="w-6 h-6" />,
};

export function About() {
  return (
    <PageLayout
      breadcrumbs={[{ label: "About Board" }]}
    >
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="container-custom relative z-10">
          <AnimatedSection>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">About JAOB</h1>
            <p className="text-primary-200 text-lg max-w-2xl">
              Learn about our mission, vision, and commitment to quality education
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="space-y-4">
                <h2 className="heading-2">{aboutData.title}</h2>
                {aboutData.content.map((paragraph, index) => (
                  <p key={index} className="body-text leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-soft-lg">
                  <img
                    src={aboutData.image}
                    alt="JAOB Campus"
                    className="w-full h-[400px] object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-soft-lg p-6 max-w-xs">
                  <div className="text-3xl font-bold text-primary-600">16+</div>
                  <div className="text-secondary-600">Years of Excellence</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-secondary-50">
        <div className="container-custom">
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutData.features.map((feature, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-soft-lg transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center text-primary-600 mb-4">
                    {iconMap[feature.icon]}
                  </div>
                  <h3 className="font-semibold text-secondary-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-secondary-600">{feature.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </PageLayout>
  );
}
