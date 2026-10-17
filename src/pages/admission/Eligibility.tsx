import { PageLayout } from "@/components/layout/PageLayout";
import { AnimatedSection } from "@/components/layout/AnimatedSection";
import { eligibilityData } from "@/data/admissionData";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { CheckCircle, Clock, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

export function Eligibility() {
  return (
    <PageLayout breadcrumbs={[{ label: "Admission", href: "/admission" }, { label: "Eligibility" }]}>
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="container-custom relative z-10">
          <AnimatedSection>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Eligibility Criteria</h1>
            <p className="text-primary-200 text-lg max-w-2xl">
              Check if you meet the eligibility requirements for your desired course
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container-custom max-w-4xl">
          <Tabs defaultValue="secondary" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="secondary">Secondary (Class 10)</TabsTrigger>
              <TabsTrigger value="senior-secondary">Senior Secondary (Class 12)</TabsTrigger>
            </TabsList>

            <TabsContent value="secondary">
              <AnimatedSection>
                <div className="bg-white rounded-2xl shadow-soft-lg p-8">
                  <h2 className="text-2xl font-bold text-secondary-900 mb-6">{eligibilityData.secondary.title}</h2>

                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-secondary-900 mb-3 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-success-500" />
                        Requirements
                      </h3>
                      <ul className="space-y-2 ml-7">
                        {eligibilityData.secondary.requirements.map((req, index) => (
                          <li key={index} className="text-secondary-600">{req}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center gap-4 p-4 rounded-xl bg-primary-50">
                      <Clock className="w-6 h-6 text-primary-600" />
                      <div>
                        <div className="font-semibold text-secondary-900">Duration</div>
                        <div className="text-secondary-600">{eligibilityData.secondary.duration}</div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold text-secondary-900 mb-3 flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-primary-500" />
                        Available Subjects
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {eligibilityData.secondary.subjects.map((subject) => (
                          <span key={subject} className="px-3 py-1.5 rounded-full bg-secondary-100 text-secondary-700 text-sm">
                            {subject}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </TabsContent>

            <TabsContent value="senior-secondary">
              <AnimatedSection>
                <div className="bg-white rounded-2xl shadow-soft-lg p-8">
                  <h2 className="text-2xl font-bold text-secondary-900 mb-6">{eligibilityData.seniorSecondary.title}</h2>

                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-secondary-900 mb-3 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-success-500" />
                        Requirements
                      </h3>
                      <ul className="space-y-2 ml-7">
                        {eligibilityData.seniorSecondary.requirements.map((req, index) => (
                          <li key={index} className="text-secondary-600">{req}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center gap-4 p-4 rounded-xl bg-primary-50">
                      <Clock className="w-6 h-6 text-primary-600" />
                      <div>
                        <div className="font-semibold text-secondary-900">Duration</div>
                        <div className="text-secondary-600">{eligibilityData.seniorSecondary.duration}</div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold text-secondary-900 mb-4 flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-primary-500" />
                        Streams & Subjects
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {eligibilityData.seniorSecondary.streams.map((stream) => (
                          <motion.div
                            key={stream.name}
                            whileHover={{ y: -3 }}
                            className="p-4 rounded-xl bg-secondary-50 border border-secondary-200"
                          >
                            <h4 className="font-semibold text-secondary-900 mb-2">{stream.name}</h4>
                            <div className="flex flex-wrap gap-1">
                              {stream.subjects.map((subject) => (
                                <span key={subject} className="text-xs px-2 py-0.5 rounded-full bg-white text-secondary-600">
                                  {subject}
                                </span>
                              ))}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </PageLayout>
  );
}
