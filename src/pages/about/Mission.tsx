import { PageLayout } from "@/components/layout/PageLayout";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/layout/AnimatedSection";
import { missionData } from "@/data/aboutData";
import { Users, BookOpen, Lightbulb, HeartHandshake, Globe } from "lucide-react";
import { motion } from "framer-motion";

const iconMap: Record<string, React.ReactNode> = {
  Users: <Users className="w-6 h-6" />,
  BookOpen: <BookOpen className="w-6 h-6" />,
  Lightbulb: <Lightbulb className="w-6 h-6" />,
  HeartHandshake: <HeartHandshake className="w-6 h-6" />,
  Globe: <Globe className="w-6 h-6" />,
};

export function Mission() {
  return (
    <PageLayout breadcrumbs={[{ label: "About", href: "/about" }, { label: "Mission" }]}>
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="container-custom relative z-10">
          <AnimatedSection>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Our Mission</h1>
            <p className="text-primary-200 text-lg max-w-2xl">{missionData.description}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Missions */}
      <section className="py-16">
        <div className="container-custom">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {missionData.missions.map((mission, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-soft-lg transition-all border border-secondary-100"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white mb-6 shadow-glow">
                    {iconMap[mission.icon]}
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-900 mb-3">{mission.title}</h3>
                  <p className="text-secondary-600 leading-relaxed">{mission.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </PageLayout>
  );
}
