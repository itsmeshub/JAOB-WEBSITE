import { useEffect, useState, useRef } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { AnimatedSection } from "@/components/layout/AnimatedSection";
import { historyData } from "@/data/aboutData";
import { motion, useInView } from "framer-motion";
import {
  Landmark,
  Users,
  Building,
  Monitor,
  Briefcase,
  Shield,
  Trophy,
  Calendar,
  GraduationCap,
  MapPin,
  Quote,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Landmark: <Landmark className="w-5 h-5" />,
  Users: <Users className="w-5 h-5" />,
  Building: <Building className="w-5 h-5" />,
  Monitor: <Monitor className="w-5 h-5" />,
  Briefcase: <Briefcase className="w-5 h-5" />,
  Shield: <Shield className="w-5 h-5" />,
  Trophy: <Trophy className="w-5 h-5" />,
};

const statsData = [
  { value: 10, suffix: "+", label: "Years of Excellence", icon: Calendar },
  { value: 50000, suffix: "+", label: "Students Enrolled", icon: GraduationCap },
  { value: 200, suffix: "+", label: "Study Centers", icon: Building },
  { value: 24, suffix: "", label: "Districts Covered", icon: MapPin },
];

function AnimatedCounter({ value, suffix, isInView }: { value: number; suffix: string; isInView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2500;
      const startTime = Date.now();

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(easeOut * value);

        setCount(current);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(value);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, value]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export function History() {
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true, margin: "-100px" });

  return (
    <PageLayout breadcrumbs={[{ label: "About", href: "/about" }, { label: "History" }]}>
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="container-custom relative z-10">
          <AnimatedSection>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Our History</h1>
            <p className="text-primary-200 text-lg max-w-2xl">{historyData.description}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Animated Statistics Section */}
      <section ref={statsRef} className="py-16 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent-400 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">Our Impact in Numbers</h2>
            <p className="text-primary-200 max-w-xl mx-auto">
              A legacy of excellence in open education across Jharkhand
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {statsData.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-accent-400/50 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center mx-auto mb-5 shadow-lg">
                      <Icon className="w-7 h-7 text-primary-900" />
                    </div>
                    <div className="text-4xl sm:text-5xl font-bold mb-2 bg-gradient-to-r from-white to-accent-200 bg-clip-text text-transparent">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} isInView={isStatsInView} />
                    </div>
                    <div className="text-primary-200 text-sm font-medium">{stat.label}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Inspirational Quote Section */}
      <section className="py-16 bg-secondary-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary-500 rounded-full blur-3xl" />
          <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-accent-500 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <AnimatedSection>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-soft-lg border border-white/20">
                {/* Decorative elements */}
                <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center shadow-glow">
                  <Quote className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-gradient-to-br from-accent-400 to-accent-600 rounded-full opacity-20 blur-xl" />

                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center"
                  >
                    <Quote className="w-8 h-8 text-primary-600" />
                  </motion.div>

                  <blockquote className="text-xl md:text-2xl lg:text-3xl font-medium text-secondary-800 leading-relaxed mb-6 italic">
                    "Education is the most powerful weapon which you can use to change the world."
                  </blockquote>

                  <div className="flex items-center justify-center gap-3">
                    <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-primary-400 to-primary-400" />
                    <cite className="text-lg font-semibold text-primary-700 not-italic">Nelson Mandela</cite>
                    <div className="w-12 h-0.5 bg-gradient-to-l from-transparent via-primary-400 to-primary-400" />
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-3">Our Journey</h2>
              <p className="body-text max-w-xl mx-auto">
                From inception to becoming a leading open education provider
              </p>
            </div>
          </AnimatedSection>

          <div className="relative">
            {/* Center Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-300 via-primary-500 to-primary-700 md:-translate-x-1/2" />

            <div className="space-y-12">
              {historyData.timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-start gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-soft-lg transition-all duration-300 border border-secondary-100 inline-block hover:border-primary-200">
                      <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-primary-100 to-primary-200 text-primary-700 text-sm font-bold mb-3">
                        {item.year}
                      </span>
                      <h3 className="font-semibold text-secondary-900 mb-2 text-lg">{item.title}</h3>
                      <p className="text-sm text-secondary-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="absolute left-4 md:left-1/2 w-10 h-10 -translate-x-1/2 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 border-4 border-white shadow-lg flex items-center justify-center text-white z-10">
                    {iconMap[item.icon]}
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
