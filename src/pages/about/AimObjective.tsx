import { useEffect, useState, useRef } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/layout/AnimatedSection";
import { aimObjectiveData } from "@/data/aboutData";
import { Target, CheckCircle } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export function AimObjective() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <PageLayout breadcrumbs={[{ label: "About", href: "/about" }, { label: "Aim & Objective" }]}>
      {/* Hero with Parallax Background */}
      <section ref={heroRef} className="relative py-24 lg:py-32 text-white overflow-hidden min-h-[400px]">
        {/* Background Image with Parallax */}
        <motion.div
          style={{ y: backgroundY }}
          className="absolute inset-0 z-0"
        >
          <img
            src="https://images.pexels.com/photos/159711/books-education-school-literature-by-159711.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Education Background"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Dark Green/Blue Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/75 via-primary-800/70 to-secondary-900/60 z-10" />

        {/* Decorative Elements */}
        <div className="absolute inset-0 z-15 opacity-20">
          <div className="absolute top-20 left-10 w-64 h-64 bg-accent-400 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-primary-400 rounded-full blur-3xl" />
        </div>

        {/* Content */}
        <motion.div
          style={{ y: textY }}
          className="container-custom relative z-20"
        >
          <AnimatedSection>
            <div className="max-w-3xl">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center mb-6 shadow-glow-accent"
              >
                <Target className="w-8 h-8 text-primary-900" />
              </motion.div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Aim & Objectives
              </h1>
              <p className="text-primary-100 text-lg lg:text-xl max-w-2xl leading-relaxed">
                {aimObjectiveData.description}
              </p>
            </div>
          </AnimatedSection>
        </motion.div>
      </section>

      {/* Aims */}
      <section className="py-16 lg:py-20">
        <div className="container-custom">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center shadow-soft">
                  <Target className="w-7 h-7 text-primary-600" />
                </div>
                <div>
                  <h2 className="heading-2">Our Aims</h2>
                  <p className="text-secondary-500 text-sm mt-1">Core principles guiding our mission</p>
                </div>
              </div>
              <div className="space-y-4">
                {aimObjectiveData.aims.map((aim, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    whileHover={{ x: 8 }}
                    className="group flex items-start gap-5 p-5 rounded-2xl bg-white shadow-soft hover:shadow-soft-lg transition-all duration-300 border border-secondary-100 hover:border-primary-200"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-secondary-700 leading-relaxed pt-2">{aim}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-secondary-50 via-white to-primary-50/30">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-12">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200 }}
                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center mx-auto mb-5 shadow-glow-accent"
              >
                <Target className="w-8 h-8 text-primary-900" />
              </motion.div>
              <h2 className="heading-2 mb-3">Our Objectives</h2>
              <p className="body-text max-w-xl mx-auto">
                Strategic objectives that guide our operations and define our success
              </p>
            </div>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aimObjectiveData.objectives.map((obj, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="group bg-white rounded-2xl p-7 shadow-soft hover:shadow-soft-lg transition-all duration-300 border border-secondary-100 hover:border-primary-300 h-full"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-100 to-accent-200 flex items-center justify-center text-accent-700 font-bold text-xl mb-5 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                    {index + 1}
                  </div>
                  <h3 className="font-semibold text-secondary-900 mb-3 text-lg group-hover:text-primary-700 transition-colors">{obj.title}</h3>
                  <p className="text-sm text-secondary-600 leading-relaxed">{obj.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </PageLayout>
  );
}
